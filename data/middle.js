// 初中学段：先放入每个模块的入门样例，后续按教材单元（人教版 / 外研版）逐步补充。
const middleContent = {
  speaking: [
    {
      id: 'order-food',
      title: '餐厅点餐',
      subtitle: '点一碗面和一杯果汁',
      emoji: '🍜',
      color: 'yellow',
      roles: ['服务员', '顾客'],
      lines: [
        { who: 0, en: 'Good evening. What would you like to eat?', zh: '晚上好。您想吃点什么？' },
        { who: 1, en: 'I’d like a bowl of noodles, please.', zh: '请给我来一碗面条。' },
        { who: 0, en: 'Would you like anything to drink?', zh: '您想喝点什么吗？' },
        { who: 1, en: 'Yes, a glass of orange juice, please.', zh: '好的，请来一杯橙汁。' },
        { who: 0, en: 'Sure. It will be ready in ten minutes.', zh: '好的。十分钟后就好。' },
        { who: 1, en: 'Thank you very much.', zh: '非常感谢。' }
      ]
    },
    {
      id: 'ask-the-way',
      title: '问路',
      subtitle: '去博物馆怎么走',
      emoji: '🧭',
      color: 'blue',
      roles: ['游客', '路人'],
      lines: [
        { who: 0, en: 'Excuse me, how can I get to the museum?', zh: '打扰一下，去博物馆怎么走？' },
        { who: 1, en: 'Go straight and turn left at the second crossing.', zh: '一直往前走，在第二个路口左转。' },
        { who: 0, en: 'Is it far from here?', zh: '离这儿远吗？' },
        { who: 1, en: 'No, it takes about five minutes on foot.', zh: '不远，步行大约五分钟。' },
        { who: 0, en: 'Thank you for your help.', zh: '谢谢你的帮助。' },
        { who: 1, en: 'You’re welcome.', zh: '不客气。' }
      ]
    }
  ],
  exam: [
    {
      id: 'zhongkao-basic',
      title: '单项选择 · 基础',
      subtitle: '时态、介词、比较级等常考点',
      emoji: '✅',
      color: 'blue',
      type: '中考模拟 · 单项选择',
      minutes: 8,
      questions: [
        { q: 'My sister ___ to school by bike every day.', options: ['go', 'goes', 'going', 'went'], answer: 1, explain: 'every day 表示习惯，主语是第三人称单数，动词加 -es' },
        { q: 'There ___ some milk in the fridge.', options: ['are', 'is', 'be', 'were'], answer: 1, explain: 'milk 是不可数名词，用 is' },
        { q: '— How ___ is the bridge? — It’s about 500 meters long.', options: ['far', 'long', 'old', 'high'], answer: 1, explain: '回答的是长度，所以问 how long' },
        { q: 'He was tired, ___ he went on working.', options: ['so', 'but', 'because', 'or'], answer: 1, explain: '前后意思转折，用 but' },
        { q: 'I’m interested ___ English and I want to learn more.', options: ['on', 'at', 'in', 'with'], answer: 2, explain: 'be interested in 是固定搭配' },
        { q: 'Look! The children ___ in the garden.', options: ['play', 'are playing', 'played', 'plays'], answer: 1, explain: 'Look! 提示动作正在进行，用现在进行时' },
        { q: 'This is the ___ book I have ever read.', options: ['interesting', 'more interesting', 'most interesting', 'much interesting'], answer: 2, explain: 'the + 最高级 + … I have ever read' },
        { q: 'If you ___ hard, you will pass the exam.', options: ['study', 'studied', 'will study', 'studying'], answer: 0, explain: '真实条件句：if 从句用一般现在时表示将来' }
      ]
    },
    {
      id: 'zhongkao-cloze',
      title: '完形填空 · 周末野餐',
      subtitle: '根据上下文选出最合适的词',
      emoji: '🧺',
      color: 'yellow',
      type: '中考模拟 · 完形填空',
      minutes: 8,
      passage: [
        'Last Saturday, I went to the park with my classmates. The weather was (1) , so we decided to have a picnic.',
        'We (2) sandwiches, fruit and drinks. After lunch, we played games and (3) many photos. Everyone was very (4) .',
        'I hope we can go out together (5) soon.'
      ],
      questions: [
        { q: '空格 (1)', options: ['terrible', 'sunny', 'cold', 'dark'], answer: 1, explain: '天气好，所以决定野餐' },
        { q: '空格 (2)', options: ['brought', 'forgot', 'sold', 'washed'], answer: 0, explain: '带了三明治、水果和饮料' },
        { q: '空格 (3)', options: ['talked', 'told', 'took', 'cut'], answer: 2, explain: 'take photos 是固定搭配' },
        { q: '空格 (4)', options: ['angry', 'sleepy', 'happy', 'sad'], answer: 2, explain: '玩得开心，大家都很高兴' },
        { q: '空格 (5)', options: ['never', 'again', 'ago', 'yet'], answer: 1, explain: 'go out together again soon：希望很快再一起出去' }
      ]
    }
  ],
  writing: [
    {
      id: 'last-weekend',
      title: '我的周末',
      subtitle: '写一写上周末做了什么',
      emoji: '🗓️',
      color: 'yellow',
      type: '记叙文 · 一般过去时',
      prompt: 'Write a short passage about what you did last weekend. Say where you went, who you were with, and how you felt.',
      promptZh: '写一篇短文，介绍你上周末做了什么：去了哪里、和谁一起、心情怎么样。',
      minWords: 50,
      phrases: [
        { en: 'Last weekend', zh: '上周末' },
        { en: 'in the morning', zh: '在上午' },
        { en: 'in the afternoon', zh: '在下午' },
        { en: 'with my family', zh: '和我的家人' },
        { en: 'After that', zh: '在那之后' },
        { en: 'I felt', zh: '我感到……' }
      ],
      tips: ['时间词（last weekend、yesterday）提示要用过去式。', '按时间顺序写：先……然后……最后……', '结尾写一句感受，如 I felt very happy.'],
      sample: 'Last weekend I had a great time. In the morning, I went to the park with my family. We flew a kite and took many photos. In the afternoon, I did my homework and read a book about animals. After that, we cooked dinner together. I felt very happy because I could relax and spend time with the people I love.'
    },
    {
      id: 'letter-to-pen-friend',
      title: '给笔友的一封信',
      subtitle: '介绍自己和兴趣爱好',
      emoji: '✉️',
      color: 'blue',
      type: '书信 · 自我介绍',
      prompt: 'Write a letter to a new pen friend. Introduce yourself, talk about your hobbies and ask him or her to write back.',
      promptZh: '给一位新笔友写信：介绍自己、谈谈兴趣爱好，并请对方回信。',
      minWords: 50,
      phrases: [
        { en: 'I am writing to', zh: '我写信是为了……' },
        { en: 'My name is', zh: '我的名字是……' },
        { en: 'In my free time', zh: '在我的空闲时间' },
        { en: 'I like', zh: '我喜欢' },
        { en: 'Please write back', zh: '请回信' },
        { en: 'Best wishes', zh: '祝好（结尾）' }
      ],
      tips: ['书信格式：称呼 → 正文 → 结尾敬语 → 署名。', '一般现在时介绍习惯和爱好。', '用 and、but、because 把句子连起来。'],
      sample: 'Dear Tom, I am writing to introduce myself. My name is Li Ming and I am thirteen years old. I live in Shanghai with my parents. In my free time, I like playing basketball and reading comics because they are fun. What about you? Please write back soon and tell me about your hobbies. Best wishes, Li Ming'
    }
  ],
  words: [
    { word: 'important', ipa: '/ɪmˈpɔːr.tənt/', pos: 'adj.', meaning: '重要的', emoji: '📌', color: 'yellow', example: 'Sleep is important for students.', exampleZh: '睡眠对学生很重要。' },
    { word: 'library', ipa: '/ˈlaɪ.brer.i/', pos: 'n.', meaning: '图书馆', emoji: '📚', color: 'blue', example: 'I read books in the library.', exampleZh: '我在图书馆看书。' },
    { word: 'difficult', ipa: '/ˈdɪf.ɪ.kəlt/', pos: 'adj.', meaning: '困难的', emoji: '🧗', color: 'orange', example: 'This question is difficult.', exampleZh: '这道题很难。' },
    { word: 'exercise', ipa: '/ˈek.sɚ.saɪz/', pos: 'n. / v.', meaning: '锻炼；练习', emoji: '🏃', color: 'pink', example: 'I exercise every morning.', exampleZh: '我每天早晨锻炼。' },
    { word: 'healthy', ipa: '/ˈhel.θi/', pos: 'adj.', meaning: '健康的', emoji: '🥗', color: 'yellow', example: 'Fruit is healthy.', exampleZh: '水果有益健康。' },
    { word: 'dangerous', ipa: '/ˈdeɪn.dʒɚ.əs/', pos: 'adj.', meaning: '危险的', emoji: '⚠️', color: 'orange', example: 'The road is dangerous at night.', exampleZh: '这条路晚上很危险。' },
    { word: 'weather', ipa: '/ˈweð.ɚ/', pos: 'n.', meaning: '天气', emoji: '⛅', color: 'blue', example: 'The weather is nice today.', exampleZh: '今天天气很好。' },
    { word: 'volunteer', ipa: '/ˌvɑː.lənˈtɪr/', pos: 'n. / v.', meaning: '志愿者；自愿做', emoji: '🙋', color: 'purple', example: 'She is a volunteer at the hospital.', exampleZh: '她是医院的志愿者。' },
    { word: 'environment', ipa: '/ɪnˈvaɪ.rən.mənt/', pos: 'n.', meaning: '环境', emoji: '🌍', color: 'blue', example: 'We should protect the environment.', exampleZh: '我们应该保护环境。' },
    { word: 'practice', ipa: '/ˈpræk.tɪs/', pos: 'v. / n.', meaning: '练习；实践', emoji: '🎹', color: 'pink', example: 'I practice English every day.', exampleZh: '我每天练习英语。' },
    { word: 'decide', ipa: '/dɪˈsaɪd/', pos: 'v.', meaning: '决定', emoji: '🤔', color: 'purple', example: 'I decided to join the club.', exampleZh: '我决定加入这个社团。' },
    { word: 'communicate', ipa: '/kəˈmjuː.nə.keɪt/', pos: 'v.', meaning: '交流；沟通', emoji: '💬', color: 'yellow', example: 'We communicate by phone.', exampleZh: '我们通过电话沟通。' },
    { word: 'celebrate', ipa: '/ˈsel.ə.breɪt/', pos: 'v.', meaning: '庆祝', emoji: '🎉', color: 'pink', example: 'We celebrate the Spring Festival with our family.', exampleZh: '我们和家人一起庆祝春节。' },
    { word: 'invite', ipa: '/ɪnˈvaɪt/', pos: 'v.', meaning: '邀请', emoji: '💌', color: 'purple', example: 'She invited me to her birthday party.', exampleZh: '她邀请我参加她的生日聚会。' },
    { word: 'prepare', ipa: '/prɪˈper/', pos: 'v.', meaning: '准备', emoji: '🧳', color: 'orange', example: 'I am preparing for the English test.', exampleZh: '我正在准备英语考试。' },
    { word: 'popular', ipa: '/ˈpɑː.pjə.lɚ/', pos: 'adj.', meaning: '受欢迎的', emoji: '🌟', color: 'yellow', example: 'This song is popular among teenagers.', exampleZh: '这首歌在青少年中很受欢迎。' },
    { word: 'museum', ipa: '/mjuˈziː.əm/', pos: 'n.', meaning: '博物馆', emoji: '🏛️', color: 'blue', example: 'We visited the science museum on Saturday.', exampleZh: '我们周六参观了科技馆。' },
    { word: 'traffic', ipa: '/ˈtræf.ɪk/', pos: 'n.', meaning: '交通；车流', emoji: '🚦', color: 'orange', example: 'The traffic is heavy in the morning.', exampleZh: '早上车流量很大。' },
    { word: 'advice', ipa: '/ədˈvaɪs/', pos: 'n.', meaning: '建议', emoji: '🗣️', color: 'purple', example: 'Thank you for your advice.', exampleZh: '谢谢你的建议。' },
    { word: 'successful', ipa: '/səkˈses.fəl/', pos: 'adj.', meaning: '成功的', emoji: '🏅', color: 'yellow', example: 'He became a successful engineer.', exampleZh: '他成为了一名成功的工程师。' }
  ],
  sentences: [
    {
      id: 'protect-environment',
      sentence: 'We should protect the environment.',
      translation: '我们应该保护环境。',
      hint: 'should + 动词原形，表示“应该”',
      emoji: '🌍',
      extraWords: ['protects']
    },
    {
      id: 'favorite-subject',
      sentence: 'My favorite subject is English.',
      translation: '我最喜欢的科目是英语。',
      hint: 'favorite 作形容词，表示“最喜欢的”',
      emoji: '📘'
    },
    {
      id: 'after-school',
      sentence: 'What do you usually do after school?',
      translation: '放学后你通常做什么？',
      hint: '特殊疑问句：疑问词 + do + 主语 + 动词原形',
      emoji: '🏫'
    },
    {
      id: 'last-sunday',
      sentence: 'I went to the park last Sunday.',
      translation: '上周日我去了公园。',
      hint: 'last Sunday 是过去的时间，动词用过去式 went',
      emoji: '🌳',
      extraWords: ['go']
    },
    {
      id: 'how-long-studied',
      sentence: 'How long have you studied English?',
      translation: '你学英语多久了？',
      hint: '现在完成时的疑问句：How long + have / has + 主语 + 过去分词',
      emoji: '⏳',
      extraWords: ['did']
    },
    {
      id: 'if-it-rains',
      sentence: 'If it rains tomorrow, we will stay at home.',
      translation: '如果明天下雨，我们就待在家里。',
      hint: '真实条件句：if 从句用一般现在时，主句用将来时',
      emoji: '🌧️',
      extraWords: ['would']
    }
  ],
  reading: [
    {
      id: 'a-day-at-school',
      title: '校园的一天',
      subtitle: 'A Day at School',
      level: '初一 · 5 句',
      cover: '🏫',
      color: 'blue',
      passage: [
        { en: 'Tom gets up at six thirty every morning.', zh: '汤姆每天早上六点半起床。' },
        { en: 'He walks to school with his friend Lucy.', zh: '他和朋友露西一起步行去学校。' },
        { en: 'They have four classes in the morning.', zh: '他们上午有四节课。' },
        { en: 'After lunch, Tom plays basketball with his classmates.', zh: '午饭后，汤姆和同学们一起打篮球。' },
        { en: 'He goes home at five o’clock and does his homework.', zh: '他五点钟回家，然后做作业。' }
      ],
      keywords: [
        { word: 'classmate', meaning: '同学' },
        { word: 'homework', meaning: '作业' },
        { word: 'after lunch', meaning: '午饭后' }
      ],
      questions: [
        { q: 'When does Tom get up?', options: ['At six.', 'At six thirty.', 'At seven.', 'At seven thirty.'], answer: 1, explain: '第一句：six thirty' },
        { q: 'How does Tom go to school?', options: ['By bus.', 'By bike.', 'On foot.', 'By car.'], answer: 2, explain: 'walks to school 就是步行' },
        { q: 'What does Tom do after lunch?', options: ['He does his homework.', 'He plays basketball.', 'He reads a book.', 'He goes home.'], answer: 1, explain: '第四句：plays basketball' }
      ]
    },
    {
      id: 'save-water',
      title: '节约用水',
      subtitle: 'Save Water',
      level: '初二 · 5 句',
      cover: '💧',
      color: 'yellow',
      passage: [
        { en: 'Water is very important to us.', zh: '水对我们非常重要。' },
        { en: 'But many people waste it every day.', zh: '但是很多人每天都在浪费水。' },
        { en: 'We can turn off the tap when we brush our teeth.', zh: '刷牙的时候我们可以关掉水龙头。' },
        { en: 'We can also use the water from washing rice to water flowers.', zh: '我们还可以用淘米水浇花。' },
        { en: 'Small actions can save a lot of water.', zh: '小小的行动可以节约很多水。' }
      ],
      keywords: [
        { word: 'waste', meaning: '浪费' },
        { word: 'tap', meaning: '水龙头' },
        { word: 'save', meaning: '节约；拯救' }
      ],
      questions: [
        { q: 'What is the passage mainly about?', options: ['How to cook rice.', 'How to save water.', 'How to grow flowers.', 'How to brush teeth.'], answer: 1, explain: '全文围绕节约用水的做法' },
        { q: 'When can we turn off the tap?', options: ['When we wash clothes.', 'When we play outside.', 'When we brush our teeth.', 'When we cook dinner.'], answer: 2, explain: '第三句：when we brush our teeth' }
      ]
    },
    {
      id: 'my-pet-dog',
      title: '我的宠物狗',
      subtitle: 'My Pet Dog',
      level: '初一 · 4 句',
      cover: '🐶',
      color: 'pink',
      passage: [
        { en: 'I have a pet dog named Lucky.', zh: '我有一只叫“幸运”的宠物狗。' },
        { en: 'He is two years old and he has brown fur.', zh: '他两岁了，有一身棕色的毛。' },
        { en: 'Every evening, I take him for a walk in the park.', zh: '每天傍晚，我带他去公园散步。' },
        { en: 'He likes chasing balls, and he is always very happy to see me.', zh: '他喜欢追球，看到我总是很开心。' }
      ],
      keywords: [
        { word: 'pet', meaning: '宠物' },
        { word: 'fur', meaning: '（动物的）毛' },
        { word: 'chase', meaning: '追逐' }
      ],
      questions: [
        { q: 'How old is Lucky?', options: ['One year old.', 'Two years old.', 'Three years old.', 'Four years old.'], answer: 1, explain: '第二句：two years old' },
        { q: 'When does the writer walk the dog?', options: ['In the morning.', 'At noon.', 'In the evening.', 'After midnight.'], answer: 2, explain: '第三句：Every evening' },
        { q: 'What does Lucky like doing?', options: ['Sleeping all day.', 'Chasing balls.', 'Swimming.', 'Eating bones.'], answer: 1, explain: '第四句：likes chasing balls' }
      ]
    }
  ],
  topics: [
    {
      id: 'school-life',
      title: '校园生活',
      subtitle: '教室里的常用词',
      emoji: '🏫',
      color: 'blue',
      words: [
        { word: 'subject', meaning: '科目', emoji: '📐' },
        { word: 'teacher', meaning: '老师', emoji: '👩‍🏫' },
        { word: 'classmate', meaning: '同学', emoji: '🧑‍🤝‍🧑' },
        { word: 'homework', meaning: '作业', emoji: '📝' },
        { word: 'exam', meaning: '考试', emoji: '📄' },
        { word: 'lesson', meaning: '课；课程', emoji: '📖' },
        { word: 'schedule', meaning: '日程表；课程表', emoji: '🗓️' },
        { word: 'club', meaning: '社团；俱乐部', emoji: '🎭' },
        { word: 'playground', meaning: '操场', emoji: '🏟️' },
        { word: 'notebook', meaning: '笔记本', emoji: '📓' }
      ],
      sentence: 'I do my homework after school.',
      translation: '我放学后做作业。',
      quizWord: 'homework'
    },
    {
      id: 'hobbies',
      title: '兴趣爱好',
      subtitle: '聊聊你喜欢做什么',
      emoji: '🎨',
      color: 'pink',
      words: [
        { word: 'hobby', meaning: '爱好', emoji: '🎯' },
        { word: 'music', meaning: '音乐', emoji: '🎵' },
        { word: 'painting', meaning: '绘画', emoji: '🖼️' },
        { word: 'photography', meaning: '摄影', emoji: '📷' },
        { word: 'basketball', meaning: '篮球', emoji: '🏀' },
        { word: 'swimming', meaning: '游泳', emoji: '🏊' },
        { word: 'collect', meaning: '收集', emoji: '🗃️' },
        { word: 'guitar', meaning: '吉他', emoji: '🎸' },
        { word: 'dance', meaning: '跳舞', emoji: '💃' },
        { word: 'chess', meaning: '国际象棋', emoji: '♟️' }
      ],
      sentence: 'My hobby is playing the guitar.',
      translation: '我的爱好是弹吉他。',
      quizWord: 'hobby'
    },
    {
      id: 'travel',
      title: '旅行出游',
      subtitle: '出门在外的必备词',
      emoji: '✈️',
      color: 'purple',
      words: [
        { word: 'ticket', meaning: '票', emoji: '🎫' },
        { word: 'airport', meaning: '机场', emoji: '🛫' },
        { word: 'passport', meaning: '护照', emoji: '🛂' },
        { word: 'hotel', meaning: '酒店', emoji: '🏨' },
        { word: 'map', meaning: '地图', emoji: '🗺️' },
        { word: 'luggage', meaning: '行李', emoji: '🧳' },
        { word: 'tourist', meaning: '游客', emoji: '🧑‍🦯' },
        { word: 'destination', meaning: '目的地', emoji: '📍' },
        { word: 'journey', meaning: '旅程', emoji: '🛤️' },
        { word: 'adventure', meaning: '冒险', emoji: '🧭' }
      ],
      sentence: 'We are planning a trip to Beijing.',
      translation: '我们正计划去北京旅行。',
      quizWord: 'passport'
    }
  ],
  grammar: [
    {
      id: 'present-simple',
      title: '一般现在时',
      subtitle: '经常做的事和客观事实',
      emoji: '⏰',
      color: 'yellow',
      summary: '用来说习惯、日常和客观事实，注意第三人称单数的变化。',
      points: [
        {
          rule: '表示经常发生的动作或习惯',
          note: '常和 every day、usually、often、on Sundays 连用。',
          examples: [
            { en: 'I get up at six every day.', zh: '我每天六点起床。' },
            { en: 'She plays tennis on Sundays.', zh: '她星期天打网球。' }
          ]
        },
        {
          rule: '主语是第三人称单数时，动词加 -s / -es',
          examples: [
            { en: 'He likes music.', zh: '他喜欢音乐。' },
            { en: 'My mother watches TV after dinner.', zh: '我妈妈晚饭后看电视。' }
          ]
        },
        {
          rule: '否定和疑问借助 do / does',
          note: '用了 does 之后，动词要变回原形。',
          examples: [
            { en: 'He doesn’t like milk.', zh: '他不喜欢牛奶。' },
            { en: 'Does she live near here?', zh: '她住在这附近吗？' }
          ]
        }
      ],
      exercises: [
        { q: 'My brother ___ football every weekend.', options: ['play', 'plays', 'playing', 'played'], answer: 1, explain: '第三人称单数，动词加 -s' },
        { q: '___ you often go to the library?', options: ['Do', 'Does', 'Are', 'Is'], answer: 0, explain: '主语是 you，用 do 提问' },
        { q: 'She ___ not like noodles.', options: ['do', 'does', 'is', 'are'], answer: 1, explain: '主语是 she，否定用 does not' }
      ]
    },
    {
      id: 'past-simple',
      title: '一般过去时',
      subtitle: '说说昨天发生的事',
      emoji: '⏮️',
      color: 'blue',
      summary: '用来描述过去发生的动作，常和 yesterday、last week 连用。',
      points: [
        {
          rule: '表示过去发生的动作或状态',
          examples: [
            { en: 'I visited my grandparents last weekend.', zh: '上周末我去看望了祖父母。' },
            { en: 'We had a great time yesterday.', zh: '昨天我们玩得很开心。' }
          ]
        },
        {
          rule: '规则动词加 -ed，不规则动词要单独记',
          examples: [
            { en: 'He watched a movie. (watch → watched)', zh: '他看了一部电影。' },
            { en: 'I went home late. (go → went)', zh: '我很晚才回家。' }
          ]
        },
        {
          rule: '否定和疑问借助 did，动词变回原形',
          examples: [
            { en: 'I didn’t finish my homework.', zh: '我没有完成作业。' },
            { en: 'Did you watch the match?', zh: '你看那场比赛了吗？' }
          ]
        }
      ],
      exercises: [
        { q: 'We ___ to the zoo yesterday.', options: ['go', 'goes', 'went', 'going'], answer: 2, explain: 'yesterday 表示过去，go 的过去式是 went' },
        { q: 'She didn’t ___ the answer.', options: ['know', 'knew', 'knows', 'knowing'], answer: 0, explain: 'didn’t 后面用动词原形' },
        { q: '___ he call you last night?', options: ['Do', 'Does', 'Did', 'Is'], answer: 2, explain: 'last night 是过去时间，用 did 提问' }
      ]
    },
    {
      id: 'present-perfect',
      title: '现在完成时',
      subtitle: '过去的事，现在还有关系',
      emoji: '🔗',
      color: 'purple',
      summary: 'have / has + 过去分词：强调过去发生的动作对现在的影响，或从过去持续到现在。',
      points: [
        {
          rule: '表示已经完成的动作对现在有影响，或持续到现在的状态',
          examples: [
            { en: 'I have finished my homework.', zh: '我已经做完作业了。' },
            { en: 'She has lived here for five years.', zh: '她在这里住了五年了。' }
          ]
        },
        {
          rule: '常和 already、yet、ever、never、for、since 连用',
          note: 'for + 一段时间；since + 过去的时间点。',
          examples: [
            { en: 'Have you ever been to Beijing?', zh: '你去过北京吗？' },
            { en: 'He hasn’t eaten lunch yet.', zh: '他还没吃午饭。' }
          ]
        },
        {
          rule: 'have been to 表示“去过（已回来）”，have gone to 表示“去了（还没回来）”',
          examples: [
            { en: 'I have been to Shanghai twice.', zh: '我去过上海两次。' },
            { en: 'He has gone to Shanghai.', zh: '他去上海了（人还没回来）。' }
          ]
        }
      ],
      exercises: [
        { q: 'I ___ English for six years.', options: ['learn', 'have learned', 'learned', 'am learning'], answer: 1, explain: 'for six years 表示持续到现在，用现在完成时' },
        { q: 'She ___ her keys, so she can’t open the door.', options: ['lost', 'has lost', 'loses', 'is losing'], answer: 1, explain: '丢钥匙的结果影响现在' },
        { q: 'He has ___ to the zoo twice.', options: ['gone', 'been', 'go', 'going'], answer: 1, explain: '“去过（已回来）”用 been to' }
      ]
    }
  ]
};

JIMI.registerLevel({
  id: 'middle',
  name: '中学',
  stage: '初中 · 七至九年级',
  ageRange: '12–15 岁',
  emoji: '🚀',
  avatar: '🙋',
  mascot: '🐼',
  coach: '熊猫学长',
  sentenceLead: '跟熊猫学长学一句',
  tagline: '打牢词汇和语法，从“看得懂”走向“用得出”',
  speech: { rate: 0.85, pitch: 1 },
  home: {
    eyebrow: '一点一滴，积累属于你的英语底气',
    greeting: '嗨，同学！',
    copy: '把词汇、句型和语法串起来，英语会越学越轻松。',
    dateIcon: '📅',
    dateTitle: '今天的学习任务',
    dateSub: '词汇 · 句型 · 阅读',
    heroLead: '每天进步一点点，',
    footnote: '每天 15 分钟，坚持就有收获',
    bubble: 'Go!',
    route: '以初中课标词汇和常考语法为主线，后续对应七至九年级各单元。'
  },
  rootsMaxTier: 1,
  modules: ['words', 'roots', 'sentences', 'listening', 'speaking', 'review', 'grammar', 'reading', 'writing', 'topics', 'exam'],
  labels: {
    words: { title: '词汇宝库', kicker: 'VOCAB BANK', emoji: '📖', intro: '结合词性和例句，把常用词汇真正用起来。', tip: '记忆小窍门：把单词放进句子里记，比单独背更牢固！' },
    sentences: { title: '句型训练', kicker: 'SENTENCE LAB', emoji: '🧩', intro: '把打乱的单词排成正确的句子，熟悉常见句型。' },
    topics: { title: '主题词汇', nav: '主题', kicker: 'TOPIC VOCAB', intro: '按话题成组记词汇，写作和口语都用得上。' },
    exam: { title: '中考模拟', nav: '中考', kicker: 'ZHONGKAO MOCK', intro: '按中考题型限时作答，交卷后看解析，答错的题进入错题本。' }
  },
  planned: [],
  roadmap: {
    roots: ['补充更多常用词缀（如 en-、fore-、-hood、-ize 的变体）', '增加按词根拆词的拼写练习和同根词家族'],
    words: ['按七、八、九年级教材单元补充词汇', '增加词根词缀和易混词辨析'],
    sentences: ['补充教材核心句型与情景对话句', '增加句子翻译练习'],
    listening: ['增加听句子选答案和对话听力题'],
    speaking: ['补充教材对话跟读：购物、就医、打电话等场景', '增加话题口述（介绍自己、介绍家乡）'],
    grammar: ['补充现在进行时、现在完成时、被动语态、宾语从句'],
    reading: ['补充完形填空、任务型阅读和记叙文、说明文等体裁'],
    writing: ['补充每个年级的话题作文（节日、环保、校园）', '增加语法错误提示'],
    topics: ['补充饮食、节日、科技、环保等话题词汇'],
    exam: ['补充更多中考题型：语法填空、阅读理解、任务型阅读', '增加听力模拟题', '增加按年级和考点分类的套题']
  },
  content: middleContent
});
