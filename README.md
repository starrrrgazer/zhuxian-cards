# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

need node 24.12.0

run `pnpm dev`

src/
├─ components/
│  ├─ DeckTable.vue      # 管理整个构筑表
│  ├─ CardRow.vue        # 单张卡（卡牌 + 星级）
│  └─ ResultPanel.vue    # 总伤害 / 总花费
│
├─ models/
│  ├─ cardDB.js          # 卡牌数据
│  └─ comboRules.js      # 组合规则
│
├─ utils/
│  └─ calc.js            # 计算逻辑（核心）
│
├─ App.vue               # 组合上述组件
└─ main.js