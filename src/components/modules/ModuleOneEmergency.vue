<script setup lang="ts">
import type { EmergencyPlan } from '../../types'

defineProps<{ plan: EmergencyPlan }>()
</script>

<template>
  <a-collapse :bordered="false" :default-active-key="['1']">
    <a-collapse-panel key="1" header="一、紧急应对包 —— 渴求来袭时的即时操作">
      <div class="mantra-box">
        <strong>口诀：</strong>{{ plan.mantra }}
      </div>
      <div class="strategy-list">
        <div v-for="(s, i) in plan.strategies" :key="s.id" class="strategy-item">
          <div class="strategy-num">{{ i + 1 }}</div>
          <div class="strategy-body">
            <h4>{{ s.icon }} {{ s.title }}</h4>
            <p class="strategy-steps">{{ s.steps }}</p>
            <p class="strategy-principle">{{ s.principle }}</p>
          </div>
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<style scoped>
.mantra-box {
  background: var(--color-primary-light);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.strategy-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.strategy-item {
  display: flex;
  gap: 0.75rem;
}

.strategy-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  margin-top: 2px;
}

.strategy-body h4 {
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
  color: var(--color-text);
}

.strategy-steps {
  font-size: 0.85rem;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 0.35rem;
}

.strategy-principle {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  font-style: italic;
}
</style>
