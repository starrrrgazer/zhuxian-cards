import { Card } from "../Card";
import { DamageType } from "../CardType";
export const yanhong = new Card({
  key: "yanhong",
  name: "燕虹",

  // 0 星基础伤害
  baseDamage: 0.28,

  // 升星倍率
  starMultiplier: 0.02,

  // cost（1~5）
  cost: 1,

  // 升到下一星级的价格
  price: [100, 200, 300, 400, 500, 600, 700],

  // 触发间隔（秒 / 回合，由你定义）
  triggerTime: 6,

  // 伤害与触发属性
  damageType: DamageType.BURN,
  burnProb: 0.3,
  iceProb: 0.1,
  burnMultiplier: 0.2,
  pulseMultiplier: 0,
});