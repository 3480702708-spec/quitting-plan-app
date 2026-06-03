<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <p>基于神经科学、中医养生、习惯科学与经典智慧</p>
      <p class="disclaimer">本工具仅为参考，不构成医疗建议。如有明显身体症状，请寻求专业中医或心理医生帮助。</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 1rem;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  line-height: 1.8;
  margin-top: auto;
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.disclaimer {
  font-size: 0.75rem;
  opacity: 0.7;
}
</style>
