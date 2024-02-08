const { Character } = require("../Character"); // importing the super class

// class Class_Thief
class Class_Thief extends Character {
	constructor(name, health, attackPower, defence) {
		super(name, health, attackPower, defence); // calls the super class constructor and passes his parameters
	}
	// method: attack
	attack(target) {
		target.health -= this.attackPower - target.defence;
	}
}
// exporting the module
module.exports = { Class_Thief };
