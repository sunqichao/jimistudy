// AI 英语学段：看懂 AI 世界所需的术语、句型、对话与阅读。
// 术语核对：Google Machine Learning Glossary、Wikipedia “Glossary of artificial intelligence”及相关条目；
// 音标由 Wiktionary 的美式音标逐词比对。
const aiContent = {
  words: [
    // —— 基础概念 ——
    { word: 'artificial intelligence', ipa: '/ˌɑːr.t̬əˈfɪʃ.əl ɪnˈtel.ə.dʒəns/', pos: 'n.', meaning: '人工智能', emoji: '🤖', example: 'Artificial intelligence is changing the way we work.', exampleZh: '人工智能正在改变我们的工作方式。' },
    { word: 'algorithm', ipa: '/ˈæl.ɡə.rɪ.ðəm/', pos: 'n.', meaning: '算法', emoji: '🧮', example: 'The algorithm sorts the results by relevance.', exampleZh: '这个算法按相关度对结果排序。' },
    { word: 'model', ipa: '/ˈmɑː.dəl/', pos: 'n.', meaning: '模型', emoji: '🧠', example: 'The model was trained on millions of examples.', exampleZh: '这个模型用数百万个样本训练过。' },
    { word: 'data', ipa: '/ˈdeɪ.t̬ə/', pos: 'n.', meaning: '数据', emoji: '📊', example: 'Good data is the foundation of a good model.', exampleZh: '好的数据是好模型的基础。' },
    { word: 'dataset', ipa: '/ˈdeɪ.t̬ə.set/', pos: 'n.', meaning: '数据集', emoji: '🗃️', example: 'The dataset contains ten thousand labeled images.', exampleZh: '这个数据集包含一万张已标注的图片。' },
    { word: 'machine learning', ipa: '/məˈʃiːn ˈlɝː.nɪŋ/', pos: 'n.', meaning: '机器学习', emoji: '📈', example: 'Machine learning lets computers learn from examples.', exampleZh: '机器学习让计算机能从例子中学习。' },
    { word: 'deep learning', ipa: '/diːp ˈlɝː.nɪŋ/', pos: 'n.', meaning: '深度学习', emoji: '🕸️', example: 'Deep learning uses many layers of neural networks.', exampleZh: '深度学习使用多层神经网络。' },
    { word: 'neural network', ipa: '/ˈnʊr.əl ˈnet.wɝːk/', pos: 'n.', meaning: '神经网络', emoji: '🔗', example: 'A neural network is made of connected layers of neurons.', exampleZh: '神经网络由相互连接的多层神经元组成。' },
    { word: 'neuron', ipa: '/ˈnʊr.ɑːn/', pos: 'n.', meaning: '神经元', emoji: '⚡', example: 'Each neuron passes a number to the next layer.', exampleZh: '每个神经元把一个数值传给下一层。' },
    { word: 'parameter', ipa: '/pəˈræm.ə.t̬ɚ/', pos: 'n.', meaning: '参数', emoji: '🎚️', example: 'This model has billions of parameters.', exampleZh: '这个模型有数十亿个参数。' },
    { word: 'label', ipa: '/ˈleɪ.bəl/', pos: 'n. / v.', meaning: '标签；标注', emoji: '🏷️', example: 'Each photo has a label such as “cat” or “dog”.', exampleZh: '每张照片都有“猫”或“狗”这样的标签。' },
    { word: 'pattern', ipa: '/ˈpæt̬.ɚn/', pos: 'n.', meaning: '模式；规律', emoji: '🔍', example: 'The model finds patterns that humans may miss.', exampleZh: '模型能发现人类可能忽略的规律。' },
    { word: 'automation', ipa: '/ˌɑː.t̬əˈmeɪ.ʃən/', pos: 'n.', meaning: '自动化', emoji: '⚙️', example: 'Automation saves hours of repetitive work.', exampleZh: '自动化能节省好几个小时的重复劳动。' },
    { word: 'robot', ipa: '/ˈroʊ.bɑːt/', pos: 'n.', meaning: '机器人', emoji: '🦾', example: 'The robot can pick up small objects.', exampleZh: '这个机器人能拿起小物件。' },
    { word: 'prediction', ipa: '/prɪˈdɪk.ʃən/', pos: 'n.', meaning: '预测', emoji: '🔮', example: 'The model’s prediction was correct.', exampleZh: '模型的预测是正确的。' },
    { word: 'inference', ipa: '/ˈɪn.fɚ.əns/', pos: 'n.', meaning: '推断；模型推理运行', emoji: '💡', example: 'Inference is the step where the model answers a new input.', exampleZh: '推断指模型对新输入给出答案的这一步。' },
    // —— 训练与评估 ——
    { word: 'training', ipa: '/ˈtreɪ.nɪŋ/', pos: 'n.', meaning: '训练', emoji: '🏋️', example: 'Training a large model takes a lot of computing power.', exampleZh: '训练大模型需要大量算力。' },
    { word: 'validation', ipa: '/ˌvæl.əˈdeɪ.ʃən/', pos: 'n.', meaning: '验证', emoji: '✔️', example: 'We use a separate set for validation.', exampleZh: '我们用另一组数据做验证。' },
    { word: 'overfitting', ipa: '/ˌoʊ.vɚˈfɪt̬.ɪŋ/', pos: 'n.', meaning: '过拟合', emoji: '🧷', example: 'Overfitting happens when a model memorizes the training data.', exampleZh: '当模型死记训练数据时，就发生了过拟合。' },
    { word: 'accuracy', ipa: '/ˈæk.jɚ.ə.si/', pos: 'n.', meaning: '准确率', emoji: '🎯', example: 'The accuracy of the model is ninety-five percent.', exampleZh: '这个模型的准确率是百分之九十五。' },
    { word: 'loss', ipa: '/lɑːs/', pos: 'n.', meaning: '损失（模型的误差）', emoji: '📉', example: 'The loss goes down as training continues.', exampleZh: '随着训练进行，损失会下降。' },
    { word: 'gradient', ipa: '/ˈɡreɪ.di.ənt/', pos: 'n.', meaning: '梯度', emoji: '⛰️', example: 'The gradient shows which way to adjust each parameter.', exampleZh: '梯度指明了每个参数该往哪个方向调整。' },
    { word: 'epoch', ipa: '/ˈep.ɑːk/', pos: 'n.', meaning: '训练轮次', emoji: '🔁', example: 'We trained the model for ten epochs.', exampleZh: '我们把模型训练了十轮。' },
    { word: 'supervised learning', ipa: '/ˈsuː.pɚ.vaɪzd ˈlɝː.nɪŋ/', pos: 'n.', meaning: '监督学习', emoji: '👩‍🏫', example: 'Supervised learning needs labeled examples.', exampleZh: '监督学习需要带标签的样本。' },
    { word: 'unsupervised learning', ipa: '/ʌnˈsuː.pɚ.vaɪzd ˈlɝː.nɪŋ/', pos: 'n.', meaning: '无监督学习', emoji: '🧭', example: 'Unsupervised learning finds groups in unlabeled data.', exampleZh: '无监督学习能在没有标签的数据里找出分组。' },
    { word: 'reinforcement learning', ipa: '/ˌriː.ɪnˈfɔːrs.mənt ˈlɝː.nɪŋ/', pos: 'n.', meaning: '强化学习', emoji: '🎮', example: 'Reinforcement learning teaches a model with rewards.', exampleZh: '强化学习用奖励来教模型。' },
    { word: 'fine-tuning', ipa: '/ˌfaɪnˈtuː.nɪŋ/', pos: 'n.', meaning: '微调', emoji: '🔧', example: 'Fine-tuning adapts a general model to a specific task.', exampleZh: '微调能让通用模型适应具体任务。' },
    { word: 'hyperparameter', ipa: '/ˌhaɪ.pɚ.pəˈræm.ə.t̬ɚ/', pos: 'n.', meaning: '超参数', emoji: '🎛️', example: 'The learning rate is an important hyperparameter.', exampleZh: '学习率是一个重要的超参数。' },
    { word: 'benchmark', ipa: '/ˈbentʃ.mɑːrk/', pos: 'n.', meaning: '基准测试', emoji: '🏁', example: 'The new model beat the old one on every benchmark.', exampleZh: '新模型在每项基准测试上都超过了旧模型。' },
    { word: 'optimization', ipa: '/ˌɑːp.tə.məˈzeɪ.ʃən/', pos: 'n.', meaning: '优化', emoji: '🔩', example: 'Optimization reduces the loss step by step.', exampleZh: '优化一步一步地降低损失。' },
    // —— 大模型与提示词 ——
    { word: 'large language model', ipa: '/lɑːrdʒ ˈlæŋ.ɡwɪdʒ ˈmɑː.dəl/', pos: 'n.', meaning: '大语言模型', emoji: '📚', example: 'A large language model can write, translate and summarize.', exampleZh: '大语言模型能写作、翻译和总结。' },
    { word: 'generative AI', ipa: '/ˈdʒen.ɚ.ə.t̬ɪv ˌeɪˈaɪ/', pos: 'n.', meaning: '生成式人工智能', emoji: '🎨', example: 'Generative AI can create text, images and music.', exampleZh: '生成式人工智能能创作文字、图像和音乐。' },
    { word: 'prompt', ipa: '/prɑːmpt/', pos: 'n. / v.', meaning: '提示词；提示', emoji: '⌨️', example: 'A clear prompt gives a better answer.', exampleZh: '清晰的提示词会得到更好的回答。' },
    { word: 'token', ipa: '/ˈtoʊ.kən/', pos: 'n.', meaning: '词元', emoji: '🧩', example: 'The model reads text as a sequence of tokens.', exampleZh: '模型把文本当作一串词元来读取。' },
    { word: 'context window', ipa: '/ˈkɑːn.tekst ˈwɪn.doʊ/', pos: 'n.', meaning: '上下文窗口', emoji: '🪟', example: 'A longer context window lets the model read a whole book.', exampleZh: '更长的上下文窗口让模型能读完一整本书。' },
    { word: 'hallucination', ipa: '/həˌluː.sɪˈneɪ.ʃən/', pos: 'n.', meaning: '幻觉（模型编造内容）', emoji: '🌀', example: 'A hallucination is a confident answer that is not true.', exampleZh: '幻觉指模型自信地给出不真实的回答。' },
    { word: 'transformer', ipa: '/trænsˈfɔːr.mɚ/', pos: 'n.', meaning: '变换器（一种模型架构）', emoji: '🔀', example: 'Most large language models are based on the transformer.', exampleZh: '大多数大语言模型都基于变换器架构。' },
    { word: 'embedding', ipa: '/ɪmˈbed.ɪŋ/', pos: 'n.', meaning: '嵌入（向量表示）', emoji: '📍', example: 'An embedding turns a word into a list of numbers.', exampleZh: '嵌入把一个词变成一串数字。' },
    { word: 'chatbot', ipa: '/ˈtʃæt.bɑːt/', pos: 'n.', meaning: '聊天机器人', emoji: '💬', example: 'The chatbot answered my question in a few seconds.', exampleZh: '聊天机器人几秒钟就回答了我的问题。' },
    { word: 'multimodal', ipa: '/ˌmʌl.tiˈmoʊ.dəl/', pos: 'adj.', meaning: '多模态的', emoji: '🖼️', example: 'A multimodal model can understand both text and images.', exampleZh: '多模态模型能同时理解文字和图像。' },
    { word: 'retrieval', ipa: '/rɪˈtriː.vəl/', pos: 'n.', meaning: '检索', emoji: '🔎', example: 'Retrieval helps the model find the right documents.', exampleZh: '检索帮助模型找到合适的文档。' },
    { word: 'agent', ipa: '/ˈeɪ.dʒənt/', pos: 'n.', meaning: '智能体', emoji: '🕹️', example: 'An AI agent can plan steps and use tools on its own.', exampleZh: '智能体能自己规划步骤并使用工具。' },
    { word: 'reasoning', ipa: '/ˈriː.zən.ɪŋ/', pos: 'n.', meaning: '逻辑推理', emoji: '🧩', example: 'The model shows better reasoning on math problems.', exampleZh: '这个模型在数学题上的推理能力更强。' },
    { word: 'temperature', ipa: '/ˈtem.prə.tʃɚ/', pos: 'n.', meaning: '温度（控制输出随机性）', emoji: '🌡️', example: 'A higher temperature makes the answers more random.', exampleZh: '温度越高，回答越随机。' },
    { word: 'system prompt', ipa: '/ˈsɪs.təm prɑːmpt/', pos: 'n.', meaning: '系统提示词', emoji: '📜', example: 'The system prompt tells the assistant how to behave.', exampleZh: '系统提示词告诉助手该怎样表现。' },
    { word: 'foundation model', ipa: '/faʊnˈdeɪ.ʃən ˈmɑː.dəl/', pos: 'n.', meaning: '基础模型', emoji: '🏛️', example: 'A foundation model can be adapted to many tasks.', exampleZh: '基础模型可以适配许多任务。' },
    { word: 'open-source', ipa: '/ˌoʊ.pən ˈsɔːrs/', pos: 'adj.', meaning: '开源的', emoji: '🔓', example: 'Many open-source models are free to download.', exampleZh: '许多开源模型可以免费下载。' },
    { word: 'completion', ipa: '/kəmˈpliː.ʃən/', pos: 'n.', meaning: '补全；生成结果', emoji: '✍️', example: 'The completion continues the text from your prompt.', exampleZh: '生成结果会接着你的提示词往下写。' },
    // —— 应用场景 ——
    { word: 'computer vision', ipa: '/kəmˈpjuː.t̬ɚ ˈvɪʒ.ən/', pos: 'n.', meaning: '计算机视觉', emoji: '👁️', example: 'Computer vision lets machines understand images.', exampleZh: '计算机视觉让机器能理解图像。' },
    { word: 'speech recognition', ipa: '/spiːtʃ ˌrek.əɡˈnɪʃ.ən/', pos: 'n.', meaning: '语音识别', emoji: '🎙️', example: 'Speech recognition turns spoken words into text.', exampleZh: '语音识别把说出的话转成文字。' },
    { word: 'natural language processing', ipa: '/ˈnætʃ.ɚ.əl ˈlæŋ.ɡwɪdʒ ˈprɑː.ses.ɪŋ/', pos: 'n.', meaning: '自然语言处理', emoji: '🗣️', example: 'Natural language processing helps computers understand human language.', exampleZh: '自然语言处理帮助计算机理解人类语言。' },
    { word: 'recommendation', ipa: '/ˌrek.ə.menˈdeɪ.ʃən/', pos: 'n.', meaning: '推荐', emoji: '👍', example: 'The app gives movie recommendations based on what you watched.', exampleZh: '这个应用根据你看过的电影推荐新电影。' },
    { word: 'autonomous', ipa: '/ɔːˈtɑː.nə.məs/', pos: 'adj.', meaning: '自主的', emoji: '🚗', example: 'Autonomous cars use sensors and AI to drive.', exampleZh: '自动驾驶汽车靠传感器和人工智能来行驶。' },
    { word: 'self-driving', ipa: '/ˌselfˈdraɪ.vɪŋ/', pos: 'adj.', meaning: '自动驾驶的', emoji: '🛣️', example: 'Self-driving cars are being tested in several cities.', exampleZh: '自动驾驶汽车正在几个城市测试。' },
    { word: 'facial recognition', ipa: '/ˈfeɪ.ʃəl ˌrek.əɡˈnɪʃ.ən/', pos: 'n.', meaning: '人脸识别', emoji: '🙂', example: 'Facial recognition can unlock your phone.', exampleZh: '人脸识别可以解锁你的手机。' },
    { word: 'voice assistant', ipa: '/vɔɪs əˈsɪs.tənt/', pos: 'n.', meaning: '语音助手', emoji: '🔊', example: 'I asked the voice assistant to set an alarm.', exampleZh: '我让语音助手设了一个闹钟。' },
    { word: 'translation', ipa: '/trænsˈleɪ.ʃən/', pos: 'n.', meaning: '翻译', emoji: '🌐', example: 'Machine translation has become much more accurate.', exampleZh: '机器翻译已经准确得多了。' },
    { word: 'image generation', ipa: '/ˈɪm.ɪdʒ ˌdʒen.əˈreɪ.ʃən/', pos: 'n.', meaning: '图像生成', emoji: '🖌️', example: 'Image generation turns a text description into a picture.', exampleZh: '图像生成能把文字描述变成图片。' },
    { word: 'summarization', ipa: '/ˌsʌm.ɚ.əˈzeɪ.ʃən/', pos: 'n.', meaning: '摘要生成', emoji: '📝', example: 'Summarization saves time when you read long reports.', exampleZh: '摘要生成能在读长篇报告时节省时间。' },
    { word: 'workflow', ipa: '/ˈwɝːk.floʊ/', pos: 'n.', meaning: '工作流', emoji: '🔄', example: 'We added an AI step to our design workflow.', exampleZh: '我们在设计工作流里加了一个 AI 环节。' },
    { word: 'API', ipa: '/ˌeɪ.piːˈaɪ/', pos: 'n.', meaning: '应用程序接口', emoji: '🔌', example: 'Developers call the model through an API.', exampleZh: '开发者通过接口来调用这个模型。' },
    { word: 'GPU', ipa: '/ˌdʒiː.piːˈjuː/', pos: 'n.', meaning: '图形处理器', emoji: '🖥️', example: 'Training large models requires many GPUs.', exampleZh: '训练大模型需要很多块图形处理器。' },
    { word: 'compute', ipa: '/kəmˈpjuːt/', pos: 'n.', meaning: '算力', emoji: '🔋', example: 'The project needs more compute than we expected.', exampleZh: '这个项目需要的算力比我们预想的多。' },
    // —— 伦理与安全 ——
    { word: 'ethics', ipa: '/ˈeθ.ɪks/', pos: 'n.', meaning: '伦理', emoji: '⚖️', example: 'AI ethics asks how technology should treat people.', exampleZh: 'AI 伦理关注技术应该如何对待人。' },
    { word: 'bias', ipa: '/ˈbaɪ.əs/', pos: 'n.', meaning: '偏见；偏差', emoji: '🪞', example: 'Bias in the data can lead to unfair results.', exampleZh: '数据中的偏见会导致不公平的结果。' },
    { word: 'fairness', ipa: '/ˈfer.nəs/', pos: 'n.', meaning: '公平性', emoji: '🤲', example: 'Fairness means the model treats different groups equally.', exampleZh: '公平性指模型平等对待不同群体。' },
    { word: 'transparency', ipa: '/trænsˈper.ən.si/', pos: 'n.', meaning: '透明度', emoji: '🔬', example: 'Companies should be open about how their systems work.', exampleZh: '公司应该公开他们的系统是如何运作的。' },
    { word: 'privacy', ipa: '/ˈpraɪ.və.si/', pos: 'n.', meaning: '隐私', emoji: '🔒', example: 'Do not enter private information into a public chatbot.', exampleZh: '不要在公开的聊天机器人里输入隐私信息。' },
    { word: 'copyright', ipa: '/ˈkɑː.pi.raɪt/', pos: 'n.', meaning: '版权', emoji: '©️', example: 'Who owns the copyright of an AI-generated picture?', exampleZh: 'AI 生成的图片，版权归谁？' },
    { word: 'deepfake', ipa: '/ˈdiːp.feɪk/', pos: 'n.', meaning: '深度伪造', emoji: '🎭', example: 'The video turned out to be a deepfake.', exampleZh: '这段视频原来是深度伪造的。' },
    { word: 'misinformation', ipa: '/ˌmɪs.ɪn.fɚˈmeɪ.ʃən/', pos: 'n.', meaning: '虚假信息', emoji: '🚫', example: 'AI can spread misinformation very quickly.', exampleZh: 'AI 可能让虚假信息传播得非常快。' },
    { word: 'alignment', ipa: '/əˈlaɪn.mənt/', pos: 'n.', meaning: '对齐（使 AI 符合人类意图）', emoji: '🧭', example: 'Alignment aims to make AI follow human goals and values.', exampleZh: '对齐的目标是让 AI 遵循人类的目标和价值观。' },
    { word: 'safety', ipa: '/ˈseɪf.ti/', pos: 'n.', meaning: '安全性', emoji: '🦺', example: 'Safety testing is required before the model is released.', exampleZh: '模型发布前必须做安全性测试。' },
    { word: 'regulation', ipa: '/ˌreɡ.jəˈleɪ.ʃən/', pos: 'n.', meaning: '监管；法规', emoji: '📕', example: 'Many countries are writing new regulations for AI.', exampleZh: '许多国家正在制定新的 AI 法规。' },
    { word: 'accountability', ipa: '/əˌkaʊn.t̬əˈbɪl.ə.t̬i/', pos: 'n.', meaning: '问责', emoji: '🧾', example: 'There must be clear accountability when an AI system causes harm.', exampleZh: '当 AI 系统造成伤害时，必须有明确的问责。' },
    { word: 'explainability', ipa: '/ɪkˌspleɪ.nəˈbɪl.ə.t̬i/', pos: 'n.', meaning: '可解释性', emoji: '💭', example: 'Doctors need explainability before they trust a diagnosis from AI.', exampleZh: '医生在信任 AI 的诊断之前，需要它具备可解释性。' },
    { word: 'guardrail', ipa: '/ˈɡɑːrd.reɪl/', pos: 'n.', meaning: '护栏（安全限制）', emoji: '🚧', example: 'Guardrails stop the model from giving harmful advice.', exampleZh: '护栏能防止模型给出有害的建议。' },
    { word: 'human-in-the-loop', ipa: '/ˌhjuː.mən ɪn ðə ˈluːp/', pos: 'adj.', meaning: '人在回路（由人把关）', emoji: '🧑‍⚖️', example: 'A human-in-the-loop process lets people review the AI’s decisions.', exampleZh: '“人在回路”的流程让人可以审核 AI 的决定。' },
    { word: 'responsible AI', ipa: '/rɪˈspɑːn.sə.bəl ˌeɪˈaɪ/', pos: 'n.', meaning: '负责任的人工智能', emoji: '🌱', example: 'Responsible AI considers safety, fairness and privacy.', exampleZh: '负责任的人工智能会兼顾安全、公平和隐私。' }
  ],
  sentences: [
    {
      id: 'predict-next-token',
      sentence: 'Large language models predict the next token.',
      translation: '大语言模型预测下一个词元。',
      hint: 'predict 后直接接宾语；主语是复数 models，动词不加 -s',
      emoji: '🔮',
      extraWords: ['predicts']
    },
    {
      id: 'trained-on-dataset',
      sentence: 'The model was trained on a huge dataset.',
      translation: '这个模型是用一个巨大的数据集训练出来的。',
      hint: '被动语态：was + 过去分词；train on 表示“用……训练”',
      emoji: '🏋️',
      extraWords: ['trains']
    },
    {
      id: 'check-the-results',
      sentence: 'AI can make mistakes, so always check the results.',
      translation: 'AI 也会出错，所以一定要检查结果。',
      hint: 'so 表示因果；always check 是祈使句',
      emoji: '✅',
      extraWords: ['but']
    },
    {
      id: 'bias-unfair-results',
      sentence: 'Bias in the training data can lead to unfair results.',
      translation: '训练数据中的偏见会导致不公平的结果。',
      hint: 'lead to 表示“导致”；主语 Bias 是不可数名词，情态动词 can 后接原形',
      emoji: '🪞',
      extraWords: ['leads']
    },
    {
      id: 'clear-prompt',
      sentence: 'A clear prompt helps the model give a better answer.',
      translation: '清晰的提示词能帮助模型给出更好的回答。',
      hint: 'help + 宾语 + 动词原形：帮助某人做某事',
      emoji: '⌨️',
      extraWords: ['gives']
    },
    {
      id: 'protect-privacy',
      sentence: 'Please do not share private information with a chatbot.',
      translation: '请不要和聊天机器人分享隐私信息。',
      hint: '否定祈使句：Do not + 动词原形；share … with … 表示“与……分享”',
      emoji: '🔒',
      extraWords: ['you']
    }
  ],
  reading: [
    {
      id: 'what-is-machine-learning',
      title: '什么是机器学习',
      subtitle: 'What Is Machine Learning?',
      level: 'AI 入门 · 说明文',
      cover: '📈',
      color: 'blue',
      passage: [
        { en: 'Machine learning is a way for computers to learn from data instead of following only fixed rules.', zh: '机器学习是让计算机从数据中学习，而不是只遵循固定规则的方法。' },
        { en: 'For example, a model can study thousands of labeled photos and learn to recognize cats.', zh: '例如，模型可以研究成千上万张带标签的照片，学会识别猫。' },
        { en: 'During training, the model adjusts its parameters to make fewer mistakes.', zh: '在训练过程中，模型会调整参数，让错误变少。' },
        { en: 'After training, it can make predictions about new photos that it has never seen.', zh: '训练之后，它可以对从未见过的新照片做出预测。' },
        { en: 'However, a model is only as good as the data it learns from.', zh: '不过，模型的好坏取决于它所学习的数据。' }
      ],
      keywords: [
        { word: 'label', meaning: '标签；标注' },
        { word: 'parameter', meaning: '参数' },
        { word: 'prediction', meaning: '预测' }
      ],
      questions: [
        { q: 'What is machine learning?', options: ['A way for computers to learn from data.', 'A type of fixed rule book.', 'A kind of robot body.', 'A method of storing photos.'], answer: 0, explain: '第一句给出了定义' },
        { q: 'What does the model do during training?', options: ['It deletes old photos.', 'It adjusts its parameters.', 'It writes new rules by hand.', 'It stops making predictions.'], answer: 1, explain: '第三句：adjusts its parameters' },
        { q: 'What does the last sentence suggest?', options: ['Data quality does not matter.', 'Models never make mistakes.', 'A model depends on the quality of its data.', 'Photos are better than text.'], answer: 2, explain: '末句：only as good as the data' }
      ]
    },
    {
      id: 'how-chatbots-answer',
      title: '聊天机器人如何写出回答',
      subtitle: 'How Chatbots Write Answers',
      level: '大模型 · 说明文',
      cover: '💬',
      color: 'purple',
      passage: [
        { en: 'A chatbot is usually built on a large language model.', zh: '聊天机器人通常建立在大语言模型之上。' },
        { en: 'The model reads your prompt and splits it into small pieces called tokens.', zh: '模型读取你的提示词，并把它拆成叫作词元的小片段。' },
        { en: 'Then it predicts the next token again and again until the answer is complete.', zh: '然后它一次又一次地预测下一个词元，直到回答完整。' },
        { en: 'Because the model predicts likely words, it can sometimes produce confident but false statements, which people call hallucinations.', zh: '因为模型预测的是可能出现的词，它有时会给出自信但错误的说法，人们称之为幻觉。' },
        { en: 'For this reason, important facts should always be checked against reliable sources.', zh: '因此，重要的事实应该始终与可靠的来源核对。' }
      ],
      keywords: [
        { word: 'token', meaning: '词元' },
        { word: 'hallucination', meaning: '幻觉' },
        { word: 'reliable', meaning: '可靠的' }
      ],
      questions: [
        { q: 'What happens to your prompt first?', options: ['It is deleted.', 'It is split into tokens.', 'It is translated into code.', 'It is sent to a teacher.'], answer: 1, explain: '第二句：splits it into small pieces called tokens' },
        { q: 'Why can a chatbot produce false statements?', options: ['It predicts likely words.', 'It has no data.', 'It cannot read prompts.', 'It always copies the user.'], answer: 0, explain: '第四句：Because the model predicts likely words' },
        { q: 'What should users do with important facts?', options: ['Ignore them.', 'Share them at once.', 'Check them with reliable sources.', 'Ask the chatbot to repeat them.'], answer: 2, explain: '末句：checked against reliable sources' }
      ]
    },
    {
      id: 'use-ai-responsibly',
      title: '负责任地使用 AI',
      subtitle: 'Using AI Responsibly',
      level: 'AI 伦理 · 议论文',
      cover: '⚖️',
      color: 'yellow',
      passage: [
        { en: 'AI tools can save time, but they also raise important questions.', zh: 'AI 工具能节省时间，但也带来了重要的问题。' },
        { en: 'First, training data may contain bias, which can lead to unfair results.', zh: '第一，训练数据可能含有偏见，从而导致不公平的结果。' },
        { en: 'Second, personal information entered into a tool may not stay private.', zh: '第二，输入工具的个人信息未必能保持私密。' },
        { en: 'Therefore, users should avoid sharing sensitive data and should review the output carefully.', zh: '因此，用户应避免分享敏感数据，并仔细审核输出内容。' },
        { en: 'In the end, AI should support human judgment rather than replace it.', zh: '归根结底，AI 应该辅助人的判断，而不是取代它。' }
      ],
      keywords: [
        { word: 'sensitive', meaning: '敏感的' },
        { word: 'output', meaning: '输出' },
        { word: 'judgment', meaning: '判断' }
      ],
      questions: [
        { q: 'What is the main idea of the passage?', options: ['AI tools should be banned.', 'AI tools bring benefits and risks, so use them responsibly.', 'AI will soon replace all workers.', 'Privacy is not important.'], answer: 1, explain: '全文先肯定好处，再讨论风险和建议' },
        { q: 'What can biased training data cause?', options: ['Faster tools.', 'Unfair results.', 'Better privacy.', 'Cheaper services.'], answer: 1, explain: '第二句：lead to unfair results' },
        { q: 'What does the author conclude about AI?', options: ['It should replace human judgment.', 'It should support human judgment.', 'It should make all decisions.', 'It should avoid helping people.'], answer: 1, explain: '末句：support human judgment rather than replace it' }
      ]
    }
  ],
  topics: [
    {
      id: 'ai-basics',
      title: 'AI 基础概念',
      subtitle: '认识人工智能的核心词',
      emoji: '🤖',
      color: 'blue',
      words: [
        { word: 'artificial intelligence', meaning: '人工智能', emoji: '🤖' },
        { word: 'algorithm', meaning: '算法', emoji: '🧮' },
        { word: 'model', meaning: '模型', emoji: '🧠' },
        { word: 'data', meaning: '数据', emoji: '📊' },
        { word: 'dataset', meaning: '数据集', emoji: '🗃️' },
        { word: 'machine learning', meaning: '机器学习', emoji: '📈' },
        { word: 'deep learning', meaning: '深度学习', emoji: '🕸️' },
        { word: 'neural network', meaning: '神经网络', emoji: '🔗' },
        { word: 'neuron', meaning: '神经元', emoji: '⚡' },
        { word: 'prediction', meaning: '预测', emoji: '🔮' }
      ],
      sentence: 'AI learns patterns from data.',
      translation: 'AI 从数据中学习规律。',
      quizWord: 'algorithm'
    },
    {
      id: 'training-evaluation',
      title: '训练与评估',
      subtitle: '模型是怎么练成的',
      emoji: '🏋️',
      color: 'yellow',
      words: [
        { word: 'training', meaning: '训练', emoji: '🏋️' },
        { word: 'validation', meaning: '验证', emoji: '✔️' },
        { word: 'overfitting', meaning: '过拟合', emoji: '🧷' },
        { word: 'accuracy', meaning: '准确率', emoji: '🎯' },
        { word: 'loss', meaning: '损失', emoji: '📉' },
        { word: 'gradient', meaning: '梯度', emoji: '⛰️' },
        { word: 'epoch', meaning: '训练轮次', emoji: '🔁' },
        { word: 'hyperparameter', meaning: '超参数', emoji: '🎛️' },
        { word: 'benchmark', meaning: '基准测试', emoji: '🏁' },
        { word: 'fine-tuning', meaning: '微调', emoji: '🔧' }
      ],
      sentence: 'The loss goes down after each epoch.',
      translation: '每训练一轮，损失就会下降。',
      quizWord: 'overfitting'
    },
    {
      id: 'llm-prompts',
      title: '大模型与提示词',
      subtitle: '和 AI 对话的基本词汇',
      emoji: '💬',
      color: 'purple',
      words: [
        { word: 'large language model', meaning: '大语言模型', emoji: '📚' },
        { word: 'prompt', meaning: '提示词', emoji: '⌨️' },
        { word: 'token', meaning: '词元', emoji: '🧩' },
        { word: 'context window', meaning: '上下文窗口', emoji: '🪟' },
        { word: 'hallucination', meaning: '幻觉', emoji: '🌀' },
        { word: 'embedding', meaning: '嵌入', emoji: '📍' },
        { word: 'system prompt', meaning: '系统提示词', emoji: '📜' },
        { word: 'temperature', meaning: '温度', emoji: '🌡️' },
        { word: 'multimodal', meaning: '多模态的', emoji: '🖼️' },
        { word: 'reasoning', meaning: '逻辑推理', emoji: '🧩' }
      ],
      sentence: 'A clear prompt gives a better answer.',
      translation: '清晰的提示词能得到更好的回答。',
      quizWord: 'hallucination'
    },
    {
      id: 'ai-applications',
      title: 'AI 应用场景',
      subtitle: '生活里的 AI',
      emoji: '📱',
      color: 'pink',
      words: [
        { word: 'computer vision', meaning: '计算机视觉', emoji: '👁️' },
        { word: 'speech recognition', meaning: '语音识别', emoji: '🎙️' },
        { word: 'natural language processing', meaning: '自然语言处理', emoji: '🗣️' },
        { word: 'recommendation', meaning: '推荐', emoji: '👍' },
        { word: 'facial recognition', meaning: '人脸识别', emoji: '🙂' },
        { word: 'self-driving', meaning: '自动驾驶的', emoji: '🛣️' },
        { word: 'voice assistant', meaning: '语音助手', emoji: '🔊' },
        { word: 'chatbot', meaning: '聊天机器人', emoji: '💬' },
        { word: 'translation', meaning: '翻译', emoji: '🌐' },
        { word: 'image generation', meaning: '图像生成', emoji: '🖌️' }
      ],
      sentence: 'The voice assistant understood my question.',
      translation: '语音助手听懂了我的问题。',
      quizWord: 'computer vision'
    },
    {
      id: 'ai-at-work',
      title: 'AI 与工作',
      subtitle: '把 AI 用进工作流程',
      emoji: '💼',
      color: 'orange',
      words: [
        { word: 'automation', meaning: '自动化', emoji: '⚙️' },
        { word: 'workflow', meaning: '工作流', emoji: '🔄' },
        { word: 'summarization', meaning: '摘要生成', emoji: '📝' },
        { word: 'agent', meaning: '智能体', emoji: '🕹️' },
        { word: 'API', meaning: '应用程序接口', emoji: '🔌' },
        { word: 'compute', meaning: '算力', emoji: '🔋' },
        { word: 'GPU', meaning: '图形处理器', emoji: '🖥️' },
        { word: 'open-source', meaning: '开源的', emoji: '🔓' },
        { word: 'foundation model', meaning: '基础模型', emoji: '🏛️' },
        { word: 'retrieval', meaning: '检索', emoji: '🔎' }
      ],
      sentence: 'Automation can save hours of repetitive work.',
      translation: '自动化能节省好几个小时的重复劳动。',
      quizWord: 'workflow'
    },
    {
      id: 'ai-ethics-safety',
      title: 'AI 伦理与安全',
      subtitle: '用好 AI 也要管好 AI',
      emoji: '⚖️',
      color: 'blue',
      words: [
        { word: 'ethics', meaning: '伦理', emoji: '⚖️' },
        { word: 'bias', meaning: '偏见', emoji: '🪞' },
        { word: 'fairness', meaning: '公平性', emoji: '🤲' },
        { word: 'privacy', meaning: '隐私', emoji: '🔒' },
        { word: 'copyright', meaning: '版权', emoji: '©️' },
        { word: 'deepfake', meaning: '深度伪造', emoji: '🎭' },
        { word: 'misinformation', meaning: '虚假信息', emoji: '🚫' },
        { word: 'alignment', meaning: '对齐', emoji: '🧭' },
        { word: 'safety', meaning: '安全性', emoji: '🦺' },
        { word: 'guardrail', meaning: '护栏', emoji: '🚧' }
      ],
      sentence: 'AI should be safe, fair and transparent.',
      translation: 'AI 应当安全、公平、透明。',
      quizWord: 'bias'
    }
  ],
  grammar: [
    {
      id: 'how-ai-works',
      title: '说明 AI 如何工作',
      subtitle: '一般现在时与被动语态',
      emoji: '⚙️',
      color: 'blue',
      summary: '介绍技术原理时，用一般现在时说明“通常怎样”，用被动语态说明“被怎样处理”。',
      points: [
        {
          rule: '说明规律和通用事实：一般现在时',
          examples: [
            { en: 'AI finds patterns in data.', zh: 'AI 在数据中寻找规律。' },
            { en: 'Machine learning models improve with more examples.', zh: '机器学习模型会随着样本增多而改进。' }
          ]
        },
        {
          rule: '强调“被怎样处理”，施动者不重要时用被动：be + 过去分词',
          examples: [
            { en: 'The model is trained on millions of examples.', zh: '模型是用数百万个样本训练的。' },
            { en: 'The results are checked by humans.', zh: '结果由人来检查。' }
          ]
        },
        {
          rule: '已经完成的过程，用现在完成时被动：has / have been + 过去分词',
          examples: [
            { en: 'The new version has been released.', zh: '新版本已经发布了。' }
          ]
        }
      ],
      exercises: [
        { q: 'The model ___ on millions of examples before it is released.', options: ['train', 'trains', 'is trained', 'is training'], answer: 2, explain: '模型是“被训练”的，用被动语态' },
        { q: 'AI ___ patterns in data.', options: ['find', 'finds', 'is found', 'are found'], answer: 1, explain: 'AI 是单数主语，主动语态，动词加 -s' },
        { q: 'Thousands of images ___ to teach the model.', options: ['use', 'uses', 'are used', 'is used'], answer: 2, explain: 'images 是被使用的，复数主语用 are used' }
      ]
    },
    {
      id: 'writing-prompts',
      title: '写出清晰的提示词',
      subtitle: '祈使句与礼貌请求',
      emoji: '⌨️',
      color: 'purple',
      summary: '给 AI 下指令时，常用祈使句；想更礼貌或更柔和时，用 could / would。',
      points: [
        {
          rule: '直接下指令：动词原形开头（祈使句）',
          examples: [
            { en: 'Summarize the text in three sentences.', zh: '用三句话总结这段文字。' },
            { en: 'Explain the idea in simple words.', zh: '用简单的词解释这个想法。' }
          ]
        },
        {
          rule: '提出限制：Do not + 动词原形 / Avoid + 动名词',
          examples: [
            { en: 'Do not use technical terms.', zh: '不要使用专业术语。' },
            { en: 'Avoid long sentences.', zh: '避免使用长句。' }
          ]
        },
        {
          rule: '礼貌请求：Could you / Would you + 动词原形…?',
          examples: [
            { en: 'Could you rewrite this email in a friendlier tone?', zh: '你能用更友好的语气重写这封邮件吗？' }
          ]
        }
      ],
      exercises: [
        { q: '___ the main idea of the text in one sentence.', options: ['Explain', 'Explaining', 'Explained', 'To explained'], answer: 0, explain: '祈使句以动词原形开头' },
        { q: 'To forbid technical terms, write: “___ use technical terms.”', options: ['Not', 'No', 'Do not', 'Does not'], answer: 2, explain: '否定祈使句：Do not + 动词原形' },
        { q: '___ you rewrite this email in a more polite tone?', options: ['Could', 'Did', 'Are', 'Does'], answer: 0, explain: 'Could you…? 是礼貌的请求句型' }
      ]
    },
    {
      id: 'abilities-and-limits',
      title: '谈 AI 的能力与局限',
      subtitle: '情态动词：can / should / might / may',
      emoji: '🧭',
      color: 'yellow',
      summary: '用情态动词区分“能做到”“应该做”“可能发生”，说话会更准确、更有分寸。',
      points: [
        {
          rule: '能力：can / cannot',
          examples: [
            { en: 'AI can translate text quickly.', zh: 'AI 能快速翻译文本。' },
            { en: 'AI cannot understand feelings in the same way humans do.', zh: 'AI 不能像人那样理解情感。' }
          ]
        },
        {
          rule: '建议或义务：should / must',
          examples: [
            { en: 'You should check important facts.', zh: '你应该核对重要的事实。' }
          ]
        },
        {
          rule: '不确定的可能性：may / might（might 更不确定）',
          examples: [
            { en: 'The answer may be wrong.', zh: '这个答案可能是错的。' },
            { en: 'AI might become even more powerful in the future.', zh: '未来 AI 也许会变得更强大。' }
          ]
        }
      ],
      exercises: [
        { q: 'The answer is not always correct, so you ___ check important facts.', options: ['should', 'might', 'can', 'would'], answer: 0, explain: '给出建议，用 should' },
        { q: 'In the future, AI ___ become much more powerful, but nobody knows for sure.', options: ['will definitely', 'might', 'must', 'is certain to'], answer: 1, explain: '“没人确定”，说明只是可能，用 might' },
        { q: 'Because the data is incomplete, the result ___ not be reliable.', options: ['may', 'must', 'shall', 'need'], answer: 0, explain: 'may not 表示“可能不”' }
      ]
    }
  ],
  writing: [
    {
      id: 'write-a-prompt',
      title: '写一条清晰的提示词',
      subtitle: '让 AI 助手帮你准备演讲',
      emoji: '⌨️',
      color: 'purple',
      type: '提示词写作 · 祈使句',
      prompt: 'Write a prompt asking an AI assistant to help you prepare for an English presentation. Say who the AI should act as, what you need, and what format you want.',
      promptZh: '写一条提示词，请 AI 助手帮你准备一次英语演讲：说明让 AI 扮演什么角色、你需要什么，以及想要什么格式。',
      minWords: 50,
      phrases: [
        { en: 'Act as', zh: '扮演……' },
        { en: 'Your task is', zh: '你的任务是' },
        { en: 'Please', zh: '请' },
        { en: 'in the format of', zh: '以……的格式' },
        { en: 'Keep it', zh: '保持……' },
        { en: 'For example', zh: '例如' }
      ],
      tips: ['好提示词通常有四部分：角色、任务、背景、输出格式。', '用祈使句，一句话只说一件事。', '把限制说清楚，如字数、语气、读者是谁。'],
      sample: 'Act as an experienced English presentation coach. I am a university student and I have to give a five-minute talk about artificial intelligence next week. Your task is to review my draft and suggest three ways to make it clearer. Please keep your advice short, because I only have one hour to revise. Also, give your answer in the format of a numbered list. For example, you can start each point with a verb.'
    },
    {
      id: 'ai-and-homework',
      title: '学生该用 AI 做作业吗',
      subtitle: '写一段有理由的观点',
      emoji: '📚',
      color: 'blue',
      type: '议论文 · 表达观点',
      prompt: 'Should students use AI tools to help with their homework? Give your opinion and support it with reasons or examples.',
      promptZh: '学生应该用 AI 工具帮助完成作业吗？请给出你的观点，并用理由或例子支持。',
      minWords: 70,
      phrases: [
        { en: 'In my opinion', zh: '在我看来' },
        { en: 'On the one hand', zh: '一方面' },
        { en: 'On the other hand', zh: '另一方面' },
        { en: 'For example', zh: '例如' },
        { en: 'As a result', zh: '结果' },
        { en: 'In conclusion', zh: '总之' }
      ],
      tips: ['先亮明观点，再用两条理由支持。', '同时承认另一面，会让论证更可信。', '结尾呼应观点，强调“怎样用”比“用不用”更重要。'],
      sample: 'In my opinion, students can use AI tools for homework, but only in the right way. On the one hand, AI can explain difficult ideas in simple words. For example, a student who does not understand a math problem can ask for a step-by-step explanation. On the other hand, copying answers from AI stops students from thinking for themselves. As a result, they may learn very little and perform badly in exams. In conclusion, AI should be a helpful tutor, not a replacement for our own effort.'
    },
    {
      id: 'review-an-ai-tool',
      title: '评价一个 AI 工具',
      subtitle: '写一篇简短的使用体验',
      emoji: '🔍',
      color: 'yellow',
      type: '产品评测 · 优点与不足',
      prompt: 'Write a short review of an AI tool you have used. Describe what it does, one advantage, one problem, and whether you would recommend it.',
      promptZh: '为你用过的一个 AI 工具写一篇简短的评价：它能做什么、一个优点、一个问题，以及你是否推荐。',
      minWords: 60,
      phrases: [
        { en: 'I have used', zh: '我用过' },
        { en: 'It can', zh: '它可以' },
        { en: 'The main advantage is', zh: '主要的优点是' },
        { en: 'However', zh: '不过' },
        { en: 'I would recommend', zh: '我会推荐' },
        { en: 'Overall', zh: '总的来说' }
      ],
      tips: ['先说清楚工具是做什么的，再评价。', '优点和问题各举一个具体例子。', '结尾说明适合哪些人使用。'],
      sample: 'I have used an AI writing assistant for three months. It can fix grammar mistakes and suggest clearer sentences. The main advantage is that it saves a lot of time when I write emails. However, it sometimes changes my meaning, so I always read the result carefully. Overall, I would recommend it to students and office workers, but only if they check the output before sending it.'
    }
  ],
  speaking: [
    {
      id: 'ask-ai-assistant',
      title: '请 AI 助手帮忙',
      subtitle: '让 AI 总结文章并解释术语',
      emoji: '💬',
      color: 'blue',
      roles: ['AI 助手', '用户'],
      lines: [
        { who: 1, en: 'Can you help me summarize this article in three sentences?', zh: '你能帮我用三句话总结这篇文章吗？' },
        { who: 0, en: 'Sure. Please paste the text, and I will keep the summary short and clear.', zh: '当然。请把文本贴过来，我会让总结简短清楚。' },
        { who: 1, en: 'Here it is. Could you also list the key terms?', zh: '给你。你也能列出关键术语吗？' },
        { who: 0, en: 'Of course. The key terms are machine learning, dataset, and bias.', zh: '当然可以。关键术语有机器学习、数据集和偏见。' },
        { who: 1, en: 'Thanks. Can you explain what bias means here?', zh: '谢谢。你能解释一下这里的偏见是什么意思吗？' },
        { who: 0, en: 'In this article, bias means that the training data treats some groups unfairly.', zh: '在这篇文章里，偏见指训练数据对某些群体不公平。' }
      ]
    },
    {
      id: 'explain-llm-to-friend',
      title: '给朋友解释大模型',
      subtitle: '用简单的话讲清楚',
      emoji: '🗣️',
      color: 'purple',
      roles: ['朋友', '你'],
      lines: [
        { who: 0, en: 'I keep hearing about large language models. What are they?', zh: '我总听到大语言模型，它们到底是什么？' },
        { who: 1, en: 'They are AI models trained on a huge amount of text to predict the next word.', zh: '它们是用海量文本训练出来、用来预测下一个词的 AI 模型。' },
        { who: 0, en: 'So how can it write a whole answer?', zh: '那它是怎么写出完整回答的？' },
        { who: 1, en: 'It predicts one token at a time and builds the answer step by step.', zh: '它每次预测一个词元，一步一步把回答搭起来。' },
        { who: 0, en: 'Can it make mistakes?', zh: '它会出错吗？' },
        { who: 1, en: 'Yes. Sometimes it hallucinates, so you should always check important facts.', zh: '会。它有时会产生幻觉，所以重要的事实一定要核对。' }
      ]
    },
    {
      id: 'team-adopt-ai',
      title: '团队要不要用 AI',
      subtitle: '和同事讨论引入 AI 工具',
      emoji: '👥',
      color: 'yellow',
      roles: ['经理', '同事'],
      lines: [
        { who: 0, en: 'Should we use an AI tool to draft our customer emails?', zh: '我们要不要用 AI 工具来起草客户邮件？' },
        { who: 1, en: 'I think it could save us a lot of time, especially for routine replies.', zh: '我觉得它能帮我们省很多时间，尤其是日常回复。' },
        { who: 0, en: 'What about privacy? These emails contain customer information.', zh: '隐私怎么办？这些邮件里有客户信息。' },
        { who: 1, en: 'Good point. We should remove personal data before we use the tool.', zh: '说得对。用工具之前，我们应该先去掉个人数据。' },
        { who: 0, en: 'And who will check the drafts?', zh: '那谁来检查草稿呢？' },
        { who: 1, en: 'A human should always review them before we send anything.', zh: '发送任何内容之前，都应该由人来审核。' }
      ]
    }
  ]
};

JIMI.registerLevel({
  id: 'ai',
  name: 'AI',
  stage: 'AI 英语 · 看懂 AI 世界',
  ageRange: 'AI 时代',
  emoji: '🤖',
  avatar: '🧑‍🔬',
  mascot: '🤖',
  coach: 'AI 助教',
  sentenceLead: '跟 AI 助教学一句',
  tagline: '机器学习、大模型、提示词、AI 伦理，读懂英文资料和产品文档',
  speech: { rate: 0.95, pitch: 1 },
  home: {
    eyebrow: '读懂 AI，才能用好 AI',
    greeting: '你好，AI 探索者！',
    copy: '从机器学习到大模型，把 AI 领域最常用的英文词汇和表达一个个拿下。',
    dateIcon: '🧪',
    dateTitle: '今天的 AI 英语',
    dateSub: '术语 · 提示词 · 阅读',
    heroLead: '读懂 AI 资料，',
    footnote: '每天 15 分钟，跟上 AI 的节奏',
    bubble: 'Hello, AI!',
    route: '先掌握基础术语、大模型与提示词、AI 伦理，之后会加入论文摘要、产品文档和行业报告阅读。'
  },
  rootsMaxTier: 3,
  modules: ['words', 'roots', 'sentences', 'listening', 'speaking', 'review', 'grammar', 'reading', 'writing', 'topics'],
  labels: {
    words: { title: 'AI 词汇', kicker: 'AI VOCAB', emoji: '📖', intro: '从基础概念到大模型、伦理与安全，术语配音标和例句。', tip: '记忆小窍门：把术语和你用过的 AI 工具联系起来，例如想想聊天时哪一次“幻觉”最离谱。' },
    sentences: { title: 'AI 句型', kicker: 'AI PHRASES', emoji: '🧩', intro: '描述 AI 原理、给 AI 下指令的常用句型，带干扰项。' },
    listening: { title: '听写训练', intro: '听发音选意思或拼写 AI 术语，答错的词会进入复习。' },
    speaking: { title: 'AI 口语', kicker: 'AI SPEAKING', intro: '请 AI 帮忙、给朋友解释大模型、和同事讨论引入 AI 工具，选一个角色开口练。' },
    grammar: { title: 'AI 语法', kicker: 'AI GRAMMAR', intro: '描述原理用被动语态，写提示词用祈使句，谈局限用情态动词。' },
    reading: { title: 'AI 阅读', kicker: 'AI READING', intro: '短小的 AI 科普与评论，读完做几道题。' },
    writing: { title: 'AI 写作', kicker: 'AI WRITING', intro: '写提示词、写观点、写产品评测，写完自动检查格式和关键句型。' },
    topics: { title: 'AI 专题', nav: '专题', kicker: 'AI TOPICS', intro: '按主题成组记词：基础概念、训练评估、大模型、应用、工作、伦理。' }
  },
  planned: [
    {
      id: 'prompt-library',
      icon: '📑',
      title: '提示词模板库',
      desc: '直接可套用的英文提示词模板，按场景分类。',
      items: ['写作、翻译、总结、编程等场景的提示词模板', '角色、任务、格式、限制的拆解练习', '提示词改写对比：差的与好的']
    },
    {
      id: 'paper-reading',
      icon: '📄',
      title: '论文与文档阅读',
      desc: '读懂 AI 论文摘要和产品文档里的常用表达。',
      items: ['论文摘要常见句式（We propose… / Our results show…）', 'API 文档与更新日志常用词', '技术博客节选精读']
    }
  ],
  roadmap: {
    words: ['补充计算机视觉、语音、机器人、AI 芯片等细分领域术语', '增加常见缩写（LLM、RAG、NLP、GPU 等）'],
    roots: ['补充 AI 领域常见词根（如 neuro-、cogn-、auto-、gener-）'],
    sentences: ['补充论文摘要和产品更新日志里的常用句式'],
    listening: ['增加 AI 科普播客和访谈听力'],
    speaking: ['补充面试、演示和跨团队沟通中的 AI 话题对话'],
    grammar: ['补充条件句（If the model is…）和比较结构（more accurate than…）'],
    reading: ['补充科技新闻、白皮书和论文摘要节选'],
    writing: ['补充提示词模板、技术说明和邮件写作'],
    topics: ['补充自然语言处理、计算机视觉、机器人等细分专题']
  },
  content: aiContent
});
