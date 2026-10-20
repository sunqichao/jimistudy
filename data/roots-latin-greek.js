// 词根：拉丁语词根 32 个、希腊语词根 15 个。
// 来源核对：Wikipedia “List of Greek and Latin roots in English”（词根含义与来源语言）、
// Merriam-Webster’s Dictionary of Prefixes, Suffixes and Combining Forms、Wiktionary 逐词词源；
// 每个词的拆分由 tests/data.test.js 检查“拼起来等于原词”。
JIMI.defineRoots([
  // ———————— 拉丁语词根 ————————
  ['dict', 'root', 2, 'dict / dic', ['dict', 'dic'], '拉丁语 dicere（说）', '说；宣告', 'predict = pre（预先）+ dict（说）→ 事先说出来；contradict = 反过来说。', [
    ['predict', '预测', 'pre-|dict'], ['dictate', '口述；命令', 'dict|ate'], ['dictionary', '词典', 'dict|ionary'], ['contradict', '反驳；与……矛盾', 'contra-|dict'], ['verdict', '裁决', 'ver|dict'], ['indicate', '表明', 'in-|dic|ate']
  ]],
  ['scrib', 'root', 2, 'scrib / script', ['scrib', 'scribe', 'script'], '拉丁语 scribere（写）', '写', 'describe = de（向下）+ scribe（写）→ 写下来，也就是描述。', [
    ['describe', '描述', 'de-|scribe'], ['subscribe', '订阅', 'sub-|scribe'], ['script', '脚本；剧本', 'script'], ['prescription', '处方', 'pre-|script|ion'], ['manuscript', '手稿', 'manu|script'], ['inscribe', '刻写；题写', 'in-|scribe']
  ]],
  ['port', 'root', 2, 'port', ['port'], '拉丁语 portare（搬运）', '搬运；携带', 'transport 搬过去；import 搬进来；export 搬出去；portable 能搬着走的。', [
    ['transport', '运输', 'trans-|port'], ['import', '进口；导入', 'im-|port'], ['export', '出口；导出', 'ex-|port'], ['report', '报告', 're-|port'], ['portable', '便携的', 'port|able'], ['support', '支持', 'sup-|port']
  ]],
  ['spect', 'root', 2, 'spect / spec', ['spect', 'spec'], '拉丁语 specere（看）', '看', 'inspect = in（向内）+ spect（看）→ 仔细检查；spectator 是“看的人”。', [
    ['inspect', '检查', 'in-|spect'], ['respect', '尊重', 're-|spect'], ['spectator', '观众', 'spect|ator'], ['perspective', '视角', 'per-|spect|ive'], ['prospect', '前景', 'pro-|spect'], ['aspect', '方面', 'a-|spect']
  ]],
  ['vis', 'root', 2, 'vis / vid', ['vis', 'vid', 'vise', 'vide'], '拉丁语 videre（看见）', '看见', 'video 的意思就是“我看见”；evidence = 能被看见的东西（证据）。', [
    ['vision', '视力；愿景', 'vis|ion'], ['video', '视频', 'vid|eo'], ['revise', '修订', 're-|vise'], ['evidence', '证据', 'e-|vid|ence'], ['provide', '提供', 'pro-|vide'], ['supervise', '监督', 'super-|vise']
  ]],
  ['duc', 'root', 2, 'duc / duct', ['duc', 'duct', 'duce'], '拉丁语 ducere（引导；带领）', '引导；带领', 'introduce = 引进来；produce = 引出来（生产）；reduce = 引回去（减少）。', [
    ['produce', '生产', 'pro-|duce'], ['product', '产品', 'pro-|duct'], ['reduce', '减少', 're-|duce'], ['introduce', '介绍', 'intro-|duce'], ['conduct', '实施；指挥', 'con-|duct'], ['deduce', '推断', 'de-|duce']
  ]],
  ['struct', 'root', 2, 'struct', ['struct'], '拉丁语 struere（建造）', '建造；构筑', 'construct = 一起搭起来；infrastructure = 下面的（基础）结构。', [
    ['structure', '结构', 'struct|ure'], ['construct', '建造', 'con-|struct'], ['instruct', '指示；教导', 'in-|struct'], ['destruction', '破坏', 'de-|struct|ion'], ['infrastructure', '基础设施', 'infra-|struct|ure'], ['obstruct', '阻碍', 'ob-|struct']
  ]],
  ['ject', 'root', 2, 'ject', ['ject'], '拉丁语 jacere（扔；投）', '扔；投', 'project = 向前扔；reject = 扔回去（拒绝）；inject = 扔进去（注射）。', [
    ['project', '项目；投射', 'pro-|ject'], ['reject', '拒绝', 're-|ject'], ['inject', '注射；注入', 'in-|ject'], ['object', '物体；反对', 'ob-|ject'], ['subject', '主题；学科', 'sub-|ject'], ['eject', '弹出', 'e-|ject']
  ]],
  ['mit', 'root', 2, 'mit / miss', ['mit', 'miss', 'mise'], '拉丁语 mittere（送；派）', '送；派', 'submit = 从下面送上去（提交）；commit = 全部送交出去（承诺、提交）。', [
    ['transmit', '传输', 'trans-|mit'], ['submit', '提交', 'sub-|mit'], ['commit', '提交；承诺', 'com-|mit'], ['permit', '允许', 'per-|mit'], ['mission', '使命', 'miss|ion'], ['promise', '承诺', 'pro-|mise']
  ]],
  ['pos', 'root', 2, 'pos / pon', ['pos', 'pose', 'pon'], '拉丁语 ponere（放；置）', '放；置', 'compose = 放在一起（组成）；expose = 放在外面（暴露）；oppose = 放在对面（反对）。', [
    ['compose', '组成；作曲', 'com-|pose'], ['expose', '暴露', 'ex-|pose'], ['oppose', '反对', 'op-|pose'], ['component', '组件', 'com-|pon|ent'], ['deposit', '存放；押金', 'de-|pos|it'], ['position', '位置；职位', 'pos|ition']
  ]],
  ['tract', 'root', 2, 'tract', ['tract'], '拉丁语 trahere（拉；拖）', '拉；拖', 'attract = 拉过来（吸引）；extract = 拉出来（提取）；tractor 是拉东西的机器。', [
    ['attract', '吸引', 'at-|tract'], ['subtract', '减去', 'sub-|tract'], ['extract', '提取', 'ex-|tract'], ['contract', '合同；收缩', 'con-|tract'], ['distract', '使分心', 'dis-|tract'], ['tractor', '拖拉机', 'tract|or']
  ]],
  ['press', 'root', 2, 'press', ['press'], '拉丁语 premere（压）', '压', 'express = 压出来（表达）；compress = 压在一起（压缩）；impress = 压出印记。', [
    ['express', '表达', 'ex-|press'], ['impress', '使印象深刻', 'im-|press'], ['compress', '压缩', 'com-|press'], ['depress', '使沮丧；按下', 'de-|press'], ['suppress', '压制', 'sup-|press'], ['pressure', '压力', 'press|ure']
  ]],
  ['cept', 'root', 2, 'cept / cap / capt', ['cept', 'cap', 'capt'], '拉丁语 capere（拿；取）', '拿；取；抓', 'accept = 拿过来（接受）；capture = 抓住；capable = 能抓得住的（有能力的）。', [
    ['accept', '接受', 'ac-|cept'], ['except', '除……之外', 'ex-|cept'], ['concept', '概念', 'con-|cept'], ['perception', '感知', 'per-|cept|ion'], ['capture', '捕获', 'capt|ure'], ['capable', '有能力的', 'cap|able']
  ]],
  ['fact', 'root', 2, 'fact / fect / fic', ['fact', 'fect', 'fic', 'fac'], '拉丁语 facere（做；制造）', '做；制造', 'factory = 制造的地方；effect = 做出来的结果；perfect = 彻底做好了。', [
    ['factory', '工厂', 'fact|ory'], ['manufacture', '制造', 'manu|fact|ure'], ['effect', '效果', 'ef-|fect'], ['perfect', '完美的', 'per-|fect'], ['efficient', '高效的', 'ef-|fic|ient'], ['facility', '设施', 'fac|ility']
  ]],
  ['form', 'root', 2, 'form', ['form'], '拉丁语 forma（形状）', '形状；形式', 'transform = 改变形状；inform = 给想法定型（告知）；format = 格式。', [
    ['inform', '通知', 'in-|form'], ['transform', '转变', 'trans-|form'], ['reform', '改革', 're-|form'], ['uniform', '制服；统一的', 'uni-|form'], ['format', '格式', 'form|at'], ['conform', '遵守；符合', 'con-|form']
  ]],
  ['ced', 'root', 3, 'ced / cess / ceed', ['ced', 'cess', 'ceed', 'cede'], '拉丁语 cedere（走；让步）', '走；前进；让步', 'proceed = 向前走（继续）；access = 走近（访问）；succeed = 接着走上去（成功、继承）。', [
    ['proceed', '继续进行', 'pro-|ceed'], ['process', '过程；处理', 'pro-|cess'], ['access', '访问；通道', 'ac-|cess'], ['succeed', '成功；继承', 'suc-|ceed'], ['exceed', '超过', 'ex-|ceed'], ['precede', '在……之前', 'pre-|cede']
  ]],
  ['gress', 'root', 3, 'gress / grad', ['gress', 'grad', 'gradu', 'grade'], '拉丁语 gradi（走；迈步）', '走；步', 'progress = 向前走；regress = 往回走；graduate = 一级一级走完（毕业）。', [
    ['progress', '进步', 'pro-|gress'], ['regress', '倒退', 're-|gress'], ['aggressive', '好斗的；有进取心的', 'ag-|gress|ive'], ['grade', '等级；年级', 'grade'], ['gradual', '逐渐的', 'grad|ual'], ['graduate', '毕业', 'gradu|ate']
  ]],
  ['vert', 'root', 2, 'vert / vers', ['vert', 'vers', 'verse'], '拉丁语 vertere（转）', '转；转向', 'convert = 整个转变；reverse = 转回去；introvert = 向内转的人。', [
    ['convert', '转换', 'con-|vert'], ['reverse', '反转', 're-|verse'], ['version', '版本', 'vers|ion'], ['diverse', '多样的', 'di-|verse'], ['advertise', '做广告', 'ad-|vert|ise'], ['introvert', '内向的人', 'intro-|vert']
  ]],
  ['ven', 'root', 2, 'ven / vent', ['ven', 'vent', 'vene'], '拉丁语 venire（来）', '来', 'event = 走出来发生的事；prevent = 先一步到来（阻止）；invent = 进来（找到，发明）。', [
    ['event', '事件', 'e-|vent'], ['prevent', '阻止', 'pre-|vent'], ['invent', '发明', 'in-|vent'], ['convention', '大会；惯例', 'con-|vent|ion'], ['adventure', '冒险', 'ad-|vent|ure'], ['intervene', '干预', 'inter-|vene']
  ]],
  ['tend', 'root', 2, 'tend / tens / tent', ['tend', 'tens', 'tent'], '拉丁语 tendere（伸展）', '伸；拉紧', 'extend = 向外伸；attend = 向某处伸过去（出席、关注）；tension = 绷紧。', [
    ['extend', '延伸', 'ex-|tend'], ['intend', '打算', 'in-|tend'], ['attend', '出席', 'at-|tend'], ['attention', '注意', 'at-|tent|ion'], ['tension', '紧张', 'tens|ion'], ['pretend', '假装', 'pre-|tend']
  ]],
  ['tain', 'root', 2, 'tain / ten / tent', ['tain', 'ten', 'tent'], '拉丁语 tenere（握住；保持）', '握住；保持', 'contain = 握在一起（包含）；maintain = 用手握住（维持）；retain = 握住不放（保留）。', [
    ['contain', '包含', 'con-|tain'], ['maintain', '维持；保养', 'main|tain'], ['obtain', '获得', 'ob-|tain'], ['retain', '保留', 're-|tain'], ['sustain', '维持；承受', 'sus-|tain'], ['retention', '保留；留存', 're-|tent|ion']
  ]],
  ['cred', 'root', 2, 'cred', ['cred', 'credit', 'creed'], '拉丁语 credere（相信）', '相信', 'credit = 被相信（信用）；incredible = 不可相信的；credential = 让人相信的证明。', [
    ['credit', '信用；学分', 'cred|it'], ['credible', '可信的', 'cred|ible'], ['incredible', '难以置信的', 'in-|cred|ible'], ['credential', '资质证明', 'cred|ential'], ['creed', '信条', 'creed'], ['discredit', '使丧失信誉', 'dis-|credit']
  ]],
  ['aud', 'root', 2, 'aud', ['aud'], '拉丁语 audire（听）', '听', 'audio = 听到的声音；audience = 听众；audit 原指“听取账目汇报”。', [
    ['audio', '音频', 'aud|io'], ['audience', '观众；听众', 'aud|ience'], ['audible', '听得见的', 'aud|ible'], ['auditorium', '礼堂', 'aud|itorium'], ['audition', '试镜；试唱', 'aud|ition'], ['audit', '审计', 'aud|it']
  ]],
  ['rupt', 'root', 3, 'rupt', ['rupt'], '拉丁语 rumpere（打破）', '破；断', 'interrupt = 在中间打断；bankrupt = 钱庄（柜台）被打破 → 破产；disrupt = 彻底打乱。', [
    ['interrupt', '打断', 'inter-|rupt'], ['erupt', '爆发；喷发', 'e-|rupt'], ['corrupt', '腐败的', 'cor-|rupt'], ['bankrupt', '破产的', 'bank|rupt'], ['abrupt', '突然的', 'ab-|rupt'], ['disrupt', '扰乱；颠覆', 'dis-|rupt']
  ]],
  ['nov', 'root', 3, 'nov', ['nov'], '拉丁语 novus（新的）', '新', 'innovate = 引入新东西；renovate = 使重新变新；novel 既是“新颖的”也是“小说”。', [
    ['novel', '小说；新颖的', 'nov|el'], ['novice', '新手', 'nov|ice'], ['novelty', '新奇', 'nov|elty'], ['innovate', '进行创新；革新', 'in-|nov|ate'], ['renovate', '翻新', 're-|nov|ate'], ['innovation', '创新；新发明', 'in-|nov|ation']
  ]],
  ['man', 'root', 3, 'man / manu', ['man', 'manu', 'mani'], '拉丁语 manus（手）', '手', 'manual = 用手的（手册、手动）；manufacture = 用手制作；manage 原指“用手驾驭马”。', [
    ['manual', '手册；手动的', 'manu|al'], ['manufacture', '制造', 'manu|facture'], ['manuscript', '手稿', 'manu|script'], ['manipulate', '操纵', 'mani|pulate'], ['manage', '管理', 'man|age'], ['manicure', '修指甲', 'mani|cure']
  ]],
  ['cur', 'root', 3, 'cur / curr / curs', ['cur', 'curr', 'curs'], '拉丁语 currere（跑）', '跑；流动', 'current = 流动的（当前的、电流）；cursor = 跑动的（光标）；occur = 跑过来（发生）。', [
    ['current', '当前的；电流', 'curr|ent'], ['currency', '货币', 'curr|ency'], ['occur', '发生', 'oc-|cur'], ['recur', '再次发生', 're-|cur'], ['cursor', '光标', 'curs|or'], ['excursion', '远足', 'ex-|curs|ion']
  ]],
  ['loc', 'root', 3, 'loc', ['loc', 'loco'], '拉丁语 locus（地方）', '地方；位置', 'location = 地点；allocate = 分到某个地方；relocate = 重新安置。', [
    ['location', '位置', 'loc|ation'], ['local', '当地的', 'loc|al'], ['locate', '定位；位于', 'loc|ate'], ['relocate', '搬迁', 're-|loc|ate'], ['allocate', '分配', 'al-|loc|ate'], ['locomotive', '机车', 'loco|motive']
  ]],
  ['mot', 'root', 3, 'mot / mov', ['mot', 'mote', 'mov', 'move'], '拉丁语 movere（移动）', '动；移动', 'promote = 向前推动（晋升）；remote = 被移得远远的；emotion = 内心的触动。', [
    ['promote', '促进；晋升', 'pro-|mote'], ['demote', '降职', 'de-|mote'], ['remote', '远程的；遥远的', 're-|mote'], ['emotion', '情感', 'e-|mot|ion'], ['motivate', '激励', 'mot|ivate'], ['remove', '移除', 're-|move']
  ]],
  ['fer', 'root', 3, 'fer', ['fer'], '拉丁语 ferre（携带；承受）', '带；运；承受', 'transfer = 带到另一边；refer = 带回去（查阅、提及）；suffer = 在下面承受（受苦）。', [
    ['transfer', '转移', 'trans-|fer'], ['refer', '提及；参考', 're-|fer'], ['prefer', '更喜欢', 'pre-|fer'], ['offer', '提供', 'of-|fer'], ['suffer', '遭受', 'suf-|fer'], ['conference', '会议', 'con-|fer|ence']
  ]],
  ['lect', 'root', 3, 'lect / leg', ['lect', 'leg'], '拉丁语 legere（收集；挑选；阅读）', '收集；挑选；读', 'collect = 收到一起；select = 单独挑出来；lecture 原指“被朗读的内容”。', [
    ['collect', '收集', 'col-|lect'], ['select', '选择', 'se-|lect'], ['elect', '选举', 'e-|lect'], ['lecture', '讲座', 'lect|ure'], ['legend', '传说', 'leg|end'], ['legible', '清晰可读的', 'leg|ible']
  ]],
  ['sent', 'root', 3, 'sent / sens', ['sent', 'sens'], '拉丁语 sentire（感觉）', '感觉', 'sensor = 感知的装置（传感器）；consent = 一起感觉（同意）；resent = 反复感受到（怨恨）。', [
    ['sense', '感觉；意义', 'sens|e'], ['sensitive', '敏感的', 'sens|itive'], ['sensor', '传感器', 'sens|or'], ['consent', '同意', 'con-|sent'], ['resent', '怨恨', 're-|sent'], ['sentiment', '情绪；观点', 'sent|iment']
  ]],

  // ———————— 希腊语词根 ————————
  ['bio', 'root', 2, 'bio', ['bio'], '希腊语 bios（生命）', '生命；生物', 'biology = 研究生命的学问；biography = 记录一个人一生的文字。', [
    ['biology', '生物学', 'bio|logy'], ['biography', '传记', 'bio|graphy'], ['antibiotic', '抗生素', 'anti-|bio|tic'], ['biodiversity', '生物多样性', 'bio|diversity'], ['symbiosis', '共生', 'sym|bio|sis'], ['biometric', '生物识别的', 'bio|metric']
  ]],
  ['graph', 'root', 2, 'graph / gram', ['graph', 'gram'], '希腊语 graphein（写；画）', '写；画；记录', 'photograph = 用光画出来的东西；program = 预先写好的计划；telegram = 远距离写来的消息。', [
    ['photograph', '照片', 'photo|graph'], ['paragraph', '段落', 'para|graph'], ['autograph', '亲笔签名', 'auto|graph'], ['telegram', '电报', 'tele|gram'], ['program', '程序；项目', 'pro|gram'], ['diagram', '图表', 'dia|gram']
  ]],
  ['log', 'root', 2, 'log / logue / logy', ['log', 'logue', 'logy'], '希腊语 logos（言语；道理）', '言语；道理；学问', 'dialogue = 来回的话（对话）；logic = 讲道理的学问；-logy 常表示“……学”。', [
    ['dialogue', '对话', 'dia|logue'], ['monologue', '独白', 'mono|logue'], ['prologue', '序言', 'pro|logue'], ['analogy', '类比', 'ana|logy'], ['logic', '逻辑', 'log|ic'], ['catalog', '目录', 'cata|log']
  ]],
  ['phon', 'root', 2, 'phon', ['phon', 'phone', 'phony'], '希腊语 phōnē（声音）', '声音', 'telephone = 远处的声音；symphony = 声音合在一起；microphone = 放大微小声音的装置。', [
    ['telephone', '电话', 'tele|phone'], ['microphone', '麦克风', 'micro|phone'], ['symphony', '交响乐', 'sym|phony'], ['phonetic', '语音的', 'phon|etic'], ['megaphone', '扩音器', 'mega|phone'], ['headphone', '耳机', 'head|phone']
  ]],
  ['photo', 'root', 2, 'photo', ['photo', 'phot'], '希腊语 phōs, phōtos（光）', '光', 'photograph = 用光画出来的图；photosynthesis = 利用光来合成。', [
    ['photograph', '照片', 'photo|graph'], ['photocopy', '复印', 'photo|copy'], ['photosynthesis', '光合作用', 'photo|synthesis'], ['photon', '光子', 'phot|on'], ['photogenic', '上镜的', 'photo|genic'], ['telephoto', '长焦的', 'tele|photo']
  ]],
  ['scope', 'root', 2, '-scope', ['scope'], '希腊语 skopein（察看）', '看；观察', '-scope 表示“观察的仪器”：telescope 看远处，microscope 看细小的东西。', [
    ['telescope', '望远镜', 'tele|scope'], ['microscope', '显微镜', 'micro|scope'], ['periscope', '潜望镜', 'peri|scope'], ['kaleidoscope', '万花筒', 'kaleido|scope'], ['horoscope', '星座运势', 'horo|scope'], ['stethoscope', '听诊器', 'stetho|scope']
  ]],
  ['meter', 'root', 2, 'meter / metr', ['meter', 'metry', 'metr'], '希腊语 metron（测量）', '测量；尺度', 'thermometer = 测热的仪器；kilometer = 一千米；symmetry = 测量上一致（对称）。', [
    ['thermometer', '温度计', 'thermo|meter'], ['diameter', '直径', 'dia|meter'], ['kilometer', '公里', 'kilo|meter'], ['symmetry', '对称', 'sym|metry'], ['parameter', '参数', 'para|meter'], ['metric', '公制的；度量标准', 'metr|ic']
  ]],
  ['therm', 'root', 2, 'therm', ['therm', 'thermo'], '希腊语 thermos（热）', '热', 'thermal = 热的；thermostat = 使温度保持稳定的装置；hypothermia = 体温过低。', [
    ['thermal', '热的', 'therm|al'], ['thermos', '保温瓶', 'therm|os'], ['thermostat', '恒温器', 'thermo|stat'], ['hypothermia', '体温过低', 'hypo|therm|ia'], ['thermometer', '温度计', 'thermo|meter'], ['geothermal', '地热的', 'geo|therm|al']
  ]],
  ['chron', 'root', 3, 'chron', ['chron', 'chrono'], '希腊语 khronos（时间）', '时间', 'synchronize = 使时间一致（同步）；chronic = 长期的（慢性的）。', [
    ['chronology', '年表；编年', 'chrono|logy'], ['chronic', '慢性的', 'chron|ic'], ['chronicle', '编年史', 'chron|icle'], ['synchronize', '使同步', 'syn|chron|ize'], ['anachronism', '时代错误', 'ana|chron|ism'], ['chronometer', '精密计时器', 'chrono|meter']
  ]],
  ['psych', 'root', 3, 'psych', ['psych', 'psycho', 'psyche'], '希腊语 psykhē（灵魂；心智）', '心灵；心理', 'psychology = 研究心灵的学问。', [
    ['psychology', '心理学', 'psycho|logy'], ['psychiatrist', '精神科医生', 'psych|iatr|ist'], ['psychic', '通灵的；心灵的', 'psych|ic'], ['psychotherapy', '心理治疗', 'psycho|therapy'], ['psyche', '心灵', 'psyche'], ['psychological', '心理的', 'psycho|logical']
  ]],
  ['path', 'root', 3, 'path', ['path', 'pathy', 'patho'], '希腊语 pathos（感受；痛苦）', '感受；痛苦', 'sympathy = 一起感受；empathy = 感同身受；apathy = 没有感受（冷漠）。', [
    ['sympathy', '同情', 'sym|pathy'], ['empathy', '同理心', 'em|pathy'], ['apathy', '冷漠', 'a|pathy'], ['antipathy', '反感', 'anti|pathy'], ['telepathy', '心灵感应', 'tele|pathy'], ['pathology', '病理学', 'patho|logy']
  ]],
  ['morph', 'root', 3, 'morph', ['morph', 'morpho'], '希腊语 morphē（形状）', '形状；形态', 'metamorphosis = 形态的彻底改变（蜕变）；polymorphism = 多种形态。', [
    ['morphology', '形态学', 'morpho|logy'], ['metamorphosis', '蜕变', 'meta|morph|osis'], ['amorphous', '无定形的', 'a|morph|ous'], ['polymorphism', '多态性', 'poly|morph|ism'], ['morpheme', '语素', 'morph|eme'], ['morph', '变形', 'morph']
  ]],
  ['onym', 'root', 3, 'onym / nym', ['onym', 'nym'], '希腊语 onyma（名字）', '名字；词', 'synonym = 相同的名字（同义词）；antonym = 相反的词；acronym = 首字母缩写。', [
    ['synonym', '同义词', 'syn|onym'], ['antonym', '反义词', 'ant|onym'], ['homonym', '同形或同音异义词', 'hom|onym'], ['acronym', '首字母缩写词', 'acr|onym'], ['anonymous', '匿名的', 'an|onym|ous'], ['pseudonym', '笔名', 'pseud|onym']
  ]],
  ['gen', 'root', 3, 'gen / gener', ['gen', 'gene', 'gener'], '拉丁语 genus / 希腊语 genos（出身；种类；产生）', '产生；种类；出身', 'generate = 产生；generic = 属于整个种类的（通用的）；oxygen = 产生酸的东西。', [
    ['gene', '基因', 'gene'], ['genetic', '遗传的', 'gen|etic'], ['generate', '产生', 'gener|ate'], ['generic', '通用的', 'gener|ic'], ['generation', '一代；产生', 'gener|ation'], ['oxygen', '氧', 'oxy|gen']
  ]],
  ['techn', 'root', 3, 'techn / techno', ['techn', 'techno', 'technic'], '希腊语 tekhnē（技艺）', '技艺；技术', 'technology = 关于技艺的学问；technique = 做事的技巧。', [
    ['technique', '技巧', 'techn|ique'], ['technology', '技术', 'techno|logy'], ['technical', '技术的', 'techn|ical'], ['technician', '技术员', 'techn|ician'], ['polytechnic', '理工学院', 'poly|technic'], ['technological', '科技的', 'techno|logical']
  ]]
]);
