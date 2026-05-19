---
title: "Building Number Chart at Notion"
description: "Recapping my Spring 2026 engineering internship on the Primitive Foundations team at Notion, working on blocks, database views, and general polish across the app"
published: true
og_image: "/og/number-chart.png"
---

# Building Number Chart at Notion

<Comment type="block">Recapping my Spring 2026 engineering internship on the Primitive Foundations team at Notion, working on blocks, database views, and general polish across the app</Comment>

In early March, [Notion launched Dashboard view](https://x.com/notionhq/status/2031098248941940790), along with **Number Chart**, a single value aggregating over any database property, such as monthly revenue or new customers onboarded.

Features include filtering aggregated data, conditional styling — such as <span style={{color: "green"}}>coloring the value green</span> when a certain threshold is met — and first-class support within Dashboard view.

Here's how I built it, and what I learned!

<Media
  src="/og/number-chart.png"
  alt="Number Chart"
/>

<TableOfContents
entries={[
"Why Number Chart",
"What & why Dashboard view",
"Features & challenges",
"Scenes from launch",
"Side quests",
"Lessons learned",
"Shoutouts"
]}
/>

## Why Number Chart

[Notion launched Charts in June 2024](https://x.com/NotionHQ/status/1823434434630336665). Users quickly voiced their support for everyone's favorite type of chart: a big, beautiful number.

<Media
  src="/assets/users-asking-for-number-chart.png"
  alt="Users asking for Number Chart on X"
/>

From chatter within the community, to UX research, the sentiment was clear: _The People wanted Number Chart_. It was deemed the highest priority fast-follow after the Charts launch.

Fast forward to 2026, an ongoing project sets the stage: **Dashboard view**.

<Media
  src="/assets/dashboard-view-slide.jpg"
  alt="Dashboard view"
/>

## What & why Dashboard view

Dashboard view enables users to compose high-signal overviews of their data on a single surface, using standard Notion database views.

Users had already been cobbling together dashboards by stacking database views into columns. But this approach is clunky to set up, breaks on smaller screen sizes, and is far from performant.

Dashboard view provides an elegant, minimal set of widgets for viewing your most important information at a glance. It also felt like the perfect harness for Number Chart!

<Media
  src="/assets/number-chart-dashboard-view-slide.jpg"
  alt="Number Chart in a Dashboard view"
/>

<Comment type="block"><Mention name="Stephen" avatar="/avatars/wustep.jpg" link="https://x.com/wustep" /> wrote up a great [breakdown of the technical decisions](https://x.com/wustep/status/2032479265300852817) behind Dashboard view: introducing a new interaction mode, grid vs. columns vs. rows, and more. Highly recommend for further reading!</Comment>

## Features & challenges

### Supporting non-Number properties

Notion users are very creative. We've seen setups that make us scratch our heads, and marvel in awe at the same time. We wanted to support as many workflows as possible, without introducing entropy or gotchas, such as Number Chart being supported only for Number properties.

_What does it mean to aggregate over a Date property? How should conversions from another chart type to a Number Chart work?_ Answering product questions like these and accounting for edge cases was important.

<Media
  src="/assets/number-chart-ambs.jpg"
  description="I had a lot of fun interfacing with Notion Ambassadors to iterate with their feedback on Dashboard view. They were very excited about Number Chart :)"
/>

### Conditional styling

In matching conditional styling patterns across existing Notion surfaces, such as Table view rows, I added support for conditionally coloring the value of a Number Chart. For example:

- If `this month's revenue ≥ $25,000`: color it green;
- `$20,000 ≤ $24,999`: yellow;
- Otherwise: red.

<Media
  src="/assets/number-chart-conditional-coloring.mp4"
  alt="Number Chart conditional styling"
/>

## Scenes from launch

Launch weeks are awesome. The late nights leading up to the big day, putting out teasers, and spending a little more time on Twitter than usual.

<Media
  src="/assets/number-chart-launch-week-grind.jpg"
  alt="Stephen and I up at 8pm, and some screenshots of tweets teasing the launch"
/>

It felt great to see Dashboard view & Number Chart so well received!

<Media
  src="/assets/dashboard-view-number-chart-reception.jpg"
  alt="Tweets of Dashboard view & Number Chart launch, plus internal Slack hype"
/>

In just two weeks after launch, **users created over 100,000 Number Charts!**

<Media
  src="/assets/number-chart-usage.jpg"
  alt="Number Chart usage stats"
/>

## Side quests

I feel strongly about _polish_. Sweating the little things™ makes Notion — _any app_ — feel more robust & consistent across all surfaces.

Notion is a high-trust, high-autonomy, high-agency team. If you see something broken, you are empowered to fix it (or find the next best person to do so).

Examples of polish I landed:

<Media
src="/assets/notion-date-mentions.jpg"
title="Date mentions inheriting text color"
description={<>Previously, unlike page or person mentions, date mentions like <code>@Today</code> would not inherit a block's text color. Fixed!</>}
/>

<Media
src="/assets/notion-template-duplicate-every.jpg"
title="Clearer copy for database template pages"
description={<>Previously, the flyout menu to set the interval at which a database template page would be duplicated was called <code>Repeat</code>. I worked with our UX writer <Mention name="Jeslyn" avatar="/avatars/jeslyn.jpg" link="https://linkedin.com/in/jeslynkim" /> to better convey the intent: <code>Duplicate every...</code>. These kinds of fixes may seem minor, but end up helping people!</>}
/>

## Lessons learned

### "Why not today?"

### Alignment

## Shoutouts

<Media
  src="/assets/primitives.jpeg"
  alt="Primitive Foundations team pic"
/>

<Comment type="inline">a bit about the Primitive Foundations team — what & why)</Comment>

I want to thank my manager <Mention name="Stephen" avatar="/avatars/wustep.jpg" link="https://x.com/wustep" />, mentor & eng <Mention name="Jacob" avatar="/avatars/jwenger.jpg" link="https://x.com/_jwngr" />, PM <Mention name="Sam" avatar="/avatars/samc.jpg" link="https://x.com/sbcatania" />, designers <Mention name="Kathy" avatar="/avatars/kathy.jpg" link="https://x.com/pifafu" /> & <Mention name="Em" avatar="/avatars/em.jpg" link="https://linkedin.com/in/emilytxiao" />, and engs <Mention name="James" avatar="/avatars/james.jpg" link="https://linkedin.com/in/jamesbwills" /> & <Mention name="Gabe" avatar="/avatars/gabe.jpg" link="https://gabebenjamin.com" />
