// 卡牌定义 星级倍率 花费
// 这个文件只负责：定义卡牌“是什么”
// 不负责计算
// 不负责 UI
// 不负责组合逻辑

// src/models/cardDB.js

/**
 * 伤害类型枚举
 */
export const DamageType = Object.freeze({
  NONE: "无伤害",
  ICE: "冰箭",
  BURN: "燃烧",
  PULSE: "脉冲",
  STORM: "风暴",
});

/**
 * 卡牌类
 */
export class Card {
  /**
   * @param {Object} options 卡牌初始化参数
   * @param {string} options.key 唯一标识
   * @param {string} options.name 名称
   * @param {number} options.baseDamage 基础伤害（0星）
   * @param {number[]} options.starMultiplier 每升1星后的伤害倍率
   * @param {number[]} options.cost 每星级对应花费（整数1-5）
   * @param {number[]} options.price 每星级升级所需价格
   * @param {number} options.triggerTime 卡牌触发间隔
   * @param {string} options.damageType 伤害类型
   * @param {number} options.burnProb 触发燃烧概率
   * @param {number} options.iceProb 触发冰箭概率
   * @param {number} options.burnMultiplier 追加燃烧伤害倍率
   * @param {number} options.pulseMultiplier 追加脉冲伤害倍率
   */
  constructor({
    key,
    name,
    baseDamage,
    starMultiplier,
    cost,
    price,
    triggerTime,
    damageType = DamageType.NONE,
    burnProb = 0,
    iceProb = 0,
    burnMultiplier = 0,
    pulseMultiplier = 0,
  }) {
    this.key = key;
    this.name = name;
    this.baseDamage = baseDamage;
    this.starMultiplier = starMultiplier; // 长度7，对应0~6星
    this.cost = cost; // 长度7
    this.price = price; // 长度7
    this.triggerTime = triggerTime;
    this.damageType = damageType;
    this.burnProb = burnProb;
    this.iceProb = iceProb;
    this.burnMultiplier = burnMultiplier;
    this.pulseMultiplier = pulseMultiplier;
  }

  /**
   * 根据星级计算伤害
   * @param {number} star 星级 0~6
   * @returns {number} 实际伤害
   */
  getDamage(star) {
    const s = Math.min(star, this.starMultiplier.length - 1);
    return this.baseDamage * this.starMultiplier[s];
  }

  /**
   * 根据星级获取花费
   * @param {number} star 星级 0~6
   * @returns {number} 花费
   */
  getCost(star) {
    const s = Math.min(star, this.cost.length - 1);
    return this.cost[s];
  }

  /**
   * 根据星级获取升级价格
   * @param {number} star 当前星级 0~6
   * @returns {number} 升到下一星级所需价格
   */
  getPrice(star) {
    const s = Math.min(star, this.price.length - 1);
    return this.price[s];
  }
}


// 定义所有卡牌
export const cards = {
  yanhong: new Card({
    key: "yanhong",
    name: "燕虹",
    baseDamage: 0.28,
    starMultiplier: [1, 1.1, 1.2, 1.35, 1.5, 1.7, 2.0],
    cost: [1, 1, 2, 2, 3, 4, 5],
    price: [100, 200, 300, 400, 500, 600, 700],
    triggerTime: 6,
    damageType: DamageType.BURN,
    burnProb: 0.3,
    iceProb: 0.1,
    burnMultiplier: 0.2,
    pulseMultiplier: 0.15,
  }),

  wenming: new Card({
    key: "wenming",
    name: "文敏",
    baseDamage: 0.35,
    starMultiplier: [1, 1.15, 1.3, 1.45, 1.6, 1.8, 2.0],
    cost: [1, 1, 2, 2, 3, 4, 5],
    price: [80, 160, 240, 320, 400, 480, 560],
    triggerTime: 5,
    damageType: DamageType.ICE,
    burnProb: 0,
    iceProb: 0.25,
    burnMultiplier: 0,
    pulseMultiplier: 0.1,
  }),

  linfeng: new Card({
    key: "linfeng",
    name: "林峰",
    baseDamage: 0.4,
    starMultiplier: [1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.3],
    cost: [1, 1, 2, 3, 3, 4, 5],
    price: [120, 240, 360, 480, 600, 720, 840],
    triggerTime: 7,
    damageType: DamageType.PULSE,
    burnProb: 0.1,
    iceProb: 0,
    burnMultiplier: 0.15,
    pulseMultiplier: 0.25,
  }),
};

// 导出卡牌 key 列表
export const cardKeys = Object.keys(cards);
