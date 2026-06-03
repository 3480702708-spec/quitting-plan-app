import type {
  AssessmentInput, GeneratedPlan, EmergencyPlan, LaunchPlan,
  Roadmap, Prediction, WisdomContent, RecoveryPhase, TCMAdvice,
  EnvironmentChecklist, WeekTask, DailyAction,
  BodyCondition,
} from '../types'
import { scoreSeverity } from './severityScorer'
import { URGE_STRATEGIES, URGE_MANTRAS } from '../data/content/urgeTechniques'
import { EXERCISE_PLANS } from '../data/content/exercisePlans'
import { UNIVERSAL_PREDICTIONS, AGE_PREDICTIONS, LIVING_PREDICTIONS } from '../data/content/relapseScenarios'
import { TCM_RECIPES, TCM_SLEEP_NOTE } from '../data/content/tcmFoods'
import { TCM_ACUPOINTS, BADUANJIN_NOTE, ZHAN_ZHUANG_NOTE, KEGEL_NOTE } from '../data/content/tcmAcupoints'
import { NEURO_EXPLANATIONS, RECOVERY_TIMELINE_TEXT, FLATLINE_WARNING } from '../data/content/neuroscience'

// ============================
// Module 1: Emergency Response
// ============================

const STRATEGY_MATRIX: Record<string, string[]> = {
  dorm: ['coldWaterFace', 'pushupsToFailure', 'leaveToLibrary'],
  home_student: ['coldWaterFace', 'leavePhone', 'pushupsToFailure'],
  alone: ['coldShower', 'goForWalk', 'urgeSurfing'],
  shared: ['coldWaterFace', 'leavePhone', 'pushupsToFailure'],
  married: ['coldShower', 'urgeSurfing', 'urgeSurfing'],
}

function generateEmergencyPlan(input: AssessmentInput): EmergencyPlan {
  const strategyIds = STRATEGY_MATRIX[input.livingSituation] || STRATEGY_MATRIX['dorm']
  const strategies = strategyIds.map(id => URGE_STRATEGIES[id]).filter(Boolean)
  const mantra = URGE_MANTRAS[input.livingSituation] || URGE_MANTRAS['dorm']
  return { strategies, mantra }
}

// ============================
// Module 2: 30-Day Launch Plan
// ============================

function buildWeekTasks(input: AssessmentInput): WeekTask[] {
  return [
    {
      week: 1, theme: '环境改造',
      tasks: [
        '手机充电器从床边移到书桌——上床不带手机。床上只放一本纸质书。',
        '删除所有浏览器收藏夹、清除浏览记录、删除触发App。',
        '设定一个固定起床时间，不管几点睡都这个点起。',
        '找一个可以每天报备的人（室友/朋友），每天发一条"完成"。',
      ],
    },
    {
      week: 2, theme: '启动运动',
      tasks: [
        `每天运动：${EXERCISE_PLANS[input.bodyCondition].schedule}`,
        '目标不是"练出效果"，是每天"动过了"——穿上鞋出门就算完成。',
        '运动后记录一句感受。',
      ],
    },
    {
      week: 3, theme: '学习渴求管理',
      tasks: [
        '至少尝试一次"冲动冲浪"：渴求来了→注意到→找身体感觉→不评判→呼吸→等它退。',
        '记住DEADS口诀：延迟5分钟→逃离环境→避免/接纳→分散注意→替代行为。',
        '如果渴求太猛——直接执行紧急应对包。不要跟它商量。',
      ],
    },
    {
      week: 4, theme: '复盘调整',
      tasks: [
        '回头看：哪几天最难？什么情境最容易触发？——写下来。',
        '调整环境：手机放更远、空白时间填上、触发源防护重新设置。',
        '准备第二个月——第21天波动可能还会来，但你知道它是正常的。',
      ],
    },
  ]
}

function buildDailyActions(input: AssessmentInput): DailyAction[] {
  const exerciseText = input.bodyCondition === 'D'
    ? '散步10-15分钟'
    : input.bodyCondition === 'C'
      ? '散步+八段锦'
      : '散步或慢跑'
  return [
    { time: '起床后', action: '喝一杯水 + 心里说一句"今天我在重建"。' },
    { time: '白天', action: `完成一次运动（${exerciseText}）。` },
    { time: '睡前1小时', action: '手机放桌上充电，床上只放一本纸质书。' },
    { time: '睡前', action: '写下明天要做的一件事（跟戒色无关）。' },
  ]
}

function buildEnvironmentChecklist(input: AssessmentInput): EnvironmentChecklist[] {
  const base: EnvironmentChecklist[] = [
    { item: '手机不进床', reason: '床=睡觉，手机=书桌。给大脑建立"床上没有娱乐"的条件反射。' },
    { item: '删除触发内容', reason: '清空收藏夹、浏览记录、触发App。不给"随便看看"留出口。' },
  ]

  const specific: Record<string, EnvironmentChecklist[]> = {
    dorm: [
      { item: '床上只放纸质书', reason: '一个物理障碍就能打断自动化的拿手机动作。' },
      { item: '手机睡前锁进柜子或交给室友', reason: '外部约束 > 自我约束。' },
    ],
    home_student: [
      { item: '房门不锁', reason: '开放空间=降低隐私窗口。' },
      { item: '电脑在客厅用', reason: '不在卧室用任何设备。' },
    ],
    alone: [
      { item: '手机22:00后放客厅', reason: '用科技锁科技。' },
      { item: '每天至少出门一次', reason: '不论多懒——出门是改变状态最快的方式。' },
    ],
    shared: [
      { item: '房门开放原则', reason: '不给完全隐私创造条件。' },
      { item: '设备在公共区域充电', reason: '睡前设备不在卧室。' },
    ],
    married: [
      { item: '坦诚沟通', reason: '不需要坦白细节——让对方知道你在做什么和为什么。' },
    ],
  }

  return [...base, ...(specific[input.livingSituation] || specific['dorm'])]
}

function generateLaunchPlan(input: AssessmentInput): LaunchPlan {
  return {
    weekTasks: buildWeekTasks(input),
    dailyActions: buildDailyActions(input),
    exercisePlan: EXERCISE_PLANS[input.bodyCondition],
    environmentChecklist: buildEnvironmentChecklist(input),
  }
}

// ============================
// Module 3: Long-Term Roadmap
// ============================

function buildPhases(input: AssessmentInput): RecoveryPhase[] {
  const isSevere = input.addictionSeverity === 'severe' ||
    (input.addictionSeverity === 'moderate' && (input.bodyCondition === 'C' || input.bodyCondition === 'D'))

  if (isSevere) {
    return [
      {
        phase: 1, name: '基础建设', months: '第1-6个月',
        goal: '停止所有色情使用，建立每天散步+早睡+环境管控的基本生活结构。不求快——求稳。',
        milestones: ['连续30天无破戒', '每天23点前入睡成为习惯', '运动成为日常不可跳过项'],
      },
      {
        phase: 2, name: '神经修复', months: '第7-14个月',
        goal: '安稳度过平线期，情绪趋于稳定。身体症状开始改善。日常快乐的感受能力回归。',
        milestones: ['度过平线期（可能长达2-4个月）', '身体明显症状开始减轻', '不再需要用计数器来维持'],
      },
      {
        phase: 3, name: '身份稳固', months: '第15-24个月',
        goal: '色情不再是选项。你不是"在戒色的人"，你已经把这事翻篇了。',
        milestones: ['不需要计数器也能稳定', '身体症状基本消失', '色情对你的吸引力降到"不存在的选项"'],
      },
    ]
  }

  return [
    {
      phase: 1, name: '基础建设', months: '第1-2个月',
      goal: '停止所有色情使用，建立运动+睡眠习惯。',
      milestones: ['连续30天无破戒', '运动习惯锁定', '能识别自己的AIDs链条'],
    },
    {
      phase: 2, name: '神经修复', months: '第3-9个月',
      goal: '多巴胺敏感度恢复，日常快乐回归。度过平线期，情绪稳定。',
      milestones: ['度过平线期', '日常快乐感受能力恢复', '睡眠质量明显改善'],
    },
    {
      phase: 3, name: '身份稳固', months: '第10-12个月',
      goal: '色情不再是选项。"戒色"不再是生活主题——生活本身才是。',
      milestones: ['不需计数器也能稳定', '身体症状大幅改善', '新的健康生活节奏牢固建立'],
    },
  ]
}

function buildTCMAdvice(input: AssessmentInput): TCMAdvice {
  const bodyFoodMap: Record<BodyCondition, string[]> = {
    A: ['blackBeanWalnutMilk'],
    B: ['yamRibSoup', 'blackBeanWalnutMilk'],
    C: ['walnutQianshiCongee', 'blackBeanWalnutMilk', 'gojiMulberryTea'],
    D: ['walnutQianshiCongee', 'yamRibSoup'],
  }

  const recipeIds = bodyFoodMap[input.bodyCondition]
  const foods = recipeIds.map(id => {
    const r = TCM_RECIPES[id as keyof typeof TCM_RECIPES]
    return {
      name: r.name, category: 'recipe' as const,
      effect: r.suitable,
      instructions: `${r.ingredients}。${r.instructions}`,
    }
  })

  const pointMap: Record<BodyCondition, number[]> = {
    A: [1], B: [1], C: [2, 0, 1], D: [2, 0, 1],
  }
  const acupoints = pointMap[input.bodyCondition].map(i => TCM_ACUPOINTS[i])

  const exercises: string[] = [BADUANJIN_NOTE]
  if (input.bodyCondition !== 'D') exercises.push(ZHAN_ZHUANG_NOTE)
  exercises.push(KEGEL_NOTE)

  const sleepKey = input.bodyCondition as keyof typeof TCM_SLEEP_NOTE
  const sleepNote = TCM_SLEEP_NOTE[sleepKey] ?? TCM_SLEEP_NOTE.B

  return {
    foods, acupoints, exercises, sleepNote,
    sixWordFormula: [
      { char: '止', meaning: '停止泄精', action: '戒色本身——先把洞堵上。' },
      { char: '睡', meaning: '早睡涵养肾精', action: '23点前入睡比吃任何药都管用。' },
      { char: '健', meaning: '健脾让吸收通畅', action: '食欲好大便成形才能补进去。' },
      { char: '填', meaning: '填补肾精', action: '食疗——核桃、黑芝麻、黑豆。' },
      { char: '收', meaning: '让相火降下来', action: '早睡+搓涌泉+少思虑。' },
      { char: '练', meaning: '让身体自己修复', action: '八段锦+散步+提肛。' },
    ],
  }
}

function generateRoadmap(input: AssessmentInput): Roadmap {
  return {
    phases: buildPhases(input),
    tcmAdvice: buildTCMAdvice(input),
    recoveryMilestones: [
      '第1个月：止漏固精——停止精气继续外泄',
      '第2个月：补血——面色渐红润，皮肤改善',
      '第3个月：补神——嗜睡改善，精力充沛',
      '4-6个月：补气——眼睛变亮，自信心提升',
      '6-12个月：补精——生殖系统功能逐步恢复',
      '12个月+：补脊髓——腰膝有力',
      '18个月+：补脑髓——记忆力恢复，脱发改善',
    ],
  }
}

// ============================
// Module 4: Relapse Predictions
// ============================

function generatePredictions(input: AssessmentInput): Prediction[] {
  const predictions = [...UNIVERSAL_PREDICTIONS]

  const agePreds = AGE_PREDICTIONS[input.age]
  if (agePreds) predictions.push(...agePreds)

  const livingPreds = LIVING_PREDICTIONS[input.livingSituation]
  if (livingPreds) predictions.push(...livingPreds)

  if (input.addictionSeverity === 'severe' || input.bodyCondition === 'D') {
    predictions.push({
      title: '平线期可能更长',
      timing: '第2-6周开始，可能持续2-4个月或更久',
      risk: '从青春期前开始接触+身体已有明显损伤——平线期可能比一般人更长。',
      ifThen: '如果平线期特别长就想放弃→记住：时长跟成瘾年限正相关。7-8年的损伤需要更久修复。修复正在进行，你只是还看不到。',
    })
  }

  return predictions
}

// ============================
// Module 5: Wisdom Foundation
// ============================

function generateWisdom(input: AssessmentInput): WisdomContent {
  const neuro = NEURO_EXPLANATIONS[input.cognitiveLevel]

  if (input.cognitiveLevel === 'A') {
    return {
      title: neuro.title,
      body: [
        neuro.body,
        '你现在要做的只有一件事：把"大音响"关掉，让大脑慢慢恢复。恢复需要时间。但你的大脑修复速度正在人生巅峰——你现在做的每一个选择，都是在帮大脑把"正常快乐"的按钮重新装回来。',
        '恢复时间线：',
        RECOVERY_TIMELINE_TEXT.week1,
        RECOVERY_TIMELINE_TEXT.week2,
        RECOVERY_TIMELINE_TEXT.week3to4,
        RECOVERY_TIMELINE_TEXT.month2,
        RECOVERY_TIMELINE_TEXT.month3,
        RECOVERY_TIMELINE_TEXT.year1,
      ],
      closing: input.hasQuitBefore
        ? `你之前戒过${input.longestStreak}天。你有这个能力。问题从来不在意志力——问题在你没装备。现在你有装备了。`
        : '问题从来不在意志力——问题在你没装备。现在你有装备了。',
    }
  }

  if (input.cognitiveLevel === 'B') {
    return {
      title: neuro.title,
      body: [
        neuro.body,
        '"无住生心"——《金刚经》第十品。什么叫"住"？住就是执着、卡住。你之前的方法是"住"在压制上——"我不能想"本身就是一种执着。每次你告诉自己"绝对不能破"，你就在心里给"破"搭了一个巨大的台。真正的方法是：念头来了——看到它——不跟它走。你是一块冲浪板，念头是浪。浪会来，也会走。你只需要冲过去。',
        `${FLATLINE_WARNING.title}：${FLATLINE_WARNING.when}。${FLATLINE_WARNING.symptoms}。${FLATLINE_WARNING.cause}`,
        FLATLINE_WARNING.goldenRule,
      ],
      closing: '你不是在"戒"什么东西——你是在"建"一个新的大脑。',
    }
  }

  // C and D
  return {
    title: neuro.title,
    body: [
      neuro.body,
      '《黄帝外经·命根养生篇》核心：',
      '"精动，由于火动；火不动，则精安能摇乎？" "可见精动由于心动也。故安心为利精之法也。"',
      '翻译：身体有反应，是因为心里先动了。不是说你主动想——是条件反射。你多年建立的神经回路（看到→心动→火动→精动）已经铺得又宽又平。每一次不跟着念头走，这条路就窄一寸。',
      '古中医圆运动：人体的火力（相火）应该藏在肾里暖你的腰膝。纵欲让肾精亏了→水少→火藏不住→浮到上面烧你的脑子和心。你感受到的"上热下寒"——就是圆转不动的结果。恢复方向：早睡（子时相火下降窗口）、搓涌泉（引火下行）、少思虑。',
      '金刚经"离一切相"——这个"一切相"也包括"戒色"本身。真正的自由不是"我不看色情"，是"色情对我来说已经不是一个选项"——就像你不会去想"今天要不要吃石头"。',
    ],
    closing: input.cognitiveLevel === 'D'
      ? '你已经走了很远。每次摔倒是路上的坑，不是你的终点。你不等于你的天数。'
      : '恢复不是一条直线。有起伏。有平线期。这些都是正常的路面。你能走出来。',
  }
}

// ============================
// Main Pipeline
// ============================

export function generatePlan(input: AssessmentInput): GeneratedPlan {
  return {
    severity: scoreSeverity(input),
    moduleOne: generateEmergencyPlan(input),
    moduleTwo: generateLaunchPlan(input),
    moduleThree: generateRoadmap(input),
    moduleFour: generatePredictions(input),
    moduleFive: generateWisdom(input),
  }
}
