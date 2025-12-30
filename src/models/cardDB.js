// 卡牌定义 星级倍率 花费
// 这个文件只负责：定义卡牌“是什么”
// 不负责计算
// 不负责 UI
// 不负责组合逻辑

/**
 * 卡牌数据库
 *
 * 约定：
 * - key：卡牌唯一标识（程序用）
 * - name：显示名称
 * - baseDamage：基础伤害
 * - starMultiplier[i]：第 (i+1) 星的倍率
 * - cost[i]：第 (i+1) 星的花费
 */

export const cards = {
  fireball: {
    name: "燕虹",
    baseDamage: 100,
    starMultiplier: [1.0, 1.3, 1.7, 2.2],
    cost: [10, 20, 40, 80],
  },

  slash: {
    name: "文敏",
    baseDamage: 70,
    starMultiplier: [1.0, 1.2, 1.5],
    cost: [8, 16, 30],
  },

  lightning: {
    name: "林峰",
    baseDamage: 120,
    starMultiplier: [1.0, 1.4, 1.9, 2.5],
    cost: [12, 24, 50, 100],
  },
};

/**
 * （可选）导出卡牌 key 列表
 * 方便遍历、校验
 */
export const cardKeys = Object.keys(cards);