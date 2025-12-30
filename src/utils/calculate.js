//伤害计算 花费计算
//输入 ：deck 数组
// [
//   { cardKey: "fireball", star: 0 },
//   { cardKey: "slash", star: 2 }
// ]

// 输出：
// {
//   totalDamage: number,
//   totalCost: number
// }

// src/utils/calc.js
import { cards } from "@/models/cardDB";
import { applyCombo } from "@/models/comboRules";
/**
 * 计算一副卡牌的总伤害和总花费
 * @param {Array} deck - 数组，每个元素 { cardKey, star }
 * @returns {Object} { totalDamage, totalCost }
 */
export function calculateDeck(deck) {
  let totalDamage = 0;
  let totalCost = 0;

  for (const card of deck) {
    const cardData = cards[card.cardKey];
    if (!cardData) continue;
    const starIndex = Math.min(card.star, cardData.starMultiplier.length - 1);
    totalDamage += cardData.baseDamage * cardData.starMultiplier[starIndex];
    totalCost += cardData.cost[starIndex];
  }

  // 应用组合加成
  const resultWithCombo = applyCombo(deck, { totalDamage, totalCost });

  return resultWithCombo;
}
