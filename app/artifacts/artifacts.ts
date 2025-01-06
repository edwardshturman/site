type Artifact = {
  text: string
  link?: string
  tags: string[]
}

export const artifacts: Artifact[] = [
  {
    text: 'The Real World by DHH',
    link: 'https://x.com/dhh/status/1738199473095074132?s=20',
    tags: ['tweet', 'life']
  },
  {
    text: 'Learn In Public by swyx',
    link: 'https://swyx.io/learn-in-public',
    tags: ['post', 'learning', 'creative-work']
  },
  {
    text: 'The Practice by Seth Godin',
    tags: ['book', 'creative-work']
  },
  {
    text: 'Keep Going by Austin Kleon',
    tags: ['book', 'creative-work']
  },
  {
    text: 'Cal Newport on Deep Dive',
    link: 'https://youtube.com/watch?v=uB8fCHGh_is',
    tags: ['podcast', 'life', 'productivity', 'business']
  },
  {
    text: 'Nicolas Cole on Deep Dive',
    link: 'https://youtube.com/watch?v=JIfEgvpEufU',
    tags: ['podcast', 'writing']
  },
  {
    text: '100 Simple Truths by traf',
    link: 'https://tr.af/100',
    tags: ['listicle', 'life', 'creative-work', 'growth']
  },
  {
    text: 'Ryan Holiday on Deep Dive',
    link: 'https://youtube.com/watch?v=lf8SKIJA1qE',
    tags: ['podcast', 'life', 'creative-work', 'productivity']
  },
  {
    text: 'Alex Hormozi on Deep Dive',
    link: 'https://youtube.com/watch?v=sdd4BST87ks',
    tags: ['podcast', 'business']
  },
  {
    text: 'Organic Software by Pirijan',
    link: 'https://pketh.org/organic-software.html',
    tags: ['post', 'business']
  },
  {
    text: 'File over app by Steph Ango',
    link: 'https://stephango.com/file-over-app',
    tags: ['post', 'life', 'creative-work', 'writing']
  },
  {
    text: 'Cliff Weitzman on Deep Dive',
    link: 'https://youtube.com/watch?v=yfALZJcurZw',
    tags: ['podcast', 'productivity', 'life']
  },
  {
    text: 'Grace Beverley on Deep Dive',
    link: 'https://youtube.com/watch?v=7_hNRR6K6z4',
    tags: ['podcast', 'life', 'business']
  },
  {
    text: 'Show Your Work by Austin Kleon',
    tags: ['book', 'creative-work']
  },
  {
    text: 'Ali Abdaal on High Performance',
    link: 'https://youtube.com/watch?v=vHX130xs5M4',
    tags: ['podcast', 'productivity', 'life']
  },
  {
    text: 'Patrick Winston: How to Speak',
    link: 'https://youtube.com/watch?v=Unzc731iCUY',
    tags: ['talk', 'life']
  },
  {
    text: "Josh Miller on Lenny's Podcast",
    link: 'https://youtube.com/watch?v=AZpo5785v8A',
    tags: ['podcast', 'business']
  },
  {
    text: 'Choose optimism by Steph Ango',
    link: 'https://stephango.com/optimism',
    tags: ['post', 'life']
  },
  {
    text: 'Get Together by People & Company',
    tags: ['book', 'community']
  },
  {
    text: 'Steal Like an Artist by Austin Kleon',
    tags: ['book', 'creative-work']
  },
  {
    text: "Bryan Chesky on Lenny's Podcast",
    link: 'https://youtube.com/watch?v=4ef0juAMqoE',
    tags: ['podcast', 'business']
  },
  {
    text: 'Designing Depth by Rauno Freiberg',
    link: 'https://rauno.me/craft/depth',
    tags: ['post', 'design']
  },
  {
    text: 'Designing Fluid Interfaces by Apple',
    link: 'https://developer.apple.com/videos/play/wwdc2018/803',
    tags: ['talk', 'design']
  },
  {
    text: 'Galactic Empire by Matthew Stanciu',
    link: 'https://blog.purduehackers.com/posts/galactic-empire',
    tags: ['post', 'community']
  },
  {
    text: '100% user-supported by Steph Ango',
    link: 'https://stephango.com/vcware',
    tags: ['post', 'business']
  },
  {
    text: "Things That Don't Work by Dynomight",
    link: 'https://dynomight.substack.com/p/things',
    tags: ['listicle', 'life']
  },
  {
    text: 'Building a Belief System by Andy Allen',
    link: 'https://notboring.software/words/building-a-belief-system',
    tags: ['post', 'business', 'creative-work']
  },
  {
    text: 'Tim Ferriss on the Colin & Samir Show',
    link: 'https://youtube.com/watch?v=ROymrQKsxSM',
    tags: ['podcast']
  },
  {
    text: 'Andy Matuschak on academ-ish writing',
    link: 'https://twitter.com/andy_matuschak/status/1764523623191318834',
    tags: ['tweet', 'writing']
  },
  {
    text: 'Contrasting Aesthetics by Rauno Freiberg',
    link: 'https://rauno.me/craft/contrasting-aesthetics',
    tags: ['post', 'design']
  },
  {
    text: 'How to Learn Stuff Quickly by Josh Comeau',
    link: 'https://joshwcomeau.com/blog/how-to-learn-stuff-quickly',
    tags: ['post', 'learning']
  },
  {
    text: 'Roadblocks vs. Speed Bumps by Rob Walling',
    link: 'https://robwalling.com/2019/06/17/speed-bumps-vs-roadblocks',
    tags: ['post', 'business', 'life']
  },
  {
    text: 'Style is consistent constraint by Steph Ango',
    link: 'https://stephango.com/style',
    tags: ['post', 'life', 'creative-work']
  },
  {
    text: "Jordan Peterson's guide to writing an essay",
    link: 'https://essay.app/guide',
    tags: ['post', 'writing']
  },
  {
    text: 'College Clubs Are Awesome by Matthew Stanciu',
    link: 'https://blog.purduehackers.com/posts/college-clubs-are-awesome',
    tags: ['post', 'community']
  },
  {
    text: 'How to build a culture of shipping by Buttondown',
    link: 'https://buttondown.email/blog/shipped-at',
    tags: ['post', 'business']
  },
  {
    text: 'What I Wish Someone Had Told Me by Sam Altman',
    link: 'https://blog.samaltman.com/what-i-wish-someone-had-told-me',
    tags: ['post', 'business']
  },
  {
    text: 'Work with the garage door up by Andy Matuschak',
    link: 'https://notes.andymatuschak.org/Work_with_the_garage_door_up',
    tags: ['post', 'creative-work']
  },
  {
    text: 'Kevin Kelly: The future will be shaped by optimists',
    link: 'https://ted.com/talks/kevin_kelly_the_future_will_be_shaped_by_optimists',
    tags: ['talk', 'life']
  },
  {
    text: 'Make Something Wonderful from the Steve Jobs Archive',
    tags: ['book', 'creative-work']
  },
  {
    text: 'Why This Is The Perfect Time To Start A Startup by YC',
    link: 'https://youtube.com/watch?v=0TNTlMZFTWw',
    tags: ['talk', 'business']
  },
  {
    text: 'Invisible Details of Interaction Design by Rauno Freiberg',
    link: 'https://rauno.me/craft/interaction-design',
    tags: ['post', 'design']
  },
  {
    text: 'Quality software deserves your hard-earned cash by Steph Ango',
    link: 'https://stephango.com/quality-software',
    tags: ['post', 'life']
  }
]
