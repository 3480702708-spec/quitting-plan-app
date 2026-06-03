<script setup lang="ts">
import type { WisdomContent } from '../../types'

defineProps<{ wisdom: WisdomContent }>()
</script>

<template>
  <a-collapse :bordered="false" :default-active-key="['1']">
    <a-collapse-panel key="1" header="五、最后想跟你说的">
      <div class="wisdom-section">
        <h3 class="wisdom-title">{{ wisdom.title }}</h3>
        <div v-for="(b, i) in wisdom.body" :key="i" class="wisdom-paragraph">
          <template v-if="b">{{ b }}</template>
          <br v-else />
        </div>
        <div class="wisdom-closing">
          {{ wisdom.closing }}
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<style scoped>
.wisdom-section {
  line-height: 1.9;
}

.wisdom-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.wisdom-paragraph {
  font-size: 0.9rem;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  line-height: 1.9;
}

.wisdom-closing {
  margin-top: 1.25rem;
  padding: 1rem;
  background: var(--color-primary-light);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  line-height: 1.7;
}
</style>
