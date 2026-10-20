// 大学学段：先放入每个模块的入门样例，后续按四六级大纲、学术英语和职场场景逐步补充。
const universityContent = {
  speaking: [
    {
      id: 'job-interview',
      title: '实习面试',
      subtitle: '自我介绍与优势',
      emoji: '💼',
      color: 'blue',
      roles: ['面试官', '应聘者'],
      lines: [
        { who: 0, en: 'Could you briefly introduce yourself?', zh: '你能简单介绍一下自己吗？' },
        { who: 1, en: 'Certainly. I am a third-year student majoring in economics, and I am particularly interested in data analysis.', zh: '当然。我是经济学专业的大三学生，对数据分析特别感兴趣。' },
        { who: 0, en: 'Why are you interested in this internship?', zh: '你为什么对这个实习岗位感兴趣？' },
        { who: 1, en: 'I believe it will give me the chance to apply what I have learned to real projects.', zh: '我相信它能让我有机会把所学用到真实项目中。' },
        { who: 0, en: 'What would you say is your greatest strength?', zh: '你认为自己最大的优点是什么？' },
        { who: 1, en: 'I work well in a team, and I always meet deadlines.', zh: '我善于团队合作，而且总是按时完成任务。' }
      ]
    },
    {
      id: 'group-discussion',
      title: '小组讨论',
      subtitle: '委婉地表达不同意见',
      emoji: '🗨️',
      color: 'purple',
      roles: ['同学甲', '同学乙'],
      lines: [
        { who: 0, en: 'I think online courses are more efficient than traditional ones.', zh: '我认为线上课程比传统课程更高效。' },
        { who: 1, en: 'I see your point, but I am not sure I entirely agree.', zh: '我明白你的意思，但我不完全同意。' },
        { who: 0, en: 'Why not?', zh: '为什么不同意呢？' },
        { who: 1, en: 'Without face-to-face interaction, students may find it hard to stay motivated.', zh: '缺少面对面的互动，学生可能很难保持动力。' },
        { who: 0, en: 'That is a fair point. Perhaps a combination of both would work best.', zh: '这个观点有道理。也许两者结合效果最好。' },
        { who: 1, en: 'Exactly. A blended approach seems the most reasonable.', zh: '没错。混合式的方式似乎最合理。' }
      ]
    }
  ],
  exam: [
    {
      id: 'cet4-vocab-grammar',
      title: '词汇与语法 · 四级难度',
      subtitle: '语境词汇、虚拟语气与让步表达',
      emoji: '✅',
      color: 'blue',
      type: '四六级模拟 · 词汇与语法',
      minutes: 10,
      questions: [
        { q: 'The company decided to ___ a new policy to reduce costs.', options: ['ignore', 'implement', 'delay', 'imagine'], answer: 1, explain: 'implement a policy：实施政策' },
        { q: 'Her argument is so ___ that nobody can find a flaw in it.', options: ['vague', 'weak', 'solid', 'random'], answer: 2, explain: '“找不到漏洞”说明论证扎实' },
        { q: 'The result of the experiment ___ our original hypothesis.', options: ['contained', 'conducted', 'consumed', 'contradicted'], answer: 3, explain: '结果与假设相矛盾' },
        { q: 'Students are ___ to submit their papers before the deadline.', options: ['reluctant', 'required', 'related', 'repeated'], answer: 1, explain: 'be required to do：被要求做某事' },
        { q: 'Had I known about the traffic, I ___ earlier.', options: ['would leave', 'will leave', 'would have left', 'left'], answer: 2, explain: 'Had I known 是省略 if 的虚拟条件句，与过去事实相反' },
        { q: 'Technology has become so ___ in daily life that few people can live without it.', options: ['scarce', 'prevalent', 'ambiguous', 'trivial'], answer: 1, explain: 'prevalent：普遍的' },
        { q: '___ the heavy rain, the match went ahead as planned.', options: ['Because of', 'Despite', 'Due to', 'Owing to'], answer: 1, explain: '前后转折，用 despite（尽管）' },
        { q: 'The professor asked us to ___ the main points of the article in 100 words.', options: ['postpone', 'compete', 'donate', 'summarize'], answer: 3, explain: 'summarize：概括' }
      ]
    },
    {
      id: 'cet4-cloze',
      title: '选词填空 · 线上学习',
      subtitle: '语篇连接与词义辨析',
      emoji: '💻',
      color: 'purple',
      type: '四六级模拟 · 完形填空',
      minutes: 8,
      passage: [
        'Online learning has become increasingly (1) among university students. It offers great flexibility, as learners can study at their own (2) and review lectures whenever necessary.',
        '(3) , it also requires strong self-discipline. Without a teacher watching over them, some students easily get (4) and fall behind.',
        'Therefore, setting clear goals is (5) for success.'
      ],
      questions: [
        { q: '空格 (1)', options: ['rare', 'popular', 'harmful', 'private'], answer: 1, explain: '后文列举了它的优点，说明越来越受欢迎' },
        { q: '空格 (2)', options: ['cost', 'risk', 'pace', 'mercy'], answer: 2, explain: 'at one’s own pace：按自己的节奏' },
        { q: '空格 (3)', options: ['Moreover', 'However', 'Therefore', 'Similarly'], answer: 1, explain: '前文讲优点，后文讲缺点，用转折词 However' },
        { q: '空格 (4)', options: ['inspired', 'promoted', 'selected', 'distracted'], answer: 3, explain: '缺少监督容易分心，从而落后' },
        { q: '空格 (5)', options: ['unnecessary', 'essential', 'impossible', 'harmful'], answer: 1, explain: '设定明确目标对成功至关重要' }
      ]
    }
  ],
  writing: [
    {
      id: 'email-to-professor',
      title: '给教授的邮件',
      subtitle: '请求延期提交作业',
      emoji: '📧',
      color: 'blue',
      type: '应用文 · 正式邮件',
      prompt: 'Write an email to your professor to request a short extension for a course paper. Explain the reason politely and propose a new deadline.',
      promptZh: '给教授写一封邮件，申请延长课程论文的提交期限。礼貌地说明原因，并提出新的截止日期。',
      minWords: 70,
      phrases: [
        { en: 'I am writing to', zh: '我写信是想……' },
        { en: 'I would like to', zh: '我想要……' },
        { en: 'I would appreciate it if', zh: '如果……我将非常感激' },
        { en: 'Thank you for your time', zh: '感谢您抽出时间' },
        { en: 'Best regards', zh: '此致（结尾敬语）' }
      ],
      tips: ['主题行简短明确，称呼用 Dear Professor + 姓氏。', '先说明请求，再给出理由和具体的新日期。', '语气礼貌克制，避免口语化缩写和感叹号。'],
      sample: 'Dear Professor Wang, I am writing to ask for a short extension on my term paper for Introduction to Economics. Unfortunately, I have been ill for the past week and could not make enough progress on my research. I would appreciate it if you could allow me to submit the paper on Friday, May 20, instead of May 15. I have already finished the outline and collected most of the data, so I am confident that I can complete the paper by the new date. Thank you for your time and understanding. Best regards, Zhang Wei'
    },
    {
      id: 'ai-and-learning',
      title: 'AI 对学习是帮助还是阻碍',
      subtitle: '写一篇有论证的短评',
      emoji: '🤖',
      color: 'purple',
      type: '议论文 · 四六级作文',
      prompt: 'Artificial intelligence tools are becoming common among university students. Write an essay discussing whether they help or hurt learning. State your position and support it with reasons.',
      promptZh: '人工智能工具在大学生中越来越普及。写一篇文章，讨论它们对学习是帮助还是阻碍，并给出你的立场和理由。',
      minWords: 100,
      phrases: [
        { en: 'It is widely acknowledged that', zh: '人们普遍认为' },
        { en: 'On the one hand', zh: '一方面' },
        { en: 'On the other hand', zh: '另一方面' },
        { en: 'For instance', zh: '例如' },
        { en: 'To sum up', zh: '总之' }
      ],
      tips: ['开头引出话题，再亮明立场（thesis statement）。', '正反两面都提到，但要让立场明确。', '用 however、therefore、moreover 让论证环环相扣。'],
      sample: 'It is widely acknowledged that artificial intelligence has changed the way university students study. On the one hand, AI tools can explain difficult concepts, translate articles and give instant feedback. For instance, a student who is confused about a statistics problem can ask for a step-by-step explanation at any time. On the other hand, relying too much on these tools may weaken independent thinking. Some students copy answers directly without understanding them, and therefore they fail to build real skills. Moreover, AI sometimes gives incorrect information, which needs to be checked carefully. To sum up, AI is neither a miracle nor a threat in itself; it helps learning only when students use it to support their own thinking rather than replace it.'
    }
  ],
  words: [
    { word: 'ambiguous', ipa: '/æmˈbɪɡ.ju.əs/', pos: 'adj.', meaning: '模棱两可的', emoji: '🌫️', color: 'blue', example: 'The instructions were ambiguous.', exampleZh: '这些说明含糊不清。' },
    { word: 'hypothesis', ipa: '/haɪˈpɑː.θə.sɪs/', pos: 'n.', meaning: '假设；假说', emoji: '🧪', color: 'purple', example: 'The experiment tested our hypothesis.', exampleZh: '这项实验检验了我们的假设。' },
    { word: 'implement', ipa: '/ˈɪm.plə.ment/', pos: 'v.', meaning: '实施；执行', emoji: '🛠️', color: 'orange', example: 'The university will implement a new policy.', exampleZh: '学校将实施一项新政策。' },
    { word: 'elaborate', ipa: '/ɪˈlæb.ɚ.eɪt/', pos: 'v.', meaning: '详细说明', emoji: '🗣️', color: 'yellow', example: 'Could you elaborate on your point?', exampleZh: '你能详细说明一下你的观点吗？' },
    { word: 'inevitable', ipa: '/ɪˈnev.ɪ.tə.bəl/', pos: 'adj.', meaning: '不可避免的', emoji: '🌊', color: 'pink', example: 'Change is inevitable.', exampleZh: '变化是不可避免的。' },
    { word: 'phenomenon', ipa: '/fəˈnɑː.mə.nɑːn/', pos: 'n.', meaning: '现象', emoji: '🌈', color: 'blue', example: 'Global warming is a complex phenomenon.', exampleZh: '全球变暖是一种复杂的现象。' },
    { word: 'scrutinize', ipa: '/ˈskruː.tə.naɪz/', pos: 'v.', meaning: '仔细检查', emoji: '🔎', color: 'purple', example: 'Researchers scrutinize the data carefully.', exampleZh: '研究人员会仔细审查数据。' },
    { word: 'allocate', ipa: '/ˈæl.ə.keɪt/', pos: 'v.', meaning: '分配；拨出', emoji: '🧮', color: 'orange', example: 'The school allocated funds to the library.', exampleZh: '学校给图书馆拨了经费。' },
    { word: 'resilient', ipa: '/rɪˈzɪl.i.ənt/', pos: 'adj.', meaning: '有韧性的；适应力强的', emoji: '🌱', color: 'yellow', example: 'Resilient people recover quickly from failure.', exampleZh: '有韧性的人能很快从失败中恢复。' },
    { word: 'paradigm', ipa: '/ˈper.ə.daɪm/', pos: 'n.', meaning: '范式；典范', emoji: '🧭', color: 'pink', example: 'The discovery led to a paradigm shift.', exampleZh: '这一发现带来了范式转变。' },
    { word: 'collaborate', ipa: '/kəˈlæb.ə.reɪt/', pos: 'v.', meaning: '合作；协作', emoji: '🤝', color: 'blue', example: 'Scientists from many countries collaborate on this project.', exampleZh: '许多国家的科学家合作开展这个项目。' },
    { word: 'comprehensive', ipa: '/ˌkɑːm.prɪˈhen.sɪv/', pos: 'adj.', meaning: '全面的；综合的', emoji: '📋', color: 'purple', example: 'She wrote a comprehensive report.', exampleZh: '她写了一份全面的报告。' },
    { word: 'mitigate', ipa: '/ˈmɪt̬.ə.ɡeɪt/', pos: 'v.', meaning: '减轻；缓解', emoji: '🩹', color: 'blue', example: 'Planting trees can mitigate the effects of climate change.', exampleZh: '植树可以缓解气候变化的影响。' },
    { word: 'enhance', ipa: '/ɪnˈhæns/', pos: 'v.', meaning: '提高；增强', emoji: '📶', color: 'purple', example: 'Regular practice enhances your speaking skills.', exampleZh: '经常练习能提高你的口语能力。' },
    { word: 'viable', ipa: '/ˈvaɪ.ə.bəl/', pos: 'adj.', meaning: '可行的', emoji: '✅', color: 'yellow', example: 'This is not a viable solution.', exampleZh: '这不是一个可行的解决方案。' },
    { word: 'prevalent', ipa: '/ˈprev.əl.ənt/', pos: 'adj.', meaning: '普遍的；流行的', emoji: '📡', color: 'orange', example: 'Online learning has become prevalent on campus.', exampleZh: '线上学习在校园里已经很普遍。' },
    { word: 'derive', ipa: '/dɪˈraɪv/', pos: 'v.', meaning: '获得；源自', emoji: '🌿', color: 'pink', example: 'Many English words derive from Latin.', exampleZh: '许多英语单词源自拉丁语。' },
    { word: 'contradict', ipa: '/ˌkɑːn.trəˈdɪkt/', pos: 'v.', meaning: '与……矛盾', emoji: '⚔️', color: 'blue', example: 'The new data contradict the earlier findings.', exampleZh: '新数据与先前的发现相矛盾。' },
    { word: 'incentive', ipa: '/ɪnˈsen.t̬ɪv/', pos: 'n.', meaning: '激励；动机', emoji: '🎁', color: 'yellow', example: 'Scholarships give students an incentive to study hard.', exampleZh: '奖学金激励学生努力学习。' },
    { word: 'objective', ipa: '/əbˈdʒek.tɪv/', pos: 'n. / adj.', meaning: '目标；客观的', emoji: '🎯', color: 'purple', example: 'The main objective of the course is to improve writing.', exampleZh: '这门课的主要目标是提高写作能力。' }
  ],
  sentences: [
    {
      id: 'compelling-evidence',
      sentence: 'The study provides compelling evidence for this hypothesis.',
      translation: '这项研究为这一假设提供了有力的证据。',
      hint: 'provide A for B：为 B 提供 A',
      emoji: '🧪',
      extraWords: ['against']
    },
    {
      id: 'despite-challenges',
      sentence: 'Despite the challenges, the team managed to complete the project on time.',
      translation: '尽管面临挑战，团队还是按时完成了项目。',
      hint: 'despite 后接名词短语；manage to do 表示“设法做成”',
      emoji: '📊',
      extraWords: ['although']
    },
    {
      id: 'widely-acknowledged',
      sentence: 'It is widely acknowledged that communication skills are essential in the workplace.',
      translation: '人们普遍认为沟通能力在职场中必不可少。',
      hint: 'It is widely acknowledged that…：学术写作常用的引出观点句式',
      emoji: '💼',
      extraWords: ['was']
    },
    {
      id: 'inverted-conditional',
      sentence: 'Had I known the deadline, I would have submitted the paper earlier.',
      translation: '如果我知道截止日期，我就会早点提交论文。',
      hint: '虚拟条件句省略 if 时，had 提到主语前（与过去事实相反）',
      emoji: '📝',
      extraWords: ['will']
    },
    {
      id: 'findings-suggest',
      sentence: 'The findings suggest that sleep plays a crucial role in memory.',
      translation: '研究结果表明，睡眠在记忆中起着关键作用。',
      hint: 'suggest that…：学术写作中常用来转述研究结论',
      emoji: '🧠',
      extraWords: ['play']
    },
    {
      id: 'not-how-fast',
      sentence: 'What matters most is not how fast you learn but how long you persist.',
      translation: '最重要的不是你学得多快，而是你坚持多久。',
      hint: 'what 引导主语从句；not A but B：不是 A 而是 B',
      emoji: '🐢',
      extraWords: ['whether']
    }
  ],
  reading: [
    {
      id: 'why-sleep-matters',
      title: '睡眠为何重要',
      subtitle: 'Why Sleep Matters',
      level: '四级 · 说明文',
      cover: '😴',
      color: 'blue',
      passage: [
        { en: 'University students often sacrifice sleep to meet deadlines or socialize.', zh: '大学生常常为了赶截止日期或社交而牺牲睡眠。' },
        { en: 'However, research consistently shows that adequate sleep improves memory and concentration.', zh: '然而，研究一再表明，充足的睡眠能改善记忆力和注意力。' },
        { en: 'During deep sleep, the brain consolidates what has been learned during the day.', zh: '在深度睡眠期间，大脑会巩固白天所学的内容。' },
        { en: 'Students who sleep less than six hours tend to perform worse on exams.', zh: '睡眠不足六小时的学生往往考试成绩更差。' },
        { en: 'Therefore, treating sleep as a priority is not a luxury but a necessity.', zh: '因此，把睡眠放在首位不是奢侈，而是必需。' }
      ],
      keywords: [
        { word: 'sacrifice', meaning: '牺牲' },
        { word: 'adequate', meaning: '充足的' },
        { word: 'consolidate', meaning: '巩固' }
      ],
      questions: [
        { q: 'What is the passage mainly about?', options: ['How to prepare for exams.', 'The importance of getting enough sleep.', 'Why students avoid socializing.', 'The structure of the brain.'], answer: 1, explain: '全文围绕睡眠对学习的重要性展开' },
        { q: 'What does the brain do during deep sleep?', options: ['It forgets old information.', 'It stops working.', 'It consolidates what was learned.', 'It prepares for exams.'], answer: 2, explain: '第三句：consolidates what has been learned' },
        { q: 'What is the author’s attitude toward sleep?', options: ['Sleep is a luxury.', 'Sleep should be a priority.', 'Sleep is unimportant.', 'Sleep can be postponed.'], answer: 1, explain: '末句强调 sleep is a necessity' }
      ]
    },
    {
      id: 'rise-of-remote-work',
      title: '远程办公的兴起',
      subtitle: 'The Rise of Remote Work',
      level: '六级 · 议论文',
      cover: '🏠',
      color: 'yellow',
      passage: [
        { en: 'Remote work has transformed the modern workplace over the past decade.', zh: '过去十年，远程办公改变了现代职场。' },
        { en: 'On the one hand, it offers flexibility and removes the burden of commuting.', zh: '一方面，它提供了灵活性，免去了通勤的负担。' },
        { en: 'On the other hand, it can blur the boundary between work and personal life.', zh: '另一方面，它可能模糊工作与个人生活的界限。' },
        { en: 'Companies that succeed in remote work usually establish clear communication rules.', zh: '成功实行远程办公的公司通常会建立清晰的沟通规则。' },
        { en: 'Ultimately, the key is balance rather than choosing one extreme.', zh: '归根结底，关键在于平衡，而不是选择某一个极端。' }
      ],
      keywords: [
        { word: 'transform', meaning: '改变；转变' },
        { word: 'blur', meaning: '使模糊' },
        { word: 'ultimately', meaning: '最终；归根结底' }
      ],
      questions: [
        { q: 'What is a disadvantage of remote work mentioned in the passage?', options: ['It increases commuting time.', 'It can blur work-life boundaries.', 'It reduces flexibility.', 'It requires fewer rules.'], answer: 1, explain: '第三句：blur the boundary' },
        { q: 'What do successful remote companies usually do?', options: ['Avoid communication.', 'Remove all rules.', 'Set clear communication rules.', 'Ask staff to work longer.'], answer: 2, explain: '第四句：establish clear communication rules' },
        { q: 'What does the author conclude?', options: ['Remote work is always better.', 'Office work is always better.', 'Balance is the key.', 'Companies should avoid change.'], answer: 2, explain: '末句：the key is balance' }
      ]
    },
    {
      id: 'value-of-failure',
      title: '失败的价值',
      subtitle: 'The Value of Failure',
      level: '六级 · 议论文',
      cover: '🧗',
      color: 'purple',
      passage: [
        { en: 'Failure is often seen as something to avoid at all costs.', zh: '失败常被视为必须不惜一切代价避免的事。' },
        { en: 'However, many successful people attribute their achievements to what they learned from setbacks.', zh: '然而，许多成功人士把成就归功于从挫折中学到的东西。' },
        { en: 'When we fail, we are forced to re-examine our assumptions and try new approaches.', zh: '失败时，我们被迫重新审视自己的假设并尝试新方法。' },
        { en: 'Moreover, experiencing failure in a safe environment builds resilience for greater challenges.', zh: '此外，在安全的环境中经历失败，能为应对更大的挑战培养韧性。' },
        { en: 'Therefore, instead of fearing failure, we should learn to treat it as valuable feedback.', zh: '因此，与其害怕失败，不如学会把它当作有价值的反馈。' }
      ],
      keywords: [
        { word: 'setback', meaning: '挫折' },
        { word: 'assumption', meaning: '假设；设想' },
        { word: 'feedback', meaning: '反馈' }
      ],
      questions: [
        { q: 'What does the author mainly argue?', options: ['Failure should be avoided.', 'Failure can be a valuable learning experience.', 'Success is mostly luck.', 'Challenges are always harmful.'], answer: 1, explain: '全文强调失败的价值' },
        { q: 'According to the passage, what happens when we fail?', options: ['We lose all confidence.', 'We stop trying.', 'We re-examine our assumptions.', 'We blame others.'], answer: 2, explain: '第三句：re-examine our assumptions' },
        { q: 'The word “resilience” in the passage is closest in meaning to ___.', options: ['weakness', 'ability to recover', 'curiosity', 'independence'], answer: 1, explain: '指从挫折中恢复的能力' }
      ]
    }
  ],
  topics: [
    {
      id: 'academic-writing',
      title: '学术写作',
      subtitle: '写论文常用的核心词',
      emoji: '🎓',
      color: 'purple',
      words: [
        { word: 'abstract', meaning: '摘要', emoji: '📄' },
        { word: 'thesis', meaning: '论文；论点', emoji: '📘' },
        { word: 'citation', meaning: '引用', emoji: '🔖' },
        { word: 'methodology', meaning: '研究方法', emoji: '🧭' },
        { word: 'literature', meaning: '文献；文学', emoji: '📚' },
        { word: 'analysis', meaning: '分析', emoji: '📈' },
        { word: 'conclusion', meaning: '结论', emoji: '🏁' },
        { word: 'reference', meaning: '参考文献；参考', emoji: '🔗' },
        { word: 'argument', meaning: '论证；争论', emoji: '⚖️' },
        { word: 'plagiarism', meaning: '剽窃', emoji: '🚫' }
      ],
      sentence: 'The abstract summarizes the main findings.',
      translation: '摘要概括了主要发现。',
      quizWord: 'abstract'
    },
    {
      id: 'career',
      title: '职场与求职',
      subtitle: '面试和工作中的常用词',
      emoji: '💼',
      color: 'blue',
      words: [
        { word: 'resume', meaning: '简历', emoji: '📑' },
        { word: 'interview', meaning: '面试', emoji: '🎤' },
        { word: 'internship', meaning: '实习', emoji: '🧑‍💻' },
        { word: 'colleague', meaning: '同事', emoji: '🧑‍🤝‍🧑' },
        { word: 'deadline', meaning: '截止日期', emoji: '⏰' },
        { word: 'promotion', meaning: '晋升', emoji: '📈' },
        { word: 'salary', meaning: '薪水', emoji: '💵' },
        { word: 'teamwork', meaning: '团队合作', emoji: '🤝' },
        { word: 'candidate', meaning: '候选人', emoji: '🙋' },
        { word: 'negotiate', meaning: '谈判；协商', emoji: '🗣️' }
      ],
      sentence: 'I have an interview next Monday.',
      translation: '我下周一有一场面试。',
      quizWord: 'internship'
    },
    {
      id: 'linking-words',
      title: '逻辑连接词',
      subtitle: '让文章条理清晰的关键',
      emoji: '🔗',
      color: 'yellow',
      words: [
        { word: 'however', meaning: '然而', emoji: '↔️' },
        { word: 'therefore', meaning: '因此', emoji: '➡️' },
        { word: 'moreover', meaning: '而且；此外', emoji: '➕' },
        { word: 'nevertheless', meaning: '尽管如此', emoji: '🛡️' },
        { word: 'furthermore', meaning: '再者；此外', emoji: '⏩' },
        { word: 'consequently', meaning: '因此；结果', emoji: '🔚' },
        { word: 'although', meaning: '虽然', emoji: '🤔' },
        { word: 'whereas', meaning: '然而（对比）', emoji: '⚖️' },
        { word: 'meanwhile', meaning: '与此同时', emoji: '⏳' },
        { word: 'instead', meaning: '反而；代替', emoji: '🔄' }
      ],
      sentence: 'However, the results were not satisfactory.',
      translation: '然而，结果并不令人满意。',
      quizWord: 'therefore'
    }
  ],
  grammar: [
    {
      id: 'passive-voice',
      title: '被动语态',
      subtitle: 'be + 过去分词',
      emoji: '🔁',
      color: 'blue',
      summary: '当动作的承受者比执行者更重要，或执行者不明确时，用被动语态。',
      points: [
        {
          rule: '基本结构：be + 过去分词，be 随时态变化',
          examples: [
            { en: 'English is spoken in many countries.', zh: '许多国家都说英语。' },
            { en: 'The report was submitted yesterday.', zh: '报告昨天提交了。' }
          ]
        },
        {
          rule: '完成时和将来时的被动：have been done / will be done',
          examples: [
            { en: 'The problem has been solved.', zh: '问题已经解决了。' },
            { en: 'The new library will be built next year.', zh: '新图书馆明年将建成。' }
          ]
        },
        {
          rule: '学术写作常用 It is said / believed / reported that…',
          examples: [
            { en: 'It is believed that sleep affects memory.', zh: '人们认为睡眠会影响记忆。' }
          ]
        }
      ],
      exercises: [
        { q: 'The new library ___ next year.', options: ['will build', 'will be built', 'is building', 'built'], answer: 1, explain: '图书馆是被建造的，将来时被动' },
        { q: 'The results ___ in the journal last month.', options: ['published', 'were published', 'have published', 'are publishing'], answer: 1, explain: 'last month 表示过去，且结果被发表' },
        { q: 'Many accidents ___ by careless driving.', options: ['cause', 'are caused', 'are causing', 'caused'], answer: 1, explain: '事故是被“引起”的，一般现在时被动' }
      ]
    },
    {
      id: 'subjunctive-mood',
      title: '虚拟语气',
      subtitle: '假设与愿望',
      emoji: '💭',
      color: 'purple',
      summary: '谈论与事实相反的假设或愿望时，动词时态要“退一步”。',
      points: [
        {
          rule: '与现在事实相反：If + 过去式（be 用 were），主句 would + 动词原形',
          examples: [
            { en: 'If I were you, I would accept the offer.', zh: '如果我是你，我会接受这份工作。' }
          ]
        },
        {
          rule: '与过去事实相反：If + had done，主句 would have done',
          examples: [
            { en: 'If she had studied harder, she would have passed.', zh: '如果她当时更努力，就通过了。' }
          ]
        },
        {
          rule: 'wish 后的宾语从句也用虚拟语气',
          examples: [
            { en: 'I wish I had more time.', zh: '我真希望我有更多时间。' }
          ]
        }
      ],
      exercises: [
        { q: 'If I ___ you, I would apologize.', options: ['am', 'was', 'were', 'be'], answer: 2, explain: '与现在事实相反，be 动词统一用 were' },
        { q: 'If he had left earlier, he ___ the train.', options: ['would catch', 'would have caught', 'will catch', 'caught'], answer: 1, explain: '与过去事实相反，主句用 would have done' },
        { q: 'I wish I ___ how to swim.', options: ['know', 'knew', 'will know', 'have known'], answer: 1, explain: 'wish 表示与现在事实相反的愿望，用过去式' }
      ]
    },
    {
      id: 'inversion-emphasis',
      title: '倒装与强调',
      subtitle: '让句子更有力量',
      emoji: '🔀',
      color: 'yellow',
      summary: '否定词或 only 放句首时要部分倒装；强调句用 It is … that … 突出某一成分。',
      points: [
        {
          rule: '否定副词（never、rarely、hardly 等）置于句首，主句部分倒装',
          examples: [
            { en: 'Never have I seen such a beautiful view.', zh: '我从未见过如此美丽的景色。' },
            { en: 'Rarely does he complain.', zh: '他很少抱怨。' }
          ]
        },
        {
          rule: 'Only + 状语置于句首，主句部分倒装',
          examples: [
            { en: 'Only after the exam did I realize my mistake.', zh: '直到考试之后我才意识到自己的错误。' },
            { en: 'Only then can we solve the problem.', zh: '只有这样我们才能解决问题。' }
          ]
        },
        {
          rule: '强调句：It is / was + 被强调部分 + that / who + 其余部分',
          examples: [
            { en: 'It was Tom that broke the window.', zh: '打破窗户的是汤姆。' },
            { en: 'It was in 2019 that the company was founded.', zh: '公司正是在 2019 年成立的。' }
          ]
        }
      ],
      exercises: [
        { q: 'Never ___ such a beautiful view.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], answer: 1, explain: 'Never 置于句首，要部分倒装：have I seen' },
        { q: 'Only after the exam ___ my mistake.', options: ['I realized', 'did I realize', 'I did realize', 'realized I'], answer: 1, explain: 'Only + 状语置于句首，主句部分倒装' },
        { q: 'It was in 2019 ___ the company was founded.', options: ['which', 'when', 'that', 'where'], answer: 2, explain: '强调句型 It was … that …' }
      ]
    }
  ]
};

JIMI.registerLevel({
  id: 'university',
  name: '大学',
  stage: '四六级 · 学术 · 职场',
  ageRange: '18 岁以上',
  emoji: '🎓',
  avatar: '🧑‍💼',
  mascot: '🦉',
  coach: '猫头鹰导师',
  sentenceLead: '跟猫头鹰导师学一句',
  tagline: '四六级、学术阅读写作和职场表达，学以致用',
  speech: { rate: 0.95, pitch: 1 },
  home: {
    eyebrow: '把英语变成你的竞争力',
    greeting: '你好，学习者！',
    copy: '从四六级词汇到学术表达，一步步提升真实可用的英语能力。',
    dateIcon: '🗓️',
    dateTitle: '今天的学习计划',
    dateSub: '词汇 · 阅读 · 表达',
    heroLead: '高效学习，',
    footnote: '每天 20–30 分钟，持续积累',
    bubble: 'Keep going!',
    route: '覆盖四六级词汇与阅读、学术写作及职场英语，课程按路线图逐步开放。'
  },
  rootsMaxTier: 3,
  modules: ['words', 'roots', 'sentences', 'listening', 'speaking', 'review', 'grammar', 'reading', 'writing', 'topics', 'exam'],
  labels: {
    words: { title: '词汇进阶', kicker: 'ADVANCED VOCAB', emoji: '📖', intro: '四六级与学术高频词，配例句和音标，读得懂也用得上。', tip: '记忆小窍门：把新词放进自己的专业场景里造句，记得更牢。' },
    sentences: { title: '句式精练', kicker: 'SENTENCE LAB', emoji: '🧩', intro: '学术与职场常用句式，带干扰项，练出精准表达。' },
    reading: { title: '阅读精读', kicker: 'CLOSE READING', emoji: '📰', intro: '精读短文，抓主旨、辨态度，再回到原文找证据。' },
    topics: { title: '场景词汇', nav: '场景', kicker: 'SCENARIO VOCAB', intro: '按学术、职场等真实场景成组积累词汇。' },
    exam: { title: '四六级模拟', nav: '四六级', kicker: 'CET MOCK', intro: '按四六级题型限时作答，交卷后看解析，答错的题进入错题本。' }
  },
  planned: [],
  roadmap: {
    roots: ['补充更多拉丁、希腊词根与学术、医学常见词缀', '增加按词根拆生词的阅读练习和同根词家族'],
    words: ['补充四级 4500 / 六级 6000 分级词表', '增加学术词表（AWL）与专业词汇'],
    sentences: ['补充四六级翻译常用句式', '增加学术写作句型库'],
    listening: ['增加讲座、新闻听力和长对话听力题'],
    speaking: ['补充课堂展示、答辩和电话面试场景', '增加英文演讲结构与过渡句训练'],
    grammar: ['补充定语从句、名词性从句、倒装与强调、省略与替代'],
    reading: ['补充仔细阅读、长篇阅读匹配与专业文献节选'],
    writing: ['补充学术摘要、简历求职信和图表作文', '增加四六级作文模板与高分句型'],
    topics: ['补充科技、经济、校园生活、出国留学等场景词汇'],
    exam: ['补充长篇阅读匹配、仔细阅读和翻译题型', '增加听力模拟题', '增加六级难度套题和考研英语词汇练习']
  },
  content: universityContent
});
