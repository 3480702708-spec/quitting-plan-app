# 戒色恢复方案定制

一个单页Web应用，根据你的六维信息生成个性化的戒色恢复方案。不是鸡汤，是操作手册。

## 技术栈

- Vue 3 + TypeScript + Vite
- Ant Design Vue 组件库
- 纯前端，所有逻辑在浏览器内运行
- 部署在 GitHub Pages

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 部署

推送到 `main` 分支后，GitHub Actions 自动部署到 GitHub Pages。

需要在 GitHub 仓库设置中启用 Pages（Settings > Pages > Source: GitHub Actions）。

## 项目结构

```
src/
├── types/              # TypeScript 类型定义
├── composables/        # Vue 组合式函数（状态管理）
├── engine/             # 方案生成引擎
│   ├── generator.ts    # 主流水线 + 5个模块生成器
│   └── severityScorer.ts  # 严重度加权评分
├── data/content/       # 内容库（神经科学、中医、运动等）
├── components/         # UI组件
│   ├── modules/        # 5个方案模块组件
│   └── ...
└── styles/             # 全局样式
```

## 方案模块

1. **紧急应对包** — 渴求来袭时的即时操作（根据生活状态定制）
2. **30天启动计划** — 四周核心任务 + 每日最小行动 + 运动方案
3. **长期路线图** — 三阶段恢复 + 中医调理 + 恢复七阶段
4. **关键预判** — 高发破戒节点的"如果…就…"预案
5. **智慧根基** — 根据认知层次定制的神经科学/中医/哲学解释
