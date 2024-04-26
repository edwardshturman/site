---
title: "Cue"
description: "A minimalist active recall study app focused on helping students ask the right questions. Transform your notes into actionable study cards for easy pasting back into Google Docs or Notion, or export to Anki."
published: false
og_image: "/assets/cue-og.png"
---

# Cue

Cue is a minimalist active recall study app focused on helping students ask the right questions. Transform your notes into actionable study cards for easy pasting back into Google Docs or Notion, or export to Anki.

<GalleryCard
  src="/assets/cue-og.png"
  alt="Cue wordmark banner"
/>

<nav class="table-of-contents">
  <ul>
    <li>
      <Link href="#inspiration">Inspiration</Link>
    </li>
    <li>
      <Link href="#hackathon">Hackathon</Link>
    </li>
    <li>
      <Link href="#features">Features</Link>
    </li>
    <li>
      <Link href="#future">Future</Link>
    </li>
  </ul>
</nav>

## Inspiration

Cue was born at Dons Hack 2023 — a hackathon hosted by our friends at the Association for Computing Machinery × Women in Tech at the University of San Francisco.

The timing for an AI-powered study app was just right:

- It was March–April 2023, and [OpenAI had just announced GPT-4](https://openai.com/research/gpt-4)
- That semester, I was taking European history, a note-heavy course
- The theme for the hackathon was ed-tech: build a solution that solves a problem in education

So, what's our problem we're solving? After all, there are plenty of flashcard apps out there. The thing is, they assume you already know what to study. My friend & teammate Sanjana and I thought to leverage what we know about active recall — one of the most efficient, science-backed study methods — to create a tool that **helps students ask the right questions**.

## Hackathon

I had about three months' worth of web dev experience at this point, and had to learn a lot, fast. That's one of the great things about hackathons — win or lose, you'll likely walk away knowing a hell of a lot more than you did coming in. And learn I did. Cue was my first production project writing:

- [React](https://react.dev) & [Next.js](https://nextjs.org)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- OpenAI API
- [Vercel KV](https://vercel.com/docs/storage/vercel-kv)
- [NextAuth](https://github.com/nextauthjs/next-auth)
- [Sass](https://sass-lang.com)

Around this time, I was also getting into UI design, so I really wanted to push myself and have it stand out from the crowd.

<GalleryCard
  title="Cue icon set"
  description={<p>I may or may not have spent 50% of our hackathon time in Figma.</p>}
  src="/assets/cue-icons.png"
/>

The vibes were immaculate:

<GalleryCard
  title="compsigh teams at Dons Hack 2023"
  description={<p>Even though we were all competing, we knew a win for any team from <Link href="/projects/compsigh">my computer science club compsigh</Link> was a win for all of us. So, we'd work together in one room and would help each other out.</p>}
  src="/assets/cue-donshack-compsigh-teams.JPG"
/>

<Spacer size={32} />

<GalleryCard
  title="Saturday night desk setup"
  description={<p>It was time to lock in.</p>}
  src="/assets/cue-donshack-latenight.JPG"
  alt="My desk setup on Saturday night. Pictured is my dual-monitor setup (code on one, API docs and live preview on the other) and a cup of tea."
/>

Oh, and we won, too. :)

<GalleryCard
  src="/assets/cue-donshack-certificate.JPG"
  alt="A certificate congratulating me for winning Best App at Dons Hack 2023."
/>

## Features

I suppose I should get to it: what does Cue actually do?

Its primary function is to take your study notes, and return the most relevant questions to quiz yourself on.

<GalleryCard
  title="Cue beta demo from May 2023, not long after the hackathon"
  description={<p>Please ignore the jank CSS :)</p>}
  src="/assets/cue-may2023-beta-demo.gif"
/>

That's pretty much what it looked like when we went up on stage at Dons Hack, but I'm proud to say we continued working on it after the event, and shipped some pretty cool additional features.

### Invite system

<GalleryCard
  title="In-app invites"
  description={<p>From <code>v0.1.0</code>, we made the app open to all USF students for free, but we wanted an invite system for our friends & family elsewhere. Here we hooked up Typeform to an API that would generate an invite code like <code>gaius-julius-caesar</code> (I was really into the European history class).</p>}
  src="/assets/cue-invite-demo.gif"
/>

<Spacer size={32} />

<Grid columns={2} columnSizeDistribution={["1fr", "3fr"]}>
  <GalleryCard
    src="/assets/cue-invite-cards.gif"
    alt="A demo of physical Cue invite cards with unique QR codes on the back"
  />
  <div>
    <p>We really liked the idea of invites, and we went all out, because why not?</p>
    <p>We produced a set of 50 <em>physical</em> invite cards, each with their own unique invite linked via QR code.</p>
    <p>Invites had conditions like <code>no-invite</code> (invited students can&apos;t also +1) to help us scale reasonably.</p>
    <p>We also gave these out to incoming freshmen at USF&apos;s Spring Involvement Fair.</p>
  </div>
</Grid>
