/* Velocity — English content bundle. Loaded before app.js. */
window.VELO_CONTENT = {
  lang: 'en',

  sample: `The mind does not read the way a scanner reads a page. Your eyes leap forward in small jumps, pause for a fraction of a second to take in a cluster of letters, then leap again. In those brief pauses the brain performs an astonishing feat: it recognizes a word, retrieves its meaning, and stitches it into the sentence forming in working memory. Most of the time spent reading is not spent moving the eyes at all. It is spent here, in recognition and understanding. This is why the promise of reading thousands of words a minute collapses under scrutiny. You can move your eyes faster, but you cannot force the deeper machinery of comprehension to keep pace indefinitely. What you can do is read with less friction: pace yourself so your eyes stop drifting backward, take in phrases instead of single words, and widen the span you absorb in each glance. Do that consistently, and a comfortable, lasting gain in speed follows.`,

  passages: [
    {
      id: 'octopus',
      title: 'The Octopus Mind (~280 words)',
      text: `An octopus is, by almost any measure, an alien intelligence that happens to share our planet. It has three hearts, blue copper-based blood, and a brain that wraps around its throat. Stranger still, most of its neurons are not in that central brain at all but distributed through its eight arms. Each arm can taste, touch, and make decisions with a striking degree of independence. Sever the nerve connection to the central brain, and an isolated arm will still reach for food and recoil from danger. In a real sense, an octopus thinks with its whole body.

This decentralized design gives the animal remarkable problem-solving abilities. Octopuses in laboratories have learned to open childproof pill bottles, navigate mazes, and recognize individual human keepers, sometimes squirting jets of water at the ones they dislike. In the wild, they carry coconut shells across the seafloor to assemble portable shelters later, a behavior that meets the technical definition of tool use. They can change the color and texture of their skin in a fraction of a second, not only to hide but seemingly to express agitation.

Yet for all this brilliance, the octopus lives a startlingly short and solitary life. Most species survive only one to two years. Females typically die shortly after their eggs hatch, having stopped eating to guard the clutch. Because parents never overlap with their offspring, octopuses cannot pass down knowledge across generations. Each one must rediscover the world entirely on its own, brilliant and brief, inventing intelligence from scratch and taking it to the grave.`,
      quiz: [
        { q: 'Where are most of an octopus’s neurons located?', opts: ['In its central brain', 'Distributed through its eight arms', 'In its three hearts', 'In its skin'], a: 1 },
        { q: 'What gives octopus blood its blue color?', opts: ['Iron', 'Copper', 'Oxygen bubbles', 'Pigment cells'], a: 1 },
        { q: 'Why can’t octopuses pass knowledge to their offspring?', opts: ['They have poor memory', 'Parents and offspring never overlap in life', 'They cannot communicate', 'Their young are born blind'], a: 1 },
        { q: 'The coconut-shell behavior is notable because it qualifies as:', opts: ['Camouflage', 'Migration', 'Tool use', 'Hunting'], a: 2 }
      ]
    },
    {
      id: 'clock',
      title: 'How We Invented Time (~300 words)',
      text: `For most of human history, time was a local and approximate thing. A town kept time by the sun: noon was the moment the sun stood highest over that particular place. Two towns a hundred miles apart genuinely had different noons, and nobody minded, because nobody could travel fast enough for the difference to matter. A traveler’s pocket watch was always a little wrong somewhere, and that was simply the nature of the world.

The railway destroyed this comfortable vagueness. Trains moved fast enough to make local time dangerous. If each station set its clock by its own sun, a timetable became a web of tiny contradictions, and two trains running on slightly different times could find themselves on the same track. Railway companies responded by imposing a single standard time across their whole network, regardless of the sun overhead. In Britain, this was simply called railway time, and at first many towns resisted surrendering their local noon to a clock set in a distant capital.

The logic proved unstoppable. In 1884, delegates met in Washington and carved the planet into twenty-four time zones, each an hour wide, anchored to a line running through Greenwich, England. Time had become an agreement rather than an observation. The sun no longer told you the hour; a committee did. We rarely notice how radical this was. When you glance at your phone and read the same minute as someone four hundred miles away, you are trusting an invisible international treaty over the evidence of the sky. The clock won, and the sun, after ruling timekeeping for all of history, was quietly retired from the job.`,
      quiz: [
        { q: 'Before standard time, how did a town typically set its clocks?', opts: ['By the nearest railway', 'By the position of the sun overhead', 'By a national radio signal', 'By the capital city’s clock'], a: 1 },
        { q: 'What forced the adoption of standardized time?', opts: ['The telegraph', 'The railways', 'Sailing ships', 'The printing press'], a: 1 },
        { q: 'What happened at the 1884 Washington meeting?', opts: ['Clocks were first invented', 'The planet was divided into 24 time zones', 'Greenwich was founded', 'Trains were banned'], a: 1 },
        { q: 'The passage argues that modern time is essentially:', opts: ['A scientific measurement of the sun', 'An international agreement', 'A religious tradition', 'A natural constant'], a: 1 }
      ]
    },
    {
      id: 'forest',
      title: 'The Hidden Network of Forests (~260 words)',
      text: `Walk through an old forest and it looks like a crowd of individuals: separate trees competing for light, each rooted in its own patch of soil. Beneath your feet, the truth is far stranger. The roots of those trees are laced together by a vast web of fungal threads, finer than hair and almost endless in their reach. Through this network, called the mycorrhizal web, trees do something that looks remarkably like cooperation.

A tall tree flush with sunlight can pump sugars down into the fungal network, where they travel to a seedling struggling in the shade. Older trees, sometimes called hub trees, are especially generous, sending carbon and nutrients to younger neighbors, including their own offspring, which they appear able to recognize. When a tree is dying, it may dump its remaining resources into the network, a final gift to the community that outlives it.

The fungi are not charities. In exchange for sugars the trees make through photosynthesis, the fungi supply water and hard-to-reach minerals like phosphorus, dramatically extending the reach of every root they touch. It is a trade, ancient and enormous, running silently under every forest floor. Some scientists caution against romanticizing it as a friendship, since competition still rules the canopy above. But few now dispute the central discovery: a forest is not a collection of lonely individuals. It is a single, connected, breathing system, and the most important conversations it holds happen entirely in the dark.`,
      quiz: [
        { q: 'What is the mycorrhizal web made of?', opts: ['Tree roots only', 'Fungal threads connecting tree roots', 'Underground streams', 'Insect tunnels'], a: 1 },
        { q: 'What do trees give the fungi in the exchange?', opts: ['Water', 'Phosphorus', 'Sugars from photosynthesis', 'Oxygen'], a: 2 },
        { q: 'What are "hub trees" notable for?', opts: ['Being the tallest', 'Sending nutrients to younger trees', 'Producing the most seeds', 'Resisting disease'], a: 1 },
        { q: 'The passage’s main point is that a forest is:', opts: ['A group of competing individuals', 'A connected, cooperative system', 'Mostly fungus', 'Unable to survive droughts'], a: 1 }
      ]
    }
  ],

  ui: {
    ready: 'Ready',
    finished: 'Finished.',
    play: '▶ Play', pause: '⏸ Pause', restart: '↺ Restart',
    start: '▶ Start', stop: '⏸ Stop', done: '✓ Done',
    resultEyebrow: 'Your reading speed',
    wpmUnit: 'words per minute',
    comprehension: 'Comprehension',
    correct: 'Correct',
    effective: 'Effective WPM*',
    effectiveNote: '*Effective WPM = speed × comprehension. It rewards understanding, not just velocity.',
    warnLow: '<b>Comprehension under 70%.</b> Your raw speed doesn\'t fully count — you may have read too fast to absorb it. Re-read closer to your true pace and aim to keep this number high <em>before</em> chasing WPM.',
    warnOk: 'Comprehension held above 70% — this speed is real. Now train the levers in the other tabs and re-test to push it up while keeping comprehension here.',
    takeAnother: '↺ Take another test',
    speed: [
      [200, 'Below average — lots of headroom.'],
      [260, 'Right around the adult average (~238 wpm).'],
      [350, 'Above average. Solid reader.'],
      [450, 'Fast — near the practical ceiling for full comprehension.'],
      [Infinity, 'Very fast — make sure comprehension is holding, not slipping into skimming.']
    ],
    schulteDone: 'done!',
    clearConfirm: 'Clear all saved tests and scores on this device?'
  },

  heroLoop: 'Velocity teaches you to read faster without quietly losing comprehension. Watch how one word at a time keeps your eyes perfectly still.'
};
