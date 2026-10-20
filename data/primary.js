// 小学学段：目前录入一年级入门内容，二至六年级按路线图逐步补充。
// 新增内容只需往下面各数组追加条目，字段格式见 README 与 tests/data.test.js。
const primaryContent = {
  speaking: [
    {
      id: 'hello-friend',
      title: '打招呼',
      subtitle: '和新朋友说你好',
      emoji: '👋',
      color: 'yellow',
      roles: ['小猫咪', '小朋友'],
      lines: [
        { who: 0, en: 'Hello! I am Kitty.', zh: '你好！我是小猫咪。' },
        { who: 1, en: 'Hello, Kitty! I am Ben.', zh: '你好，小猫咪！我是本。' },
        { who: 0, en: 'Nice to meet you.', zh: '很高兴见到你。' },
        { who: 1, en: 'Nice to meet you, too.', zh: '我也很高兴见到你。' }
      ]
    },
    {
      id: 'favorite-fruit',
      title: '你喜欢什么',
      subtitle: '聊聊喜欢的水果',
      emoji: '🍎',
      color: 'pink',
      roles: ['小猫咪', '小朋友'],
      lines: [
        { who: 0, en: 'What do you like?', zh: '你喜欢什么？' },
        { who: 1, en: 'I like apples.', zh: '我喜欢苹果。' },
        { who: 0, en: 'Me too! They are red.', zh: '我也是！它们是红色的。' },
        { who: 1, en: 'Yes, they are sweet.', zh: '是的，它们很甜。' }
      ]
    }
  ],
  words: [
    { word: 'hello', ipa: '/həˈloʊ/', meaning: '你好', emoji: '👋', color: 'yellow', example: 'Hello, Ben!' },
    { word: 'apple', ipa: '/ˈæp.əl/', meaning: '苹果', emoji: '🍎', color: 'pink', example: 'I like apples.' },
    { word: 'cat', ipa: '/kæt/', meaning: '猫', emoji: '🐱', color: 'purple', example: 'I see a cat.' },
    { word: 'dog', ipa: '/dɔːɡ/', meaning: '狗', emoji: '🐶', color: 'blue', example: 'The dog is big.' },
    { word: 'book', ipa: '/bʊk/', meaning: '书', emoji: '📘', color: 'blue', example: 'This is my book.' },
    { word: 'bag', ipa: '/bæɡ/', meaning: '书包', emoji: '🎒', color: 'orange', example: 'My bag is red.' },
    { word: 'sun', ipa: '/sʌn/', meaning: '太阳', emoji: '☀️', color: 'yellow', example: 'The sun is bright.' },
    { word: 'red', ipa: '/red/', meaning: '红色', emoji: '❤️', color: 'pink', example: 'It is red.' },
    { word: 'blue', ipa: '/bluː/', meaning: '蓝色', emoji: '💙', color: 'blue', example: 'The sky is blue.' },
    { word: 'one', ipa: '/wʌn/', meaning: '一', emoji: '1️⃣', color: 'purple', example: 'One little bird.' },
    { word: 'two', ipa: '/tuː/', meaning: '二', emoji: '2️⃣', color: 'orange', example: 'I see two birds.' },
    { word: 'happy', ipa: '/ˈhæp.i/', meaning: '开心的', emoji: '😊', color: 'yellow', example: 'I am happy!' }
  ],
  sentences: [
    {
      id: 'see-cat',
      sentence: 'I see a cat.',
      translation: '我看见一只猫。',
      hint: '我看见 · 一只 · 猫',
      emoji: '🐱',
      words: ['I', 'see', 'a', 'cat.']
    },
    {
      id: 'my-book',
      sentence: 'This is my book.',
      translation: '这是我的书。',
      hint: '这 · 是 · 我的 · 书',
      emoji: '📘',
      words: ['This', 'is', 'my', 'book.']
    },
    {
      id: 'like-apples',
      sentence: 'I like apples.',
      translation: '我喜欢苹果。',
      hint: '我 · 喜欢 · 苹果',
      emoji: '🍎',
      words: ['I', 'like', 'apples.']
    },
    {
      id: 'sky-blue',
      sentence: 'The sky is blue.',
      translation: '天空是蓝色的。',
      hint: '天空 · 是 · 蓝色的',
      emoji: '🌤️',
      words: ['The', 'sky', 'is', 'blue.']
    }
  ],
  stories: [
    {
      id: 'apple-day',
      title: '小猫咪找苹果',
      subtitle: 'Kitty’s Apple Day',
      level: '入门 · 3 句',
      cover: '🍎',
      scenes: [
        { picture: '🐱', prop: '🌳', line: 'Hello, Kitty!', meaning: '你好，小猫咪！' },
        { picture: '🐱', prop: '🍎', line: 'I see an apple.', meaning: '我看见一个苹果。' },
        { picture: '🐱', prop: '💛', line: 'I like apples!', meaning: '我喜欢苹果！' }
      ]
    },
    {
      id: 'blue-bird',
      title: '小鸟的蓝气球',
      subtitle: 'The Blue Balloon',
      level: '入门 · 3 句',
      cover: '🎈',
      scenes: [
        { picture: '🐱', prop: '🎈', line: 'Look at my balloon.', meaning: '看我的气球。' },
        { picture: '🐱', prop: '💙', line: 'It is blue.', meaning: '它是蓝色的。' },
        { picture: '🐱', prop: '✨', line: 'I am happy!', meaning: '我很开心！' }
      ]
    },
    {
      id: 'hello-friends',
      title: '森林里的新朋友',
      subtitle: 'Hello, Friends!',
      level: '入门 · 3 句',
      cover: '🌈',
      scenes: [
        { picture: '🐱', prop: '🌲', line: 'Hello, little bird!', meaning: '你好呀，小鸟！' },
        { picture: '🐱', prop: '🐦', line: 'I am Kitty. What is your name?', meaning: '我叫小猫咪。你叫什么名字？' },
        { picture: '🐱', prop: '🤝', line: 'Let’s play together!', meaning: '我们一起玩吧！' }
      ]
    }
  ],
  topics: [
    {
      id: 'greetings',
      title: '你好与礼貌用语',
      subtitle: '学会打招呼和说谢谢',
      emoji: '👋',
      color: 'yellow',
      words: [
        { word: 'hello', meaning: '你好', emoji: '👋' },
        { word: 'goodbye', meaning: '再见', emoji: '👋' },
        { word: 'please', meaning: '请', emoji: '🙏' },
        { word: 'thanks', meaning: '谢谢', emoji: '💛' },
        { word: 'hi', meaning: '嗨', emoji: '😊' },
        { word: 'bye', meaning: '拜拜', emoji: '👋' },
        { word: 'sorry', meaning: '对不起', emoji: '🙇' },
        { word: 'yes', meaning: '是的', emoji: '✅' },
        { word: 'no', meaning: '不', emoji: '🙅' },
        { word: 'good morning', meaning: '早上好', emoji: '🌞' },
        { word: 'good afternoon', meaning: '下午好', emoji: '🌤️' },
        { word: 'good night', meaning: '晚安', emoji: '🌙' },
        { word: 'name', meaning: '名字', emoji: '🏷️' },
        { word: 'friend', meaning: '朋友', emoji: '🧑‍🤝‍🧑' },
        { word: 'welcome', meaning: '欢迎', emoji: '🎉' },
        { word: 'nice', meaning: '美好的', emoji: '🌷' },
        { word: 'meet', meaning: '见面', emoji: '🤝' },
        { word: 'how', meaning: '怎样', emoji: '❓' },
        { word: 'you', meaning: '你', emoji: '👉' },
        { word: 'fine', meaning: '很好', emoji: '🙂' }
      ],
      sentence: 'Hello, friend!',
      translation: '你好，朋友！',
      quizWord: 'hello'
    },
    {
      id: 'colors',
      title: '缤纷颜色',
      subtitle: '发现身边的颜色',
      emoji: '🎨',
      color: 'pink',
      words: [
        { word: 'red', meaning: '红色', emoji: '❤️' },
        { word: 'blue', meaning: '蓝色', emoji: '💙' },
        { word: 'yellow', meaning: '黄色', emoji: '💛' },
        { word: 'green', meaning: '绿色', emoji: '💚' },
        { word: 'black', meaning: '黑色', emoji: '🖤' },
        { word: 'white', meaning: '白色', emoji: '🤍' },
        { word: 'pink', meaning: '粉色', emoji: '🩷' },
        { word: 'orange', meaning: '橙色', emoji: '🧡' },
        { word: 'purple', meaning: '紫色', emoji: '💜' },
        { word: 'brown', meaning: '棕色', emoji: '🤎' },
        { word: 'gray', meaning: '灰色', emoji: '🩶' },
        { word: 'gold', meaning: '金色', emoji: '🥇' },
        { word: 'silver', meaning: '银色', emoji: '🥈' },
        { word: 'light', meaning: '浅色的', emoji: '🌤️' },
        { word: 'dark', meaning: '深色的', emoji: '🌑' },
        { word: 'rainbow', meaning: '彩虹', emoji: '🌈' },
        { word: 'color', meaning: '颜色', emoji: '🎨' },
        { word: 'colorful', meaning: '五彩的', emoji: '🪅' },
        { word: 'paint', meaning: '颜料', emoji: '🖌️' },
        { word: 'crayon', meaning: '蜡笔', emoji: '🖍️' }
      ],
      sentence: 'It is red.',
      translation: '它是红色的。',
      quizWord: 'red'
    },
    {
      id: 'family',
      title: '我的家人',
      subtitle: '认识亲爱的家人',
      emoji: '🏠',
      color: 'purple',
      words: [
        { word: 'mom', meaning: '妈妈', emoji: '👩' },
        { word: 'dad', meaning: '爸爸', emoji: '👨' },
        { word: 'sister', meaning: '姐妹', emoji: '👧' },
        { word: 'brother', meaning: '兄弟', emoji: '👦' },
        { word: 'baby', meaning: '宝宝', emoji: '👶' },
        { word: 'grandma', meaning: '奶奶；外婆', emoji: '👵' },
        { word: 'grandpa', meaning: '爷爷；外公', emoji: '👴' },
        { word: 'family', meaning: '家人', emoji: '🏠' },
        { word: 'parents', meaning: '父母', emoji: '👨‍👩‍👧' },
        { word: 'aunt', meaning: '阿姨；姑姑', emoji: '👩' },
        { word: 'uncle', meaning: '叔叔；舅舅', emoji: '👨' },
        { word: 'cousin', meaning: '堂（表）兄弟姐妹', emoji: '🧒' },
        { word: 'son', meaning: '儿子', emoji: '👦' },
        { word: 'daughter', meaning: '女儿', emoji: '👧' },
        { word: 'child', meaning: '孩子', emoji: '🧒' },
        { word: 'children', meaning: '孩子们', emoji: '👧👦' },
        { word: 'people', meaning: '人们', emoji: '👨‍👩‍👧‍👦' },
        { word: 'home', meaning: '家', emoji: '🏡' },
        { word: 'love', meaning: '爱', emoji: '❤️' },
        { word: 'friend', meaning: '朋友', emoji: '🧑‍🤝‍🧑' }
      ],
      sentence: 'I love my family.',
      translation: '我爱我的家人。',
      quizWord: 'mom'
    },
    {
      id: 'numbers',
      title: '数字碰碰乐',
      subtitle: '从一数到四',
      emoji: '🔢',
      color: 'blue',
      words: [
        { word: 'one', meaning: '一', emoji: '1️⃣' },
        { word: 'two', meaning: '二', emoji: '2️⃣' },
        { word: 'three', meaning: '三', emoji: '3️⃣' },
        { word: 'four', meaning: '四', emoji: '4️⃣' },
        { word: 'five', meaning: '五', emoji: '5️⃣' },
        { word: 'six', meaning: '六', emoji: '6️⃣' },
        { word: 'seven', meaning: '七', emoji: '7️⃣' },
        { word: 'eight', meaning: '八', emoji: '8️⃣' },
        { word: 'nine', meaning: '九', emoji: '9️⃣' },
        { word: 'ten', meaning: '十', emoji: '🔟' },
        { word: 'eleven', meaning: '十一', emoji: '1️⃣1️⃣' },
        { word: 'twelve', meaning: '十二', emoji: '1️⃣2️⃣' },
        { word: 'thirteen', meaning: '十三', emoji: '1️⃣3️⃣' },
        { word: 'fourteen', meaning: '十四', emoji: '1️⃣4️⃣' },
        { word: 'fifteen', meaning: '十五', emoji: '1️⃣5️⃣' },
        { word: 'sixteen', meaning: '十六', emoji: '1️⃣6️⃣' },
        { word: 'seventeen', meaning: '十七', emoji: '1️⃣7️⃣' },
        { word: 'eighteen', meaning: '十八', emoji: '1️⃣8️⃣' },
        { word: 'nineteen', meaning: '十九', emoji: '1️⃣9️⃣' },
        { word: 'twenty', meaning: '二十', emoji: '2️⃣0️⃣' }
      ],
      sentence: 'I see two cats.',
      translation: '我看见两只猫。',
      quizWord: 'one'
    },
    {
      id: 'animals',
      title: '可爱小动物',
      subtitle: '和小动物交朋友',
      emoji: '🐾',
      color: 'orange',
      words: [
        { word: 'cat', meaning: '猫', emoji: '🐱' },
        { word: 'dog', meaning: '狗', emoji: '🐶' },
        { word: 'bird', meaning: '鸟', emoji: '🐦' },
        { word: 'fish', meaning: '鱼', emoji: '🐟' },
        { word: 'rabbit', meaning: '兔子', emoji: '🐰' },
        { word: 'duck', meaning: '鸭子', emoji: '🦆' },
        { word: 'pig', meaning: '猪', emoji: '🐷' },
        { word: 'cow', meaning: '奶牛', emoji: '🐮' },
        { word: 'sheep', meaning: '绵羊', emoji: '🐑' },
        { word: 'horse', meaning: '马', emoji: '🐴' },
        { word: 'monkey', meaning: '猴子', emoji: '🐵' },
        { word: 'panda', meaning: '熊猫', emoji: '🐼' },
        { word: 'bear', meaning: '熊', emoji: '🐻' },
        { word: 'lion', meaning: '狮子', emoji: '🦁' },
        { word: 'tiger', meaning: '老虎', emoji: '🐯' },
        { word: 'elephant', meaning: '大象', emoji: '🐘' },
        { word: 'frog', meaning: '青蛙', emoji: '🐸' },
        { word: 'turtle', meaning: '乌龟', emoji: '🐢' },
        { word: 'mouse', meaning: '老鼠', emoji: '🐭' },
        { word: 'hen', meaning: '母鸡', emoji: '🐔' }
      ],
      sentence: 'I see a cat.',
      translation: '我看见一只猫。',
      quizWord: 'cat'
    },
    {
      id: 'food',
      title: '好吃的食物',
      subtitle: '说说喜欢吃什么',
      emoji: '🍎',
      color: 'yellow',
      words: [
        { word: 'apple', meaning: '苹果', emoji: '🍎' },
        { word: 'milk', meaning: '牛奶', emoji: '🥛' },
        { word: 'bread', meaning: '面包', emoji: '🍞' },
        { word: 'water', meaning: '水', emoji: '💧' },
        { word: 'egg', meaning: '鸡蛋', emoji: '🥚' },
        { word: 'rice', meaning: '米饭', emoji: '🍚' },
        { word: 'banana', meaning: '香蕉', emoji: '🍌' },
        { word: 'orange', meaning: '橙子', emoji: '🍊' },
        { word: 'cake', meaning: '蛋糕', emoji: '🍰' },
        { word: 'juice', meaning: '果汁', emoji: '🧃' },
        { word: 'chicken', meaning: '鸡肉', emoji: '🍗' },
        { word: 'fish', meaning: '鱼肉', emoji: '🐟' },
        { word: 'candy', meaning: '糖果', emoji: '🍬' },
        { word: 'pizza', meaning: '披萨', emoji: '🍕' },
        { word: 'soup', meaning: '汤', emoji: '🥣' },
        { word: 'cheese', meaning: '奶酪', emoji: '🧀' },
        { word: 'corn', meaning: '玉米', emoji: '🌽' },
        { word: 'tomato', meaning: '西红柿', emoji: '🍅' },
        { word: 'potato', meaning: '土豆', emoji: '🥔' },
        { word: 'grape', meaning: '葡萄', emoji: '🍇' }
      ],
      sentence: 'I like apples.',
      translation: '我喜欢苹果。',
      quizWord: 'apple'
    }
  ],
  phonics: [
    { id: 'a', letter: 'Aa', name: 'A', sound: '/æ/', words: [{ word: 'apple', meaning: '苹果', emoji: '🍎' }, { word: 'ant', meaning: '蚂蚁', emoji: '🐜' }], tip: 'A 在 apple 里发短音 /æ/，嘴巴张大像在说“啊”。' },
    { id: 'b', letter: 'Bb', name: 'B', sound: '/b/', words: [{ word: 'ball', meaning: '球', emoji: '⚽' }, { word: 'bear', meaning: '熊', emoji: '🐻' }], tip: 'B 是双唇音，先闭嘴再轻轻弹开，像“波”。' },
    { id: 'c', letter: 'Cc', name: 'C', sound: '/k/', words: [{ word: 'cat', meaning: '猫', emoji: '🐱' }, { word: 'cake', meaning: '蛋糕', emoji: '🍰' }], tip: 'C 在 cat 里发 /k/，像“科”，不要出声太重。' },
    { id: 'd', letter: 'Dd', name: 'D', sound: '/d/', words: [{ word: 'dog', meaning: '狗', emoji: '🐶' }, { word: 'duck', meaning: '鸭子', emoji: '🦆' }], tip: 'D 舌尖顶住上牙龈再放开，像“得”。' },
    { id: 'e', letter: 'Ee', name: 'E', sound: '/e/', words: [{ word: 'egg', meaning: '鸡蛋', emoji: '🥚' }, { word: 'elephant', meaning: '大象', emoji: '🐘' }], tip: 'E 的短音 /e/ 像“诶”，嘴巴微微张开。' },
    { id: 'f', letter: 'Ff', name: 'F', sound: '/f/', words: [{ word: 'fish', meaning: '鱼', emoji: '🐟' }, { word: 'frog', meaning: '青蛙', emoji: '🐸' }], tip: 'F 用上牙轻咬下唇，吹出气，像“夫”。' },
    { id: 'g', letter: 'Gg', name: 'G', sound: '/ɡ/', words: [{ word: 'goat', meaning: '山羊', emoji: '🐐' }, { word: 'grape', meaning: '葡萄', emoji: '🍇' }], tip: 'G 发 /ɡ/，舌根顶住上颚再放开，像“哥”。' },
    { id: 'h', letter: 'Hh', name: 'H', sound: '/h/', words: [{ word: 'hat', meaning: '帽子', emoji: '🎩' }, { word: 'horse', meaning: '马', emoji: '🐴' }], tip: 'H 像哈气一样轻轻吹出，不要震动喉咙。' },
    { id: 'i', letter: 'Ii', name: 'I', sound: '/ɪ/', words: [{ word: 'ink', meaning: '墨水', emoji: '🖋️' }, { word: 'igloo', meaning: '冰屋', emoji: '🧊' }], tip: 'I 的短音 /ɪ/ 又短又轻，像“衣”的快读。' },
    { id: 'j', letter: 'Jj', name: 'J', sound: '/dʒ/', words: [{ word: 'juice', meaning: '果汁', emoji: '🧃' }, { word: 'jam', meaning: '果酱', emoji: '🍓' }], tip: 'J 发 /dʒ/，像“吉”，嘴唇稍稍嘟起。' },
    { id: 'k', letter: 'Kk', name: 'K', sound: '/k/', words: [{ word: 'kite', meaning: '风筝', emoji: '🪁' }, { word: 'king', meaning: '国王', emoji: '🤴' }], tip: 'K 和 C 在 cat 里发音一样，都是 /k/。' },
    { id: 'l', letter: 'Ll', name: 'L', sound: '/l/', words: [{ word: 'lion', meaning: '狮子', emoji: '🦁' }, { word: 'lemon', meaning: '柠檬', emoji: '🍋' }], tip: 'L 舌尖顶住上牙龈，让声音从舌头两边出来。' },
    { id: 'm', letter: 'Mm', name: 'M', sound: '/m/', words: [{ word: 'monkey', meaning: '猴子', emoji: '🐵' }, { word: 'milk', meaning: '牛奶', emoji: '🥛' }], tip: 'M 闭上嘴，声音从鼻子出来，像“摸”。' },
    { id: 'n', letter: 'Nn', name: 'N', sound: '/n/', words: [{ word: 'nose', meaning: '鼻子', emoji: '👃' }, { word: 'nest', meaning: '鸟窝', emoji: '🪺' }], tip: 'N 舌尖顶住上牙龈，声音从鼻子出来。' },
    { id: 'o', letter: 'Oo', name: 'O', sound: '/ɑː/', words: [{ word: 'octopus', meaning: '章鱼', emoji: '🐙' }, { word: 'olive', meaning: '橄榄', emoji: '🫒' }], tip: 'O 的短音在美式英语里近似“啊”，嘴巴张圆。' },
    { id: 'p', letter: 'Pp', name: 'P', sound: '/p/', words: [{ word: 'pig', meaning: '猪', emoji: '🐷' }, { word: 'panda', meaning: '熊猫', emoji: '🐼' }], tip: 'P 双唇一碰就弹开，只出气不出声，像“泼”。' },
    { id: 'q', letter: 'Qq', name: 'Q', sound: '/kw/', words: [{ word: 'queen', meaning: '女王', emoji: '👸' }, { word: 'quilt', meaning: '被子', emoji: '🛏️' }], tip: 'Q 后面总跟着 u，一起发 /kw/，像“夸”。' },
    { id: 'r', letter: 'Rr', name: 'R', sound: '/r/', words: [{ word: 'rabbit', meaning: '兔子', emoji: '🐰' }, { word: 'rainbow', meaning: '彩虹', emoji: '🌈' }], tip: 'R 舌头卷起来但不碰到上颚，嘴唇微圆。' },
    { id: 's', letter: 'Ss', name: 'S', sound: '/s/', words: [{ word: 'sun', meaning: '太阳', emoji: '☀️' }, { word: 'snake', meaning: '蛇', emoji: '🐍' }], tip: 'S 像蛇发出的“嘶——”，只出气不出声。' },
    { id: 't', letter: 'Tt', name: 'T', sound: '/t/', words: [{ word: 'tiger', meaning: '老虎', emoji: '🐯' }, { word: 'tree', meaning: '树', emoji: '🌳' }], tip: 'T 舌尖顶住上牙龈再弹开，像“特”。' },
    { id: 'u', letter: 'Uu', name: 'U', sound: '/ʌ/', words: [{ word: 'umbrella', meaning: '雨伞', emoji: '☂️' }, { word: 'up', meaning: '向上', emoji: '⬆️' }], tip: 'U 的短音 /ʌ/ 像“阿”，嘴巴放松。' },
    { id: 'v', letter: 'Vv', name: 'V', sound: '/v/', words: [{ word: 'van', meaning: '面包车', emoji: '🚐' }, { word: 'violin', meaning: '小提琴', emoji: '🎻' }], tip: 'V 和 F 口型一样，但要震动喉咙。' },
    { id: 'w', letter: 'Ww', name: 'W', sound: '/w/', words: [{ word: 'water', meaning: '水', emoji: '💧' }, { word: 'whale', meaning: '鲸鱼', emoji: '🐳' }], tip: 'W 嘴唇先嘟圆再迅速张开，像“乌”。' },
    { id: 'x', letter: 'Xx', name: 'X', sound: '/ks/', words: [{ word: 'xylophone', meaning: '木琴', emoji: '🎹' }, { word: 'box', meaning: '盒子', emoji: '📦' }, { word: 'fox', meaning: '狐狸', emoji: '🦊' }], tip: 'X 在词尾发 /ks/，如 box、fox；在词首（如 xylophone）读 /z/，这种词很少。' },
    { id: 'y', letter: 'Yy', name: 'Y', sound: '/j/', words: [{ word: 'yo-yo', meaning: '悠悠球', emoji: '🪀' }, { word: 'yellow', meaning: '黄色', emoji: '💛' }], tip: 'Y 在开头发 /j/，像“衣”快速滑出。' },
    { id: 'z', letter: 'Zz', name: 'Z', sound: '/z/', words: [{ word: 'zebra', meaning: '斑马', emoji: '🦓' }, { word: 'zoo', meaning: '动物园', emoji: '🦒' }], tip: 'Z 像小蜜蜂“嗡嗡”叫，要震动喉咙。' }
  ],
  grammar: [
    {
      id: 'a-an',
      title: 'a 和 an',
      subtitle: '一个，用 a 还是 an？',
      emoji: '🅰️',
      color: 'yellow',
      summary: '表示“一个”时，要看后面单词的第一个发音。',
      points: [
        {
          rule: '辅音发音开头的单词前面用 a',
          examples: [
            { en: 'a cat', zh: '一只猫' },
            { en: 'a book', zh: '一本书' }
          ]
        },
        {
          rule: '元音发音（a e i o u）开头的单词前面用 an',
          examples: [
            { en: 'an apple', zh: '一个苹果' },
            { en: 'an egg', zh: '一个鸡蛋' }
          ]
        }
      ],
      exercises: [
        { q: 'I see ___ apple.', options: ['a', 'an'], answer: 1, explain: 'apple 以元音 /æ/ 开头' },
        { q: 'This is ___ dog.', options: ['a', 'an'], answer: 0, explain: 'dog 以辅音 /d/ 开头' },
        { q: 'It is ___ egg.', options: ['a', 'an'], answer: 1, explain: 'egg 以元音 /e/ 开头' }
      ]
    },
    {
      id: 'am-is-are',
      title: 'am / is / are',
      subtitle: '“是”怎么说？',
      emoji: '🟰',
      color: 'blue',
      summary: '“是”在英语里要跟着前面的人或物变化。',
      points: [
        {
          rule: 'I 后面用 am，you 和复数用 are',
          examples: [
            { en: 'I am happy.', zh: '我很开心。' },
            { en: 'You are my friend.', zh: '你是我的朋友。' }
          ]
        },
        {
          rule: 'he / she / it 和单个的人或物用 is',
          examples: [
            { en: 'She is a teacher.', zh: '她是一位老师。' },
            { en: 'The cat is big.', zh: '这只猫很大。' }
          ]
        }
      ],
      exercises: [
        { q: 'I ___ happy.', options: ['am', 'is', 'are'], answer: 0, explain: 'I 后面用 am' },
        { q: 'You ___ my friend.', options: ['am', 'is', 'are'], answer: 2, explain: 'you 后面用 are' },
        { q: 'It ___ a cat.', options: ['am', 'is', 'are'], answer: 1, explain: 'it 后面用 is' }
      ]
    },
    {
      id: 'plural-nouns',
      title: '名词变复数',
      subtitle: '一个 → 很多个',
      emoji: '🐱',
      color: 'pink',
      summary: '东西不止一个时，名词要变成复数。',
      points: [
        {
          rule: '大多数名词直接加 s',
          examples: [
            { en: 'one cat, two cats', zh: '一只猫，两只猫' },
            { en: 'one book, three books', zh: '一本书，三本书' }
          ]
        },
        {
          rule: '以 s、x、ch、sh 结尾的名词加 es',
          examples: [
            { en: 'one box, two boxes', zh: '一个盒子，两个盒子' },
            { en: 'one dish, four dishes', zh: '一个盘子，四个盘子' }
          ]
        },
        {
          rule: '有些名词的复数要单独记',
          examples: [
            { en: 'one child, two children', zh: '一个孩子，两个孩子' },
            { en: 'one foot, two feet', zh: '一只脚，两只脚' }
          ]
        }
      ],
      exercises: [
        { q: 'I see two ___.', options: ['cat', 'cats', 'cates'], answer: 1, explain: 'cat 直接加 s' },
        { q: 'There are three ___.', options: ['box', 'boxs', 'boxes'], answer: 2, explain: 'box 以 x 结尾，加 es' },
        { q: 'Two ___ are playing.', options: ['child', 'childs', 'children'], answer: 2, explain: 'child 的复数是 children' }
      ]
    }
  ]
};

JIMI.registerLevel({
  id: 'primary',
  name: '小学',
  stage: '一年级起步',
  ageRange: '6–12 岁',
  emoji: '🌱',
  avatar: '🧒',
  mascot: '🐱',
  coach: '小猫咪老师',
  sentenceLead: '跟小猫咪学一句',
  tagline: '图片、动画和小游戏，轻松爱上英语',
  speech: { rate: 0.78, pitch: 1.08 },
  sentenceGate: 3,
  home: {
    eyebrow: '今天也来学一点点吧',
    greeting: '嗨，小小探险家！',
    copy: '跟着基米老师，一起发现英语的魔法。',
    dateIcon: '🌤️',
    dateTitle: '今天的英语时间',
    dateSub: '轻松学 · 快乐记 · 大胆说',
    heroLead: '英语小冒险，',
    footnote: '每天 5 分钟，轻松不费力',
    bubble: 'Hello!',
    route: '一年级先打好基础，二至六年级内容将按教材节奏逐步开放。'
  },
  modules: ['words', 'phonics', 'sentences', 'listening', 'speaking', 'review', 'grammar', 'topics', 'stories'],
  labels: {
    topics: { nav: '专题', title: '一年级专题', kicker: 'LITTLE TOPIC LESSONS' },
    listening: { intro: '先听，再选意思或拼出单词。答错的词会自动加入复习清单。', title: '听听写写' }
  },
  planned: [
    {
      id: 'songs',
      icon: '🎵',
      title: '英文儿歌',
      desc: '跟着旋律唱一唱，在歌里记住单词和句子。',
      items: ['字母歌、数字歌、颜色歌', '逐句跟唱与歌词中英对照', '边唱边做动作的律动儿歌']
    }
  ],
  roadmap: {
    words: ['按年级补充二至六年级教材词汇'],
    phonics: ['补充短元音 a e i o u 的拼读', '补充常见字母组合 sh / ch / th', '增加“听音拼词”小游戏'],
    sentences: ['补充日常对话句型', '增加听句子选图练习'],
    listening: ['增加听句子选图和听指令做动作'],
    speaking: ['补充买东西、看病、做客等更多生活场景', '增加看图说话'],
    topics: ['补充学校、天气、节日等主题专题'],
    stories: ['每个年级增加 3–5 个原创小故事'],
    grammar: ['补充 this / that、have / has、一般现在时入门']
  },
  content: primaryContent
});
