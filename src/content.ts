export const contact = {
  email: 'ethereal11h00@gmail.com',
  blog: 'https://thenavigator.hashnode.dev/',
  github: 'https://github.com/y2danny',
  /** Shown on the “Say hi” card */
  invite:
    'Open to technical support roles and frontend / AI training-data work. Email is best for a direct thread; writing and code live on the links below.',
}

export type RoleId = 'support' | 'engineering'

export const roles: Record<
  RoleId,
  {
    label: string
    shortLabel: string
    headline: string
    subhead: string
    accentVar: string
    pitch: string[]
    matchedSkills: string[]
    callout: { title: string; body: string }
  }
> = {
  support: {
    label: 'Technical Support',
    shortLabel: 'Support',
    headline: 'Calm, structured support for technical products',
    subhead:
      'From Discord and tickets to engineering handoffs — I turn messy problems into documented resolutions and better docs.',
    accentVar: '#2dd4bf',
    pitch: [
      'Years closing the loop between customers and engineering: reproduce, document in Jira, escalate with context, and follow through.',
      'Comfortable across channels — async tickets, live chat tone, and voice-of-customer summaries product teams can act on.',
      'Used to monitoring and triage (Datadog, Grafana) and explaining chain-specific behavior without jargon overload.',
    ],
    matchedSkills: [
      'Ticketing & CRM workflows (e.g. Jira)',
      'Clear written updates and handoffs',
      'Troubleshooting OS, connectivity, and app config patterns',
      'Knowledge base and internal doc contributions',
      'Patient, organized multi-threaded support',
    ],
    callout: {
      title: 'Why this role',
      body: 'I am not new to the support desk — I have supported 100+ partner groups, filed and resolved production issues, and improved onboarding docs from real ticket themes.',
    },
  },
  engineering: {
    label: 'Frontend & AI training data',
    shortLabel: 'Engineering',
    headline: 'Frontend craft, expressed as verifiable specs',
    subhead:
      'I build client-side UI with React and TypeScript — and I think in prompts and pass/fail checks the way strong training data requires.',
    accentVar: '#c4b5fd',
    pitch: [
      '2+ years shipping frontend and full-stack surfaces (React, Node) plus curriculum and workshop delivery — I write for humans and for precise machine-readable intent.',
      'When I describe UI behavior, I default to observable outcomes: what you see, what state changed, what would fail a screenshot or code review.',
      'Interested in contributing realistic, self-contained task specs and binary rubrics where every line is provably true or false from the artifact alone.',
    ],
    matchedSkills: [
      'JavaScript, TypeScript, React',
      'State, interactivity, and UI correctness',
      'Technical writing & evaluation criteria',
      'Self-contained mini-apps, tools, and demos',
      'Collaboration with researchers and strict style guides',
    ],
    callout: {
      title: 'Prompts & rubrics',
      body: 'Good training prompts read like tight product specs: clear actors, constraints, and done-ness. Rubrics should be binary — each item checkable from output and code without interpretation. That mindset matches how I already review UI and document bugs.',
    },
  },
}

export const profile = {
  name: 'Angel Afiawari',
  titles: 'Technical Support Engineer · Full Stack Developer',
  /** One line under your name — switches with the header toggle */
  taglineByRole: {
    support: 'I like the part where people feel less stuck.',
    engineering:
      'I build and debug where UI, APIs, and real users meet — React, TypeScript, Node, end to end.',
  } satisfies Record<RoleId, string>,
}

/**
 * “Soul” copy — first person, editable. Set `home` to your city for the distance card.
 */
export const soul = {
  home: {
    cityLabel: 'Paris, France',
    /** Approximate center — used only for the distance sketch in-browser */
    latitude: 48.8566,
    longitude: 2.3522,
  },
  pronunciation: {
    ipa: 'AN-jəl · ah-fee-AH-wah-ree',
    hint: 'Not official IPA — just how I say it. Tap the button if you want a robot’s opinion.',
    ttsPhrase: 'Angel Afiawari',
  },
  funFact: {
    body: 'I still think in lesson plans when I write docs. If a paragraph doesn’t have a “so what,” I rewrite it.',
  },
  voice: {
    helloByRole: {
      support:
        'Hi. I’m Angel. Most days I’m the person translating between stressed humans and finicky systems; tickets, Discord threads, dashboards, and the occasional RPC that refuses to behave. I bring a full-stack and frontend background to that work so I can reproduce issues, read code and APIs, and hand engineering something actionable.',
      engineering:
        'Hi. I’m Angel. I’m a frontend and full-stack engineer at heart. Shipping UI, wiring integrations, and tracing bugs across the stack when something breaks in production. I care how interfaces feel, how state behaves, and how the client talks to the services behind it.',
    } satisfies Record<RoleId, string>,
    teaching:
      'Before deep ecosystem support, I built curriculum and ran workshops. I care a lot about the moment something “clicks,” whether that’s a student or a partner integrating an API at 11pm.',
    play:
      'I’m also the person who will rebuild a tiny UI in an evening just to see if it feels honest or file a bug with enough context that nobody has to chase me for repro steps.',
  },
  desk: {
    /** Set to e.g. '/desk.jpg' if you ever add a real photo under `public/` */
    imageSrc: null as string | null,
    caption:
      'I don’t have a curated desk photo yet (working on that). The real space is monitors, notes, Slack, and whatever I’m untangling. If I ever snap one that feels true, it’ll land here.',
  },
}

export const experience = [
  {
    company: 'Polygon Labs',
    role: 'Technical Support Engineer',
    range: 'Dec 2023 — Jan 2026',
    highlights: [
      'Integration support for DApps across chains; staking and token-launch issue resolution with product and engineering.',
      'Created and resolved Jira tickets tied to platform stability; monitoring with Datadog, Grafana, and custom tooling.',
      'Primary liaison for technical feedback; improved documentation and onboarding from recurring themes.',
      'Supported 100+ customer groups across Discord, Telegram, Slack, and Jira.',
    ],
  },
  {
    company: 'Meson Finance',
    role: 'Frontend Engineer',
    range: 'Feb 2023 — Nov 2023',
    highlights: [
      'Frontend implementation and iteration on production web surfaces.',
      'Collaboration across design and backend for shipped features.',
    ],
  },
  {
    company: 'DappRadar',
    role: 'Dapp / API Support Specialist',
    range: 'Feb 2022 — Feb 2023',
    highlights: [
      'Led integration support for new DApps across chains; grew the listed library by roughly 25%.',
      'SDK and REST-style integration guidance for partners.',
    ],
  },
  {
    company: 'Varscon',
    role: 'Full Stack Developer',
    range: 'Jun 2019 — Dec 2022',
    highlights: [
      'Production web apps with JavaScript, React, and Node.',
      'Course materials and workshops for students; strong outcomes in core STEM teaching.',
    ],
  },
] as const

export const expertise = [
  'Technical support & triage',
  'Quality assurance',
  'Smart contract debugging',
  'SDK / REST API integration',
  'Blockchain development (EVM, Solana ecosystem familiarity)',
] as const

export const stack = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Solidity'] as const

export const softSkills = [
  'Communication',
  'Collaboration',
  'Ownership',
  'Organization',
] as const

export const education = {
  degree: 'Bachelor’s — Computer Science',
  note: 'Additional learning via bootcamps, certifications, and ecosystem programs.',
}

export const certifications = [
  'Technical Support Fundamentals',
  'Paris Saclay Polygon Bootcamp — Blockchain Development',
  'Coursera — Blockchain Development (2023)',
  'Udemy — Solidity (beginners to masters)',
  'Buildspace · LearnWeb3DAO · Ethereum.org · Polygon (2022 cohort)',
] as const

/** Optional: link for “how I think about rubrics” — replace with your preferred resource */
export const resources = {
  promptingNote:
    'I treat strong prompts like UI tickets: given/when/then, edge cases, and a single unambiguous success signal.',
  rubricVideoUrl: '',
  rubricVideoLabel: '',
}
