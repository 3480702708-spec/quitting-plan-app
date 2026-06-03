<script setup lang="ts">
import { inject, computed } from 'vue'
import DimensionCard from './DimensionCard.vue'

const store = inject<ReturnType<typeof import('../composables/usePlanStore').usePlanStore>>('planStore')!

const canSubmit = computed(() => {
  const i = store.input
  return !!(i.age && i.addictionSeverity && i.cognitiveLevel && i.livingSituation && i.economicLevel && i.bodyCondition)
})

async function handleGenerate() {
  if (!canSubmit.value) return
  await store.generate()
}
</script>

<template>
  <div class="screen-inner">
    <div class="hero">
      <h1 class="hero-title">个性化戒色恢复方案定制</h1>
      <p class="hero-desc">根据你的六维信息，生成一份<strong>明天就能执行</strong>的具体方案。不是鸡汤，是操作手册。</p>
    </div>

    <div class="dimensions">
      <DimensionCard
        title="1. 你的年龄？"
        field="age"
        :options="[
          { value: 'teen', label: '青少年（20岁以下）' },
          { value: 'young', label: '青年（20-30岁）' },
          { value: 'adult', label: '成年（30岁以上）' },
        ]"
      />
      <DimensionCard
        title="2. 成瘾程度？"
        field="addictionSeverity"
        :options="[
          { value: 'mild', label: '轻度——偶尔，1年以内' },
          { value: 'moderate', label: '中度——1-5年，每周数次' },
          { value: 'severe', label: '重度——5年以上，每天或高频' },
        ]"
      />
      <DimensionCard
        title="3. 你对自己的问题了解多少？"
        field="cognitiveLevel"
        :options="[
          { value: 'A', label: '不太了解——就是管不住自己' },
          { value: 'B', label: '知道有害，但不知道怎么控制' },
          { value: 'C', label: '了解一些机制，但缺具体方法' },
          { value: 'D', label: '理论都懂，也戒过但总反复' },
        ]"
      />
      <DimensionCard
        title="4. 你现在的生活状态？"
        field="livingSituation"
        :options="[
          { value: 'dorm', label: '学生·住宿舍' },
          { value: 'home_student', label: '学生·住家里' },
          { value: 'alone', label: '独居工作/学习' },
          { value: 'shared', label: '合租/跟家人住' },
          { value: 'married', label: '已婚/有伴侣同居' },
        ]"
      />
      <DimensionCard
        title="5. 你的经济状况？"
        field="economicLevel"
        :options="[
          { value: 'student', label: '学生/零花钱有限' },
          { value: 'entry', label: '刚工作/收入一般' },
          { value: 'stable', label: '收入稳定/有些余钱' },
          { value: 'affluent', label: '经济宽裕' },
        ]"
      />
      <DimensionCard
        title="6. 你的身体状态？"
        field="bodyCondition"
        :options="[
          { value: 'A', label: '还好，没什么明显不舒服' },
          { value: 'B', label: '容易累、精神差、注意力不集中' },
          { value: 'C', label: '腰酸、记忆力下降、掉头发多' },
          { value: 'D', label: '有明显症状（早泄/勃起困难/严重失眠等）' },
        ]"
      />
    </div>

    <div class="generate-section">
      <a-button
        type="primary"
        size="large"
        :disabled="!canSubmit"
        @click="handleGenerate"
        class="generate-btn"
      >
        生成我的方案
      </a-button>
      <p class="privacy-note">你的信息不会上传，所有计算在浏览器内完成。</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.hero-desc {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.hero-desc strong {
  color: var(--color-primary);
}

.dimensions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.generate-section {
  text-align: center;
}

.generate-btn {
  height: 48px;
  padding: 0 3rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: var(--radius);
  background: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}

.generate-btn:disabled {
  opacity: 0.4;
}

.privacy-note {
  margin-top: 0.75rem;
  color: var(--color-text-secondary);
  font-size: 0.8rem;
}

@media (min-width: 768px) {
  .dimensions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
