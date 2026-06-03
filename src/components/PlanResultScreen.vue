<script setup lang="ts">
import { inject, ref } from 'vue'
import type { GeneratedPlan } from '../types'
import SeverityBadge from './SeverityBadge.vue'
import ModuleOneEmergency from './modules/ModuleOneEmergency.vue'
import ModuleTwoLaunchPlan from './modules/ModuleTwoLaunchPlan.vue'
import ModuleThreeRoadmap from './modules/ModuleThreeRoadmap.vue'
import ModuleFourPrediction from './modules/ModuleFourPrediction.vue'
import ModuleFiveWisdom from './modules/ModuleFiveWisdom.vue'

const store = inject<ReturnType<typeof import('../composables/usePlanStore').usePlanStore>>('planStore')!
const plan = store.plan.value as GeneratedPlan

const copied = ref(false)

function copyPlan() {
  if (!plan) return
  const lines: string[] = []
  lines.push('=== 我的戒色恢复方案 ===')
  lines.push('')
  lines.push(`严重程度：${plan.severity.level === 'mild' ? '轻度' : plan.severity.level === 'moderate' ? '中度' : '中重度'} | 预计恢复：${plan.severity.recoveryMonths}`)
  lines.push('')
  lines.push('--- 一、紧急应对包 ---')
  lines.push(`口诀：${plan.moduleOne.mantra}`)
  plan.moduleOne.strategies.forEach((s, i) => {
    lines.push(`${i + 1}. ${s.title}`)
    lines.push(`   ${s.steps}`)
  })
  lines.push('')
  lines.push('--- 二、30天启动计划 ---')
  plan.moduleTwo.weekTasks.forEach(w => {
    lines.push(`第${w.week}周 - ${w.theme}`)
    w.tasks.forEach(t => lines.push(`  · ${t}`))
  })
  lines.push('')
  plan.moduleTwo.dailyActions.forEach(d => {
    lines.push(`${d.time}：${d.action}`)
  })
  lines.push('')
  lines.push('--- 三、长期路线图 ---')
  plan.moduleThree.phases.forEach(p => {
    lines.push(`阶段${p.phase} - ${p.name}（${p.months}）：${p.goal}`)
  })
  lines.push('')
  lines.push('--- 四、关键预判 ---')
  plan.moduleFour.forEach(p => {
    lines.push(`⚠️ ${p.title}（${p.timing}）`)
    lines.push(`   ${p.ifThen}`)
  })
  lines.push('')
  lines.push('--- 五、智慧根基 ---')
  lines.push(plan.moduleFive.title)
  plan.moduleFive.body.forEach(b => {
    if (b) lines.push(b)
  })
  lines.push('')
  lines.push(plan.moduleFive.closing)

  const text = lines.join('\n')
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}

function restart() {
  store.reset()
}
</script>

<template>
  <div class="screen-inner result-screen">
    <div class="result-header">
      <a-button size="small" @click="restart" class="back-btn">← 重新定制</a-button>
    </div>

    <SeverityBadge :severity="plan.severity" />

    <div class="modules">
      <ModuleOneEmergency :plan="plan.moduleOne" />
      <ModuleTwoLaunchPlan :plan="plan.moduleTwo" />
      <ModuleThreeRoadmap :plan="plan.moduleThree" />
      <ModuleFourPrediction :predictions="plan.moduleFour" />
      <ModuleFiveWisdom :wisdom="plan.moduleFive" />
    </div>

    <div class="result-actions">
      <a-button type="primary" size="large" @click="copyPlan" class="copy-btn">
        {{ copied ? '✓ 已复制' : '📋 复制完整方案' }}
      </a-button>
      <a-button size="large" @click="restart">🔄 重新定制</a-button>
    </div>
  </div>
</template>

<style scoped>
.result-screen {
  padding-bottom: 3rem;
}

.result-header {
  margin-bottom: 1rem;
}

.back-btn {
  color: var(--color-text-secondary);
}

.modules {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.result-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.copy-btn {
  min-width: 200px;
  height: 44px;
  font-weight: 600;
  background: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  border-radius: var(--radius) !important;
}

@media (min-width: 480px) {
  .result-actions {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
