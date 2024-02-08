// class character
class Character {
	constructor(name, health, attackPower, defence) {
		this.name = name;
		this.health = health;
		this.attackPower = attackPower;
		this.defence = defence;
	}
	// method: attack
	attack(target) {
		target.health -= this.attackPower - target.defence;
	}
}
// exporting the module
module.exports = { Character };
