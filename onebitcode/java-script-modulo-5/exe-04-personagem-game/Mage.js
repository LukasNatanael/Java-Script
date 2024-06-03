const Character = require('./Character')

class Mage extends Character {
    constructor( name, lifePoints, attackPoints, defensePoints, magicPoints ) {
        super(name, lifePoints, attackPoints, defensePoints)
        this.magicPoints = magicPoints
    }
    attack(target) {
        // O alvo deve ser outra instancia de Character
        // Subtrair pontos de vida do alvo ao atacar -> damage = target.defense - this.attack 
        const damage = ( this.attackPoints + this.magicPoints ) - target.defensePoints
        damage <= 0 ? console.log(`${target.name} foi morto.`): console.log(`O dano causado a ${target.name} foi de ${damage} pontos.`)

        target.lifePoints -= damage
        
    }

    heal(target) {
        // O alvo deve ser outra instancia de Character
        // Multiplicar os pontos de magia por dois, e essa será a quantidade de cura
        const heal = (this.magicPoints * 2) + target.lifePoints

        target.lifePoints = heal
        console.log(`${this.name} curou ${target.name} com ${heal} pontos de vida.`)
    }
}

module.exports = Mage