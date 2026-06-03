<script setup lang="ts">
import type { LaunchPlan } from '../../types'

defineProps<{ plan: LaunchPlan }>()
</script>

<template>
  <a-collapse :bordered="false" :default-active-key="['1']">
    <a-collapse-panel key="1" header="二、30天启动计划">
      <!-- Weekly Tasks -->
      <h4 class="sub-title">四周核心任务</h4>
      <div class="week-grid">
        <div v-for="w in plan.weekTasks" :key="w.week" class="week-card">
          <div class="week-header">
            <span class="week-num">第{{ w.week }}周</span>
            <span class="week-theme">{{ w.theme }}</span>
          </div>
          <ul class="week-tasks">
            <li v-for="(t, i) in w.tasks" :key="i">{{ t }}</li>
          </ul>
        </div>
      </div>

      <!-- Daily Actions -->
      <h4 class="sub-title">每日最小行动</h4>
      <div class="daily-list">
        <div v-for="d in plan.dailyActions" :key="d.time" class="daily-item">
          <span class="daily-time">{{ d.time }}</span>
          <span class="daily-action">{{ d.action }}</span>
        </div>
      </div>

      <!-- Exercise Plan -->
      <h4 class="sub-title">运动方案（{{ plan.exercisePlan.weeks }}）</h4>
      <div class="exercise-box">
        <p>{{ plan.exercisePlan.schedule }}</p>
        <p class="exercise-note">{{ plan.exercisePlan.notes }}</p>
      </div>

      <!-- Environment Checklist -->
      <h4 class="sub-title">环境改造清单</h4>
      <div class="env-list">
        <div v-for="(e, i) in plan.environmentChecklist" :key="i" class="env-item">
          <span class="env-check">✓</span>
          <div>
            <strong>{{ e.item }}</strong>
            <p class="env-reason">{{ e.reason }}</p>
          </div>
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<style scoped>
.sub-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-accent-2);
  margin: 1.25rem 0 0.75rem;
  padding-left: 0.5rem;
  border-left: 3px solid var(--color-accent-2);
}

.week-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.week-card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.75rem 1rem;
}

.week-header {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
}

.week-num {
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--color-primary);
}

.week-theme {
  font-weight: 600;
  font-size: 0.9rem;
}

.week-tasks {
  padding-left: 1.2rem;
  font-size: 0.85rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.daily-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.daily-item {
  display: flex;
  gap: 0.75rem;
  font-size: 0.85rem;
  line-height: 1.5;
}

.daily-time {
  flex-shrink: 0;
  font-weight: 600;
  color: var(--color-primary);
  min-width: 72px;
}

.exercise-box {
  background: #f5f3ff;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  line-height: 1.7;
}

.exercise-note {
  margin-top: 0.5rem;
  font-style: italic;
  color: var(--color-text-secondary);
}

.env-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.env-item {
  display: flex;
  gap: 0.6rem;
  font-size: 0.85rem;
  line-height: 1.5;
}

.env-check {
  color: var(--color-accent-2);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.env-reason {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-top: 0.1rem;
}

@media (min-width: 640px) {
  .week-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
}
</style>
