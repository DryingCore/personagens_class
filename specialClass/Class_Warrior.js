const { Character } = require("../Character"); // importing the super class

// class Class_Warrior
class Class_Warrior extends Character {
	constructor(name, health, attackPower, defence, shield) {
		super(name, health, attackPower, defence); // calls the super class constructor and passes his parameters
		this.shield = shield;
		this.position = "defensive";
		this.defence += shield
		console.log(`The Warrior is at ${this.position} position`);
	}
	// method: attack
	attack(target) {
		if (this.position === "ofensive") {
			target.health -= this.attackPower - target.defence;
		} else {
			return console.log("The Warrior can't do a attack in defensive position");
		}
	}
	// method: position
	chancePosition(newPosition) {
		// validation
		if (newPosition === "defensive") {
			this.position = newPosition; // assignment
			this.defence += this.shield; // assignment
			console.log(`The Warrior is at ${this.position} position`); // log
			// validation
		} else if (newPosition === "ofensive") {
			this.position = newPosition; // assignment
			this.defence -= this.shield; // assignment
			console.log(`The Warrior is at ${this.position} position`); // log
		} else {
			console.warn(`A posição ${newPosition} não é válida. Use 'defensive' ou 'ofensive'!`); // warning message
		}
	}
}
// exporting the module
module.exports = { Class_Warrior };

// Uma classe Warrior que representa outro tipo de personagem e também herda de Character.Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).
