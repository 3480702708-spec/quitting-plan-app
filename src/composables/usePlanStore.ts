import { reactive, computed, readonly } from 'vue'
import type {
  AssessmentInput,
  GeneratedPlan,
  AppStep,
  AgeGroup,
  AddictionSeverity,
  CognitiveLevel,
  LivingSituation,
  EconomicLevel,
  BodyCondition,
} from '../types'
import { generatePlan } from '../engine/generator'

const defaultInput: AssessmentInput = {
  age: 'young',
  addictionYears: 0,
  addictionSeverity: 'moderate',
  addictionPattern: '',
  hasQuitBefore: false,
  longestStreak: 0,
  cognitiveLevel: 'A',
  livingSituation: 'dorm',
  economicLevel: 'student',
  bodyCondition: 'B',
}

interface PlanStoreState {
  step: AppStep
  input: AssessmentInput
  plan: GeneratedPlan | null
}

const state = reactive<PlanStoreState>({
  step: 'questionnaire',
  input: { ...defaultInput },
  plan: null,
})

export function usePlanStore() {
  function updateInput<K extends keyof AssessmentInput>(key: K, value: AssessmentInput[K]) {
    state.input[key] = value
  }

  function setAge(value: AgeGroup) { updateInput('age', value) }
  function setAddictionSeverity(value: AddictionSeverity) { updateInput('addictionSeverity', value) }
  function setAddictionYears(value: number) { updateInput('addictionYears', value) }
  function setAddictionPattern(value: string) { updateInput('addictionPattern', value) }
  function setHasQuitBefore(value: boolean) { updateInput('hasQuitBefore', value) }
  function setLongestStreak(value: number) { updateInput('longestStreak', value) }
  function setCognitiveLevel(value: CognitiveLevel) { updateInput('cognitiveLevel', value) }
  function setLivingSituation(value: LivingSituation) { updateInput('livingSituation', value) }
  function setEconomicLevel(value: EconomicLevel) { updateInput('economicLevel', value) }
  function setBodyCondition(value: BodyCondition) { updateInput('bodyCondition', value) }

  function isInputComplete(): boolean {
    const i = state.input
    return !!(
      i.age && i.addictionYears !== undefined && i.addictionSeverity &&
      i.cognitiveLevel && i.livingSituation && i.economicLevel && i.bodyCondition
    )
  }

  async function generate(): Promise<void> {
    state.step = 'generating'
    // Small delay for animation
    await new Promise(resolve => setTimeout(resolve, 1800))
    state.plan = generatePlan(state.input)
    state.step = 'result'
  }

  function reset(): void {
    state.step = 'questionnaire'
    state.input = { ...defaultInput }
    state.plan = null
  }

  return {
    step: computed(() => state.step),
    input: readonly(state.input) as AssessmentInput,
    plan: computed(() => state.plan),
    updateInput,
    setAge,
    setAddictionSeverity,
    setAddictionYears,
    setAddictionPattern,
    setHasQuitBefore,
    setLongestStreak,
    setCognitiveLevel,
    setLivingSituation,
    setEconomicLevel,
    setBodyCondition,
    isInputComplete,
    generate,
    reset,
  }
}
