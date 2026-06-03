<script setup lang="ts">
import { provide } from 'vue'
import { usePlanStore } from './composables/usePlanStore'
import QuestionnaireScreen from './components/QuestionnaireScreen.vue'
import GeneratingScreen from './components/GeneratingScreen.vue'
import PlanResultScreen from './components/PlanResultScreen.vue'
import AppFooter from './components/AppFooter.vue'

const store = usePlanStore()
provide('planStore', store)
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="header-inner">
        <span class="logo">🎯</span>
        <span class="title">戒色恢复方案定制</span>
      </div>
    </header>

    <main class="screen">
      <Transition name="fade" mode="out-in">
        <QuestionnaireScreen v-if="store.step.value === 'questionnaire'" key="q" />
        <GeneratingScreen v-else-if="store.step.value === 'generating'" key="g" />
        <PlanResultScreen v-else-if="store.step.value === 'result'" key="r" />
      </Transition>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 0 1.5rem;
  height: 56px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(8px);
}

.header-inner {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  font-size: 1.3rem;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
}
</style>
