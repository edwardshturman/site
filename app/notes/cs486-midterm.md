---
title: "Deploying a Next.js + Hono + MySQL application on AWS"
description: "An attempt at delight in Dev Ops"
published: false
---

# Deploying a Next.js + Hono + MySQL application on AWS

*An attempt at delight in Dev Ops*

<TableOfContents
  entries={[
    "Motivation",
    "Setup",
    "Hono",
    "Next.js",
    "Data Layer"
  ]}
/>

<Spacer size={32} />

## Motivation

On the [compsigh web platform](https://compsigh.club), we have an Events page with cards of every event the club has run.

<Media
  src="/assets/compsigh-web-platform-events.png"
  alt="A screenshot of the compsigh web platform Events page"
/>

Entries are written as Markdown files:

```markdown
---
title: "BLOOM"
description: "the hackathon for the arts & sciences, join us for our first-ever Spring hackathon: BLOOM. grab a few friends and create that thing you've always wanted to. web apps, research papers, open source contributions, documentaries, music — all kinds of projects from all walks of creative life are welcome! make something human with us."
event_details: {
  start: 1740794400,
  location: "The Hive",
  cover_image: "/events/2025-02-28/bloom.png",
  pictures: [],
  link: "https://bloom.build/"
}
---
```

At build time, the platform reads through all of them, and for each one, renders a card.

I'm a big proponent of Markdown, and generally think this works well for us, but it does have some cons:

- Updates to events require a new deployment, since everything is statically generated.
- **Building APIs around club events require reading Markdown files**, introducing unnecessary latency.

*Wouldn't it be great if events were stored in & fetched from a database?*

<Comment type="block">The answer to this question depends on who you ask. For the sake of this midterm, don't ask me :)</Comment>

## Setup

As someone who's been spoiled by stellar developer experience — TypeScript, Next.js, Vercel, etc. — I desperately wanted a nice stack for this project. *Why should Dev Ops have to sacrifice DX?*

<Media
  unoptimized
  description="Next.js application (or frontend, if you prefer), Hono API server (backend), both on the Bun runtime"
  src="/assets/486-midterm-diagram-1.png"
  alt="A diagram: Bun, Next.js, and Hono logos centered horizontally on a grid"
/>

- [Next.js](https://nextjs.org) is a bit of a grab bag: it's a framework for React applications. It comes with routing, middleware, and all the good stuff that traditional backends would be concerned with. It's one of those technologies in recent years that blur the lines between frontend & backend.
- [Hono](https://hono.dev) is a small, simple, and fast web application framework, akin to Express, with first-class TypeScript support.
- [Bun](https://bun.sh) is a Node.js-compatible JavaScript runtime & toolkit that comes with a native test runner, first-class TypeScript support, and many more bells & whistles that make scaffolding JS projects fast and delightful.

Let's get started.

## Hono

```zsh
bun create hono@latest backend
```

Bun × Hono is a beautifully minimal combo. A Hello World, ready to communicate with a frontend in Docker, is literally 11 SLOC:

```typescript
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()

app.use("/", cors())
app.get("/", (c) => {
  return c.json({ message: "Hello World!" })
})

export default {
  port: 8081,
  fetch: app.fetch
}
```

We want to containerize the application ASAP, so let's do that.

`./backend/Dockerfile`

```dockerfile
FROM oven/bun:1.2.4

WORKDIR /usr/src/backend
COPY package.json ./
COPY bun.lock ./
RUN bun install

COPY . ./

EXPOSE 8081
CMD [ "bun", "run", "src/index.ts" ]
```

`./compose.yaml`

```yaml
name: cs486-midterm

services:
  backend:
    build: ./backend/
    ports:
      - "8081:8081"
```

Running `docker compose up` and navigating to `http://localhost:8081` should greet us with a simple JSON response.

```json
{
  "message": "Hello World!"
}
```

## Next.js

```zsh
npx create-next-app@latest --use-bun frontend
```

I'm choosing to run the frontend on port `3001`, so let's make the necessary changes.

`./frontend/package.json`

```json
{
  // ...
  "scripts": {
    "dev": "next dev --turbopack --port 3001",
    "start": "PORT=3001 next start",
    // ...
  },
  // ...
}
```

Likewise, let's containerize the frontend.

`./frontend/Dockerfile`

```dockerfile
FROM oven/bun:1.2.4

WORKDIR /usr/src/frontend
COPY package.json ./
COPY bun.lock ./
RUN bun install

COPY . ./
RUN bun run build

EXPOSE 3001
CMD [ "bun", "run", "start" ]
```

`./compose.yaml`

```diff
services:
+  frontend:
+    build: ./frontend/
+    ports:
+      - "3001:3001"
  backend:
    build: ./backend/
    ports:
      - "8081:8081"
```

Finally, let's make sure our Next.js frontend can reach our Hono backend. We can use Bun's native test runner to check that the API server is up and running, and reachable from the frontend.

`./compose.yaml`

```diff
services:
  frontend:
    build: ./frontend/
    ports:
      - "3001:3001"
+    depends_on:
+      backend:
+        condition: service_started
```

`./frontend/tests/index.test.ts`

```typescript
import { describe, expect, it } from "bun:test"

if (!process.env.BACKEND_URL) {
  throw new Error("BACKEND_URL is not set")
}

describe("Test API from frontend", () => {
  it("Should find Hello World", async () => {
    const response = await fetch(process.env.BACKEND_URL).then((res) => res.json())
    expect(response.message).toBe("Hello Hono!")
  })
})
```

Success!

## Data Layer

A requirement for the midterm is to use MySQL, which is easily added thanks to Docker Compose.

```diff
  backend:
    build: ./backend/
    ports:
      - "8081:8081"
+    depends_on:
+      db:
+        condition: service_healthy
+  db:
+    image: mysql:8.0
+    environment:
+      MYSQL_DATABASE: test
+      MYSQL_ALLOW_EMPTY_PASSWORD: true
+    command: --default-authentication-plugin mysql_native_password
+    ports:
+      - "3306:3306"
+    healthcheck:
+      test: mysqladmin ping -h 127.0.0.1 -u root
+      timeout: 10s
+      interval: 1s
+      retries: 10
```

I'll use Prisma ORM to model events:

```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "linux-arm64-openssl-1.1.x"]
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Event {
  id          Int       @id @default(autoincrement())
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  title       String
  description String
  slug        String
  start       DateTime
  end         DateTime?
  link        String?
}
```

Alright, let's pause to take a look at our stack as of now.

<Media
  unoptimized
  src="/assets/486-midterm-diagram-2.png"
  alt="A diagram of the stack up to this point"
/>
