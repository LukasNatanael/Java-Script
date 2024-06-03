const Character = require('./Character')

class Warrior extends Character {
    constructor( name, lifePoints, attackPoints, defensePoints, shieldPoints, stance='attack' ) {
        super(name, lifePoints, attackPoints, defensePoints)
        this.shieldPoints = shieldPoints
        this.stance = stance
    }

    attack(target) {
        // Ele só poderá atacar caso sua posição seja de ataque
        if ( this.stance === 'attack' ) {
            super.attack(target)
        }
        else {
            console.log('Antes de atacar você deve mudar sua posição para ataque.')
        }
    }

    changePosition() {
        if ( this.stance === 'attack') {
            this.stance = 'defense'
            this.defensePoints += this.shieldPoints
        }
        else {
            this.stance = 'attack'
            this.defensePoints -= this.shieldPoints
        }

        console.log(`Você mudou sua posição para ${this.stance}. Você possui ${this.defensePoints} pontos de defesa.`)
    }
}

module.exports = Warrior