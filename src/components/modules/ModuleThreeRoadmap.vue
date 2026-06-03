<script setup lang="ts">
import type { Roadmap } from '../../types'

defineProps<{ plan: Roadmap }>()
</script>

<template>
  <a-collapse :bordered="false" :default-active-key="['1']">
    <a-collapse-panel key="1" header="三、长期恢复路线图">
      <!-- Phase Timeline -->
      <h4 class="sub-title">三阶段恢复</h4>
      <a-timeline>
        <a-timeline-item v-for="p in plan.phases" :key="p.phase" :color="p.phase === 1 ? '#7c3aed' : p.phase === 2 ? '#0891b2' : '#059669'">
          <template #dot>
            <span class="phase-dot">{{ p.phase }}</span>
          </template>
          <strong>{{ p.name }}</strong>
          <span class="phase-months">（{{ p.months }}）</span>
          <p class="phase-goal">{{ p.goal }}</p>
          <ul class="phase-milestones">
            <li v-for="m in p.milestones" :key="m">{{ m }}</li>
          </ul>
        </a-timeline-item>
      </a-timeline>

      <!-- Recovery Milestones -->
      <h4 class="sub-title">身体恢复七阶段</h4>
      <div class="milestone-list">
        <div v-for="(m, i) in plan.recoveryMilestones" :key="i" class="milestone-item">
          <span class="milestone-num">{{ i + 1 }}</span>
          <span>{{ m }}</span>
        </div>
      </div>

      <!-- TCM Advice -->
      <h4 class="sub-title">中医调理建议</h4>

      <div class="tcm-section">
        <h5>🍽️ 食疗</h5>
        <div v-for="(f, i) in plan.tcmAdvice.foods" :key="i" class="tcm-card">
          <strong>{{ f.name }}</strong>
          <p>{{ f.instructions }}</p>
          <p class="tcm-effect">适用：{{ f.effect }}</p>
        </div>
      </div>

      <div class="tcm-section">
        <h5>📍 穴位（每晚睡前必做）</h5>
        <div v-for="(a, i) in plan.tcmAdvice.acupoints" :key="i" class="tcm-card">
          <strong>{{ a.name }}（{{ a.code }}）</strong>
          <p class="tcm-location">位置：{{ a.location }}</p>
          <p>方法：{{ a.method }}</p>
          <p class="tcm-effect">作用：{{ a.effect }}</p>
        </div>
      </div>

      <div class="tcm-section">
        <h5>🧘 功法</h5>
        <div v-for="(e, i) in plan.tcmAdvice.exercises" :key="i" class="tcm-card">
          <p>{{ e }}</p>
        </div>
      </div>

      <div class="tcm-section">
        <h5>😴 睡眠</h5>
        <div class="tcm-card sleep-card">
          <p>{{ plan.tcmAdvice.sleepNote }}</p>
        </div>
      </div>

      <!-- Six Word Formula -->
      <h4 class="sub-title">恢复六字诀</h4>
      <div class="six-word-grid">
        <div v-for="sw in plan.tcmAdvice.sixWordFormula" :key="sw.char" class="six-word-item">
          <span class="six-char">{{ sw.char }}</span>
          <div>
            <strong>{{ sw.meaning }}</strong>
            <p>{{ sw.action }}</p>
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

.phase-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
}

.phase-months {
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  margin-left: 0.35rem;
}

.phase-goal {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin: 0.25rem 0;
  line-height: 1.6;
}

.phase-milestones {
  padding-left: 1.2rem;
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.milestone-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.milestone-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
  align-items: center;
}

.milestone-num {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-primary-light);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
}

.tcm-section {
  margin-bottom: 0.75rem;
}

.tcm-section h5 {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.tcm-card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.6rem 0.85rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  line-height: 1.6;
}

.tcm-location {
  color: var(--color-text-secondary);
  font-size: 0.82rem;
}

.tcm-effect {
  color: var(--color-accent-2);
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

.sleep-card {
  background: #fefce8;
  border-color: #fde68a;
}

.six-word-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.six-word-item {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.six-char {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
}

.six-word-item strong {
  font-size: 0.85rem;
}

.six-word-item p {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  margin-top: 0.1rem;
}

@media (max-width: 480px) {
  .six-word-grid {
    grid-template-columns: 1fr;
  }
}
</style>
