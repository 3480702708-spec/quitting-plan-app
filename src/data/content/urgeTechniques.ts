import type { Strategy } from '../../types'

export const URGE_STRATEGIES: Record<string, Strategy> = {
  coldWaterFace: {
    id: 'coldWaterFace',
    title: '冷水冲脸30秒',
    steps: '去洗手间，打开冷水，双手捧水冲脸，持续30秒。如果条件允许，冲后颈和手腕也冲一下。',
    principle: '冷水激活潜水反射，多巴胺平稳上升250%持续2小时——比偷看一个视频给的多，而且不会让你后悔。你不可能同时"冷得发抖"和"欲火中烧"。',
    icon: '💧',
  },
  coldShower: {
    id: 'coldShower',
    title: '冲一个冷水澡（2分钟足够）',
    steps: '进浴室，水温调冷（10-15度效果最佳），站2分钟。从温到冷逐步适应，不要一上来就冰水。',
    principle: '多巴胺增加250%，去甲肾上腺素增加530%，持续2小时。副交感神经回弹产生镇静效果。这是性价比最高的神经重置。',
    icon: '🚿',
  },
  pushupsToFailure: {
    id: 'pushupsToFailure',
    title: '俯卧撑做到手臂发抖',
    steps: '直接趴下做俯卧撑，做到手臂在抖、趴不下去为止。如果做不了标准俯卧撑，做跪姿俯卧撑。',
    principle: '欲望的本质是一股能量堵在下半身。俯卧撑把血泵到胸和手臂，物理上就把能量转移了。做完之后再看看那个欲望还在不在。',
    icon: '💪',
  },
  leaveToLibrary: {
    id: 'leaveToLibrary',
    title: '离开宿舍去图书馆/操场',
    steps: '穿上鞋，拿上校园卡，出门。去图书馆坐一会儿，或者去操场走一圈。走完再决定要不要回宿舍。',
    principle: '宿舍是你的"触发环境"——你的大脑已经在这个房间里装了"偷看"的快捷键。走出那个门，快捷键就失效了。',
    icon: '🚶',
  },
  goForWalk: {
    id: 'goForWalk',
    title: '穿上鞋出门快走10分钟',
    steps: '换鞋，出门，快走。不用跑，能出汗的速度就行。10分钟后回头。',
    principle: '改变环境+有氧消耗+运动释放多巴胺。一举三得。10分钟后你的前额叶会重新上线。',
    icon: '🏃',
  },
  urgeSurfing: {
    id: 'urgeSurfing',
    title: '冲动冲浪5分钟',
    steps: '①注意到了——"哦，来了" ②找身体感觉——它在胸口还是肚子？③不评判——它只是一个生理现象 ④呼吸当锚——潮水一样进来出去 ⑤骑上去——让浪在你下面起伏 ⑥等它自己退——通常1-2分钟，最长20-30分钟。',
    principle: '欲望像海浪——升起、达峰、自然消退。你越是想推开它，它越冲你。你冲浪——站上去，让它从你下面过去。',
    icon: '🌊',
  },
  messageBuddy: {
    id: 'messageBuddy',
    title: '给运动搭子/朋友发一条消息',
    steps: '打开微信，给一个信得过的人发一条简短的消息——不用说你正在经历什么，就说"出来走走？"或者"在干嘛"。',
    principle: '渴求的本质往往不是"性"，而是孤独、无聊或压力。一句社交消息可以打破这个隔离状态。',
    icon: '📱',
  },
  leavePhone: {
    id: 'leavePhone',
    title: '放下手机，去做一件动手的事',
    steps: '手机屏幕朝下放桌上。找一件需要用两只手的事——洗碗、拖地、整理衣柜、叠衣服。做5分钟。',
    principle: '手机是最高风险的触发设备。物理上让它离开你的手，用一件动手的事让双手忙起来。',
    icon: '📴',
  },
}

export const URGE_MANTRAS: Record<string, string> = {
  dorm: '来了→先冲冷水→还来→俯卧撑到趴→还在→出门走一圈。这三步做完，浪就过去了。',
  home_student: '来了→去客厅→冷水脸→不锁房门。换个空间，快捷键就没了。',
  alone: '来了→5分钟后再决定→先换个地方→找件让两只手都忙起来的事做。问问自己：我现在真正需要的是什么？',
  shared: '来了→去公共区域→冷水脸→不做决定，先做动作。',
  married: '来了→冷水澡→冲动冲浪→如果可能，跟伴侣说"我需要走一圈"。',
}

export const DEADS_STEPS = [
  { step: 'Delay', label: '延迟', desc: '"等5分钟再决定。" 5分钟后你的前额叶会重新上线。' },
  { step: 'Escape', label: '逃离', desc: '物理离开当前环境，打破触发-反应链。' },
  { step: 'Avoid/Accept', label: '避免/接纳', desc: '避免已知触发源；如果避不了——就接纳它来了，不抵抗。' },
  { step: 'Distract', label: '分散', desc: '做一件需要全神贯注的事。' },
  { step: 'Substitute', label: '替代', desc: '问问自己——我现在真正需要的是什么？无聊→读书，压力→散步，孤独→打电话。' },
]
