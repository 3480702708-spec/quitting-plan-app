<script setup lang="ts">
import { ref, onMounted } from 'vue'

const steps = [
  { label: '评估严重程度', done: false },
  { label: '匹配合适策略', done: false },
  { label: '定制紧急应对包', done: false },
  { label: '设计30天启动计划', done: false },
  { label: '预判关键风险点', done: false },
  { label: '准备智慧根基', done: false },
]

const visibleSteps = ref<{ label: string; done: boolean }[]>([])

onMounted(() => {
  steps.forEach((s, i) => {
    setTimeout(() => {
      visibleSteps.value.push({ ...s })
      setTimeout(() => {
        visibleSteps.value[i].done = true
      }, 200)
    }, i * 250)
  })
})
</script>

<template>
  <div class="screen-inner generate-screen">
    <div class="spinner">
      <a-spin size="large" />
    </div>
    <h2 class="generate-title">正在分析你的六维信息…</h2>
    <div class="step-list">
      <div
        v-for="(step, i) in visibleSteps"
        :key="i"
        class="step-item"
        :class="{ done: step.done }"
      >
        <span class="step-icon">{{ step.done ? '✓' : '○' }}</span>
        <span class="step-label">{{ step.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.generate-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

.spinner {
  margin-bottom: 1.5rem;
}

.generate-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.step-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
  margin: 0 auto;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  transition: color 0.3s;
}

.step-item.done {
  color: var(--color-accent-2);
}

.step-icon {
  width: 20px;
  text-align: center;
  font-size: 0.8rem;
}
</style>
