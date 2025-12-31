// src/models/cards/Card.js
import { DamageType, SpecieType } from "./CardType";

export class Card {
  constructor({
    //卡牌本身属性
    key,
    name,
    baseDamage,
    starMultiplier = 0.0,   // length = 1, 对应 从 0 星开始，每升级 1 星 baseDamage 增加的倍率
    cost = 0,             // length = 1, value = 1~5
    damageType = DamageType.NONE,
    burnProb = 0,
    iceProb = 0,
    burnMultiplier = 0,
    pulseMultiplier = 0,
    description = "待补充", // 卡牌功能描述
    triggerTime = 0,      // 触发间隔
    species = SpecieType.Human, // 卡牌种族
    

    //额外计算 or 展示的变量
    star = 0,               //输入的变量
    actualCoreBonus = 0,    // 核心属性加成，根据星级计算
    actualDamage =0,        // 根据星级计算的实际输出
    actualTriggerTime = 0,  //实际触发间隔， 根据星级计算
    price = 0,              // 根据星级计算兑换该 卡牌所需的花费
    actualAttackMultiplier = 0.0056,   //攻击力加成，根据星级计算
  }) {
    this.key = key;
    this.name = name;
    this.baseDamage = baseDamage;
    this.starMultiplier = starMultiplier;
    this.cost = cost;
    // this.price = price;
    this.triggerTime = triggerTime;
    this.species = species;
    this.damageType = damageType;
    this.burnProb = burnProb;
    this.iceProb = iceProb;
    this.burnMultiplier = burnMultiplier;
    this.pulseMultiplier = pulseMultiplier;
    this.description = description;

    this.actualPrice = price;
  }

  setStar(star) {
    this.star = star;
  }


  getActualDamage(star) {

  }

  getPrice(star) {

  }

}
