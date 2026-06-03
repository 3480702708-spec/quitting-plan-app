<script setup lang="ts">
import { inject, computed } from 'vue'
import type { AssessmentInput } from '../types'

const props = defineProps<{
  title: string
  field: keyof AssessmentInput
  options: { value: string; label: string }[]
}>()

const store = inject<ReturnType<typeof import('../composables/usePlanStore').usePlanStore>>('planStore')!

const modelValue = computed<string>({
  get: () => store.input[props.field] as string,
  set: (val: string) => store.updateInput(props.field, val as never),
})
</script>

<template>
  <a-card class="dim-card" :body-style="{ padding: '1.25rem' }">
    <h3 class="dim-title">{{ title }}</h3>
    <a-radio-group v-model:value="modelValue" class="dim-radio-group">
      <a-radio-button
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        class="dim-radio-btn"
      >
        {{ opt.label }}
      </a-radio-button>
    </a-radio-group>
  </a-card>
</template>

<style scoped>
.dim-card {
  border: 1px solid var(--color-border);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.dim-card:hover {
  border-color: var(--color-primary-light);
}

.dim-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.dim-radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.dim-radio-btn {
  border-radius: 8px !important;
  height: auto !important;
  padding: 0.6rem 1rem !important;
  line-height: 1.5 !important;
  white-space: normal !important;
  text-align: left !important;
  border: 1px solid var(--color-border) !important;
  font-size: 0.9rem !important;
}

.dim-radio-btn::before {
  display: none !important;
}

:deep(.ant-radio-button-wrapper-checked) {
  background: var(--color-primary-light) !important;
  border-color: var(--color-primary) !important;
  color: var(--color-primary) !important;
}
</style>
