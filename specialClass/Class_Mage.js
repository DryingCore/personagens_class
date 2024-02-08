const { Character } = require("../Character"); // importing the super class
// class Class_Mage
class Class_Mage extends Character {
	constructor(name, health, attackPower, defence, magicSkill) {
		super(name, health, attackPower, defence); // calls the super class constructor and passes his parameters
		this.magicSkill = magicSkill; // assign the magicskill parameter
	}
	// method: attack
	attack(target) {
		target.health -= this.attackPower + this.magicSkill - target.defence;
	}
	// method: healFriend
	healFriend(target) {
		target.health += this.magicSkill * 2;
	}
}
// exporting the module
module.exports = { Class_Mage };
