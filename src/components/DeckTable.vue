<!-- DeckTable.vue：卡牌列表组件 -->
 <!-- 维护 deck 数组（构筑）

增加 / 删除卡牌

把每一行交给 CardRow

不计算伤害 / cost -->

<template>
  <div class="deck-table">
    <h3>卡牌构筑</h3>

    <!-- 卡牌列表 -->
    <CardRow
      v-for="(card, index) in deck"
      :key="index"
      v-model="deck[index]"
      @remove="removeCard(index)"
    />

    <!-- 添加按钮 -->
    <button class="add-btn" @click="addCard">
      ➕ 添加卡牌
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import CardRow from "./CardRow.vue";
import { cardKeys } from "@/models/cards";

/**
 * deck 中每个元素结构：
 * {
 *   cardKey: string,
 *   star: number
 * }
 */

const deck = reactive([]);

// 添加一张卡（默认第一张卡，1 星）
function addCard() {
  deck.push({
    cardKey: cardKeys[0],
    star: 0,
  });
}

// 删除一张卡
function removeCard(index) {
  deck.splice(index, 1);
}

// 初始化一张卡，方便测试
addCard();
</script>

<style scoped>
.deck-table {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  max-width: 400px;
}

h3 {
  margin-top: 0;
}

.add-btn {
  margin-top: 8px;
  padding: 6px 10px;
  cursor: pointer;
}
</style>
