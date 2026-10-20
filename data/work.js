// 职场学段：面向已工作的学习者。词汇分三块——职场通用、程序员、产品经理，后续可继续增加其他行业。
const workContent = {
  words: [
    // —— 职场通用 ——
    { word: 'deadline', ipa: '/ˈded.laɪn/', pos: 'n.', meaning: '截止日期', emoji: '⏰', example: 'The deadline for this project is next Friday.', exampleZh: '这个项目的截止日期是下周五。' },
    { word: 'colleague', ipa: '/ˈkɑː.liːɡ/', pos: 'n.', meaning: '同事', emoji: '🧑‍🤝‍🧑', example: 'My colleague is helping me with the report.', exampleZh: '我的同事正在帮我做报告。' },
    { word: 'schedule', ipa: '/ˈskedʒ.uːl/', pos: 'n. / v.', meaning: '日程；安排', emoji: '🗓️', example: 'Could you check your schedule for Monday?', exampleZh: '你能看一下周一的日程吗？' },
    { word: 'agenda', ipa: '/əˈdʒen.də/', pos: 'n.', meaning: '议程', emoji: '📋', example: 'Please send me the agenda before the meeting.', exampleZh: '请在会议前把议程发给我。' },
    { word: 'feedback', ipa: '/ˈfiːd.bæk/', pos: 'n.', meaning: '反馈', emoji: '💬', example: 'I would like to get your feedback on my draft.', exampleZh: '我想听听你对我草稿的反馈。' },
    { word: 'priority', ipa: '/praɪˈɔːr.ə.t̬i/', pos: 'n.', meaning: '优先事项', emoji: '🥇', example: 'Fixing this issue is our top priority.', exampleZh: '解决这个问题是我们的首要任务。' },
    { word: 'workload', ipa: '/ˈwɝːk.loʊd/', pos: 'n.', meaning: '工作量', emoji: '📦', example: 'My workload has doubled this month.', exampleZh: '这个月我的工作量翻了一倍。' },
    { word: 'collaborate', ipa: '/kəˈlæb.ə.reɪt/', pos: 'v.', meaning: '合作', emoji: '🤝', example: 'We collaborate closely with the design team.', exampleZh: '我们和设计团队紧密合作。' },
    { word: 'negotiate', ipa: '/nɪˈɡoʊ.ʃi.eɪt/', pos: 'v.', meaning: '谈判；协商', emoji: '🗣️', example: 'We need to negotiate the terms of the contract.', exampleZh: '我们需要就合同条款进行协商。' },
    { word: 'proposal', ipa: '/prəˈpoʊ.zəl/', pos: 'n.', meaning: '提案；方案', emoji: '📝', example: 'She presented a proposal to the board.', exampleZh: '她向董事会提交了一份方案。' },
    { word: 'budget', ipa: '/ˈbʌdʒ.ɪt/', pos: 'n.', meaning: '预算', emoji: '💰', example: 'We have a limited budget for this campaign.', exampleZh: '这次活动的预算有限。' },
    { word: 'stakeholder', ipa: '/ˈsteɪkˌhoʊl.dɚ/', pos: 'n.', meaning: '利益相关方', emoji: '👥', example: 'We should keep all stakeholders informed.', exampleZh: '我们应该让所有利益相关方了解情况。' },
    { word: 'onboarding', ipa: '/ˈɑːnˌbɔːr.dɪŋ/', pos: 'n.', meaning: '新员工入职培训', emoji: '🎒', example: 'New employees complete onboarding in their first week.', exampleZh: '新员工在第一周完成入职培训。' },
    { word: 'performance review', ipa: '/pɚˈfɔːr.məns rɪˈvjuː/', pos: 'n.', meaning: '绩效评估', emoji: '📈', example: 'My performance review is scheduled for Thursday.', exampleZh: '我的绩效评估安排在周四。' },
    { word: 'promotion', ipa: '/prəˈmoʊ.ʃən/', pos: 'n.', meaning: '晋升', emoji: '🏅', example: 'He got a promotion after two years.', exampleZh: '他两年后得到了晋升。' },
    { word: 'resign', ipa: '/rɪˈzaɪn/', pos: 'v.', meaning: '辞职', emoji: '🚪', example: 'She decided to resign and start her own company.', exampleZh: '她决定辞职，创办自己的公司。' },
    { word: 'reimburse', ipa: '/ˌriː.ɪmˈbɝːs/', pos: 'v.', meaning: '报销', emoji: '🧾', example: 'The company will reimburse your travel expenses.', exampleZh: '公司会报销你的差旅费用。' },
    { word: 'attachment', ipa: '/əˈtætʃ.mənt/', pos: 'n.', meaning: '附件', emoji: '📎', example: 'Please see the attachment for details.', exampleZh: '详情请见附件。' },
    { word: 'forward', ipa: '/ˈfɔːr.wɚd/', pos: 'v.', meaning: '转发', emoji: '↪️', example: 'Could you forward this email to the team?', exampleZh: '你能把这封邮件转发给团队吗？' },
    { word: 'confirm', ipa: '/kənˈfɝːm/', pos: 'v.', meaning: '确认', emoji: '✅', example: 'Please confirm your attendance by Wednesday.', exampleZh: '请在周三前确认你是否出席。' },
    { word: 'postpone', ipa: '/poʊstˈpoʊn/', pos: 'v.', meaning: '推迟', emoji: '⏳', example: 'We have to postpone the launch by a week.', exampleZh: '我们不得不把上线推迟一周。' },
    { word: 'urgent', ipa: '/ˈɝː.dʒənt/', pos: 'adj.', meaning: '紧急的', emoji: '🚨', example: 'This is an urgent request from the client.', exampleZh: '这是客户的一个紧急请求。' },
    { word: 'availability', ipa: '/əˌveɪ.ləˈbɪl.ə.t̬i/', pos: 'n.', meaning: '空闲时间；可用性', emoji: '📆', example: 'Please let me know your availability this week.', exampleZh: '请告诉我你这周什么时候有空。' },
    { word: 'delegate', ipa: '/ˈdel.ə.ɡeɪt/', pos: 'v.', meaning: '委派', emoji: '🧩', example: 'A good manager knows how to delegate tasks.', exampleZh: '好的经理懂得如何分派任务。' },
    { word: 'minutes', ipa: '/ˈmɪn.ɪts/', pos: 'n.', meaning: '会议纪要', emoji: '🗒️', example: 'I will send out the minutes after the meeting.', exampleZh: '会后我会把会议纪要发出去。' },
    { word: 'overtime', ipa: '/ˈoʊ.vɚ.taɪm/', pos: 'n.', meaning: '加班', emoji: '🌙', example: 'We worked overtime to meet the deadline.', exampleZh: '我们加班赶上了截止日期。' },
    { word: 'bandwidth', ipa: '/ˈbænd.wɪθ/', pos: 'n.', meaning: '精力；余力', emoji: '🔋', example: 'I don’t have the bandwidth to take on another project.', exampleZh: '我没有余力再接一个项目了。' },
    { word: 'touch base', ipa: '/tʌtʃ beɪs/', pos: 'phr.', meaning: '保持联系；简单碰头', emoji: '👋', example: 'Let’s touch base next week.', exampleZh: '我们下周碰个头。' },
    // —— 程序员 ——
    { word: 'deploy', ipa: '/dɪˈplɔɪ/', pos: 'v.', meaning: '部署', emoji: '🚀', example: 'We deploy the new version every Friday.', exampleZh: '我们每周五部署新版本。' },
    { word: 'repository', ipa: '/rɪˈpɑː.zə.tɔːr.i/', pos: 'n.', meaning: '代码仓库', emoji: '🗄️', example: 'You can find the code in the main repository.', exampleZh: '你可以在主代码仓库里找到这些代码。' },
    { word: 'commit', ipa: '/kəˈmɪt/', pos: 'v. / n.', meaning: '提交（代码）', emoji: '✍️', example: 'Please commit your changes before you leave.', exampleZh: '下班前请提交你的改动。' },
    { word: 'branch', ipa: '/bræntʃ/', pos: 'n.', meaning: '分支', emoji: '🌿', example: 'I created a new branch for this feature.', exampleZh: '我为这个功能新建了一个分支。' },
    { word: 'merge', ipa: '/mɝːdʒ/', pos: 'v.', meaning: '合并', emoji: '🔀', example: 'Wait for the review before you merge the code.', exampleZh: '等评审通过后再合并代码。' },
    { word: 'pull request', ipa: '/ˈpʊl rɪˌkwest/', pos: 'n.', meaning: '合并请求', emoji: '📥', example: 'I opened a pull request for the login fix.', exampleZh: '我为登录问题的修复提交了一个合并请求。' },
    { word: 'code review', ipa: '/koʊd rɪˈvjuː/', pos: 'n.', meaning: '代码评审', emoji: '🔍', example: 'Every change needs a code review.', exampleZh: '每一处改动都需要代码评审。' },
    { word: 'bug', ipa: '/bʌɡ/', pos: 'n.', meaning: '程序错误', emoji: '🐛', example: 'We found a serious bug in the payment page.', exampleZh: '我们在支付页面发现了一个严重的错误。' },
    { word: 'debug', ipa: '/diːˈbʌɡ/', pos: 'v.', meaning: '调试', emoji: '🪲', example: 'It took me two hours to debug this function.', exampleZh: '调试这个函数花了我两个小时。' },
    { word: 'refactor', ipa: '/riːˈfæk.tɚ/', pos: 'v.', meaning: '重构', emoji: '🧹', example: 'We plan to refactor the old module next month.', exampleZh: '我们计划下个月重构这个旧模块。' },
    { word: 'framework', ipa: '/ˈfreɪm.wɝːk/', pos: 'n.', meaning: '框架', emoji: '🧱', example: 'Which framework are you using for the frontend?', exampleZh: '前端你们用的是哪个框架？' },
    { word: 'API', ipa: '/ˌeɪ.piːˈaɪ/', pos: 'n.', meaning: '应用程序接口', emoji: '🔌', example: 'The mobile app calls this API to load data.', exampleZh: '移动应用通过这个接口加载数据。' },
    { word: 'backend', ipa: '/ˈbæk.end/', pos: 'n.', meaning: '后端', emoji: '🖥️', example: 'She works on the backend of our website.', exampleZh: '她负责我们网站的后端。' },
    { word: 'frontend', ipa: '/ˈfrʌnt.end/', pos: 'n.', meaning: '前端', emoji: '🎨', example: 'The frontend team fixed the layout issue.', exampleZh: '前端团队修复了布局问题。' },
    { word: 'database', ipa: '/ˈdeɪ.t̬ə.beɪs/', pos: 'n.', meaning: '数据库', emoji: '🗃️', example: 'All user data is stored in the database.', exampleZh: '所有用户数据都存储在数据库里。' },
    { word: 'latency', ipa: '/ˈleɪ.t̬ən.si/', pos: 'n.', meaning: '延迟', emoji: '⏱️', example: 'High latency makes the app feel slow.', exampleZh: '高延迟会让应用显得很慢。' },
    { word: 'scalable', ipa: '/ˈskeɪ.lə.bəl/', pos: 'adj.', meaning: '可扩展的', emoji: '📈', example: 'We need a scalable solution for millions of users.', exampleZh: '我们需要一个能支撑数百万用户的可扩展方案。' },
    { word: 'legacy code', ipa: '/ˈleɡ.ə.si koʊd/', pos: 'n.', meaning: '遗留代码', emoji: '🕸️', example: 'Nobody wants to touch the legacy code.', exampleZh: '没有人愿意去碰那些遗留代码。' },
    { word: 'dependency', ipa: '/dɪˈpen.dən.si/', pos: 'n.', meaning: '依赖项', emoji: '🔗', example: 'Please update the outdated dependency.', exampleZh: '请更新那个过时的依赖项。' },
    { word: 'documentation', ipa: '/ˌdɑː.kjə.menˈteɪ.ʃən/', pos: 'n.', meaning: '技术文档', emoji: '📚', example: 'Good documentation saves everyone time.', exampleZh: '好的文档能为所有人节省时间。' },
    { word: 'rollback', ipa: '/ˈroʊl.bæk/', pos: 'n. / v.', meaning: '回滚', emoji: '⏪', example: 'We had to do a rollback after the release failed.', exampleZh: '发布失败后，我们不得不回滚。' },
    { word: 'hotfix', ipa: '/ˈhɑːt.fɪks/', pos: 'n.', meaning: '紧急修复', emoji: '🩹', example: 'We shipped a hotfix to stop the crashes.', exampleZh: '我们发布了一个紧急修复来解决崩溃问题。' },
    { word: 'authentication', ipa: '/ɑːˌθen.t̬ɪˈkeɪ.ʃən/', pos: 'n.', meaning: '身份验证', emoji: '🔐', example: 'The app uses two-step authentication.', exampleZh: '这个应用使用两步身份验证。' },
    { word: 'encryption', ipa: '/ɪnˈkrɪp.ʃən/', pos: 'n.', meaning: '加密', emoji: '🔒', example: 'Encryption protects customer data.', exampleZh: '加密能保护客户数据。' },
    { word: 'cache', ipa: '/kæʃ/', pos: 'n. / v.', meaning: '缓存', emoji: '⚡', example: 'Clear the cache and try again.', exampleZh: '清除缓存后再试一次。' },
    { word: 'optimize', ipa: '/ˈɑːp.tə.maɪz/', pos: 'v.', meaning: '优化', emoji: '🔧', example: 'We optimized the query and cut the load time in half.', exampleZh: '我们优化了查询，把加载时间缩短了一半。' },
    { word: 'compile', ipa: '/kəmˈpaɪl/', pos: 'v.', meaning: '编译', emoji: '⚙️', example: 'The project fails to compile on my machine.', exampleZh: '这个项目在我的电脑上编译失败。' },
    { word: 'technical debt', ipa: '/ˈtek.nɪ.kəl det/', pos: 'n.', meaning: '技术债务', emoji: '💳', example: 'Quick fixes today create technical debt tomorrow.', exampleZh: '今天的临时补丁会成为明天的技术债务。' },
    { word: 'unit test', ipa: '/ˈjuː.nɪt test/', pos: 'n.', meaning: '单元测试', emoji: '🧪', example: 'Add a unit test for every new function.', exampleZh: '每个新函数都要加一个单元测试。' },
    // —— 产品经理 ——
    { word: 'roadmap', ipa: '/ˈroʊd.mæp/', pos: 'n.', meaning: '产品路线图', emoji: '🗺️', example: 'The roadmap shows our plan for the next year.', exampleZh: '路线图展示了我们未来一年的计划。' },
    { word: 'requirement', ipa: '/rɪˈkwaɪr.mənt/', pos: 'n.', meaning: '需求', emoji: '📌', example: 'The client changed the requirements again.', exampleZh: '客户又改了需求。' },
    { word: 'user story', ipa: '/ˈjuː.zɚ ˈstɔːr.i/', pos: 'n.', meaning: '用户故事', emoji: '📖', example: 'Each user story describes what a user wants to do.', exampleZh: '每个用户故事都描述了用户想做的事。' },
    { word: 'backlog', ipa: '/ˈbæk.lɑːɡ/', pos: 'n.', meaning: '待办事项列表', emoji: '🗂️', example: 'The backlog has more than two hundred items.', exampleZh: '待办事项列表里有两百多项。' },
    { word: 'sprint', ipa: '/sprɪnt/', pos: 'n.', meaning: '迭代周期（冲刺）', emoji: '🏃', example: 'Our sprint lasts two weeks.', exampleZh: '我们的迭代周期是两周。' },
    { word: 'milestone', ipa: '/ˈmaɪl.stoʊn/', pos: 'n.', meaning: '里程碑', emoji: '🚩', example: 'The beta release is an important milestone.', exampleZh: '测试版发布是一个重要的里程碑。' },
    { word: 'prototype', ipa: '/ˈproʊ.t̬ə.taɪp/', pos: 'n.', meaning: '原型', emoji: '🧸', example: 'We tested the prototype with five users.', exampleZh: '我们用五位用户测试了这个原型。' },
    { word: 'wireframe', ipa: '/ˈwaɪr.freɪm/', pos: 'n.', meaning: '线框图', emoji: '📐', example: 'I sketched a wireframe of the new page.', exampleZh: '我画了新页面的线框图。' },
    { word: 'MVP', ipa: '/ˌem.viːˈpiː/', pos: 'n.', meaning: '最小可行产品', emoji: '🌱', example: 'Let’s build an MVP before adding more features.', exampleZh: '在增加更多功能之前，先做一个最小可行产品。' },
    { word: 'scope', ipa: '/skoʊp/', pos: 'n.', meaning: '范围', emoji: '🎯', example: 'This request is outside the scope of the project.', exampleZh: '这个请求超出了项目的范围。' },
    { word: 'scope creep', ipa: '/skoʊp kriːp/', pos: 'n.', meaning: '需求蔓延', emoji: '🐙', example: 'Scope creep is the main reason for our delay.', exampleZh: '需求蔓延是我们延期的主要原因。' },
    { word: 'trade-off', ipa: '/ˈtreɪd.ɔːf/', pos: 'n.', meaning: '权衡', emoji: '⚖️', example: 'There is always a trade-off between speed and quality.', exampleZh: '速度和质量之间总要权衡。' },
    { word: 'launch', ipa: '/lɔːntʃ/', pos: 'v. / n.', meaning: '上线；发布', emoji: '🛫', example: 'We will launch the new app in March.', exampleZh: '我们将在三月上线新应用。' },
    { word: 'iteration', ipa: '/ˌɪt̬.əˈreɪ.ʃən/', pos: 'n.', meaning: '迭代', emoji: '🔁', example: 'Each iteration brings us closer to the goal.', exampleZh: '每一次迭代都让我们离目标更近。' },
    { word: 'user experience', ipa: '/ˈjuː.zɚ ɪkˈspɪr.i.əns/', pos: 'n.', meaning: '用户体验', emoji: '😊', example: 'A simple design improves the user experience.', exampleZh: '简洁的设计能提升用户体验。' },
    { word: 'conversion rate', ipa: '/kənˈvɝː.ʒən reɪt/', pos: 'n.', meaning: '转化率', emoji: '🛒', example: 'The new button increased our conversion rate.', exampleZh: '新按钮提高了我们的转化率。' },
    { word: 'retention', ipa: '/rɪˈten.ʃən/', pos: 'n.', meaning: '留存率', emoji: '🧲', example: 'User retention drops after the first week.', exampleZh: '用户留存率在第一周之后下降。' },
    { word: 'churn', ipa: '/tʃɝːn/', pos: 'n.', meaning: '用户流失', emoji: '📉', example: 'We need to reduce customer churn.', exampleZh: '我们需要降低客户流失。' },
    { word: 'KPI', ipa: '/ˌkeɪ.piːˈaɪ/', pos: 'n.', meaning: '关键绩效指标', emoji: '🏁', example: 'Our main KPI this quarter is active users.', exampleZh: '本季度我们的核心指标是活跃用户数。' },
    { word: 'metric', ipa: '/ˈmet.rɪk/', pos: 'n.', meaning: '指标', emoji: '📏', example: 'Which metric shows whether the feature works?', exampleZh: '哪个指标能说明这个功能有没有效果？' },
    { word: 'A/B test', ipa: '/ˌeɪˈbiː test/', pos: 'n.', meaning: '对照实验', emoji: '⚗️', example: 'We ran an A/B test on the sign-up page.', exampleZh: '我们对注册页做了一次对照实验。' },
    { word: 'user persona', ipa: '/ˈjuː.zɚ pɚˈsoʊ.nə/', pos: 'n.', meaning: '用户画像', emoji: '🧑‍🎤', example: 'We created three user personas for the new product.', exampleZh: '我们为新产品建立了三个用户画像。' },
    { word: 'pain point', ipa: '/ˈpeɪn pɔɪnt/', pos: 'n.', meaning: '痛点', emoji: '😣', example: 'Slow loading is the biggest pain point for users.', exampleZh: '加载慢是用户最大的痛点。' },
    { word: 'feature', ipa: '/ˈfiː.tʃɚ/', pos: 'n.', meaning: '功能；特性', emoji: '✨', example: 'Which feature should we build first?', exampleZh: '我们应该先做哪个功能？' },
    { word: 'competitor', ipa: '/kəmˈpet̬.ə.t̬ɚ/', pos: 'n.', meaning: '竞争对手', emoji: '🥊', example: 'Our competitor released a similar product last month.', exampleZh: '我们的竞争对手上个月发布了类似的产品。' },
    { word: 'go-to-market', ipa: '/ˌɡoʊ.tə ˈmɑːr.kɪt/', pos: 'adj.', meaning: '上市策略', emoji: '🛍️', example: 'The go-to-market plan is ready for review.', exampleZh: '上市策略方案已经可以评审了。' },
    { word: 'acceptance criteria', ipa: '/əkˈsep.təns kraɪˈtɪr.i.ə/', pos: 'n.', meaning: '验收标准', emoji: '☑️', example: 'Please write clear acceptance criteria for each story.', exampleZh: '请为每个用户故事写清楚验收标准。' },
    { word: 'market research', ipa: '/ˈmɑːr.kɪt ˈriː.sɝːtʃ/', pos: 'n.', meaning: '市场调研', emoji: '🔎', example: 'Market research helped us understand our customers.', exampleZh: '市场调研帮助我们了解客户。' },
    { word: 'release notes', ipa: '/rɪˈliːs noʊts/', pos: 'n.', meaning: '发布说明', emoji: '🗒️', example: 'The release notes list all the new features.', exampleZh: '发布说明列出了所有新功能。' }
  ],
  sentences: [
    {
      id: 'could-you-send',
      sentence: 'Could you send me the report by Friday?',
      translation: '你能在周五前把报告发给我吗？',
      hint: 'Could you…? 是比 Can you…? 更礼貌的请求；by + 时间表示“不晚于”',
      emoji: '📨',
      extraWords: ['can']
    },
    {
      id: 'push-deadline',
      sentence: 'We need to push the deadline back by two days.',
      translation: '我们需要把截止日期推迟两天。',
      hint: 'push … back 表示推迟；by two days 表示推迟的幅度',
      emoji: '⏳',
      extraWords: ['forward']
    },
    {
      id: 'has-been-deployed',
      sentence: 'The new feature has been deployed to production.',
      translation: '新功能已经部署到生产环境了。',
      hint: '现在完成时被动语态：has / have been + 过去分词',
      emoji: '🚀',
      extraWords: ['have']
    },
    {
      id: 'blocked-by',
      sentence: 'I am blocked by a missing API document.',
      translation: '我被一份缺失的接口文档卡住了。',
      hint: 'be blocked by…：被……卡住（站会汇报阻碍时常用）',
      emoji: '🚧',
      extraWords: ['was']
    },
    {
      id: 'prioritize-features',
      sentence: 'Let us prioritize the features that users need most.',
      translation: '我们来优先做用户最需要的功能。',
      hint: 'Let us + 动词原形；that 引导定语从句，修饰 features',
      emoji: '🥇',
      extraWords: ['least']
    },
    {
      id: 'circle-back',
      sentence: 'I will circle back with you after the meeting.',
      translation: '会后我再回头找你。',
      hint: 'circle back 是职场常用语，表示“之后再回来跟进”',
      emoji: '🔄',
      extraWords: ['would']
    }
  ],
  reading: [
    {
      id: 'write-clear-email',
      title: '怎样写一封清晰的邮件',
      subtitle: 'How to Write a Clear Email',
      level: '职场通用 · 说明文',
      cover: '📧',
      color: 'blue',
      passage: [
        { en: 'A good work email is short, clear and easy to act on.', zh: '好的工作邮件简短、清晰，而且让人容易采取行动。' },
        { en: 'Start with a subject line that tells the reader exactly what the email is about.', zh: '先写一个能准确说明邮件内容的主题行。' },
        { en: 'In the first sentence, state your request or the main point.', zh: '在第一句话里说明你的请求或要点。' },
        { en: 'If you need something, say what you need and when you need it.', zh: '如果你需要什么，要说清楚需要什么以及什么时候要。' },
        { en: 'Finally, read the email once more before you press send.', zh: '最后，在点击发送之前再读一遍。' }
      ],
      keywords: [
        { word: 'subject line', meaning: '邮件主题行' },
        { word: 'act on', meaning: '据此采取行动' },
        { word: 'state', meaning: '陈述；说明' }
      ],
      questions: [
        { q: 'What should the subject line do?', options: ['Make the email look long.', 'Tell the reader what the email is about.', 'Ask the reader to reply quickly.', 'Include the writer’s name.'], answer: 1, explain: '第二句：tells the reader exactly what the email is about' },
        { q: 'Where should you state your main point?', options: ['In the last sentence.', 'In the attachment.', 'In the first sentence.', 'In a separate email.'], answer: 2, explain: '第三句：In the first sentence' },
        { q: 'What should you do before sending the email?', options: ['Forward it to a friend.', 'Read it once more.', 'Delete the subject line.', 'Wait for a reply.'], answer: 1, explain: '最后一句：read the email once more' }
      ]
    },
    {
      id: 'why-code-review',
      title: '为什么要做代码评审',
      subtitle: 'Why Code Reviews Matter',
      level: '程序员 · 说明文',
      cover: '🔍',
      color: 'purple',
      passage: [
        { en: 'Many teams require a code review before any change is merged.', zh: '许多团队要求在合并任何改动之前先做代码评审。' },
        { en: 'A second pair of eyes can catch bugs that the author did not notice.', zh: '多一双眼睛能发现作者没注意到的错误。' },
        { en: 'Reviews also help the team share knowledge, because everyone learns how different parts of the system work.', zh: '评审还能帮助团队共享知识，因为每个人都能了解系统不同部分是怎么运作的。' },
        { en: 'However, a good review should be polite and specific, not personal.', zh: '不过，好的评审应该礼貌而具体，而不是针对个人。' },
        { en: 'For example, “Could we rename this variable to make it clearer?” works better than “Your naming is bad.”', zh: '例如，“我们能不能把这个变量改个名字，让它更清楚？”比“你的命名很糟”要好。' }
      ],
      keywords: [
        { word: 'merge', meaning: '合并' },
        { word: 'variable', meaning: '变量' },
        { word: 'specific', meaning: '具体的' }
      ],
      questions: [
        { q: 'Why can a second reviewer be useful?', options: ['They can write all the code.', 'They can catch bugs the author missed.', 'They can deploy the code.', 'They can replace the tests.'], answer: 1, explain: '第二句：catch bugs that the author did not notice' },
        { q: 'According to the passage, how else do reviews help the team?', options: ['They reduce the number of meetings.', 'They make the code run faster.', 'They help team members share knowledge.', 'They remove the need for documentation.'], answer: 2, explain: '第三句：share knowledge' },
        { q: 'Which comment follows the advice in the passage?', options: ['Your naming is bad.', 'Why did you write this?', 'Could we rename this variable to make it clearer?', 'Nobody can read this.'], answer: 2, explain: '最后一句给出了礼貌而具体的例子' }
      ]
    },
    {
      id: 'what-is-mvp',
      title: '什么是最小可行产品',
      subtitle: 'What Is an MVP?',
      level: '产品经理 · 说明文',
      cover: '🌱',
      color: 'yellow',
      passage: [
        { en: 'An MVP, or minimum viable product, is the simplest version of a product that can still solve a real problem.', zh: 'MVP，即最小可行产品，是仍然能解决真实问题的最简单版本。' },
        { en: 'Instead of building every feature at once, a team launches the core idea and collects feedback.', zh: '团队不是一次做完所有功能，而是先上线核心想法并收集反馈。' },
        { en: 'This approach saves time and money because the team learns what users really want before investing more.', zh: '这种做法节省时间和金钱，因为团队在投入更多之前，先了解了用户真正想要什么。' },
        { en: 'However, an MVP is not a low-quality product; it should still work well for its main purpose.', zh: '不过，MVP 不是低质量的产品；它在核心用途上仍然要好用。' },
        { en: 'After the launch, the team uses data to decide which features to build next.', zh: '上线之后，团队根据数据决定接下来做哪些功能。' }
      ],
      keywords: [
        { word: 'viable', meaning: '可行的' },
        { word: 'core', meaning: '核心的' },
        { word: 'invest', meaning: '投入' }
      ],
      questions: [
        { q: 'What is an MVP?', options: ['A product with every feature.', 'The simplest version that can solve a real problem.', 'A product for the most valuable players.', 'A design that has no users.'], answer: 1, explain: '第一句给出了定义' },
        { q: 'Why does an MVP save time and money?', options: ['The team stops talking to users.', 'The team can skip testing.', 'The team learns what users want before investing more.', 'The team hires fewer people.'], answer: 2, explain: '第三句：learns what users really want before investing more' },
        { q: 'What does the author say about MVP quality?', options: ['It can be very poor.', 'It should still work well for its main purpose.', 'It does not need to be tested.', 'It is only for large companies.'], answer: 1, explain: '第四句：should still work well for its main purpose' }
      ]
    }
  ],
  topics: [
    {
      id: 'workplace-basics',
      title: '职场通用',
      subtitle: '每天都会用到的职场词汇',
      emoji: '🏢',
      color: 'yellow',
      words: [
        { word: 'deadline', meaning: '截止日期', emoji: '⏰' },
        { word: 'colleague', meaning: '同事', emoji: '🧑‍🤝‍🧑' },
        { word: 'workload', meaning: '工作量', emoji: '📦' },
        { word: 'priority', meaning: '优先事项', emoji: '🥇' },
        { word: 'budget', meaning: '预算', emoji: '💰' },
        { word: 'proposal', meaning: '提案', emoji: '📝' },
        { word: 'feedback', meaning: '反馈', emoji: '💬' },
        { word: 'overtime', meaning: '加班', emoji: '🌙' },
        { word: 'promotion', meaning: '晋升', emoji: '🏅' },
        { word: 'resign', meaning: '辞职', emoji: '🚪' }
      ],
      sentence: 'The deadline is tight, so we need to set our priorities.',
      translation: '截止日期很紧，所以我们要确定优先级。',
      quizWord: 'deadline'
    },
    {
      id: 'meetings-email',
      title: '会议与邮件',
      subtitle: '开会、写邮件常用表达',
      emoji: '📧',
      color: 'blue',
      words: [
        { word: 'agenda', meaning: '议程', emoji: '📋' },
        { word: 'minutes', meaning: '会议纪要', emoji: '🗒️' },
        { word: 'attachment', meaning: '附件', emoji: '📎' },
        { word: 'forward', meaning: '转发', emoji: '↪️' },
        { word: 'confirm', meaning: '确认', emoji: '✅' },
        { word: 'postpone', meaning: '推迟', emoji: '⏳' },
        { word: 'urgent', meaning: '紧急的', emoji: '🚨' },
        { word: 'availability', meaning: '空闲时间', emoji: '📆' },
        { word: 'touch base', meaning: '简单碰头', emoji: '👋' },
        { word: 'follow up', meaning: '跟进', emoji: '🔔' }
      ],
      sentence: 'I will send the minutes and follow up on the action items.',
      translation: '我会发会议纪要，并跟进各项待办。',
      quizWord: 'agenda'
    },
    {
      id: 'dev-workflow',
      title: '程序员 · 开发流程',
      subtitle: '写代码、提交、评审、上线',
      emoji: '🧑‍💻',
      color: 'purple',
      words: [
        { word: 'repository', meaning: '代码仓库', emoji: '🗄️' },
        { word: 'commit', meaning: '提交代码', emoji: '✍️' },
        { word: 'branch', meaning: '分支', emoji: '🌿' },
        { word: 'merge', meaning: '合并', emoji: '🔀' },
        { word: 'pull request', meaning: '合并请求', emoji: '📥' },
        { word: 'code review', meaning: '代码评审', emoji: '🔍' },
        { word: 'deploy', meaning: '部署', emoji: '🚀' },
        { word: 'rollback', meaning: '回滚', emoji: '⏪' },
        { word: 'hotfix', meaning: '紧急修复', emoji: '🩹' },
        { word: 'documentation', meaning: '技术文档', emoji: '📚' }
      ],
      sentence: 'I will open a pull request once the tests pass.',
      translation: '测试通过后我就提交合并请求。',
      quizWord: 'branch'
    },
    {
      id: 'dev-quality',
      title: '程序员 · 质量与架构',
      subtitle: '排错、优化与系统设计',
      emoji: '🛠️',
      color: 'orange',
      words: [
        { word: 'bug', meaning: '程序错误', emoji: '🐛' },
        { word: 'debug', meaning: '调试', emoji: '🪲' },
        { word: 'refactor', meaning: '重构', emoji: '🧹' },
        { word: 'latency', meaning: '延迟', emoji: '⏱️' },
        { word: 'scalable', meaning: '可扩展的', emoji: '📈' },
        { word: 'cache', meaning: '缓存', emoji: '⚡' },
        { word: 'dependency', meaning: '依赖项', emoji: '🔗' },
        { word: 'legacy code', meaning: '遗留代码', emoji: '🕸️' },
        { word: 'technical debt', meaning: '技术债务', emoji: '💳' },
        { word: 'unit test', meaning: '单元测试', emoji: '🧪' }
      ],
      sentence: 'We need to refactor this module to reduce technical debt.',
      translation: '我们需要重构这个模块来减少技术债务。',
      quizWord: 'bug'
    },
    {
      id: 'pm-planning',
      title: '产品经理 · 规划与协作',
      subtitle: '需求、迭代与交付',
      emoji: '🗺️',
      color: 'pink',
      words: [
        { word: 'roadmap', meaning: '产品路线图', emoji: '🗺️' },
        { word: 'requirement', meaning: '需求', emoji: '📌' },
        { word: 'user story', meaning: '用户故事', emoji: '📖' },
        { word: 'backlog', meaning: '待办事项列表', emoji: '🗂️' },
        { word: 'sprint', meaning: '迭代周期', emoji: '🏃' },
        { word: 'milestone', meaning: '里程碑', emoji: '🚩' },
        { word: 'scope', meaning: '范围', emoji: '🎯' },
        { word: 'trade-off', meaning: '权衡', emoji: '⚖️' },
        { word: 'MVP', meaning: '最小可行产品', emoji: '🌱' },
        { word: 'acceptance criteria', meaning: '验收标准', emoji: '☑️' }
      ],
      sentence: 'Let us review the backlog before the next sprint.',
      translation: '我们在下个迭代前先过一遍待办列表。',
      quizWord: 'roadmap'
    },
    {
      id: 'pm-growth',
      title: '产品经理 · 数据与增长',
      subtitle: '指标、实验与市场',
      emoji: '📊',
      color: 'blue',
      words: [
        { word: 'KPI', meaning: '关键绩效指标', emoji: '🏁' },
        { word: 'metric', meaning: '指标', emoji: '📏' },
        { word: 'conversion rate', meaning: '转化率', emoji: '🛒' },
        { word: 'retention', meaning: '留存率', emoji: '🧲' },
        { word: 'churn', meaning: '用户流失', emoji: '📉' },
        { word: 'A/B test', meaning: '对照实验', emoji: '⚗️' },
        { word: 'user persona', meaning: '用户画像', emoji: '🧑‍🎤' },
        { word: 'pain point', meaning: '痛点', emoji: '😣' },
        { word: 'competitor', meaning: '竞争对手', emoji: '🥊' },
        { word: 'launch', meaning: '上线', emoji: '🛫' }
      ],
      sentence: 'We use an A/B test to improve the conversion rate.',
      translation: '我们用对照实验来提高转化率。',
      quizWord: 'KPI'
    }
  ],
  grammar: [
    {
      id: 'polite-requests',
      title: '礼貌地提出请求',
      subtitle: 'could / would / may',
      emoji: '🙏',
      color: 'blue',
      summary: '同事、上级和客户面前，用情态动词的过去形式听起来更客气。',
      points: [
        {
          rule: '请别人做事：Could / Would you + 动词原形…?',
          note: 'Could you 比 Can you 更礼貌；Would you mind + doing 也很常用。',
          examples: [
            { en: 'Could you send me the file by noon?', zh: '你能在中午前把文件发给我吗？' },
            { en: 'Would you mind checking my draft?', zh: '你介意帮我看一下草稿吗？' }
          ]
        },
        {
          rule: '表达自己想做的事：I would like to… / I was wondering if…',
          examples: [
            { en: 'I would like to schedule a call with you.', zh: '我想和你约一个电话会议。' },
            { en: 'I was wondering if you could review this proposal.', zh: '不知道你能否评审一下这份方案。' }
          ]
        },
        {
          rule: '委婉地拒绝或表达不同意见：I’m afraid… / I’m not sure that…',
          examples: [
            { en: 'I’m afraid I can’t make it on Friday.', zh: '恐怕我周五去不了。' },
            { en: 'I’m not sure that plan will work.', zh: '我不确定这个计划行得通。' }
          ]
        }
      ],
      exercises: [
        { q: '___ you send me the report by Friday?', options: ['Could', 'Did', 'Are', 'Do'], answer: 0, explain: 'Could you…? 是礼貌的请求句型' },
        { q: 'I ___ like to book a meeting room for tomorrow.', options: ['will', 'would', 'am', 'did'], answer: 1, explain: 'I would like to… 表达礼貌的愿望' },
        { q: 'Would you mind ___ the window?', options: ['close', 'to close', 'closing', 'closed'], answer: 2, explain: 'Would you mind 后接动名词' }
      ]
    },
    {
      id: 'status-update',
      title: '汇报进度',
      subtitle: '现在完成时与一般将来时',
      emoji: '📣',
      color: 'yellow',
      summary: '站会、周报里，用现在完成时说已经做完的，用 will / be going to 说接下来要做的。',
      points: [
        {
          rule: '已经完成的工作：have / has + 过去分词',
          note: '常和 already、just、yet、so far 连用。',
          examples: [
            { en: 'I have finished the login page.', zh: '我已经做完了登录页。' },
            { en: 'We haven’t received feedback from the client yet.', zh: '我们还没收到客户的反馈。' }
          ]
        },
        {
          rule: '正在进行的工作：现在进行时 am / is / are + doing',
          examples: [
            { en: 'I am working on the payment API today.', zh: '我今天在做支付接口。' }
          ]
        },
        {
          rule: '接下来的计划：will + 动词原形，或 be going to + 动词原形',
          examples: [
            { en: 'I will fix the remaining bugs tomorrow.', zh: '我明天会修复剩下的错误。' },
            { en: 'We are going to release the beta next week.', zh: '我们打算下周发布测试版。' }
          ]
        }
      ],
      exercises: [
        { q: 'I ___ the design, and now I am waiting for feedback.', options: ['finish', 'have finished', 'will finish', 'am finishing'], answer: 1, explain: '已经完成，对现在有影响，用现在完成时' },
        { q: 'Right now, she ___ on the new feature.', options: ['works', 'worked', 'is working', 'has worked'], answer: 2, explain: 'right now 表示正在进行' },
        { q: 'We ___ the report to the manager tomorrow morning.', options: ['sent', 'have sent', 'are sending', 'send yesterday'], answer: 2, explain: '已安排好的近期计划可用现在进行时表示将来' }
      ]
    },
    {
      id: 'explain-problems',
      title: '说明问题与原因',
      subtitle: '被动语态与 because / due to',
      emoji: '🧯',
      color: 'purple',
      summary: '汇报故障或延期时，常用被动语态说明发生了什么，并用 because / due to 说明原因。',
      points: [
        {
          rule: '不强调是谁做的，用被动语态：be + 过去分词',
          examples: [
            { en: 'The server was restarted at 3 a.m.', zh: '服务器在凌晨三点被重启了。' },
            { en: 'The bug was caused by an outdated library.', zh: '这个错误是由一个过时的库引起的。' }
          ]
        },
        {
          rule: '说明原因：because + 句子；because of / due to + 名词',
          examples: [
            { en: 'The release was delayed because the tests failed.', zh: '因为测试没通过，发布被推迟了。' },
            { en: 'The release was delayed due to a security issue.', zh: '由于一个安全问题，发布被推迟了。' }
          ]
        },
        {
          rule: '说明后续措施：To prevent this, we will…',
          examples: [
            { en: 'To prevent this, we will add more automated tests.', zh: '为了避免这种情况，我们会增加自动化测试。' }
          ]
        }
      ],
      exercises: [
        { q: 'The issue ___ by a missing configuration file.', options: ['caused', 'was caused', 'is causing', 'has cause'], answer: 1, explain: '问题是“被引起”的，用被动语态' },
        { q: 'The meeting was cancelled ___ the manager was ill.', options: ['because', 'because of', 'due to', 'so'], answer: 0, explain: '后面接完整的句子，用 because' },
        { q: 'The launch was postponed ___ technical problems.', options: ['because', 'although', 'due to', 'if'], answer: 2, explain: '后面接名词短语，用 due to' }
      ]
    }
  ],
  writing: [
    {
      id: 'delay-notice',
      title: '项目延期说明',
      subtitle: '写邮件告知经理项目要延期',
      emoji: '⏳',
      color: 'yellow',
      type: '职场邮件 · 说明原因与方案',
      prompt: 'Write an email to your manager. Explain that the project will be delayed by one week, give the reason, and suggest a new plan.',
      promptZh: '给经理写一封邮件：说明项目将延期一周，给出原因，并提出新的计划。',
      minWords: 60,
      phrases: [
        { en: 'I am writing to', zh: '我写信是想……' },
        { en: 'Unfortunately', zh: '很遗憾' },
        { en: 'because of', zh: '由于……' },
        { en: 'I suggest', zh: '我建议' },
        { en: 'Please let me know', zh: '请告知我' },
        { en: 'Best regards', zh: '此致（结尾敬语）' }
      ],
      tips: ['先说结论（要延期多久），再讲原因，最后给出解决办法。', '语气诚恳但不过度道歉，重点放在后续安排上。', '提出具体的新日期，方便对方做决定。'],
      sample: 'Dear Ms. Lee, I am writing to let you know about a delay in the mobile app project. Unfortunately, we will need one more week to finish testing because of several serious bugs in the payment feature. I suggest that we move the release date from May 10 to May 17. In addition, I will send you a short progress update every two days. Please let me know if this plan works for you. Best regards, Tom'
    },
    {
      id: 'weekly-update',
      title: '每周进度汇报',
      subtitle: '写给团队的周报',
      emoji: '📅',
      color: 'blue',
      type: '周报 · 现在完成时与计划',
      prompt: 'Write a short weekly update for your team. Say what you have finished this week, what problem you met, and what you will do next week.',
      promptZh: '为团队写一份简短周报：说明本周完成了什么、遇到了什么问题、下周打算做什么。',
      minWords: 60,
      phrases: [
        { en: 'This week', zh: '本周' },
        { en: 'I have finished', zh: '我已经完成了' },
        { en: 'I am working on', zh: '我正在做' },
        { en: 'blocked by', zh: '被……卡住' },
        { en: 'Next week', zh: '下周' },
        { en: 'I will', zh: '我将' }
      ],
      tips: ['按“完成—进行中—问题—计划”的顺序写，读的人一眼就能找到重点。', '遇到阻碍要写明需要谁来帮忙。', '用具体的功能名和数字，少用“差不多”“大概”。'],
      sample: 'Hi team, here is my update. This week I have finished the login page and fixed five bugs in the search function. I am working on the payment page, but I am blocked by a missing API document. Therefore, I would like to ask the backend team to send it to me by Monday. Next week I will complete the payment page and write unit tests for it. Thanks, Anna'
    },
    {
      id: 'bug-report',
      title: '缺陷报告',
      subtitle: '写一份能让别人复现的 Bug 报告',
      emoji: '🐛',
      color: 'purple',
      type: '程序员 · 缺陷报告',
      prompt: 'Write a bug report for the team. Describe what you expected, what actually happened, the steps to reproduce the problem and how serious it is.',
      promptZh: '为团队写一份缺陷报告：说明预期结果、实际结果、复现步骤和严重程度。',
      minWords: 60,
      phrases: [
        { en: 'Steps to reproduce', zh: '复现步骤' },
        { en: 'Expected result', zh: '预期结果' },
        { en: 'Actual result', zh: '实际结果' },
        { en: 'as a result', zh: '结果；因此' },
        { en: 'This issue', zh: '这个问题' },
        { en: 'Please fix', zh: '请修复' }
      ],
      tips: ['标题一句话说清楚问题，如“点击支付按钮后页面卡死”。', '复现步骤要编号、要具体，别人照着做就能看到同样的问题。', '写明环境信息：系统、浏览器、版本号。'],
      sample: 'Title: The page freezes after clicking the Pay button. Steps to reproduce: first, add any item to the cart; second, click Pay on the checkout page. Expected result: the payment page opens. Actual result: the page freezes and nothing happens. As a result, customers cannot complete their orders. This issue appears on Chrome version 120 and Windows 11. It is serious because it blocks all payments. Please fix it before the next release.'
    },
    {
      id: 'feature-proposal',
      title: '功能提案',
      subtitle: '向团队提出一个新功能',
      emoji: '💡',
      color: 'pink',
      type: '产品经理 · 需求提案',
      prompt: 'Write a short proposal for a new feature. Explain the user problem, your solution, and how you will measure whether it works.',
      promptZh: '写一份简短的新功能提案：说明用户遇到的问题、你的方案，以及如何衡量它是否有效。',
      minWords: 70,
      phrases: [
        { en: 'The problem is', zh: '问题在于' },
        { en: 'I propose', zh: '我提议' },
        { en: 'For example', zh: '例如' },
        { en: 'We will measure', zh: '我们将衡量' },
        { en: 'conversion rate', zh: '转化率' },
        { en: 'In conclusion', zh: '总之' }
      ],
      tips: ['先讲用户的痛点，再讲方案，让大家先同意“问题是真的”。', '给出可以衡量的指标，而不是“提升体验”这种空话。', '说明范围：第一版做什么、先不做什么。'],
      sample: 'The problem is that many new users leave the app during sign-up because the form is too long. I propose a simple one-step sign-up with only an email address. For example, users can add their name and phone number later in their profile. We will measure the result with the sign-up conversion rate and the first-week retention. We expect the conversion rate to rise by ten percent in one month. In conclusion, a shorter form is a small change with a big possible impact, so I suggest we run an A/B test next sprint.'
    }
  ],
  speaking: [
    {
      id: 'daily-standup',
      title: '每日站会',
      subtitle: '汇报进度和阻碍',
      emoji: '🧍',
      color: 'blue',
      roles: ['组长', '开发'],
      lines: [
        { who: 0, en: 'Good morning. What did you work on yesterday?', zh: '早上好。你昨天做了什么？' },
        { who: 1, en: 'I finished the login page and fixed two bugs.', zh: '我完成了登录页，并修复了两个错误。' },
        { who: 0, en: 'Great. What are you working on today?', zh: '很好。你今天打算做什么？' },
        { who: 1, en: 'I am starting the payment page, but I am blocked by a missing API document.', zh: '我今天开始做支付页，但被一份缺失的接口文档卡住了。' },
        { who: 0, en: 'I will ask the backend team to send it to you this morning.', zh: '我今早会请后端团队把它发给你。' },
        { who: 1, en: 'Thanks. That would really help.', zh: '谢谢，那帮了我大忙。' }
      ]
    },
    {
      id: 'requirement-review',
      title: '需求评审',
      subtitle: '产品经理与开发讨论范围',
      emoji: '📋',
      color: 'purple',
      roles: ['产品经理', '开发'],
      lines: [
        { who: 0, en: 'Let me walk you through the new requirement for the search page.', zh: '我来给你们讲一下搜索页的新需求。' },
        { who: 1, en: 'Thanks. Is the filter function part of the first version?', zh: '谢谢。筛选功能算在第一个版本里吗？' },
        { who: 0, en: 'Not for now. We want to launch an MVP first and collect feedback.', zh: '暂时不算。我们想先上线最小可行产品，收集反馈。' },
        { who: 1, en: 'Understood. Then I think we can finish it within one sprint.', zh: '明白了。那我想一个迭代内可以完成。' },
        { who: 0, en: 'Perfect. Could you add the estimate to the backlog?', zh: '太好了。你能把工时估算加到待办列表里吗？' },
        { who: 1, en: 'Sure. I will update it after this meeting.', zh: '没问题，会后我就更新。' }
      ]
    },
    {
      id: 'ask-for-extension',
      title: '申请延期',
      subtitle: '礼貌地和经理协商时间',
      emoji: '⏳',
      color: 'yellow',
      roles: ['经理', '员工'],
      lines: [
        { who: 0, en: 'How is the report coming along?', zh: '报告进展得怎么样了？' },
        { who: 1, en: 'I am afraid I need one more day to finish the final chapter.', zh: '恐怕我还需要多一天来完成最后一章。' },
        { who: 0, en: 'Is there any problem I can help with?', zh: '有什么问题我可以帮忙吗？' },
        { who: 1, en: 'The data from the sales team arrived late, so I had to redo some charts.', zh: '销售团队的数据来得太晚，所以我得重做一些图表。' },
        { who: 0, en: 'I see. Can you send it to me by tomorrow noon?', zh: '明白了。你能在明天中午前发给我吗？' },
        { who: 1, en: 'Yes, I will send it before noon. Thank you for understanding.', zh: '可以，我会在中午之前发出。谢谢您的理解。' }
      ]
    }
  ]
};

JIMI.registerLevel({
  id: 'work',
  name: '职场',
  stage: '工作后 · 职场与行业英语',
  ageRange: '工作后',
  emoji: '💼',
  avatar: '🧑‍💻',
  mascot: '🦅',
  coach: '职场教练',
  sentenceLead: '跟职场教练学一句',
  tagline: '职场通用、程序员、产品经理常用词汇与场景，学了就能用',
  speech: { rate: 0.95, pitch: 1 },
  home: {
    eyebrow: '下班后的 15 分钟，让英语真正用在工作里',
    greeting: '你好，职场人！',
    copy: '邮件、站会、评审、汇报……把工作中会遇到的英语一个个拿下。',
    dateIcon: '🗓️',
    dateTitle: '今天的工作英语',
    dateSub: '词汇 · 邮件 · 开会',
    heroLead: '工作中用得上，',
    footnote: '每天 15 分钟，碎片时间也能学',
    bubble: 'Let’s go!',
    route: '以职场通用、程序员和产品经理为起点，之后会陆续加入设计、运营、销售等行业。'
  },
  rootsMaxTier: 3,
  modules: ['words', 'roots', 'sentences', 'listening', 'speaking', 'review', 'grammar', 'reading', 'writing', 'topics'],
  labels: {
    words: { title: '职场词汇', kicker: 'WORK VOCAB', emoji: '📖', intro: '职场通用、程序员、产品经理的高频词，配音标和工作场景例句。', tip: '记忆小窍门：想一想自己的工作里会在哪句话用到它，造一个真实的句子。' },
    sentences: { title: '职场句型', kicker: 'WORK PHRASES', emoji: '🧩', intro: '邮件、站会、汇报里的常用句型，带干扰项，练出准确表达。' },
    listening: { title: '听写训练', intro: '听发音选意思或拼写，适合通勤时练。答错的词会进入复习。' },
    speaking: { title: '职场口语', kicker: 'WORK SPEAKING', intro: '站会、需求评审、和经理沟通等场景，扮演一个角色开口练。' },
    grammar: { title: '职场语法', kicker: 'WORK GRAMMAR', intro: '礼貌请求、汇报进度、说明原因，几个语法点覆盖大部分工作表达。' },
    reading: { title: '职场阅读', kicker: 'WORK READING', intro: '短小的职场与行业文章，读完做几道题，顺便积累表达。' },
    writing: { title: '职场写作', kicker: 'WORK WRITING', intro: '延期说明、周报、缺陷报告、功能提案，写完自动检查格式和关键句型。' },
    topics: { title: '行业词汇', nav: '行业', kicker: 'INDUSTRY VOCAB', intro: '按行业和场景成组记词：职场通用、会议邮件、程序员、产品经理。' }
  },
  planned: [
    {
      id: 'templates',
      icon: '📑',
      title: '邮件与会议模板库',
      desc: '直接可套用的邮件、会议开场和总结句式。',
      items: ['请求、催办、道歉、感谢等邮件模板', '会议开场、打断、总结的常用句', '一键复制并替换关键词']
    },
    {
      id: 'interview',
      icon: '🎙️',
      title: '英文面试',
      desc: '自我介绍、行为面试题和技术面试表达。',
      items: ['自我介绍与项目经历表达', '行为面试题（STAR 法）', '技术面试常用说法']
    }
  ],
  roadmap: {
    roots: ['补充技术、金融、医疗等行业常见词根词缀', '增加用词根推测陌生专业词义的练习'],
    words: ['补充设计、运营、销售、人力、财务等行业词汇', '增加常见缩写（ETA、EOD、OOO 等）', '增加易混词辨析'],
    sentences: ['补充谈判、催办、拒绝等场景句型', '增加邮件开头和结尾的固定句式'],
    listening: ['增加职场对话和电话会议听力'],
    speaking: ['补充电话沟通、客户演示、跨时区会议等场景', '增加话题口述（介绍自己的项目）'],
    grammar: ['补充条件句（If we ship on Friday…）、间接引语和委婉表达'],
    reading: ['补充行业新闻、技术博客和产品文档节选'],
    writing: ['补充求职信、简历要点、会议纪要和复盘文档'],
    topics: ['补充设计、数据分析、运营、测试等行业专题']
  },
  content: workContent
});
