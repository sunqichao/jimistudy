// 词缀：前缀 28 个、后缀 18 个。
// 来源核对：Merriam-Webster’s Dictionary of Prefixes, Suffixes and Combining Forms（词源与含义）、
// Wiktionary 逐词词源（拆分是否成立）；每个词的拆分由 tests/data.test.js 检查“拼起来等于原词”。
JIMI.defineRoots([
  // ———————— 前缀 ————————
  ['un', 'prefix', 1, 'un-', ['un'], '古英语 un-（否定）', '不；相反（动作）', 'un- 加在形容词前表示“不”，加在动词前表示“撤销、相反的动作”（undo、unlock）。', [
    ['unhappy', '不开心的', 'un-|happy'], ['unfair', '不公平的', 'un-|fair'], ['unlock', '开锁', 'un-|lock'], ['undo', '撤销', 'un-|do'], ['unusual', '不寻常的', 'un-|usual']
  ]],
  ['re', 'prefix', 1, 're-', ['re'], '拉丁语 re-（再；回）', '再；回；重新', 're- 表示“重新做”或“往回做”：return 就是“转回去”。', [
    ['rewrite', '重写', 're-|write'], ['return', '返回', 're-|turn'], ['replay', '重播', 're-|play'], ['rebuild', '重建', 're-|build'], ['recycle', '回收利用', 're-|cycle'], ['refresh', '刷新', 're-|fresh']
  ]],
  ['dis', 'prefix', 1, 'dis-', ['dis'], '拉丁语 dis-（分开；否定）', '不；分开；相反', 'dis- 有“拆开、取消”的味道：disconnect 就是把连接拆开。', [
    ['disagree', '不同意', 'dis-|agree'], ['disconnect', '断开连接', 'dis-|connect'], ['dislike', '不喜欢', 'dis-|like'], ['disappear', '消失', 'dis-|appear'], ['discover', '发现', 'dis-|cover'], ['disable', '禁用', 'dis-|able']
  ]],
  ['in-not', 'prefix', 1, 'in- / im- / il- / ir-', ['in', 'im', 'il', 'ir'], '拉丁语 in-（否定）', '不；非', '同化规律：在 p、b、m 前变 im-，在 l 前变 il-，在 r 前变 ir-，读起来更顺口。注意还有另一个 in-（表示“在内”，如 inside）。', [
    ['incorrect', '不正确的', 'in-|correct'], ['impossible', '不可能的', 'im-|possible'], ['illegal', '非法的', 'il-|legal'], ['irregular', '不规则的', 'ir-|regular'], ['invisible', '看不见的', 'in-|visible'], ['inactive', '不活跃的', 'in-|active']
  ]],
  ['pre', 'prefix', 1, 'pre-', ['pre'], '拉丁语 prae-（在……之前）', '在……之前；预先', 'pre- 和 post-（之后）是一对反义前缀。', [
    ['preview', '预览', 'pre-|view'], ['prepare', '准备', 'pre-|pare'], ['prehistoric', '史前的', 'pre-|historic'], ['preschool', '学前的', 'pre-|school'], ['prefix', '前缀', 'pre-|fix'], ['predict', '预测', 'pre-|dict']
  ]],
  ['mis', 'prefix', 1, 'mis-', ['mis'], '古英语 mis-（错误）', '错误地；坏地', 'mis- 加在动词前，表示“做错了”：misspell 就是拼错。', [
    ['misunderstand', '误解', 'mis-|understand'], ['misspell', '拼错', 'mis-|spell'], ['misuse', '误用；滥用', 'mis-|use'], ['mislead', '误导', 'mis-|lead'], ['misplace', '放错地方', 'mis-|place'], ['misread', '读错', 'mis-|read']
  ]],
  ['over', 'prefix', 1, 'over-', ['over'], '古英语 ofer（在……上；过度）', '过度；在……之上', 'over- 常表示“过头了”：overwork 就是工作过度。', [
    ['overwork', '工作过度', 'over-|work'], ['overcome', '克服', 'over-|come'], ['overlook', '忽视；俯瞰', 'over-|look'], ['overload', '超载', 'over-|load'], ['overflow', '溢出', 'over-|flow'], ['overtime', '加班', 'over-|time']
  ]],
  ['under', 'prefix', 1, 'under-', ['under'], '古英语 under（在……下）', '在……之下；不足', 'under- 与 over- 相反：underestimate 是估计得不够。', [
    ['underline', '划线；强调', 'under-|line'], ['underground', '地下的', 'under-|ground'], ['underestimate', '低估', 'under-|estimate'], ['underwear', '内衣', 'under-|wear'], ['undergo', '经历', 'under-|go'], ['underpay', '少付工资', 'under-|pay']
  ]],
  ['inter', 'prefix', 1, 'inter-', ['inter'], '拉丁语 inter（在……之间）', '在……之间；相互', 'inter- 表示“两者之间”：internet 就是“网与网之间”。', [
    ['international', '国际的', 'inter-|national'], ['interact', '互动', 'inter-|act'], ['internet', '互联网', 'inter-|net'], ['interview', '面试', 'inter-|view'], ['interface', '界面', 'inter-|face'], ['interchange', '交换', 'inter-|change']
  ]],
  ['bi', 'prefix', 1, 'bi-', ['bi'], '拉丁语 bi-（二）', '二；两', 'bi- 表示“两个”，bicycle 是“两个轮子”。', [
    ['bicycle', '自行车', 'bi-|cycle'], ['bilingual', '双语的', 'bi-|lingual'], ['bilateral', '双边的', 'bi-|lateral'], ['biannual', '一年两次的', 'bi-|annual'], ['bipolar', '两极的', 'bi-|polar'], ['biplane', '双翼飞机', 'bi-|plane']
  ]],
  ['non', 'prefix', 1, 'non-', ['non'], '拉丁语 non（不）', '不；非', 'non- 通常直接加在词前，不改变拼写：nonstop、nonprofit。', [
    ['nonfiction', '非虚构作品', 'non-|fiction'], ['nonsense', '胡说', 'non-|sense'], ['nonstop', '不间断的', 'non-|stop'], ['nonprofit', '非营利的', 'non-|profit'], ['nonexistent', '不存在的', 'non-|existent'], ['nonstick', '不粘的', 'non-|stick']
  ]],
  ['sub', 'prefix', 2, 'sub- / sup-', ['sub', 'sup'], '拉丁语 sub（在……下）', '在……之下；次一级', '在 p 前同化为 sup-：support 就是 sub + port（从下面托住）。', [
    ['subway', '地铁', 'sub-|way'], ['submarine', '潜水艇', 'sub-|marine'], ['subtitle', '字幕；副标题', 'sub-|title'], ['subtract', '减去', 'sub-|tract'], ['subscribe', '订阅', 'sub-|scribe'], ['support', '支持', 'sup-|port']
  ]],
  ['trans', 'prefix', 2, 'trans-', ['trans'], '拉丁语 trans（跨越）', '跨越；转变', 'trans- 有“从这边到那边”的意思：transport 就是“运过去”。', [
    ['transport', '运输', 'trans-|port'], ['translate', '翻译', 'trans-|late'], ['transform', '转变', 'trans-|form'], ['transfer', '转移', 'trans-|fer'], ['transparent', '透明的', 'trans-|parent'], ['transaction', '交易', 'trans-|action']
  ]],
  ['com', 'prefix', 2, 'com- / con- / co-', ['com', 'con', 'co', 'col', 'cor'], '拉丁语 com-（一起；加强）', '共同；一起', '同化规律：l 前变 col-，r 前变 cor-，b、p、m 前用 com-，元音前用 co-，其余多为 con-。', [
    ['cooperate', '合作', 'co-|operate'], ['combine', '结合', 'com-|bine'], ['connect', '连接', 'con-|nect'], ['collect', '收集', 'col-|lect'], ['correct', '纠正；正确的', 'cor-|rect'], ['collaborate', '协作', 'col-|laborate']
  ]],
  ['ex', 'prefix', 2, 'ex- / ef- / e-', ['ex', 'ef', 'e'], '拉丁语 ex（向外）', '向外；出；前任的', 'ex- 与 in-（向内）相对：export 是运出去，import 是运进来。f 前同化为 ef-。', [
    ['export', '出口', 'ex-|port'], ['exit', '出口；退出', 'ex-|it'], ['extract', '提取', 'ex-|tract'], ['exclude', '排除', 'ex-|clude'], ['expand', '扩展', 'ex-|pand'], ['effect', '效果', 'ef-|fect']
  ]],
  ['anti', 'prefix', 2, 'anti-', ['anti'], '希腊语 anti（反对）', '反对；抵抗', 'antibiotic 是“对抗生命（细菌）”的药。', [
    ['antibiotic', '抗生素', 'anti-|biotic'], ['antibody', '抗体', 'anti-|body'], ['antisocial', '反社会的', 'anti-|social'], ['antivirus', '杀毒软件', 'anti-|virus'], ['antifreeze', '防冻剂', 'anti-|freeze'], ['anticlockwise', '逆时针的', 'anti-|clockwise']
  ]],
  ['auto', 'prefix', 2, 'auto-', ['auto'], '希腊语 autos（自己）', '自己；自动', 'auto- 既表示“自己”（autobiography），也表示“自动”（automatic）。', [
    ['automatic', '自动的', 'auto-|matic'], ['autobiography', '自传', 'auto-|biography'], ['autograph', '亲笔签名', 'auto-|graph'], ['automobile', '汽车', 'auto-|mobile'], ['autopilot', '自动驾驶仪', 'auto-|pilot'], ['autonomy', '自主权', 'auto-|nomy']
  ]],
  ['semi', 'prefix', 2, 'semi-', ['semi'], '拉丁语 semi-（一半）', '半；部分', 'semicolon 是“半个冒号”。', [
    ['semicircle', '半圆', 'semi-|circle'], ['semifinal', '半决赛', 'semi-|final'], ['semiconductor', '半导体', 'semi-|conductor'], ['semicolon', '分号', 'semi-|colon'], ['semiautomatic', '半自动的', 'semi-|automatic']
  ]],
  ['multi', 'prefix', 2, 'multi-', ['multi'], '拉丁语 multus（许多）', '多；多种', 'multi- 表示“很多”，与 mono-（单一）相对。', [
    ['multimedia', '多媒体', 'multi-|media'], ['multinational', '跨国的', 'multi-|national'], ['multitask', '同时处理多项任务', 'multi-|task'], ['multicultural', '多元文化的', 'multi-|cultural'], ['multilingual', '多语言的', 'multi-|lingual'], ['multiply', '乘；成倍增加', 'multi-|ply']
  ]],
  ['de', 'prefix', 2, 'de-', ['de'], '拉丁语 de（向下；离开）', '向下；去除；相反', '在技术词里，de- 常表示“去掉、还原”：debug 就是去掉错误。', [
    ['decrease', '减少', 'de-|crease'], ['defrost', '除霜', 'de-|frost'], ['decode', '解码', 'de-|code'], ['deform', '使变形', 'de-|form'], ['debug', '调试', 'de-|bug'], ['deactivate', '停用', 'de-|activate']
  ]],
  ['micro', 'prefix', 2, 'micro-', ['micro'], '希腊语 mikros（小）', '微小；百万分之一', 'micro- 表示“很小”，microscope 是“看小东西的仪器”。', [
    ['microscope', '显微镜', 'micro-|scope'], ['microphone', '麦克风', 'micro-|phone'], ['microwave', '微波炉', 'micro-|wave'], ['microchip', '微芯片', 'micro-|chip'], ['microorganism', '微生物', 'micro-|organism'], ['microsecond', '微秒', 'micro-|second']
  ]],
  ['tele', 'prefix', 2, 'tele-', ['tele'], '希腊语 tēle（远）', '远；远程', 'tele- 表示“远距离”：telephone 是“远处的声音”。', [
    ['telephone', '电话', 'tele-|phone'], ['television', '电视', 'tele-|vision'], ['telescope', '望远镜', 'tele-|scope'], ['telegraph', '电报', 'tele-|graph'], ['telework', '远程办公', 'tele-|work'], ['telecommunication', '电信', 'tele-|communication']
  ]],
  ['pro', 'prefix', 2, 'pro-', ['pro'], '拉丁语 pro（向前；支持）', '向前；支持；代替', 'pro- 最常见的意思是“向前”：progress 就是“往前走”。', [
    ['progress', '进步', 'pro-|gress'], ['produce', '生产', 'pro-|duce'], ['promote', '促进；晋升', 'pro-|mote'], ['project', '项目；投射', 'pro-|ject'], ['protect', '保护', 'pro-|tect'], ['provide', '提供', 'pro-|vide']
  ]],
  ['post', 'prefix', 2, 'post-', ['post'], '拉丁语 post（在……之后）', '在……之后', 'post- 与 pre-（之前）相对：postpone 是“放到后面”。', [
    ['postpone', '推迟', 'post-|pone'], ['postgraduate', '研究生', 'post-|graduate'], ['postscript', '附言', 'post-|script'], ['postwar', '战后的', 'post-|war'], ['postmortem', '事后分析；尸检', 'post-|mortem']
  ]],
  ['mal', 'prefix', 3, 'mal-', ['mal'], '拉丁语 male / malus（坏）', '坏；恶；不良', 'malware = mal + software，意思是“恶意软件”。', [
    ['malfunction', '故障', 'mal-|function'], ['malnutrition', '营养不良', 'mal-|nutrition'], ['malware', '恶意软件', 'mal-|ware'], ['malpractice', '渎职；医疗事故', 'mal-|practice'], ['maltreat', '虐待', 'mal-|treat']
  ]],
  ['extra', 'prefix', 3, 'extra-', ['extra'], '拉丁语 extra（在外；超出）', '超出；额外', 'extraordinary 就是“超出平常的”。', [
    ['extraordinary', '非凡的', 'extra-|ordinary'], ['extracurricular', '课外的', 'extra-|curricular'], ['extraterrestrial', '外星的', 'extra-|terrestrial'], ['extravagant', '奢侈的', 'extra-|vagant'], ['extracellular', '细胞外的', 'extra-|cellular']
  ]],
  ['meta', 'prefix', 3, 'meta-', ['meta', 'met'], '希腊语 meta（在……之后；超越；变化）', '超越；变化；关于……本身', '在技术词里，meta- 指“关于自身的”：metadata 是“关于数据的数据”。', [
    ['metaphor', '隐喻', 'meta-|phor'], ['metadata', '元数据', 'meta-|data'], ['metabolism', '新陈代谢', 'meta-|bolism'], ['metamorphosis', '蜕变', 'meta-|morphosis'], ['metaphysics', '形而上学', 'meta-|physics']
  ]],
  ['proto', 'prefix', 3, 'proto-', ['proto', 'prot'], '希腊语 prōtos（第一）', '第一；原始；最初的', 'prototype 是“最初的样品”，protocol 原指“贴在文件最前面的第一页”。', [
    ['prototype', '原型', 'proto-|type'], ['protocol', '协议', 'proto-|col'], ['protagonist', '主角', 'prot-|agonist'], ['proton', '质子', 'prot-|on'], ['protozoa', '原生动物', 'proto-|zoa']
  ]],

  // ———————— 后缀 ————————
  ['er', 'suffix', 1, '-er / -or', ['er', 'or'], '古英语 -ere；拉丁语 -or（做……的人）', '做……的人；……器', '加在动词后表示“做这件事的人或物”：teach → teacher。', [
    ['teacher', '教师', 'teach|-er'], ['player', '选手；播放器', 'play|-er'], ['worker', '工人', 'work|-er'], ['actor', '演员', 'act|-or'], ['visitor', '访客', 'visit|-or'], ['editor', '编辑', 'edit|-or']
  ]],
  ['ful', 'suffix', 1, '-ful', ['ful'], '古英语 -full（充满）', '充满……的', '-ful 是 full（满的）的弱化形式，只有一个 l：helpful。', [
    ['helpful', '有帮助的', 'help|-ful'], ['careful', '小心的', 'care|-ful'], ['useful', '有用的', 'use|-ful'], ['powerful', '强大的', 'power|-ful'], ['peaceful', '和平的', 'peace|-ful'], ['wonderful', '精彩的', 'wonder|-ful']
  ]],
  ['less', 'suffix', 1, '-less', ['less'], '古英语 -lēas（没有）', '没有……的', '-less 与 -ful 相反：careful（小心）↔ careless（粗心）。', [
    ['homeless', '无家可归的', 'home|-less'], ['careless', '粗心的', 'care|-less'], ['useless', '无用的', 'use|-less'], ['endless', '无尽的', 'end|-less'], ['fearless', '无畏的', 'fear|-less'], ['wireless', '无线的', 'wire|-less']
  ]],
  ['ness', 'suffix', 1, '-ness', ['ness'], '古英语 -nes（状态）', '……的状态；……的性质', '把形容词变成名词：kind → kindness。词尾是 y 时先把 y 变 i：happy → happiness。', [
    ['happiness', '幸福', 'happi|-ness'], ['kindness', '善良', 'kind|-ness'], ['darkness', '黑暗', 'dark|-ness'], ['illness', '疾病', 'ill|-ness'], ['fitness', '健康状态', 'fit|-ness'], ['awareness', '意识', 'aware|-ness']
  ]],
  ['ly', 'suffix', 1, '-ly', ['ly'], '古英语 -līce（……地）', '……地；每……的', '形容词 + -ly 变副词（quick → quickly）；名词 + -ly 变形容词（friend → friendly）。', [
    ['quickly', '快速地', 'quick|-ly'], ['slowly', '缓慢地', 'slow|-ly'], ['carefully', '小心地', 'careful|-ly'], ['friendly', '友好的', 'friend|-ly'], ['weekly', '每周的', 'week|-ly'], ['happily', '快乐地', 'happi|-ly']
  ]],
  ['able', 'suffix', 1, '-able / -ible', ['able', 'ible'], '拉丁语 -abilis / -ibilis（能够）', '能够……的；值得……的', '-able 多接在动词后：read → readable；-ible 多接在拉丁语来源的词干后：vis → visible。', [
    ['readable', '易读的', 'read|-able'], ['comfortable', '舒适的', 'comfort|-able'], ['reliable', '可靠的', 'reli|-able'], ['acceptable', '可接受的', 'accept|-able'], ['visible', '可见的', 'vis|-ible'], ['flexible', '灵活的', 'flex|-ible']
  ]],
  ['tion', 'suffix', 1, '-tion / -sion', ['tion', 'sion'], '拉丁语 -tio(n-)（行为；结果）', '……的行为；……的结果', '把动词变成名词：educate → education，decide → decision。', [
    ['education', '教育', 'educa|-tion'], ['information', '信息', 'informa|-tion'], ['decision', '决定', 'deci|-sion'], ['connection', '连接', 'connec|-tion'], ['invention', '发明', 'inven|-tion'], ['revision', '修订', 'revi|-sion']
  ]],
  ['ment', 'suffix', 1, '-ment', ['ment'], '拉丁语 -mentum（行为；结果）', '……的行为；……的结果', '动词 + -ment 变名词：agree → agreement。', [
    ['government', '政府', 'govern|-ment'], ['movement', '运动', 'move|-ment'], ['development', '发展', 'develop|-ment'], ['agreement', '协议', 'agree|-ment'], ['management', '管理', 'manage|-ment'], ['environment', '环境', 'environ|-ment']
  ]],
  ['ist', 'suffix', 1, '-ist', ['ist'], '希腊语 -istēs（做……的人）', '……家；……者；……主义者', '表示从事某种专业或持某种主张的人：art → artist。', [
    ['artist', '艺术家', 'art|-ist'], ['scientist', '科学家', 'scient|-ist'], ['tourist', '游客', 'tour|-ist'], ['pianist', '钢琴家', 'pian|-ist'], ['specialist', '专家', 'special|-ist'], ['journalist', '记者', 'journal|-ist']
  ]],
  ['ous', 'suffix', 1, '-ous', ['ous'], '拉丁语 -osus（充满……的）', '具有……性质的', '把名词变成形容词：danger → dangerous。', [
    ['famous', '著名的', 'fam|-ous'], ['dangerous', '危险的', 'danger|-ous'], ['nervous', '紧张的', 'nerv|-ous'], ['curious', '好奇的', 'curi|-ous'], ['various', '各种各样的', 'vari|-ous'], ['serious', '严肃的；严重的', 'seri|-ous']
  ]],
  ['al', 'suffix', 1, '-al', ['al'], '拉丁语 -alis（与……有关）', '与……有关的', '名词 + -al 变形容词：nation → national。', [
    ['national', '国家的', 'nation|-al'], ['personal', '个人的', 'person|-al'], ['musical', '音乐的', 'music|-al'], ['digital', '数字的', 'digit|-al'], ['global', '全球的', 'glob|-al'], ['original', '原始的；原创的', 'origin|-al']
  ]],
  ['ive', 'suffix', 2, '-ive', ['ive'], '拉丁语 -ivus（有……倾向的）', '有……倾向的；……性的', '多接在动词词干后：create → creative，attract → attractive。', [
    ['active', '积极的', 'act|-ive'], ['creative', '有创造力的', 'creat|-ive'], ['effective', '有效的', 'effect|-ive'], ['attractive', '有吸引力的', 'attract|-ive'], ['expensive', '昂贵的', 'expens|-ive'], ['positive', '积极的；正面的', 'posit|-ive']
  ]],
  ['ize', 'suffix', 2, '-ize / -ise', ['ize', 'ise'], '希腊语 -izein（使成为）', '使成为；使……化', '动词后缀：modern → modernize。英式拼写常写作 -ise。', [
    ['realize', '意识到', 'real|-ize'], ['organize', '组织', 'organ|-ize'], ['modernize', '使现代化', 'modern|-ize'], ['summarize', '总结', 'summar|-ize'], ['prioritize', '把……排优先级', 'priorit|-ize'], ['customize', '定制', 'custom|-ize']
  ]],
  ['ify', 'suffix', 2, '-ify', ['ify'], '拉丁语 -ficare（使成为），经古法语 -ifier', '使成为；使变得', '动词后缀，表示“使……”：simple → simplify。', [
    ['simplify', '简化', 'simpl|-ify'], ['clarify', '澄清', 'clar|-ify'], ['verify', '核实', 'ver|-ify'], ['identify', '识别', 'ident|-ify'], ['classify', '分类', 'class|-ify'], ['specify', '指定；明确说明', 'spec|-ify']
  ]],
  ['ity', 'suffix', 2, '-ity / -ty', ['ity', 'ty'], '拉丁语 -itas（性质；状态）', '……的性质；……的状态', '把形容词变成抽象名词：able → ability，flexible → flexibility。', [
    ['ability', '能力', 'abil|-ity'], ['activity', '活动', 'activ|-ity'], ['reality', '现实', 'real|-ity'], ['security', '安全', 'secur|-ity'], ['flexibility', '灵活性', 'flexibil|-ity'], ['popularity', '受欢迎程度', 'popular|-ity']
  ]],
  ['ship', 'suffix', 2, '-ship', ['ship'], '古英语 -scipe（状态；关系）', '……的状态；……关系；……技能', '表示身份、关系或技能：friend → friendship，leader → leadership。', [
    ['friendship', '友谊', 'friend|-ship'], ['leadership', '领导力', 'leader|-ship'], ['relationship', '关系', 'relation|-ship'], ['partnership', '合作关系', 'partner|-ship'], ['membership', '会员资格', 'member|-ship'], ['ownership', '所有权', 'owner|-ship']
  ]],
  ['ology', 'suffix', 2, '-ology / -logy', ['logy', 'ology'], '希腊语 -logia（言论；研究）', '……学；……研究', '学科名称的后缀：bio（生命）+ logy（研究）= biology。', [
    ['biology', '生物学', 'bio|-logy'], ['psychology', '心理学', 'psycho|-logy'], ['technology', '技术', 'techno|-logy'], ['geology', '地质学', 'geo|-logy'], ['sociology', '社会学', 'socio|-logy'], ['methodology', '方法论', 'methodo|-logy']
  ]],
  ['ee', 'suffix', 3, '-ee', ['ee'], '古法语 -é（过去分词词尾）', '被……的人；接受者', '-ee 表示“动作的承受者”，与 -er（做动作的人）相对：employer 雇主 ↔ employee 雇员。', [
    ['employee', '雇员', 'employ|-ee'], ['trainee', '受训者', 'train|-ee'], ['interviewee', '受访者；面试者', 'interview|-ee'], ['attendee', '出席者', 'attend|-ee'], ['nominee', '被提名人', 'nomin|-ee'], ['refugee', '难民', 'refug|-ee']
  ]]
]);
