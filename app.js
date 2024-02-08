// importing all modules
const { Character } = require("./Character");
const { Class_Thief } = require("./specialClass/Class_Thief");
const { Class_Mage } = require("./specialClass/Class_Mage");
const { Class_Warrior } = require("./specialClass/Class_Warrior");

const enemy = new Character("slime", 10, 2, 0)
console.log(enemy)

const Warrior = new Class_Warrior("Destroyer", 100, 10, 20, 5)
Warrior.attack(enemy)
Warrior.chancePosition('ofensive')
console.log(Warrior)
Warrior.attack(enemy)
console.log(enemy)

