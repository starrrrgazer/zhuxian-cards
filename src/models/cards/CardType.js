// src/models/cards/DamageType.js
export const DamageType = Object.freeze({
  NONE: "无",
  ICE: "冰箭",
  BURN: "燃烧",
  PULSE: "脉冲",
  STORM: "玄冰风暴",
});

export const SpecieType = Object.freeze({
  NONE: "无",
  Human : "人族",
  Beasts : "兽族",
  Constructs : "器"
});

export const perPriceList = [3, 12, 36, 120 , 600]  //每个cost兑换所需材料

export const PriceList = [ 
  [12,14,16,18,19,20] , // 1 cost
  [6,7,8,9,9,10], // 2 cost
  [3,3,4,4,4,5], //3 cost
  [1,1,2,2,2,2], // 4 cost
  [1,1,1,1,1,1] // 5 cost
]

export const PerCostAndStarCoreBonus = 11 // CoreBonus = BaseCoreBonus[cost-1] +  PerCostAndStarCoreBonus * star

export const BaseCoreBonus = [
  [224, 449, 674 , 898, 1122]
]

export const attackMultiplierList = [0.0056, 0.0060, 0.0064, 0.0068, 0.0072, 0.0076, 0.0080] // per star
