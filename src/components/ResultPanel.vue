<!-- ResultPanel.vue：结果展示 -->

<!-- 接收 prop：result，结构如下：
 {
  totalDamage: number,
  totalCost: number
}
-->

<template>
  <div class="result-panel">
    <h3>构筑结果</h3>
    <p>总伤害: <strong>{{ result.totalDamage }}</strong></p>
    <p>总花费: <strong>{{ result.totalCost }}</strong></p>
  </div>
</template>

<script setup>
const props = defineProps({
  result: {
    type: Object,
    required: true,
    default: () => ({ totalDamage: 0, totalCost: 0 })
  }
});
</script>

<style scoped>
.result-panel {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  max-width: 400px;
  margin-top: 16px;
  background-color: #f9f9f9;
}

h3 {
  margin-top: 0;
  margin-bottom: 8px;
}

p {
  margin: 4px 0;
  font-size: 16px;
}

strong {
  color: #d33;
}
</style>
