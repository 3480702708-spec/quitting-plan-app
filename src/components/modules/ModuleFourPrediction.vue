<script setup lang="ts">
import type { Prediction } from '../../types'

defineProps<{ predictions: Prediction[] }>()
</script>

<template>
  <a-collapse :bordered="false" :default-active-key="['1']">
    <a-collapse-panel key="1" header="四、你要注意的坑 —— 关键预判与预案">
      <div class="prediction-list">
        <div v-for="(p, i) in predictions" :key="i" class="prediction-card">
          <div class="pred-header">
            <span class="pred-icon">⚠️</span>
            <div>
              <strong>{{ p.title }}</strong>
              <span class="pred-timing">{{ p.timing }}</span>
            </div>
          </div>
          <p class="pred-risk">{{ p.risk }}</p>
          <div class="pred-if-then">
            <strong>预案：</strong>{{ p.ifThen }}
          </div>
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<style scoped>
.prediction-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.prediction-card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.85rem 1rem;
}

.pred-header {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.pred-icon {
  font-size: 1.1rem;
}

.pred-header strong {
  display: block;
  font-size: 0.9rem;
}

.pred-timing {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
}

.pred-risk {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.pred-if-then {
  background: #fef2f2;
  border-left: 3px solid var(--color-accent-4);
  padding: 0.5rem 0.75rem;
  border-radius: 0 6px 6px 0;
  font-size: 0.85rem;
  line-height: 1.6;
}

.pred-if-then strong {
  color: var(--color-accent-4);
}
</style>
