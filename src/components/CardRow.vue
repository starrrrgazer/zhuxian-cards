<!-- CardRow.vue：单张卡的 UI + 交互 -->
<!-- 管理一张卡的选择状态
（卡牌类型 + 星级） -->
import { cards } from "@/models/cardDB";

<template>
  <div class="card-row">
    <!-- 卡牌选择 -->
    <select v-model="localCard.cardKey">
      <option
        v-for="(card, key) in cards"
        :key="key"
        :value="key"
      >
        {{ card.name }}
      </option>
    </select>

    <!-- 星级选择 -->
    <select v-model.number="localCard.star">
      <option v-for="s in maxStar" :key="s - 1" :value="s - 1">
        {{ s }} 星
      </option>
    </select>

    <!-- 删除按钮 -->
    <button @click="$emit('remove')">✖</button>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { cards } from "@/models/cardDB";

// props：父组件传入的一张卡
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    // 形如：{ cardKey: 'fireball', star: 0 }
  },
});

// emit：向父组件回传更新
const emit = defineEmits(["update:modelValue", "remove"]);

// 本地计算属性（v-model 代理）
const localCard = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

// 最大星级（由卡牌数据决定）
const maxStar = computed(() => {
  const card = cards[localCard.value.cardKey];
  return card ? card.starMultiplier.length : 1;
});
</script>

<style scoped>
.card-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

select {
  padding: 4px 8px;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #d33;
  font-size: 16px;
}
</style>
