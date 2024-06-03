const Character = require('./Character')

class Thief extends Character {
    attack(target) {
        // O alvo deve ser outra instancia de Character
        // Subtrair pontos de vida do alvo ao atacar -> damage = target.defense - this.attack 
        target.lifePoints -= (this.attackPoints - target.defensePoints) * 2
    }
}

module.exports = Thief