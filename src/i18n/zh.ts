// 简体中文文案。键与 en.ts 完全一致（类型为 Dict），缺少任何一项都会在构建时报错。

import type { Dict } from './en';

export const zh: Dict = {
  meta: {
    htmlLang: 'zh-CN',
    languageName: '中文',
    siteDescription:
      'RootMap 帮助父母和照护者发现有意义的日常活动，观察孩子的兴趣，支持好奇心、独立性与终身学习。',
  },

  nav: {
    home: '首页',
    philosophy: '教育理念',
    features: '功能',
    blog: '文章',
    resources: '资源',
    community: '社群',
    login: '登录',
    getStarted: '开始使用',
    menu: '菜单',
    closeMenu: '关闭菜单',
    primary: '主导航',
    skip: '跳到正文',
    switchLanguage: '语言',
    homeLink: 'RootMap 首页',
  },

  footer: {
    tagline: '陪伴幼儿在日常生活中学习的安静伙伴。',
    explore: '浏览',
    rootmap: 'RootMap',
    openApp: '打开应用',
    about: '关于',
    privacy: '隐私',
    contact: '联系',
    footerNav: '页脚',
    rights: 'RootMap',
  },

  common: {
    readArticle: '阅读全文',
    viewAllArticles: '查看全部文章',
    draft: '草稿',
    placeholder: '占位',
    imagePlaceholder: '图片待添加',
    screenshotPlaceholder: '截图待添加',
    comingSoon: '即将开放',
    opensApp: '打开 RootMap 应用',
    newWindow: '在新标签页打开',
    authorNote: '你的思考',
    authorNoteHint: '这里留给你自己的教育思考、课堂经历或故事。可在 src/i18n 中添加。',
  },

  // 首页：开场、为什么有 RootMap、应用旅程、创始人的话、三个去处、“灵感来源”、价值观滚动条和“一起成长”的邀请。
  home: {
    title: 'RootMap：和孩子一起成长',
    hero: {
      eyebrow: 'RootMap · 写给幼儿的父母和照护者',
      titleLines: ['和孩子', '一起成长。'],
      body: 'RootMap 帮助父母把日常经历变成探索、联结与学习的有意义的机会。',
      note: '给你的点子，只需几分钟。真正的体验发生在真实的世界里，而不是屏幕上。',
      primary: '了解 RootMap',
      secondary: '我们的故事',
      imageAlt: '一个孩子正在探索日常活动',
      shotAlt: 'RootMap 的“今日”页面',
    },
    why: {
      eyebrow: '为什么有 RootMap',
      title: '童年发生在真实的世界里。',
      intro: [
        '幼儿时期真正重要的事，很多并不发生在课堂上，也不发生在屏幕上，而是发生在厨房水槽边、回家的路上、一篮等着分类的衣服旁。',
        'RootMap 想帮助大人留意这些时刻，并用心回应：不是给一天再添更多安排，而是看见本来就在那里的东西。而当孩子成长的时候，也为身边的大人打开了一扇一起成长的门。',
      ],
      imageAlt: '一个孩子在家中专注于一件日常小事',
      detailAlt: '一双小手正在做一件日常小事',
      caption: '一个幼儿把水从一个杯子倒进另一个杯子，一遍又一遍，并不是在浪费时间，而是在弄明白一件事。',
      link: '阅读我们的教育理念',
      ideasLabel: 'RootMap 在意的事',
      ideas: [
        {
          title: '真实的体验',
          body: '倒水、分类、清洗、搬运。真实的物品和真实的任务，让孩子可以拿在手里、动手尝试、自己琢磨。',
        },
        {
          title: '亲子联结',
          body: '肩并肩一起做一件事，比把它做得完美更重要。',
        },
        {
          title: '好奇心',
          body: '孩子天生就想理解这个世界。我们从他们的问题出发，而不是从一张清单出发。',
        },
        {
          title: '独立性',
          body: '真实的任务、适合孩子尺寸的工具和充足的时间，让孩子能够自己动手。',
        },
        {
          title: '观察',
          body: '在插手之前，先看一看。他们想做什么？是什么吸引了他们的注意？',
        },
        {
          title: '日常时刻',
          body: '厨房、浴室、回家的路上。平常的作息就已足够，不需要特别的教具。',
        },
      ],
    },
    experience: {
      chapter: '体验 RootMap',
      title: '每天一个小点子，一个记下你所见的地方。',
      intro: 'RootMap 配合家庭生活本来的样子，而不是要求它改变。',
      journeyLabel: 'RootMap 的旅程：发现、体验、记录、回顾',
      dotsLabel: '选择旅程中的一步',
      steps: [
        {
          id: 'discover',
          kicker: '想找点子的时候',
          title: '发现',
          lead: '找到一个适合今天的小点子。',
          body: '一个取材于居家日常的动手活动库，还有绘本和主题合集，可以按年龄、场景和材料筛选。',
          shotAlt: 'RootMap 的“活动”页面，展示活动库',
        },
        {
          id: 'experience',
          kicker: '每一天',
          title: '体验',
          lead: '把平常的作息和日常时刻，变成发现的机会。',
          body: '每天，RootMap 为每个孩子推荐一个点子，配合你们通常在一起的时间，附有清楚的步骤和简单的材料清单。',
          shotAlt: 'RootMap 的“今日”页面，展示为孩子准备的今日灵感',
        },
        {
          id: 'remember',
          kicker: '在当下',
          title: '记录',
          lead: '留住你所看见的。',
          body: '遇到值得记住的事，存下一张照片和几句话。记录按月份整理，也方便搜索。',
          shotAlt: 'RootMap 的“我的记录”页面，展示按时间排列的记录',
        },
        {
          id: 'reflect',
          kicker: '随着时间',
          title: '回顾',
          lead: '回头看看，每个孩子自己的成长轨迹慢慢清晰。',
          body: '按周回顾，加上每个孩子自己的成长日记，让你看见他们一再回到的兴趣。没有分数，也没有打卡。',
          shotAlt: 'RootMap 中一个孩子的个人页面，展示成长日记',
        },
      ],
      link: '查看全部功能',
      app: '打开 RootMap',
      demoNote: '截图来自当前版本的应用，使用的是示例家庭数据。',
    },
    // 创始人的话。intro 和 observations 是根据你的手写笔记整理的初稿，供你审阅和改写：draft 为 true 时页面会显示“草稿”标注，
    // 定稿后改为 false。name 仍为空，会显示带标注的占位说明。
    founder: {
      chapter: '认识创始人',
      title: '创始人的一封小信',
      hello: '你好，欢迎来到这里。很高兴遇见你。',
      name: '',
      draft: true,
      draftLabel: '草稿 · 待创始人审阅',
      intro: [
        '我做 RootMap，是因为我相信，幼年时期最重要的学习，发生在屏幕和练习册之外：在厨房水槽边，在花园里，在回家的路上。真实的事情，一起去做，并且有足够的时间。',
        '我们身边的工具一年比一年强大。这让我觉得，孩子会比以往任何时候都更需要那些工具无法替他们完成的事：提出自己问题的好奇心，专注于一件事的定力，以及独立思考的信心。',
        '这也不只关乎孩子。当我们慢下来，看着一个孩子自己把一件事弄明白，我们会看见更多，自己也在改变。这就是“和孩子一起成长”对我的意义。',
      ] as string[],
      observationsTitle: '我相信对孩子有帮助的事',
      observations: [
        '从好奇心出发。孩子自己的问题，比我的任何计划都是更好的起点。',
        '守护专注。让孩子不被催促地专心做完一件小事，值得为此留出时间。',
        '让他们自己来。独立和韧性，来自尝试、出错、再尝试。',
        '在创造中学习。动手做出一样东西，是孩子理解它的方式之一。',
      ] as string[],
      placeholders: {
        name: '你的名字',
        intro: '用你自己的话写一段简短的自我介绍：你是谁，RootMap 是怎样开始的。请在 src/i18n 中添加（home.founder.intro）。',
        observations: '这里留给你从自身经验出发、觉得对孩子有帮助的几点想法。请在 src/i18n 中添加（home.founder.observations）。',
      },
      imageAlt: 'RootMap 创始人的照片',
      about: '在“关于”页面了解更多',
      connect: '联系我',
      channels: { label: '其他联系方式', wechat: '微信', xiaohongshu: '小红书', email: '邮箱', soon: '即将添加' },
    },
    // 三个去处。这里只是路标，不是文章列表：没有任何虚构的内容。
    explore: {
      chapter: '探索与联结',
      title: '和我们一起探索更多',
      intro: 'RootMap 背后的思考，在这三个地方继续生长。挑一个适合此刻的去处吧。',
      linkMissing: '链接即将添加',
      xiaohongshu: {
        name: '小红书',
        nativeName: 'Xiaohongshu',
        tagline: '来自日常生活的小记',
        topics: ['个人随想', '日常经历', '教育观察', '创意点子', '幕后故事'],
        cta: '去小红书看看',
        imageAlt: 'RootMap 小红书内容预览',
      },
      blog: {
        name: '文章',
        tagline: '慢慢写下的长一些的思考',
        topics: ['较长的教育思考', '课堂观察', '关于儿童发展的讨论', '个人随笔', '有研究依据的文章'],
        cta: '阅读文章',
        latest: '最新',
        imageAlt: 'RootMap 文章预览',
      },
      resources: {
        name: '资源',
        tagline: '为家庭和课堂准备的、持续丰富的资源库',
        topics: ['教育素材', '实用活动', '观察指南', '研究与阅读', '给父母和教育者'],
        cta: '浏览资源',
        imageAlt: 'RootMap 资源预览',
      },
    },
    // 条目在 src/config/inspirations.ts 中维护。
    inspired: {
      chapter: '一份小小的收藏',
      title: '灵感来源',
      intro: '那些影响了我如何看待童年与学习的人、书和想法。',
      disclaimer: '这是一份个人的灵感清单。被列在这里，并不代表对 RootMap 的任何认可，也不代表与 RootMap 有任何关系。',
      kinds: {
        educator: '教育者',
        researcher: '研究者',
        author: '作者',
        creator: '创作者',
        book: '书籍',
        paper: '研究论文',
        philosophy: '教育理念',
      },
      by: '作者：',
      empty: {
        title: '这份清单还在整理中',
        body: 'RootMap 背后的人、书和想法，很快会在这里分享。',
      },
      placeholder: {
        name: '名称待添加',
        note: '用你自己的话写一句感想',
        hint: '设计占位，仅在开发时显示。请在 src/config/inspirations.ts 中添加真实条目。',
      },
    },
    // 滚动的价值观词条。accent 为 true 的词以陶土色显示。
    values: {
      label: '童年为这些留出空间',
      pause: '暂停滚动的文字',
      play: '继续滚动文字',
      words: [
        { text: '专注', accent: false },
        { text: '独立', accent: false },
        { text: '创造力', accent: true },
        { text: '好奇心', accent: false },
        { text: '韧性', accent: false },
        { text: '想象力', accent: true },
        { text: '逻辑思维', accent: false },
        { text: '探索', accent: false },
        { text: '成长', accent: true },
      ],
    },
    grow: {
      chapter: '一起成长',
      title: 'RootMap 还在成长，我们也是。',
      paragraphs: [
        'RootMap 是一个不断演进的教育项目，而不是一件已经完成的产品。按人的年龄来算，它还是个小婴儿。',
        '每一条反馈都在帮助它长大。参与的方式有两种，你可以任选其一，也可以都参与。',
      ],
      feedback: {
        label: '关于应用',
        title: '分享你对 RootMap 的反馈',
        body: '用过 RootMap 了吗？告诉我哪些地方好用，哪些不好用，以及你希望它能做到什么。',
        button: '分享反馈',
        missing: '反馈表单即将开放',
      },
      community: {
        label: '关于社群',
        title: '帮助塑造我们的社群',
        status: '探索中 · 尚未开放',
        body: '我正在探索建立一个用心的私密社群，面向父母、教育者、研究者，以及所有关心童年与学习的人。目前它还没有建立；一份简短的问卷，能帮助我了解什么样的空间对你来说是有价值的。',
        choose: '请根据你所在的地区选择问卷：',
        more: '了解更多关于社群的想法',
      },
      ps: {
        label: '附言',
        body: 'RootMap 应用本身现在就可以使用。在浏览器中打开即可，无需注册账号。',
        button: '开始使用 RootMap',
      },
    },
  },

  philosophy: {
    title: '教育理念',
    description: 'RootMap 背后的教育思考：幼儿如何学习，以及这对身边的大人意味着什么。',
    eyebrow: '教育理念',
    heading: '与孩子一起成长',
    lead: 'RootMap 背后的教育思考：我们如何理解幼儿的学习，以及这对身边的大人意味着什么。',
    heroImageAlt: '一个孩子专注地动手探索',
    contentsLabel: '本页内容',
    sections: [
      {
        id: 'curiosity',
        title: '尊重孩子天生的好奇心',
        paragraphs: [
          '幼儿并不是等待被填满的空容器。他们天生好奇：试探、触摸、提问、观察。他们的许多学习来自内在动力，源于想弄明白事物如何运作、自己又处在什么位置。',
          '我们认为，大人能做的最有用的事情之一，就是保护这份好奇心。这意味着留意孩子被什么吸引，为它留出空间，并忍住催促孩子走向“正确答案”的冲动。',
        ],
        note: '',
      },
      {
        id: 'real-experiences',
        title: '在真实的经历中学习',
        paragraphs: [
          '孩子能从真实的物品和真实的任务中学到很多：倒水、分类、清洗、搬运、搅拌。这些经历调动双手和感官，而且因为是真实生活的一部分，所以有意义。',
          '这就是为什么 RootMap 的活动取材于家中常见的材料和日常作息。厨房、花园、洗澡时间和回家的路上，都可以是学习发生的地方，不需要特别的教具或固定的课程。',
        ],
        note: '',
      },
      {
        id: 'observation',
        title: '先观察，再介入',
        paragraphs: [
          '在出手之前，先看一看会很有帮助。孩子想做什么？什么吸引了他们的注意？他们是在努力克服一个挑战，还是需要支持？',
          '细致的观察在幼儿教育中有着悠久的传统。它帮助大人回应眼前这个真实的孩子，而不是回应“这个年龄的孩子应该做什么”的想象。RootMap 的“记录”功能，正是为了支持这样的留意。',
        ],
        note: '',
      },
      {
        id: 'independence',
        title: '支持孩子的独立性',
        paragraphs: [
          '孩子往往在还做不好的时候，就已经想要自己动手了。只要有时间、适合他们尺寸的工具和一点耐心，他们就能参与真实的任务：穿衣、准备食物、照顾植物、整理收纳。',
          '独立并不意味着放手不管，而是预备好环境，也调整好我们自己的期待，让孩子可以尝试、犯错，再尝试。',
        ],
        note: '',
      },
      {
        id: 'caregivers',
        title: '父母和照护者的角色',
        paragraphs: [
          '父母和照护者比任何应用都更了解自己的孩子。RootMap 不能取代这份关系，也不能取代支持家庭的老师和专业人士。',
          '我们的目标很朴素：在你需要时提供一些点子，帮你留意可能会错过的东西，记下那些容易被遗忘的瞬间。什么对你的孩子最合适，判断始终在你手中。',
        ],
        note: '',
      },
      {
        id: 'reflection',
        title: '有意义的回顾',
        paragraphs: [
          '回头看，可以改变我们看待当下的方式。一条关于孩子如何专注拼图的记录，或孩子第一次自己倒水的瞬间，可以在几周、几个月里显现出兴趣与成长的脉络。',
          '回顾不是为了衡量孩子，也不是为了和别人比较。RootMap 有意不设分数和连续打卡。每周回顾只是一个停下来的机会，看看每个孩子如何以自己的方式成长。',
        ],
        note: '',
      },
    ],
    evidence: {
      title: '关于依据的说明',
      body: '本页的观点来自幼儿教育中广为认同的传统，包括蒙特梭利理念的实践。它们表达的是我们所看重的东西，并非科学结论。随着“资源”栏目的丰富，我们会分享注明出处的阅读材料和研究摘要。',
    },
    cta: {
      title: '看看这些理念如何体现在应用中',
      features: '了解功能',
      app: '开始使用',
    },
  },

  features: {
    title: '功能',
    description: 'RootMap 应用目前提供的功能：每日活动灵感、活动库、成长记录、每周计划和孩子档案。',
    eyebrow: '功能',
    heading: 'RootMap 能做什么',
    lead: 'RootMap 是一个安静的伙伴，面向大约一到五岁孩子的父母和照护者。以下是应用目前提供的功能。',
    demoNote: '截图来自当前版本的应用，使用的是示例家庭数据。',
    whatLabel: '它做什么',
    whyLabel: '它如何帮到你',
    items: [
      {
        id: 'today',
        title: '今日',
        what: '每天，RootMap 为每个孩子推荐一个适合其年龄的动手活动。同时还有：往日回顾，重温几周前的一条记录；以及一段写给父母的简短思考。',
        why: '面对“今天一起做点什么”这个日常问题，它给出一个小小的点子，而不是一长串清单。',
        shotAlt: '“今日”页面，展示为示例孩子 Maya 准备的今日灵感',
      },
      {
        id: 'routine',
        title: '我们的日常',
        what: '告诉 RootMap 你们通常什么时候在一起：做饭的时候、晚饭后、洗澡和睡前，或周末早上。今日灵感会配合其中一个时间。',
        why: '活动融入你本来就有的一天，而不是要求你另外挤出时间。',
        shotAlt: 'RootMap 中“我们的日常”设置',
      },
      {
        id: 'discover',
        title: '活动发现',
        what: '一个蒙特梭利风格的活动库（包括互动音乐活动），可以按场景、年龄、类别和材料搜索和筛选。旁边还有精选绘本（提供中英文版本）和主题合集。',
        why: '当你有半小时空闲，或想顺着孩子的某个兴趣走下去时，可以很快找到合适的活动。',
        shotAlt: '“活动”页面，展示活动库',
      },
      {
        id: 'activity',
        title: '活动详情',
        what: '每个活动都说明它能培养的能力、需要准备的材料，以及分步骤的指导。可以收藏、加入本周计划，或标记为已尝试。',
        why: '清楚的步骤和熟悉的材料，让开始变得容易，即使是从未尝试过的活动。',
        shotAlt: '“取水”活动的详情：能力、材料和步骤',
      },
      {
        id: 'moments',
        title: '成长记录与每周回顾',
        what: '遇到值得记住的事，存下一张照片和几句话。记录按月份排列，可以搜索，并汇集成按周的回顾。',
        why: '细小的观察会慢慢累积。随着时间推移，它们会显示每个孩子被什么吸引、正在如何变化。',
        shotAlt: '“我的记录”时间线，按月份排列',
      },
      {
        id: 'week',
        title: '我的一周',
        what: '为接下来几天安排活动，把收藏的点子放在一处，并看到已经完成了哪些。',
        why: '一个温和的计划，适合喜欢提前安排的父母，没有分数，也没有连续打卡。',
        shotAlt: '“我的一周”计划',
      },
      {
        id: 'children',
        title: '孩子档案',
        what: '每个孩子都有自己的档案，包括成长日志和尝试过的活动记录。',
        why: '家里有不止一个孩子时，每个孩子的成长轨迹都各自清晰。',
        shotAlt: '孩子档案及其成长日志',
      },
    ],
    also: {
      title: 'RootMap 还包括',
      items: [
        { title: 'English & 简体中文', body: '整个应用都提供英文和简体中文版本。' },
        { title: '浅色与深色', body: '选择适合你的外观。' },
        { title: '默认保护隐私', body: '所有内容都保存在你的设备上，无需注册账号。随时可以导出和恢复备份。' },
        { title: '账号与同步（测试版）', body: '可选的账号会在多台设备之间备份和同步家庭数据。目前处于测试阶段。' },
      ],
    },
    cta: {
      title: '亲自看一看',
      body: '在浏览器中打开 RootMap，试试今天的灵感。',
      button: '开始使用',
    },
  },

  blog: {
    title: '文章',
    description: '关于幼儿、学习与教育设计的思考。',
    eyebrow: '文章',
    heading: '值得探索的想法',
    lead: '关于幼儿、学习与教育设计的思考：我们在读什么、留意到什么、思考着什么。',
    all: '全部',
    empty: '还没有发布文章。第一批文章正在路上。',
    draftBadge: '草稿 · 未发布',
    draftNotice: '这是一篇草稿，只在本地开发网站时显示，不会出现在正式发布的网站中。',
    undated: '尚未发布',
    back: '全部文章',
    otherLanguage: 'Read in English',
    filterLabel: '按类别筛选',
  },

  resources: {
    title: '资源',
    description: '面向父母和教育者的实用教育资源。',
    eyebrow: '资源',
    heading: '给好奇心的资源',
    lead: '一个持续丰富的实用资源合集，面向父母和教育者：指南、阅读材料、研究摘要和可打印素材。',
    categoriesLabel: '分类',
    empty: {
      title: '资源合集刚刚起步',
      body: '目前还没有添加资源。指南、书单和可打印素材准备好后，会陆续出现在这里。',
    },
    open: '打开',
    download: '下载',
    countOne: '1 项资源',
    countMany: '{n} 项资源',
  },

  community: {
    title: '社群',
    description: '对一个用心的社群的初步探索，面向所有关心童年、好奇心与学习的人。',
    eyebrow: '社群',
    status: '探索中 · 尚未开放',
    heading: '一起成长的空间',
    paragraphs: [
      '我正在探索建立一个用心的私密社群，面向所有关心童年、好奇心、教育和有意义的学习的人。',
      '它将向父母、教育者、研究者以及所有有共同兴趣的人开放，而不仅限于 RootMap 的用户。',
      '我很想知道，什么样的空间对你来说是有价值的。',
    ],
    imageAlt: '人们在交流关于学习的想法',
    survey: {
      title: '分享你的想法',
      intro: '请根据你所在的地区选择问卷，每份问卷只需几分钟。',
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
      title: '关于你的回答',
      body: '问卷完全自愿填写，由第三方问卷服务托管，具体服务会在问卷中注明。回答只用于了解大家对社群的兴趣，以及决定它未来的样子。联系方式始终是选填的。',
    },
  },

  pages: {
    about: {
      title: '关于',
      heading: '关于 RootMap',
      body: ['RootMap 是一款幼儿教育应用，帮助父母和照护者通过有意义的日常经历，支持孩子的好奇心、独立性和成长。'],
      draft: '草稿：这个页面将介绍 RootMap 背后的人，以及它的缘起。',
    },
    privacy: {
      title: '隐私',
      heading: '隐私',
      body: [
        '本网站不使用 Cookie、分析工具或广告追踪，也不会要求你提供个人信息。',
        'RootMap 应用是一个独立的产品。它默认把数据保存在你的设备上；可选的账号（测试版）会在多台设备之间同步数据。',
      ],
      draft: '草稿：这不是隐私政策。网站和应用的完整隐私政策尚未发布。',
    },
    contact: {
      title: '联系',
      heading: '联系',
      body: [],
      draft: '草稿：联系方式尚未添加。',
    },
    notFound: {
      title: '找不到页面',
      heading: '找不到这个页面',
      body: '链接可能已经过期，或者页面已经移动。',
      home: '回到首页',
    },
  },

  categories: {
    blog: {
      reflections: '教育思考',
      development: '儿童发展',
      research: '研究摘要',
      classroom: '课堂观察',
      parenting: '日常育儿',
      design: '设计幕后',
    },
    resources: {
      development: { title: '儿童发展', body: '幼儿如何成长、思考和感受。' },
      everyday: { title: '日常中的学习', body: '在居家的日常作息中学习。' },
      observation: { title: '观察与回顾', body: '留意、记录和回顾的方法。' },
      activities: { title: '活动与探索', body: '动手活动点子和活动合集。' },
      reading: { title: '研究与阅读', body: '书籍、文章和研究摘要，均注明出处。' },
      educators: { title: '教育者资源', body: '适用于课堂和教学团队的材料。' },
    },
    resourceTypes: {
      guide: '指南',
      pdf: 'PDF',
      reading: '阅读',
      'research-summary': '研究摘要',
      'activity-collection': '活动合集',
      printable: '可打印',
    },
  },
};
