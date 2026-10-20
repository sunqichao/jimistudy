// 高中学段：先放入每个模块的入门样例，后续按高考大纲词汇与教材模块逐步补充。
const highContent = {
  speaking: [
    {
      id: 'club-interview',
      title: '社团面试',
      subtitle: '加入辩论社的面试',
      emoji: '🎤',
      color: 'purple',
      roles: ['面试官', '学生'],
      lines: [
        { who: 0, en: 'Why do you want to join the debate club?', zh: '你为什么想加入辩论社？' },
        { who: 1, en: 'Because I enjoy expressing my opinions and I would like to improve my speaking skills.', zh: '因为我喜欢表达自己的观点，也想提高口语能力。' },
        { who: 0, en: 'Have you ever taken part in a debate before?', zh: '你以前参加过辩论吗？' },
        { who: 1, en: 'Yes, I represented my class in a school competition last year.', zh: '参加过，去年我代表班级参加了学校的比赛。' },
        { who: 0, en: 'What do you think is the most important quality for a debater?', zh: '你认为辩手最重要的品质是什么？' },
        { who: 1, en: 'I think it is the ability to listen carefully and respond logically.', zh: '我认为是认真倾听并有逻辑地回应的能力。' }
      ]
    },
    {
      id: 'exchange-plan',
      title: '交换项目',
      subtitle: '谈谈出国交流的计划',
      emoji: '✈️',
      color: 'blue',
      roles: ['老师', '学生'],
      lines: [
        { who: 0, en: 'I heard you are applying for the exchange program. What made you decide to go abroad?', zh: '听说你在申请交换项目。是什么让你决定出国的？' },
        { who: 1, en: 'I want to experience a different culture and see the world from a new perspective.', zh: '我想体验不同的文化，从新的角度看世界。' },
        { who: 0, en: 'How will you prepare for the trip?', zh: '你打算怎么为这次行程做准备？' },
        { who: 1, en: 'I will keep practicing my English and learn more about the local customs.', zh: '我会继续练习英语，并多了解当地的风俗。' },
        { who: 0, en: 'That sounds like a good plan. Good luck!', zh: '听起来是个不错的计划。祝你好运！' },
        { who: 1, en: 'Thank you. I will do my best.', zh: '谢谢您，我会尽力的。' }
      ]
    }
  ],
  exam: [
    {
      id: 'gaokao-grammar',
      title: '语法与词汇 · 基础',
      subtitle: '主谓一致、从句、倒装与词汇辨析',
      emoji: '✅',
      color: 'purple',
      type: '高考模拟 · 单项填空',
      minutes: 10,
      questions: [
        { q: 'The teacher, along with his students, ___ to visit the museum tomorrow.', options: ['are going', 'is going', 'were going', 'go'], answer: 1, explain: 'along with 连接的成分不影响谓语，主语 teacher 是单数' },
        { q: 'It is high time that we ___ action to protect the environment.', options: ['take', 'took', 'will take', 'have taken'], answer: 1, explain: 'It is high time that… 从句用过去式（虚拟语气）' },
        { q: '___ he said at the meeting surprised everyone.', options: ['That', 'What', 'Which', 'Whether'], answer: 1, explain: '主语从句中缺少 said 的宾语，用 what' },
        { q: 'The scientist, ___ research focuses on climate change, will give a talk.', options: ['who', 'whose', 'which', 'whom'], answer: 1, explain: 'research 属于 the scientist，表示所属关系用 whose' },
        { q: 'By the time we arrived, the film ___ for ten minutes.', options: ['has begun', 'had been on', 'is on', 'began'], answer: 1, explain: 'by the time + 过去时，主句用过去完成时' },
        { q: 'Not until he left home ___ how much he loved his family.', options: ['he realized', 'did he realize', 'he did realize', 'realized he'], answer: 1, explain: 'Not until… 置于句首，主句部分倒装' },
        { q: '— I’m sorry I broke your cup. — ___.', options: ['Never mind', 'You’re welcome', 'With pleasure', 'Good luck'], answer: 0, explain: '对道歉的得体回应' },
        { q: 'We must make full use of the ___ resources to develop green energy.', options: ['reluctant', 'renewable', 'ambiguous', 'fragile'], answer: 1, explain: 'renewable resources：可再生资源' }
      ]
    },
    {
      id: 'gaokao-cloze',
      title: '完形填空 · 努力的力量',
      subtitle: '结合全文逻辑判断',
      emoji: '🎻',
      color: 'yellow',
      type: '高考模拟 · 完形填空',
      minutes: 8,
      passage: [
        'Many students believe that talent is the key to success. However, research shows that (1) is far more important.',
        'A famous violinist once said that he practiced (2) every day, even when he felt tired. His (3) finally paid off when he won an international prize.',
        'This story teaches us that we should never (4) when we meet difficulties. Instead, we should keep trying and learn from our (5) .'
      ],
      questions: [
        { q: '空格 (1)', options: ['luck', 'effort', 'fame', 'money'], answer: 1, explain: 'However 转折，强调努力比天赋更重要' },
        { q: '空格 (2)', options: ['lazily', 'patiently', 'rarely', 'suddenly'], answer: 1, explain: '每天不放弃地练习，用 patiently' },
        { q: '空格 (3)', options: ['hard work', 'free time', 'bad luck', 'mistake'], answer: 0, explain: 'pay off（有回报）的主语应是努力' },
        { q: '空格 (4)', options: ['take off', 'give up', 'look up', 'show off'], answer: 1, explain: 'never give up when we meet difficulties' },
        { q: '空格 (5)', options: ['friends', 'failures', 'rewards', 'holidays'], answer: 1, explain: '继续尝试并从失败中学习' }
      ]
    }
  ],
  writing: [
    {
      id: 'invitation-letter',
      title: '邀请信',
      subtitle: '邀请外教来参加校园活动',
      emoji: '💌',
      color: 'purple',
      type: '应用文 · 邀请信',
      prompt: 'Suppose you are Li Hua, chairman of the Students’ Union. Write a letter to invite your foreign teacher Mr. Smith to give a talk at your school’s English Festival. Include the time, the place and the topic.',
      promptZh: '假定你是学生会主席李华，给外教 Smith 先生写信，邀请他在学校英语节上做讲座，内容包括时间、地点和主题。',
      minWords: 60,
      phrases: [
        { en: 'I am writing to', zh: '我写信是想……' },
        { en: 'I would be grateful if', zh: '如果……我将不胜感激' },
        { en: 'will be held', zh: '将被举办' },
        { en: 'I look forward to', zh: '我期待……' },
        { en: 'Please let me know', zh: '请告知我' },
        { en: 'Yours sincerely', zh: '此致（结尾敬语）' }
      ],
      tips: ['开头先点明写信目的，再交代时间、地点和主题。', '语气礼貌：would、could、grateful 比 want、need 更得体。', '结尾别忘了期待回复，并署名。'],
      sample: 'Dear Mr. Smith, I am writing to invite you to give a talk at our English Festival. The festival will be held in the school hall at 2 p.m. next Friday. The topic is “How to Learn English Effectively”, which many students are interested in. I would be grateful if you could also share your own learning experience with us. Please let me know whether you are available. I look forward to your reply. Yours sincerely, Li Hua'
    },
    {
      id: 'phones-in-class',
      title: '课堂能否使用手机',
      subtitle: '写一篇观点明确的议论文',
      emoji: '📱',
      color: 'blue',
      type: '议论文 · 表达观点',
      prompt: 'Some schools allow students to use mobile phones in class, while others do not. What is your opinion? Give reasons and examples.',
      promptZh: '有的学校允许学生在课堂使用手机，有的不允许。你怎么看？请陈述理由并举例。',
      minWords: 80,
      phrases: [
        { en: 'In my opinion', zh: '在我看来' },
        { en: 'On the one hand', zh: '一方面' },
        { en: 'On the other hand', zh: '另一方面' },
        { en: 'For example', zh: '例如' },
        { en: 'As a result', zh: '结果' },
        { en: 'In conclusion', zh: '总之' }
      ],
      tips: ['三段式：观点 → 理由（含例子）→ 总结。', '一段只讲一个理由，用连接词让逻辑清晰。', '结论呼应开头的观点，但换一种说法。'],
      sample: 'In my opinion, students should not use mobile phones in class. On the one hand, phones can easily distract students from learning. For example, many students check messages or play games instead of listening to the teacher. As a result, their grades may drop. On the other hand, phones are useful tools when they are used properly, so schools could allow them only for study purposes such as looking up words. In conclusion, I believe a clear rule is the best way to make good use of phones while keeping classes focused.'
    }
  ],
  words: [
    { word: 'abandon', ipa: '/əˈbæn.dən/', pos: 'v.', meaning: '放弃；遗弃', emoji: '🏳️', color: 'orange', example: 'He never abandoned his dream.', exampleZh: '他从未放弃自己的梦想。' },
    { word: 'efficient', ipa: '/ɪˈfɪʃ.ənt/', pos: 'adj.', meaning: '高效的', emoji: '⚙️', color: 'blue', example: 'This is an efficient way to learn words.', exampleZh: '这是一种高效的背单词方法。' },
    { word: 'evidence', ipa: '/ˈev.ə.dəns/', pos: 'n.', meaning: '证据', emoji: '🔍', color: 'purple', example: 'There is no evidence to support this idea.', exampleZh: '没有证据支持这个想法。' },
    { word: 'generate', ipa: '/ˈdʒen.ə.reɪt/', pos: 'v.', meaning: '产生；引起', emoji: '⚡', color: 'yellow', example: 'Solar panels generate clean energy.', exampleZh: '太阳能板能产生清洁能源。' },
    { word: 'tradition', ipa: '/trəˈdɪʃ.ən/', pos: 'n.', meaning: '传统', emoji: '🏮', color: 'pink', example: 'Dragon Boat Festival is a Chinese tradition.', exampleZh: '端午节是中国的传统节日。' },
    { word: 'confident', ipa: '/ˈkɑːn.fə.dənt/', pos: 'adj.', meaning: '自信的', emoji: '😎', color: 'yellow', example: 'She felt confident before the speech.', exampleZh: '演讲前她感到很自信。' },
    { word: 'achieve', ipa: '/əˈtʃiːv/', pos: 'v.', meaning: '实现；达到', emoji: '🏆', color: 'orange', example: 'Hard work helps you achieve your goals.', exampleZh: '努力工作能帮你实现目标。' },
    { word: 'consequence', ipa: '/ˈkɑːn.sə.kwens/', pos: 'n.', meaning: '后果；结果', emoji: '🎲', color: 'purple', example: 'Every choice has a consequence.', exampleZh: '每个选择都有后果。' },
    { word: 'significant', ipa: '/sɪɡˈnɪf.ɪ.kənt/', pos: 'adj.', meaning: '重大的；显著的', emoji: '📈', color: 'blue', example: 'The new law made a significant difference.', exampleZh: '新法律带来了显著的变化。' },
    { word: 'sustainable', ipa: '/səˈsteɪ.nə.bəl/', pos: 'adj.', meaning: '可持续的', emoji: '♻️', color: 'pink', example: 'We need sustainable development.', exampleZh: '我们需要可持续发展。' },
    { word: 'participate', ipa: '/pɑːrˈtɪs.ə.peɪt/', pos: 'v.', meaning: '参加；参与', emoji: '🙌', color: 'yellow', example: 'Students are encouraged to participate in class.', exampleZh: '学校鼓励学生在课上积极参与。' },
    { word: 'perspective', ipa: '/pɚˈspek.tɪv/', pos: 'n.', meaning: '观点；视角', emoji: '👓', color: 'purple', example: 'Try to see the problem from another perspective.', exampleZh: '试着从另一个角度看这个问题。' },
    { word: 'inspire', ipa: '/ɪnˈspaɪr/', pos: 'v.', meaning: '激励；启发', emoji: '💫', color: 'yellow', example: 'Her story inspired many young people.', exampleZh: '她的故事激励了许多年轻人。' },
    { word: 'maintain', ipa: '/meɪnˈteɪn/', pos: 'v.', meaning: '维持；保养', emoji: '🔧', color: 'blue', example: 'It is important to maintain a balanced diet.', exampleZh: '保持均衡饮食很重要。' },
    { word: 'priority', ipa: '/praɪˈɔːr.ə.t̬i/', pos: 'n.', meaning: '优先事项', emoji: '🥇', color: 'orange', example: 'Safety is our first priority.', exampleZh: '安全是我们的首要任务。' },
    { word: 'cooperate', ipa: '/koʊˈɑː.pə.reɪt/', pos: 'v.', meaning: '合作', emoji: '🤝', color: 'pink', example: 'The two schools cooperate on science projects.', exampleZh: '两所学校在科学项目上合作。' },
    { word: 'obstacle', ipa: '/ˈɑːb.stə.kəl/', pos: 'n.', meaning: '障碍', emoji: '🚧', color: 'purple', example: 'Fear is the biggest obstacle to success.', exampleZh: '恐惧是成功的最大障碍。' },
    { word: 'reluctant', ipa: '/rɪˈlʌk.tənt/', pos: 'adj.', meaning: '不情愿的', emoji: '😕', color: 'blue', example: 'He was reluctant to share his opinion.', exampleZh: '他不太愿意分享自己的观点。' },
    { word: 'distinguish', ipa: '/dɪˈstɪŋ.ɡwɪʃ/', pos: 'v.', meaning: '区分；辨别', emoji: '🔎', color: 'orange', example: 'Can you distinguish fact from opinion?', exampleZh: '你能区分事实和观点吗？' },
    { word: 'potential', ipa: '/pəˈten.ʃəl/', pos: 'n. / adj.', meaning: '潜力；潜在的', emoji: '🌱', color: 'yellow', example: 'Every student has great potential.', exampleZh: '每个学生都有很大的潜力。' }
  ],
  sentences: [
    {
      id: 'attributive-clause',
      sentence: 'The book that I borrowed yesterday is very interesting.',
      translation: '我昨天借的那本书很有趣。',
      hint: '定语从句：that 引导从句，修饰先行词 book',
      emoji: '📕',
      extraWords: ['who']
    },
    {
      id: 'not-only-inversion',
      sentence: 'Not only did he finish the task, but he also helped others.',
      translation: '他不仅完成了任务，还帮助了别人。',
      hint: 'Not only 位于句首时，前半句要部分倒装',
      emoji: '🤝',
      extraWords: ['does']
    },
    {
      id: 'it-is-adj-for-sb',
      sentence: 'It is important for us to protect the environment.',
      translation: '保护环境对我们来说很重要。',
      hint: 'It is + 形容词 + for sb. + to do，it 是形式主语',
      emoji: '🌱',
      extraWords: ['of']
    },
    {
      id: 'if-subjunctive',
      sentence: 'If I had more time, I would learn another language.',
      translation: '如果我有更多时间，我会学另一门语言。',
      hint: '虚拟语气：与现在事实相反，If + 过去式，would + 动词原形',
      emoji: '🌐',
      extraWords: ['will']
    },
    {
      id: 'the-more-the-better',
      sentence: 'The more you practice, the better you will become.',
      translation: '你练得越多，就会变得越好。',
      hint: 'the + 比较级……，the + 比较级……：越……，就越……',
      emoji: '📈',
      extraWords: ['best']
    },
    {
      id: 'only-by-working',
      sentence: 'Only by working hard can you achieve your goals.',
      translation: '只有努力，你才能实现目标。',
      hint: 'Only + 状语置于句首时，主句要部分倒装（can you …）',
      emoji: '🏆',
      extraWords: ['could']
    }
  ],
  reading: [
    {
      id: 'power-of-habits',
      title: '习惯的力量',
      subtitle: 'The Power of Habits',
      level: '高一 · 说明文',
      cover: '🔁',
      color: 'yellow',
      passage: [
        { en: 'Habits shape our lives more than we realize.', zh: '习惯对我们生活的塑造超出我们的想象。' },
        { en: 'Brushing your teeth every morning does not need much thought.', zh: '每天早上刷牙并不需要多想。' },
        { en: 'In the same way, small study habits can lead to big progress over time.', zh: '同样，小小的学习习惯经过时间积累也能带来大进步。' },
        { en: 'The key is to start small and stay consistent.', zh: '关键是从小事做起并坚持下去。' },
        { en: 'After a few weeks, the new behavior begins to feel natural.', zh: '几周之后，新行为就会变得自然。' }
      ],
      keywords: [
        { word: 'consistent', meaning: '持续的；一贯的' },
        { word: 'behavior', meaning: '行为' },
        { word: 'over time', meaning: '随着时间推移' }
      ],
      questions: [
        { q: 'What is the main idea of the passage?', options: ['Brushing teeth is difficult.', 'Small habits can bring big progress.', 'Studying should be done in weeks.', 'People cannot change their behavior.'], answer: 1, explain: '全文强调小习惯积累带来的进步' },
        { q: 'What does the author suggest?', options: ['Start small and stay consistent.', 'Change everything at once.', 'Avoid forming habits.', 'Study only before exams.'], answer: 0, explain: '第四句：start small and stay consistent' }
      ]
    },
    {
      id: 'learning-beyond-classroom',
      title: '课堂之外的学习',
      subtitle: 'Learning Beyond the Classroom',
      level: '高二 · 议论文',
      cover: '🌏',
      color: 'blue',
      passage: [
        { en: 'Many students believe that real learning only happens in the classroom.', zh: '许多学生认为真正的学习只发生在课堂上。' },
        { en: 'However, experiences outside school can be just as valuable.', zh: '然而，校外的经历同样很有价值。' },
        { en: 'Volunteering at a community center, for instance, teaches teamwork and responsibility.', zh: '例如，在社区中心做志愿者能培养团队合作和责任感。' },
        { en: 'Reading widely and talking with people from different backgrounds also broaden our horizons.', zh: '广泛阅读并与不同背景的人交流也能开阔我们的视野。' },
        { en: 'Therefore, we should treat the whole world as our classroom.', zh: '因此，我们应该把整个世界当作课堂。' }
      ],
      keywords: [
        { word: 'volunteer', meaning: '做志愿者' },
        { word: 'broaden', meaning: '拓宽；扩大' },
        { word: 'horizon', meaning: '视野；地平线' }
      ],
      questions: [
        { q: 'What is the author’s attitude toward learning outside school?', options: ['Doubtful.', 'Supportive.', 'Indifferent.', 'Critical.'], answer: 1, explain: '作者认为校外经历同样有价值' },
        { q: 'The word “broaden” in the passage is closest in meaning to ___.', options: ['narrow', 'expand', 'protect', 'measure'], answer: 1, explain: 'broaden our horizons 即“拓宽视野”' },
        { q: 'What can volunteering teach us, according to the passage?', options: ['Math and science.', 'Teamwork and responsibility.', 'Foreign languages.', 'Time management only.'], answer: 1, explain: '第三句直接给出答案' }
      ]
    },
    {
      id: 'urban-gardening',
      title: '都市园艺',
      subtitle: 'Urban Gardening',
      level: '高二 · 说明文',
      cover: '🌱',
      color: 'pink',
      passage: [
        { en: 'In recent years, more city dwellers have started growing vegetables on their balconies and rooftops.', zh: '近年来，越来越多的城市居民开始在阳台和屋顶种菜。' },
        { en: 'This trend is partly driven by a desire for fresher food.', zh: '这一趋势部分源于人们对更新鲜食物的渴望。' },
        { en: 'Moreover, gardening offers a way to relax after a stressful day at work.', zh: '此外，园艺提供了一种在紧张的工作日之后放松的方式。' },
        { en: 'Some schools have even built small gardens so that students can learn where their food comes from.', zh: '一些学校甚至建了小花园，让学生了解食物从何而来。' },
        { en: 'As a result, urban gardening is gradually becoming part of a healthier lifestyle.', zh: '因此，都市园艺正逐渐成为更健康生活方式的一部分。' }
      ],
      keywords: [
        { word: 'dweller', meaning: '居民' },
        { word: 'trend', meaning: '趋势' },
        { word: 'stressful', meaning: '压力大的' }
      ],
      questions: [
        { q: 'What is the main idea of the passage?', options: ['City people are moving to the countryside.', 'Urban gardening is becoming popular.', 'Fresh food is too expensive.', 'Schools should stop building gardens.'], answer: 1, explain: '全文围绕都市园艺的兴起' },
        { q: 'Why have some schools built small gardens?', options: ['To sell vegetables.', 'To save money.', 'To help students learn where food comes from.', 'To replace science classes.'], answer: 2, explain: '第四句：so that students can learn…' },
        { q: 'The word “trend” in the passage is closest in meaning to ___.', options: ['a general tendency', 'a strict rule', 'a sudden accident', 'a personal secret'], answer: 0, explain: '指一种普遍的发展方向' }
      ]
    }
  ],
  topics: [
    {
      id: 'environment',
      title: '环保与可持续',
      subtitle: '写作常用的环境话题词',
      emoji: '🌍',
      color: 'blue',
      words: [
        { word: 'pollution', meaning: '污染', emoji: '🏭' },
        { word: 'climate', meaning: '气候', emoji: '🌡️' },
        { word: 'recycle', meaning: '回收利用', emoji: '♻️' },
        { word: 'resource', meaning: '资源', emoji: '⛏️' },
        { word: 'protect', meaning: '保护', emoji: '🛡️' },
        { word: 'emission', meaning: '排放', emoji: '💨' },
        { word: 'ecosystem', meaning: '生态系统', emoji: '🌿' },
        { word: 'endangered', meaning: '濒危的', emoji: '🐼' },
        { word: 'renewable', meaning: '可再生的', emoji: '🔋' },
        { word: 'waste', meaning: '废物；浪费', emoji: '🗑️' }
      ],
      sentence: 'We must reduce carbon emissions.',
      translation: '我们必须减少碳排放。',
      quizWord: 'renewable'
    },
    {
      id: 'technology',
      title: '科技与社会',
      subtitle: '数字时代的常见词汇',
      emoji: '💻',
      color: 'purple',
      words: [
        { word: 'software', meaning: '软件', emoji: '🧩' },
        { word: 'device', meaning: '设备', emoji: '📱' },
        { word: 'digital', meaning: '数字的', emoji: '🔢' },
        { word: 'network', meaning: '网络', emoji: '🌐' },
        { word: 'innovation', meaning: '创新', emoji: '💡' },
        { word: 'privacy', meaning: '隐私', emoji: '🔒' },
        { word: 'data', meaning: '数据', emoji: '📊' },
        { word: 'robot', meaning: '机器人', emoji: '🤖' },
        { word: 'online', meaning: '在线的', emoji: '🛜' },
        { word: 'technology', meaning: '科技', emoji: '🔬' }
      ],
      sentence: 'Technology has changed the way we live.',
      translation: '科技改变了我们的生活方式。',
      quizWord: 'privacy'
    },
    {
      id: 'education',
      title: '教育与成长',
      subtitle: '谈论学习和未来的词汇',
      emoji: '🎓',
      color: 'yellow',
      words: [
        { word: 'curriculum', meaning: '课程体系', emoji: '📚' },
        { word: 'scholarship', meaning: '奖学金', emoji: '💰' },
        { word: 'graduate', meaning: '毕业；毕业生', emoji: '🎓' },
        { word: 'knowledge', meaning: '知识', emoji: '🧠' },
        { word: 'skill', meaning: '技能', emoji: '🛠️' },
        { word: 'discipline', meaning: '纪律；自律', emoji: '⏱️' },
        { word: 'ambition', meaning: '抱负', emoji: '🚀' },
        { word: 'creativity', meaning: '创造力', emoji: '🎨' },
        { word: 'challenge', meaning: '挑战', emoji: '🧗' },
        { word: 'opportunity', meaning: '机会', emoji: '🚪' }
      ],
      sentence: 'Education opens the door to new opportunities.',
      translation: '教育为新机遇打开大门。',
      quizWord: 'ambition'
    }
  ],
  grammar: [
    {
      id: 'attributive-clauses',
      title: '定语从句',
      subtitle: 'who / which / that / whose',
      emoji: '🔗',
      color: 'purple',
      summary: '用一个从句来修饰前面的名词（先行词），关键是选对关系词。',
      points: [
        {
          rule: '先行词是人用 who，是物用 which，两者都可用 that',
          examples: [
            { en: 'The girl who sits next to me is Anna.', zh: '坐在我旁边的女孩是安娜。' },
            { en: 'This is the book that I told you about.', zh: '这就是我跟你说过的那本书。' }
          ]
        },
        {
          rule: '关系词在从句中作宾语时可以省略',
          examples: [
            { en: 'The movie (that) we watched was great.', zh: '我们看的那部电影很棒。' }
          ]
        },
        {
          rule: '表示所属关系用 whose；介词 + which / whom 可引导从句',
          examples: [
            { en: 'I like the house whose roof is red.', zh: '我喜欢那座屋顶是红色的房子。' },
            { en: 'This is the house in which he lived.', zh: '这是他住过的房子。' }
          ]
        }
      ],
      exercises: [
        { q: 'The man ___ lives next door is a doctor.', options: ['who', 'which', 'what', 'whose'], answer: 0, explain: '先行词 man 是人，在从句中作主语' },
        { q: 'This is the best film ___ I have ever seen.', options: ['which', 'that', 'what', 'who'], answer: 1, explain: '先行词被最高级修饰，只用 that' },
        { q: 'I like the house ___ roof is red.', options: ['whose', 'who', 'that', 'what'], answer: 0, explain: 'roof 属于 house，表示所属关系' }
      ]
    },
    {
      id: 'non-finite',
      title: '非谓语动词',
      subtitle: 'to do / doing / done',
      emoji: '🔀',
      color: 'blue',
      summary: '动词不作谓语时的三种形式，要看它和逻辑主语的关系。',
      points: [
        {
          rule: 'to do：表示目的、将来或尚未发生的动作',
          examples: [
            { en: 'He went to the library to borrow some books.', zh: '他去图书馆借了几本书。' }
          ]
        },
        {
          rule: 'doing：表示主动、正在进行',
          examples: [
            { en: 'The girl standing there is my sister.', zh: '站在那儿的女孩是我姐姐。' }
          ]
        },
        {
          rule: 'done：表示被动、已经完成',
          examples: [
            { en: 'The window broken by the boy has been repaired.', zh: '被那个男孩打破的窗户已经修好了。' }
          ]
        }
      ],
      exercises: [
        { q: 'The students ___ in the playground are from Class Three.', options: ['play', 'playing', 'played', 'to play'], answer: 1, explain: '学生和 play 是主动关系，且正在进行' },
        { q: 'The book ___ by Lu Xun is very popular.', options: ['write', 'writing', 'written', 'to write'], answer: 2, explain: '书和 write 是被动关系' },
        { q: 'He hurried to the station ___ the first train.', options: ['catch', 'catching', 'caught', 'to catch'], answer: 3, explain: '表示目的，用 to do' }
      ]
    },
    {
      id: 'noun-clauses',
      title: '名词性从句',
      subtitle: 'that / whether / what / where…',
      emoji: '🧱',
      color: 'yellow',
      summary: '从句在句子里当主语、宾语、表语或同位语用，相当于一个名词。',
      points: [
        {
          rule: 'that 引导从句时不充当成分，宾语从句里常可省略；同位语从句说明抽象名词的内容',
          examples: [
            { en: 'I think (that) he is right.', zh: '我认为他是对的。' },
            { en: 'The news that our team won made us happy.', zh: '我们队获胜的消息让我们很高兴。' }
          ]
        },
        {
          rule: 'whether 表示“是否”，在主语从句句首、介词后不能换成 if',
          examples: [
            { en: 'I wonder whether he will come.', zh: '我想知道他是否会来。' },
            { en: 'Whether we can finish on time depends on everyone.', zh: '我们能否按时完成取决于每个人。' }
          ]
        },
        {
          rule: '连接代词 / 副词（what、who、where、how）引导从句时，要用陈述语序',
          examples: [
            { en: 'What he said is true.', zh: '他说的是真的。' },
            { en: 'I don’t know where she lives.', zh: '我不知道她住在哪里。' }
          ]
        }
      ],
      exercises: [
        { q: 'I wonder ___ he will attend the meeting.', options: ['that', 'whether', 'what', 'which'], answer: 1, explain: '表示“是否”，用 whether' },
        { q: 'The news ___ our team won the game made us happy.', options: ['that', 'which', 'what', 'whether'], answer: 0, explain: '同位语从句，说明 news 的内容，用 that' },
        { q: 'Can you tell me where ___?', options: ['does he live', 'he lives', 'lives he', 'is he living'], answer: 1, explain: '宾语从句用陈述语序' }
      ]
    }
  ]
};

JIMI.registerLevel({
  id: 'high',
  name: '高中',
  stage: '高一至高三',
  ageRange: '15–18 岁',
  emoji: '🎯',
  avatar: '🧑‍🎓',
  mascot: '🦊',
  coach: '狐狸学长',
  sentenceLead: '跟狐狸学长学一句',
  tagline: '高频词汇、长难句和阅读，稳扎稳打备战高考',
  speech: { rate: 0.9, pitch: 1 },
  home: {
    eyebrow: '稳扎稳打，一步一个脚印',
    greeting: '你好，同学！',
    copy: '词汇、语法、阅读一起练，把分数和语感一起提上去。',
    dateIcon: '📆',
    dateTitle: '今天的备考节奏',
    dateSub: '词汇 · 长难句 · 阅读',
    heroLead: '高效积累，',
    footnote: '每天 20 分钟，积少成多',
    bubble: 'You can!',
    route: '以高考英语大纲词汇和高频语法为主线，后续对应各教材模块。'
  },
  rootsMaxTier: 2,
  modules: ['words', 'roots', 'sentences', 'listening', 'speaking', 'review', 'grammar', 'reading', 'writing', 'topics', 'exam'],
  labels: {
    words: { title: '核心词汇', kicker: 'CORE VOCAB', emoji: '📖', intro: '高频词汇配例句和中文释义，边读边记更高效。', tip: '记忆小窍门：读例句、造句子，在语境里记单词最牢。' },
    sentences: { title: '长难句训练', kicker: 'SENTENCE LAB', emoji: '🧩', intro: '带干扰项的排序题，练出分析句子结构的能力。' },
    reading: { title: '阅读理解', kicker: 'READING', emoji: '📰', intro: '读文章、做题目，训练主旨、细节和推断能力。' },
    topics: { title: '话题词汇', nav: '话题', kicker: 'TOPIC VOCAB', intro: '按写作话题成组积累词汇，作文更有内容。' },
    exam: { title: '高考模拟', nav: '高考', kicker: 'GAOKAO MOCK', intro: '按高考题型限时作答，交卷后看解析，答错的题进入错题本。' }
  },
  planned: [],
  roadmap: {
    roots: ['补充更多拉丁、希腊词根与同根词（如 pend、flu、spir、terr）', '增加按词根拆词的拼写练习和同根词家族'],
    words: ['补充高考大纲 3500 词分级词表', '增加词形变化和固定搭配'],
    sentences: ['补充高考真题长难句拆解', '增加句子成分分析练习'],
    listening: ['增加对话与独白听力题', '增加连读弱读辨音训练'],
    speaking: ['补充高考口语常见话题口述（校园、环保、科技）', '增加复述与观点表达训练'],
    grammar: ['补充时态语态、名词性从句、状语从句、倒装与强调'],
    reading: ['补充七选五、完形填空和语法填空', '增加限时阅读与错题回顾'],
    writing: ['补充通知、读后续写、概要写作等题型', '增加高分句型与连接词库'],
    topics: ['补充文化、健康、人际关系、社会热点话题'],
    exam: ['补充七选五、语法填空、阅读理解和读后续写题型', '增加听力模拟题', '增加高考真题风格的整套限时模拟']
  },
  content: highContent
});
