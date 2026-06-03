// ===== 六维评估输入 =====

export type AgeGroup = 'teen' | 'young' | 'adult'          // <20 / 20-30 / 30+
export type AddictionSeverity = 'mild' | 'moderate' | 'severe'
export type CognitiveLevel = 'A' | 'B' | 'C' | 'D'
export type LivingSituation = 'dorm' | 'home_student' | 'alone' | 'shared' | 'married'
export type EconomicLevel = 'student' | 'entry' | 'stable' | 'affluent'
export type BodyCondition = 'A' | 'B' | 'C' | 'D'

export interface AssessmentInput {
  age: AgeGroup
  addictionYears: number                     // 实际年数
  addictionSeverity: AddictionSeverity
  addictionPattern: string                   // 用户描述的频率模式（自由文本）
  hasQuitBefore: boolean                     // 是否尝试戒过
  longestStreak: number                      // 最长连续天数
  cognitiveLevel: CognitiveLevel
  livingSituation: LivingSituation
  economicLevel: EconomicLevel
  bodyCondition: BodyCondition
}

// ===== 严重度评估输出 =====

export type SeverityLevel = 'mild' | 'moderate' | 'severe'

export interface SeverityAssessment {
  level: SeverityLevel
  recoveryMonths: string
  summary: string
  overallScore: number
}

// ===== 模块一：紧急应对 =====

export interface Strategy {
  id: string
  title: string
  steps: string
  principle: string
  icon: string
}

export interface EmergencyPlan {
  strategies: Strategy[]
  mantra: string
}

// ===== 模块二：30天启动计划 =====

export interface WeekTask {
  week: number
  theme: string
  tasks: string[]
}

export interface DailyAction {
  time: string
  action: string
}

export interface ExercisePlan {
  weeks: string
  schedule: string
  notes: string
}

export interface EnvironmentChecklist {
  item: string
  reason: string
}

export interface LaunchPlan {
  weekTasks: WeekTask[]
  dailyActions: DailyAction[]
  exercisePlan: ExercisePlan
  environmentChecklist: EnvironmentChecklist[]
}

// ===== 模块三：长期路线图 =====

export interface RecoveryPhase {
  phase: number
  name: string
  months: string
  goal: string
  milestones: string[]
}

export interface TCMFood {
  name: string
  category: 'animal' | 'plant' | 'recipe'
  effect: string
  instructions: string
}

export interface TCMAcupoint {
  name: string
  code: string
  location: string
  method: string
  effect: string
}

export interface TCMAdvice {
  foods: TCMFood[]
  acupoints: TCMAcupoint[]
  exercises: string[]
  sleepNote: string
  sixWordFormula: { char: string; meaning: string; action: string }[]
}

export interface Roadmap {
  phases: RecoveryPhase[]
  tcmAdvice: TCMAdvice
  recoveryMilestones: string[]
}

// ===== 模块四：关键预判 =====

export interface Prediction {
  title: string
  timing: string
  risk: string
  ifThen: string
}

// ===== 模块五：智慧根基 =====

export interface WisdomContent {
  title: string
  body: string[]
  closing: string
}

// ===== 完整方案 =====

export interface GeneratedPlan {
  severity: SeverityAssessment
  moduleOne: EmergencyPlan
  moduleTwo: LaunchPlan
  moduleThree: Roadmap
  moduleFour: Prediction[]
  moduleFive: WisdomContent
}

// ===== 问卷维度定义 =====

export interface DimensionOption {
  value: string
  label: string
  description?: string
}

export interface Dimension {
  id: string
  title: string
  options: DimensionOption[]
}

// ===== App 状态 =====

export type AppStep = 'questionnaire' | 'generating' | 'result'
