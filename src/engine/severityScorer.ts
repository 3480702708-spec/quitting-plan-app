import type { AssessmentInput, SeverityAssessment } from '../types'

const WEIGHTS = {
  addictionSeverity: 5,
  bodyCondition: 4,
  age: 3,
  livingSituation: 3,
  cognitiveLevel: 2,
  economicLevel: 1,
}

function mapAddictionToScore(input: AssessmentInput): number {
  if (input.addictionSeverity === 'severe') return 3
  if (input.addictionSeverity === 'moderate') return 2
  return 1
}

function mapBodyToScore(level: string): number {
  switch (level) {
    case 'D': return 3
    case 'C': return 3
    case 'B': return 2
    default: return 1
  }
}

function mapAgeToScore(age: string): number {
  switch (age) {
    case 'adult': return 3
    case 'young': return 2
    default: return 1
  }
}

function mapLivingToScore(living: string): number {
  switch (living) {
    case 'alone': return 3
    case 'dorm': return 2
    case 'home_student': return 2
    case 'shared': return 1
    case 'married': return 1
    default: return 2
  }
}

function mapCognitiveToScore(cog: string): number {
  switch (cog) {
    case 'D': return 3
    case 'C': return 2
    case 'B': return 2
    default: return 1
  }
}

export function scoreSeverity(input: AssessmentInput): SeverityAssessment {
  const scores = {
    addiction: mapAddictionToScore(input),
    body: mapBodyToScore(input.bodyCondition),
    age: mapAgeToScore(input.age),
    living: mapLivingToScore(input.livingSituation),
    cognitive: mapCognitiveToScore(input.cognitiveLevel),
    economic: 1,
  }

  const total =
    scores.addiction * WEIGHTS.addictionSeverity +
    scores.body * WEIGHTS.bodyCondition +
    scores.age * WEIGHTS.age +
    scores.living * WEIGHTS.livingSituation +
    scores.cognitive * WEIGHTS.cognitiveLevel +
    scores.economic * WEIGHTS.economicLevel

  // Max possible = 5*3 + 4*3 + 3*3 + 3*3 + 2*3 + 1*1 = 52
  let level: SeverityAssessment['level']
  let recoveryMonths: string
  let summary: string

  if (total <= 24) {
    level = 'mild'
    recoveryMonths = '3-6个月'
    summary = '你的成瘾程度较轻，恢复速度会很快。重点是建立新的生活习惯，防止滑向中度。'
  } else if (total <= 36) {
    level = 'moderate'
    recoveryMonths = '6-12个月'
    summary = '中等程度成瘾，有一定身体症状。恢复需要6-12个月的系统努力，但完全可逆。'
  } else {
    level = 'severe'
    recoveryMonths = '1-2年或更久'
    summary = '长年限+明显身体损伤，恢复周期较长。但你的年龄优势意味着修复速度仍然可观——现在下手是最好的时机。'
  }

  return { level, recoveryMonths, summary, overallScore: total }
}
