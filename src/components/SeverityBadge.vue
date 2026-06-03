<script setup lang="ts">
import { computed } from 'vue'
import type { SeverityAssessment } from '../types'

const props = defineProps<{ severity: SeverityAssessment }>()

const config = computed(() => {
  switch (props.severity.level) {
    case 'mild':
      return { label: '轻度', color: '#059669', bg: '#ecfdf5' }
    case 'moderate':
      return { label: '中度', color: '#d97706', bg: '#fffbeb' }
    case 'severe':
      return { label: '中重度', color: '#dc2626', bg: '#fef2f2' }
  }
})
</script>

<template>
  <div class="severity-badge" :style="{ background: config.bg, borderColor: config.color }">
    <span class="severity-level" :style="{ color: config.color }">{{ config.label }}</span>
    <span class="severity-detail">
      预计恢复周期：<strong>{{ severity.recoveryMonths }}</strong>
    </span>
    <p class="severity-summary">{{ severity.summary }}</p>
  </div>
</template>

<style scoped>
.severity-badge {
  border: 1px solid;
  border-radius: var(--radius);
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.severity-level {
  display: inline-block;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.severity-detail {
  display: block;
  font-size: 0.95rem;
  color: var(--color-text);
  margin-top: 0.25rem;
}

.severity-detail strong {
  font-weight: 700;
}

.severity-summary {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
