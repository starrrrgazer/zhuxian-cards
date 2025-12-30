<script setup>
import { calculateDeck } from "@/utils/calculate";
import { reactive, computed } from "vue";

import DeckTable from "@/components/DeckTable.vue";
import ResultPanel from "@/components/ResultPanel.vue";
import { comboRules } from "@/models/comboRules";
const deck = reactive([
  { cardKey: "燕虹", star: 0 },
]);

// 计算结果
const result = computed(() => calculateDeck(deck));

// 计算当前触发的组合（仅用于展示）
const activeCombos = computed(() => {
  return comboRules
    .filter((combo) => combo.check(deck))
    .map((combo) => combo.name);
});
</script>

<template>
  <div class="app-container">
    <h2>丹青绘灵计算器</h2>

    <!-- 卡组构筑表 -->
    <DeckTable v-model="deck" />

    <!-- 构筑结果 -->
    <ResultPanel :result="result" />

    <!-- 可选：触发的组合 -->
    <div v-if="activeCombos.length" class="combo-list">
      <h3>触发组合</h3>
      <ul>
        <li v-for="name in activeCombos" :key="name">{{ name }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 500px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
}

.combo-list {
  margin-top: 16px;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  background-color: #f0f8ff;
}

.combo-list ul {
  margin: 0;
  padding-left: 20px;
}

.combo-list li {
  color: #333;
}
</style>