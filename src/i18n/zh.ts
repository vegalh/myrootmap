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

  home: {
    title: 'RootMap：点滴时刻，有意义的成长',
    hero: {
      eyebrow: '写给幼儿的父母和照护者',
      title: '点滴时刻，\n有意义的成长。',
      body: 'RootMap 帮助父母和照护者发现有意义的日常活动，观察孩子的兴趣，支持好奇心、独立性与终身学习。',
      primary: '开始使用',
      secondary: '了解 RootMap',
      imageAlt: '一个孩子正在探索日常活动',
    },
    why: {
      eyebrow: '为什么有 RootMap',
      title: '学习发生在日常生活里。',
      paragraphs: [
        '幼儿时期真正重要的事，很多并不发生在课堂上，而是发生在厨房水槽边、回家的路上、一篮等着分类的衣服旁。',
        '孩子在平凡的经历中探索、尝试、重复、观察和发现。一个幼儿把水从一个杯子倒进另一个杯子，一遍又一遍，并不是在浪费时间，而是在弄明白一件事。',
        'RootMap 想帮助大人留意这些时刻，并用心回应：不是给一天再添更多安排，而是看见本来就在那里的东西。',
      ],
      principlesLabel: '三个原则',
      principles: [
        {
          title: '好奇心',
          body: '孩子天生就想理解这个世界。我们从他们的问题和兴趣出发，而不是从一张清单出发。',
        },
        {
          title: '独立性',
          body: '真实的任务、适合孩子尺寸的工具和充足的时间，让孩子能够自己动手，发现自己能做到什么。',
        },
        {
          title: '有意义的联结',
          body: '学习在关系中生长。共同的关注、交谈和相处，让日常经历有了意义。',
        },
      ],
    },
    how: {
      eyebrow: 'RootMap 如何运作',
      title: '三种相互联结的体验',
      intro: 'RootMap 配合家庭生活本来的样子，而不是要求它改变。',
      steps: [
        {
          id: 'discover',
          title: '发现',
          lead: '找到支持探索与学习的有意义的活动。',
          body: '一个取材于居家日常的动手活动库，还有绘本和主题合集，可以按年龄、场景和材料筛选。',
          shotAlt: 'RootMap 的“活动”页面，展示活动库',
        },
        {
          id: 'experience',
          title: '体验',
          lead: '把平常的作息和日常时刻，变成发现的机会。',
          body: '每天，RootMap 为每个孩子推荐一个点子，配合你们通常在一起的时间，附有清楚的步骤和简单的材料清单。',
          shotAlt: 'RootMap 的“今日”页面，展示为孩子准备的今日灵感',
        },
        {
          id: 'remember',
          title: '记录',
          lead: '记下有意义的瞬间，随着时间回顾孩子的经历。',
          body: '遇到值得记住的事，存下一张照片和几句话；按周回顾，看见每个孩子自己的成长轨迹。',
          shotAlt: 'RootMap 的“我的记录”页面，展示按时间排列的记录',
        },
      ],
      link: '查看全部功能',
      demoNote: '截图来自当前版本的应用，使用的是示例家庭数据。',
    },
    philosophy: {
      eyebrow: '我们的教育理念',
      title: '孩子天生好奇。我们的角色，是帮助这份好奇心成长。',
      body: 'RootMap 借鉴蒙特梭利理念，也借鉴细心照护者的日常智慧。以下几点贯穿它的每一个部分。',
      themes: [
        { title: '观察', body: '在判断孩子需要什么之前，先仔细观察。' },
        { title: '回应式照护', body: '以温暖和耐心，跟随孩子发出的信号。' },
        { title: '儿童主导的探索', body: '为孩子自己的选择和问题留出空间。' },
        { title: '独立性', body: '邀请孩子参与他们能够独立完成的真实任务。' },
        { title: '日常中的学习', body: '把平常的生活作息看作丰富的学习场所。' },
      ],
      link: '阅读我们的教育理念',
    },
    blog: {
      eyebrow: '文章',
      title: '值得探索的想法',
      intro: '关于童年、学习与教育设计的思考。',
      empty: '第一批文章正在撰写中，发布后会出现在这里。',
    },
    resources: {
      eyebrow: '资源',
      title: '给好奇心的资源',
      intro: '一个持续丰富的实用教育资源合集，面向父母和教育者：指南、阅读材料，以及可以在家或在课堂上使用的素材。',
      note: '资源合集刚刚起步，内容准备好后会陆续添加。',
      link: '浏览资源',
    },
    community: {
      eyebrow: '社群',
      status: '探索中',
      title: '一起成长的空间',
      paragraphs: [
        '我们正在探索建立一个用心的社群，面向父母、教育者、研究者，以及所有关心童年与学习的人。',
        '这个社群将不局限于 RootMap 应用本身。它会是一个交流想法、讨论教育经历、彼此学习的地方。',
      ],
      cta: '一起塑造这个社群',
      imageAlt: '人们一起学习',
    },
    final: {
      title: '让日常时刻变得有意义。',
      body: '在浏览器中打开 RootMap，无需注册账号即可开始。',
      button: '开始使用 RootMap',
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
