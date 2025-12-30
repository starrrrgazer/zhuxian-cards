// 卡牌组合
// 定义组合规则，例如：
// 拥有 “fireball + lightning” 时伤害加 20%
// 拥有两张同类型卡时额外加成

// 提供一个函数 applyCombo(deck, currentResult)
// 输入：deck 数组 + 当前计算结果（{ totalDamage, totalCost }）
// 输出：新的结果对象（加成后）

// 后续可轻松扩展复杂规则

/**
 * 定义组合规则
 *
 * key：组合名称
 * check：函数，判断 deck 是否满足条件
 * effect：函数，对当前结果进行加成
 */
export const comboRules = [
  {
    name: "林峰+燕虹",
    check: (deck) => {
      const hasFireball = deck.some((c) => c.cardKey === "fireball");
      const hasLightning = deck.some((c) => c.cardKey === "lightning");
      return hasFireball && hasLightning;
    },
    effect: (result) => {
      // 总伤害增加 20%
      return {
        ...result,
        totalDamage: result.totalDamage * 1.2
      };
    }
  },

  {
    name: "燕红+文敏",
    check: (deck) => {
      const slashCount = deck.filter((c) => c.cardKey === "slash").length;
      return slashCount >= 2;
    },
    effect: (result) => {
      // 总伤害增加 15%
      return {
        ...result,
        totalDamage: result.totalDamage * 1.15
      };
    }
  }
];

/**
 * 应用组合规则
 * @param {Array} deck - 当前构筑数组
 * @param {Object} currentResult - { totalDamage, totalCost }
 * @returns {Object} 新的结果（加成后）
 */
export function applyCombo(deck, currentResult) {
  let newResult = { ...currentResult };

  for (const combo of comboRules) {
    if (combo.check(deck)) {
      newResult = combo.effect(newResult);
    }
  }

  return newResult;
}