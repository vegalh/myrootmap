// English copy for the whole website. English is the default language; every other language file must provide the
// same keys (it is typed as `Dict`). Page views read text from here and never hardcode it.

export const en = {
  meta: {
    htmlLang: 'en',
    languageName: 'English',
    siteDescription:
      'RootMap helps parents and caregivers discover meaningful everyday activities, observe children’s interests, and support curiosity, independence, and lifelong learning.',
  },

  nav: {
    home: 'Home',
    philosophy: 'Our Philosophy',
    features: 'Features',
    blog: 'Blog',
    resources: 'Resources',
    community: 'Community',
    login: 'Log In',
    getStarted: 'Get Started',
    menu: 'Menu',
    closeMenu: 'Close menu',
    primary: 'Main',
    skip: 'Skip to content',
    switchLanguage: 'Language',
    homeLink: 'RootMap home',
  },

  footer: {
    tagline: 'A calm companion for everyday learning with young children.',
    explore: 'Explore',
    rootmap: 'RootMap',
    openApp: 'Open the app',
    about: 'About',
    privacy: 'Privacy',
    contact: 'Contact',
    footerNav: 'Footer',
    rights: 'RootMap',
  },

  common: {
    readArticle: 'Read article',
    viewAllArticles: 'View all articles',
    draft: 'Draft',
    placeholder: 'Placeholder',
    imagePlaceholder: 'Image to come',
    screenshotPlaceholder: 'Screenshot to come',
    comingSoon: 'Coming soon',
    opensApp: 'Opens the RootMap app',
    newWindow: 'opens in a new tab',
    authorNote: 'Your reflection',
    authorNoteHint: 'A place for your own reflection, classroom experience or story. Add it in src/i18n.',
  },

  // The homepage: hero, why RootMap, the app as a journey, a note from the founder, three places to explore,
  // "Inspired by", the values ribbon and the invitation to grow with us.
  // Photograph slots are listed in src/config/images.ts; outside links in src/config/site.ts.
  home: {
    title: 'RootMap: Grow with your child',
    hero: {
      eyebrow: 'RootMap · for parents and caregivers of young children',
      titleLines: ['Grow with', 'your child.'],
      body: 'RootMap helps parents turn everyday experiences into meaningful opportunities for exploration, connection, and learning.',
      note: 'A few minutes of inspiration. Meaningful moments to share with your child.',
      primary: 'Explore RootMap',
      secondary: 'Our Story',
      imageAlt: 'A child exploring an everyday activity',
      shotAlt: 'The Today screen in RootMap',
    },
    why: {
      eyebrow: 'Why RootMap',
      title: 'Childhood happens in the real world.',
      intro: [
        'Meaningful learning happens in everyday moments. At the kitchen sink, on the walk home, beside a basket of laundry waiting to be sorted.',
        'RootMap was made to help adults notice these moments and respond thoughtfully: not by adding more to the day, but by seeing more of what is already there. And as children grow, a door opens for the adults beside them to grow too.',
      ],
      imageAlt: 'A child absorbed in an everyday task at home',
      detailAlt: 'Small hands at work on an everyday task',
      caption: 'A toddler pouring water from one cup to another, again and again, is not wasting time. They are working something out.',
      link: 'Read our philosophy',
      ideasLabel: 'What RootMap cares about',
      ideas: [
        {
          title: 'Real experiences',
          body: 'Pouring, sorting, washing, carrying. Real objects and real tasks give children something to hold, try and work out.',
        },
        {
          title: 'Connection',
          body: 'Doing something side by side matters more than doing it perfectly.',
        },
        {
          title: 'Curiosity',
          body: 'Children arrive wanting to understand the world. We start from their questions, not from a checklist.',
        },
        {
          title: 'Independence',
          body: 'Real tasks, child-sized tools and enough time let children do things for themselves.',
        },
        {
          title: 'Observation',
          body: 'Before stepping in, it helps to watch. What are they trying to do? What has caught their attention?',
        },
        {
          title: 'Everyday moments',
          body: 'The kitchen, the bath, the walk home. Ordinary routines are enough; no special equipment is needed.',
        },
      ],
    },
    experience: {
      chapter: 'Experience RootMap',
      title: 'One small idea for today. A place to keep what you notice.',
      intro: 'RootMap fits around family life rather than asking it to change.',
      journeyLabel: 'The RootMap journey: discover, experience, remember, reflect',
      // The row of dots under the screens on phones.
      dotsLabel: 'Choose a step of the journey',
      // The four stages, in order. `id` picks the screenshot (SCREENSHOTS in src/config/images.ts).
      steps: [
        {
          id: 'discover',
          kicker: 'When you’re looking',
          title: 'Discover',
          lead: 'Find one small idea that suits today.',
          body: 'A library of hands-on activities drawn from everyday home life, alongside picture books and themed collections, filtered by age, setting and materials.',
          shotAlt: 'The Discover screen in RootMap, showing the activity library',
        },
        {
          id: 'experience',
          kicker: 'Each day',
          title: 'Experience',
          lead: 'Turn ordinary routines and everyday moments into opportunities for discovery.',
          body: 'Each day RootMap suggests one idea for each child, fitted to the times you are usually together, with clear steps and a simple list of materials.',
          shotAlt: 'The Today screen in RootMap, showing today’s inspiration for a child',
        },
        {
          id: 'remember',
          kicker: 'In the moment',
          title: 'Remember',
          lead: 'Keep what you notice.',
          body: 'Save a photo and a few words when something is worth remembering. Moments are grouped by month and easy to search.',
          shotAlt: 'The My Moments screen in RootMap, showing a timeline of saved moments',
        },
        {
          id: 'reflect',
          kicker: 'Over time',
          title: 'Reflect',
          lead: 'Look back, and see each child’s own path take shape.',
          body: 'A week-by-week look back and a journal for each child show what they keep returning to. There are no scores and no streaks.',
          shotAlt: 'A child’s profile in RootMap, showing their journal',
        },
      ],
      link: 'See all features',
      app: 'Open RootMap',
      demoNote: 'Screenshots show the current app with a demo family.',
    },
    // The founder's note. `intro` and `observations` are a first draft developed from your handwritten notes, for you to
    // review and rewrite: while `draft` is true the note carries a "Draft" label. Set it to false once the words are
    // yours. `name` is still empty and shows a labelled placeholder (as `intro` or `observations` would if emptied).
    founder: {
      chapter: 'Meet the founder',
      title: 'Growing curious minds, together',
      name: '',
      draft: false,
      draftLabel: 'Draft · for the founder’s review',
      intro: [
        'RootMap begins with a simple belief. Grow with your child. Practical, real-life activities bring parents and children together, away from screens and worksheets. Cooking, planting, making and exploring become chances to build confidence, understand one another and deepen your connection as you both grow.',
      ] as string[],
      observationsTitle: 'The perspectives behind RootMap',
      observations: [
        'Studying at a leading entrepreneurship school',
        'Conversations with many young founders',
        'Curiosity, initiative and resilience from an early age',
        'Connections across AI and innovative education',
        'A perspective rooted in social-emotional learning',
        'Real-life experiences. Closer family connections.',
      ] as string[],
      placeholders: {
        name: 'Your name',
        intro: 'A short personal introduction, in your own words: who you are and how RootMap began. Add it in src/i18n (home.founder.intro).',
        observations: 'Space for the points that, in your experience, help children: a few short thoughts. Add them in src/i18n (home.founder.observations).',
      },
      imageAlt: 'A portrait of RootMap’s founder',
      about: 'More on the About page',
      connect: 'Let’s talk about your child',
      // The places Connect leads to. The WeChat ID, Rednotes link and email address are set in src/config/site.ts.
      channels: { label: 'Other ways to connect', wechat: 'WeChat', xiaohongshu: 'Rednotes', email: 'Email', soon: 'coming soon' },
    },
    // Three places to go next. This is a signpost, not a list of posts: nothing here is invented content.
    explore: {
      chapter: 'Explore & connect',
      title: 'Explore more with us',
      intro: 'Three places where the thinking behind RootMap keeps growing. Pick whichever suits the moment.',
      linkMissing: 'Link coming soon',
      xiaohongshu: {
        name: 'Rednotes',
        nativeName: '小红书',
        tagline: 'Small notes from everyday life',
        topics: ['Personal reflections', 'Everyday experiences', 'Educational observations', 'Creative ideas', 'Behind the scenes'],
        cta: 'Explore on Rednotes',
        imageAlt: 'A preview of RootMap on Rednotes',
      },
      blog: {
        name: 'Blog',
        tagline: 'Longer thoughts, written slowly',
        topics: ['Longer educational reflections', 'Classroom observations', 'Discussions of child development', 'Personal essays', 'Research-informed articles'],
        cta: 'Read the Blog',
        latest: 'Latest',
        imageAlt: 'A preview of the RootMap blog',
      },
      resources: {
        name: 'Resources',
        tagline: 'A growing library for home and classroom',
        topics: ['Educational materials', 'Practical activities', 'Observation guides', 'Research and reading', 'For parents and educators'],
        cta: 'Explore Resources',
        imageAlt: 'A preview of RootMap’s resources',
      },
    },
    // Entries live in src/config/inspirations.ts.
    inspired: {
      chapter: 'A small collection',
      title: 'Inspired by',
      intro: 'The people, books and ideas that have shaped how I think about childhood and learning.',
      disclaimer: 'A personal collection of influences. Being listed here does not imply any endorsement of, or relationship with, RootMap.',
      kinds: {
        educator: 'Educator',
        researcher: 'Researcher',
        author: 'Author',
        creator: 'Creator',
        book: 'Book',
        paper: 'Research paper',
        philosophy: 'Educational approach',
        logo: 'Organization',
      },
      by: 'by',
      empty: {
        title: 'This collection is still being gathered',
        body: 'The people, books and ideas behind RootMap will be shared here soon.',
      },
      placeholder: {
        name: 'Name to come',
        note: 'A short reflection in your own words',
        hint: 'Design placeholders, shown only while developing. Add real entries in src/config/inspirations.ts.',
      },
    },
    // The moving ribbon of values. `accent` words are shown in terracotta.
    values: {
      label: 'What childhood makes room for',
      pause: 'Pause the moving words',
      play: 'Resume the moving words',
      words: [
        { text: 'Focus', accent: false },
        { text: 'Independence', accent: false },
        { text: 'Creativity', accent: true },
        { text: 'Curiosity', accent: false },
        { text: 'Resilience', accent: false },
        { text: 'Imagination', accent: true },
        { text: 'Logical Thinking', accent: false },
        { text: 'Exploration', accent: false },
        { text: 'Growth', accent: true },
      ],
    },
    grow: {
      chapter: 'Grow with us',
      title: 'RootMap is still growing. So are we.',
      paragraphs: [
        'RootMap is an evolving educational project, not a finished product. In human years, it is still a baby.',
        'Every piece of feedback helps it grow. There are two ways to take part, and you’re welcome to do either or both.',
      ],
      feedback: {
        label: 'About the app',
        title: 'Share feedback about RootMap',
        body: 'Have you tried the app? Tell me what worked, what didn’t, and what you wish it did.',
        button: 'Share Feedback',
        missing: 'Feedback form coming soon',
      },
      community: {
        label: 'About the community',
        title: 'Help shape our community',
        status: 'In exploration · not yet open',
        body: 'I’m exploring a thoughtful private community for parents, educators, researchers and anyone who cares about childhood and learning. Nothing has been built yet; a short survey will help me learn what kind of space would be valuable to you.',
        choose: 'Choose the survey for where you live:',
        more: 'More about the community',
      },
      ps: {
        label: 'P.S.',
        body: 'RootMap itself is ready today. Open it in your browser; no account is needed to begin.',
        button: 'Start with RootMap',
      },
    },
  },

  philosophy: {
    title: 'Our Philosophy',
    description: 'The educational thinking behind RootMap: how young children learn, and what that asks of the adults around them.',
    eyebrow: 'Our Philosophy',
    heading: 'Growing alongside children',
    lead: 'The educational thinking behind RootMap: what we believe about how young children learn, and what that asks of the adults around them.',
    heroImageAlt: 'A child absorbed in hands-on exploration',
    contentsLabel: 'On this page',
    sections: [
      {
        id: 'curiosity',
        title: 'Respecting children’s natural curiosity',
        paragraphs: [
          'Young children are not empty vessels waiting to be filled. They arrive already curious: testing, touching, asking, watching. Much of their learning is self-motivated, driven by a need to understand how things work and where they fit.',
          'We think one of the most useful things adults can do is protect that curiosity. That means noticing what a child is drawn to, making room for it, and resisting the urge to hurry them toward a “right” answer.',
        ],
        note: '',
      },
      {
        id: 'real-experiences',
        title: 'Learning through real experiences',
        paragraphs: [
          'Children learn a great deal from real objects and real tasks: pouring, sorting, washing, carrying, mixing. These experiences engage the hands and the senses, and they carry meaning because they are part of real life.',
          'That is why RootMap’s activities draw on ordinary household materials and routines. The kitchen, the garden, the bath and the walk home are all places where learning can happen, without special equipment or a fixed curriculum.',
        ],
        note: '',
      },
      {
        id: 'observation',
        title: 'Observation before intervention',
        paragraphs: [
          'Before stepping in, it helps to watch. What is the child trying to do? What has caught their attention? Are they working through a challenge, or do they need support?',
          'Careful observation has a long tradition in early childhood education. It helps adults respond to the child in front of them, rather than to an idea of what a child of a certain age should be doing. RootMap’s Moments are meant to support this kind of noticing.',
        ],
        note: '',
      },
      {
        id: 'independence',
        title: 'Supporting children’s independence',
        paragraphs: [
          'Children often want to do things for themselves long before they can do them well. Given time, child-sized tools and a little patience, they can take part in real tasks: dressing, preparing food, caring for plants, tidying up.',
          'Independence is not about leaving children alone. It is about preparing the environment, and our own expectations, so that children can try, make mistakes, and try again.',
        ],
        note: '',
      },
      {
        id: 'caregivers',
        title: 'The role of parents and caregivers',
        paragraphs: [
          'Parents and caregivers know their children better than any app can. RootMap is not a replacement for that relationship, or for the teachers and professionals who support families.',
          'Our aim is modest: to offer ideas when you want them, to help you notice what you might otherwise miss, and to keep a record of moments that are easy to forget. The judgement about what is right for your child stays with you.',
        ],
        note: '',
      },
      {
        id: 'reflection',
        title: 'Meaningful reflection',
        paragraphs: [
          'Looking back can change how we see the present. A note about how a child concentrated on a puzzle, or the first time they poured their own water, can reveal patterns of interest and growth over weeks and months.',
          'Reflection is not about measuring children or comparing them with others. RootMap deliberately avoids scores and streaks. Its weekly look-back is simply a chance to pause and notice how each child is growing in their own way.',
        ],
        note: '',
      },
    ],
    evidence: {
      title: 'A note on evidence',
      body: 'The ideas on this page draw on widely shared traditions in early childhood education, including Montessori-inspired practice. They describe what we value; they are not scientific claims. As the Resources section grows, we will share reading and research summaries with clear sources.',
    },
    cta: {
      title: 'See how these ideas shape the app',
      features: 'Explore the features',
      app: 'Get Started',
    },
  },

  features: {
    title: 'Features',
    description: 'What the RootMap app offers today: daily activity ideas, an activity library, Moments, weekly plans and child profiles.',
    eyebrow: 'Features',
    heading: 'What RootMap does',
    lead: 'RootMap is a calm companion for parents and caregivers of children roughly one to five years old. Here is what the app offers today.',
    demoNote: 'Screenshots show the current app with a demo family.',
    whatLabel: 'What it does',
    whyLabel: 'Why it helps',
    items: [
      {
        id: 'today',
        title: 'Today',
        what: 'Each day, RootMap suggests one hands-on activity for each child, suited to their age. Alongside it: a look back at a Moment from earlier weeks, and a short thought for parents.',
        why: 'It answers the daily question of what to do together with one small idea rather than a long list.',
        shotAlt: 'The Today screen, with today’s inspiration for a child named Maya',
      },
      {
        id: 'routine',
        title: 'Our Routine',
        what: 'Tell RootMap when you are usually together: while cooking, after dinner, at bath and bedtime, or on weekend mornings. Today’s idea is chosen to fit one of those times.',
        why: 'Activities fit into the day you already have, instead of asking you to find extra time.',
        shotAlt: 'The Our Routine setting in RootMap',
      },
      {
        id: 'discover',
        title: 'Activity Discovery',
        what: 'A library of Montessori-style activities, including interactive music activities, that you can search and filter by setting, age, category and materials. Curated picture books, with English and Chinese editions, and themed collections sit alongside.',
        why: 'When you have a free half hour, or an interest you want to follow, you can find something suitable quickly.',
        shotAlt: 'The Discover screen, showing the activity library',
      },
      {
        id: 'activity',
        title: 'Activity Details',
        what: 'Every activity explains the skills it builds, what you will need, and how to do it step by step. Save it, add it to your week, or mark it as tried.',
        why: 'Clear steps and familiar materials make it easy to begin, even with an activity you have never tried before.',
        shotAlt: 'The details of the Getting Water activity: skills, materials and steps',
      },
      {
        id: 'moments',
        title: 'Moments & Weekly Recap',
        what: 'Save a photo and a few words when something is worth remembering. Moments are grouped by month, searchable, and gathered into a week-by-week recap.',
        why: 'Small observations add up. Over time they show what each child is drawn to and how they are changing.',
        shotAlt: 'The My Moments timeline, grouped by month',
      },
      {
        id: 'week',
        title: 'My Week',
        what: 'Plan activities for the days ahead, keep saved ideas in one place, and see what has been completed.',
        why: 'A gentle plan for parents who like to think ahead, with no scores or streaks.',
        shotAlt: 'The My Week plan',
      },
      {
        id: 'children',
        title: 'Child Profiles',
        what: 'Each child has their own profile, with a journal and a history of the activities they have tried.',
        why: 'With more than one child, each one’s path stays their own.',
        shotAlt: 'A child profile with its journal',
      },
    ],
    also: {
      title: 'Also part of RootMap',
      items: [
        { title: 'English & 简体中文', body: 'The whole app is available in English and Simplified Chinese.' },
        { title: 'Light and dark', body: 'Choose the appearance that suits you.' },
        { title: 'Private by default', body: 'Everything is stored on your device, with no account needed. You can export and restore a backup at any time.' },
        { title: 'Account & sync (beta)', body: 'An optional account backs up and syncs your family’s data across devices. It is currently in beta.' },
      ],
    },
    cta: {
      title: 'See it for yourself',
      body: 'Open RootMap in your browser and try today’s idea.',
      button: 'Get Started',
    },
  },

  blog: {
    title: 'Blog',
    description: 'Reflections on early childhood, learning and educational design.',
    eyebrow: 'Blog',
    heading: 'Ideas Worth Exploring',
    lead: 'Reflections on early childhood, learning and educational design: what we are reading, noticing and thinking about.',
    all: 'All',
    empty: 'No articles have been published yet. The first ones are on their way.',
    draftBadge: 'Draft · not published',
    draftNotice: 'This is a draft. It is shown only while developing the site and is not included in the published website.',
    undated: 'Not yet published',
    back: 'All articles',
    otherLanguage: '阅读中文版',
    filterLabel: 'Filter by category',
  },

  resources: {
    title: 'Resources',
    description: 'Practical educational resources for parents and educators.',
    eyebrow: 'Resources',
    heading: 'Resources for Curious Minds',
    lead: 'A growing collection of practical resources for parents and educators: guides, reading, research summaries and printable materials.',
    categoriesLabel: 'Categories',
    empty: {
      title: 'The collection is just beginning',
      body: 'No resources have been added yet. Guides, reading lists and printable materials will appear here as they are ready.',
    },
    open: 'Open',
    download: 'Download',
    countOne: '1 resource',
    countMany: '{n} resources',
  },

  community: {
    title: 'Community',
    description: 'An early exploration of a thoughtful community for people who care about childhood, curiosity and learning.',
    eyebrow: 'Community',
    status: 'In exploration · not yet open',
    heading: 'A Space to Grow Together',
    paragraphs: [
      'I’m exploring the possibility of creating a thoughtful private community for people who care about childhood, curiosity, education, and meaningful learning.',
      'It would be open to parents, educators, researchers and anyone who shares these interests, not only people who use RootMap.',
      'I’d love to learn what kind of space would be valuable to you.',
    ],
    imageAlt: 'People in conversation about learning',
    survey: {
      title: 'Share your thoughts',
      intro: 'Choose the survey for where you live. Each takes a few minutes.',
      china: {
        region: 'China Mainland / 中国大陆',
        body: '为中国大陆的朋友准备的中文问卷。',
        button: '填写中文问卷',
      },
      international: {
        region: 'International / 海外地区',
        body: 'For everyone outside mainland China, in English.',
        button: 'Take the Survey',
      },
      comingSoon: 'Coming soon / 即将开放',
    },
    privacy: {
      title: 'About your answers',
      body: 'The surveys are optional and hosted by an external survey service, which will be named on the survey itself. Answers will be used only to understand interest in the community and to shape what it becomes. Contact details will always be optional.',
    },
  },

  pages: {
    about: {
      title: 'About',
      heading: 'About RootMap',
      body: [
        'RootMap is an early childhood education app that helps parents and caregivers support children’s curiosity, independence and development through meaningful everyday experiences.',
      ],
      draft: 'Draft: this page will introduce the people behind RootMap and how it began.',
    },
    privacy: {
      title: 'Privacy',
      heading: 'Privacy',
      body: [
        'This website does not use cookies, analytics or advertising trackers, and it does not ask for personal information.',
        'The RootMap app is a separate product. It stores data on your device by default; its optional account (beta) syncs data across devices.',
      ],
      draft: 'Draft: this is not a privacy policy. A full privacy policy for the website and the app has not been published yet.',
    },
    contact: {
      title: 'Contact',
      heading: 'Contact',
      body: [] as string[],
      draft: 'Draft: contact details have not been added yet.',
    },
    notFound: {
      title: 'Page not found',
      heading: 'This page could not be found',
      body: 'The link may be out of date, or the page may have moved.',
      home: 'Back to the homepage',
    },
  },

  categories: {
    blog: {
      reflections: 'Educational Reflections',
      development: 'Child Development',
      research: 'Research Summaries',
      classroom: 'Classroom Observations',
      parenting: 'Everyday Parenting',
      design: 'Behind the Design',
    },
    resources: {
      development: { title: 'Child Development', body: 'How young children grow, think and feel.' },
      everyday: { title: 'Everyday Learning', body: 'Learning inside ordinary routines at home.' },
      observation: { title: 'Observation & Reflection', body: 'Ways of noticing, recording and looking back.' },
      activities: { title: 'Activities & Exploration', body: 'Hands-on ideas and activity collections.' },
      reading: { title: 'Research & Reading', body: 'Books, articles and research summaries, with sources.' },
      educators: { title: 'Resources for Educators', body: 'Materials for classrooms and teaching teams.' },
    },
    resourceTypes: {
      guide: 'Guide',
      pdf: 'PDF',
      reading: 'Reading',
      'research-summary': 'Research summary',
      'activity-collection': 'Activity collection',
      printable: 'Printable',
    },
  },
};

export type Dict = typeof en;
