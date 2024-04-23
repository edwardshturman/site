---
title: "DEPLOY/23"
description: "DEPLOY/23 — the first hackathon hosted by my computer science club compsigh, and our biggest event of the Fall 2023 semester. An entirely student-bootstrapped, three-day event, bringing together the best minds in CS, design, and engineering to hack on a project for a weekend."
published: false
---

# DEPLOY/23

DEPLOY/23 — the first hackathon hosted by [my computer science club compsigh](/projects/compsigh), and our biggest event of the Fall 2023 semester. An entirely student-bootstrapped, three-day event, bringing together the best minds in CS, design, and engineering to hack on a project for a weekend.

<nav class="table-of-contents">
  <ul>
    <li>
      <Link href="#story">Story</Link>
    </li>
    <li>
      <Link href="#trailer">Trailer</Link>
    </li>
    <li>
      <Link href="#platform">Platform</Link>
    </li>
  </ul>
</nav>

<GalleryCard
  src="/assets/deploy-intro.gif"
/>

## Story

A hackathon is a life-changing experience.

For three days, you put yourself through hell, make lifelong memories with friends, and feel like a rebellious group of misfits, trying to make the world a better place. And when you get up on that stage, and you give it your all, you become the main character, sharing your Hero's Journey.

Despite the fact compsigh is one of the more chill clubs at the University of San Francisco, we knew we couldn't skimp on quality. Cyberpunk vibes. AI-generated trailer. Custom-built platform for participants. DEPLOY/23 was about delivering that life-changing experience through pixels & prose.

## Trailer

For a hackathon with a cyberpunk vibe, I felt it'd be appropriate to make an event trailer using AI. In collaboration with our friends at Game Design Club, we wrote up some lore, and crafted a storyboard.

<GalleryCard
  src="/assets/deploy-storyboard.jpg"
  alt="A picture of the DEPLOY/23 trailer storyboard, drawn out on a whiteboard"
/>

We drew inspiration from games, aesthetics, and stories we'd all grown up with. Those included:

- [Watch Dogs 2](https://www.ubisoft.com/en-us/game/watch-dogs/watch-dogs-2)
- [Rust](https://rust.facepunch.com/) (shoutout to OST artist Alex Rehberg for the track Wastes, used in the trailer)
- Cybernetics
- Orwellian dystopia stories
- [Ghost in the Shell](https://en.wikipedia.org/wiki/Ghost_in_the_Shell_(1995_film))
- [The Matrix](https://en.wikipedia.org/wiki/The_Matrix)
- [VALORANT Protocol 781-A trailer](https://www.youtube.com/watch?v=h6i8lM3egvI)
- [Revenant from Apex Legends](https://www.youtube.com/watch?v=75szF5i41Bw)
- [Winter Soldier](https://www.youtube.com/watch?v=2bWWBjKEiZA)

I used [Midjourney](https://midjourney.com) to create each shot as a static image. Then, I used [Runway](https://runwayml.com/) to give it life. Finally, I upscaled all outputs using [Topaz Labs](https://topazlabs.com).

[Watch the DEPLOY/23 trailer](https://www.youtube.com/watch?v=EepB7ZA1zNw) on YouTube.

## Platform

If we're going to up the quality, Devpost and Google Forms won't cut it. I set out to design-engineer a custom platform for participant registration, team formation, and project submission. We also needed it to accommodate our logistics and workflow for the event, which was in Notion.

<GalleryCard
  title="Landing page & platform"
  description={
    <>
      <p>A platform I design-engineered for participant registration, team formation, and project submission. Written in React &amp; Next.js, auth via NextAuth, forms via Tally, and logistics via Notion API.</p>
    </>
  }
  src="/assets/deploy-platform.gif"
  alt="A gif of the DEPLOY/23 landing page"
  link="https://github.com/compsigh/deploy"
  cta="View source"
/>