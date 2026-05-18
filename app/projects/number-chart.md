---
title: "Building Notion's Number Chart"
description: "My Spring 2026 intern project at Notion"
published: true
og_image: "/og/number-chart.png"
---

# Building Number Chart

_...and other fun features at Notion, during my Spring 2026 internship!_

(snippet about joining Primitives)

In early March, [Notion launched Dashboard view](https://x.com/notionhq/status/2031098248941940790), along with **Number Chart**, a single value aggregating over any database property, such as monthly revenue or new customers onboarded.

Features include filtering aggregated data, conditional styling — such as <span style={{color: "green"}}>green-colored text</span> when a certain threshold is met — configurable height, and first-class support within Dashboard view.

Here's how I built it, and what I learned!

<Media
  src="/og/number-chart.png"
  alt="Number Chart"
/>

<TableOfContents
entries={[
"Why Number Chart",
"What & why Dashboard view",
"Technical challenges"
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

While this was already possible by stacking database views into columns, this approach was clunky to set up, broke on smaller screen sizes, and was far from performant.

Dashboard view provides an elegant, minimal set of widgets for viewing your most important information at a glance. It also felt like the perfect harness for Number Chart!

<Media
  src="/assets/number-chart-dashboard-view-slide.jpg"
  alt="Number Chart in a Dashboard view"
/>

<Comment type="block"><Mention name="Stephen" avatar="/avatars/wustep.jpg" link="https://x.com/wustep" /> wrote up a great [breakdown of the technical decisions](https://x.com/wustep/status/2032479265300852817) behind Dashboard view: introducing a new interaction mode, grid vs. columns vs. rows, and more. Highly recommend for further reading!</Comment>

## Technical challenges

### Supporting non-Number properties

### Conditional styling
