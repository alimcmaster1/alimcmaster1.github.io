export const posts = [
  {
    slug: 'on-keeping-a-hard-problem-open',
    title: 'On keeping a hard problem open',
    date: '2025-11-12',
    excerpt:
      'What climbing routes and market models share: you get further by staying with uncertainty a little longer than feels comfortable.',
    tags: ['notes', 'climbing'],
    body: [
      'Most of the useful work I have done — in markets, in open source, and on rock — arrived after I stopped trying to close the problem too early.',
      'On a route, that looks like committing to a sequence before you have full confidence in the next hold. In modelling, it looks like sitting with an awkward residual instead of papering over it with another feature.',
      'I am not arguing for recklessness. I am arguing for patience with ambiguity. The first clean story is often the wrong one.',
      'Lately I have been writing more while I climb and run. The point is not productivity theatre. It is to leave a trail of how the thinking actually happened — messy edges included.',
    ],
  },
  {
    slug: 'pandas-notes-from-the-core',
    title: 'Pandas notes from the core',
    date: '2025-06-03',
    excerpt:
      'A short field note on contributing to pandas: what reviewers actually care about, and why small API edges matter.',
    tags: ['engineering', 'open-source'],
    body: [
      'Contributing to pandas taught me that data tools are culture as much as code. People inherit habits from the defaults you ship.',
      'The PRs that land cleanly are rarely the flashiest. They are the ones that make an existing path slightly more honest — clearer docs, fewer surprising coercions, better errors.',
      'If you are starting out in the Python data stack: read issues carefully, reproduce narrowly, and treat the review conversation as part of the product.',
      'I still keep a running list of sharp corners I hit at work. Some become issues. Some become patches. All of them make me a better user.',
    ],
  },
  {
    slug: 'parkrun-and-pacing',
    title: 'Parkrun, pacing, and attention',
    date: '2024-09-21',
    excerpt:
      'Saturday mornings as a practice in attention: five kilometres, no drama, and a useful reminder that consistency beats intensity.',
    tags: ['running', 'notes'],
    body: [
      'Parkrun is deliberately ordinary. That is why it works. You show up, you run, you talk to someone you would not otherwise meet.',
      'I use it as a weekly reset for pacing — not only for training, but for work. Not every session needs to be a breakthrough.',
      'The same lesson shows up on longer climbs and longer projects: protect the sustainable cadence. Intensity is cheap. Continuity is not.',
    ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
