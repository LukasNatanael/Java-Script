class Character {
    constructor( name, lifePoints, attackPoints, defensePoints ) {
        this.name = name
        this.lifePoints = lifePoints
        this.attackPoints = attackPoints
        this.defensePoints = defensePoints
    }

    attack(target) {
        // O alvo deve ser outra instancia de Character
        // Subtrair pontos de vida do alvo ao atacar -> damage = target.defense - this.attack 
        
        let damage = this.attackPoints - target.defensePoints


        if (damage >= target.defensePoints) {
            console.log(`${target.name} recebeu um ataque de ${this.attackPoints}!`)
            
            target.defensePoints = 0
            console.log(`A defesa de ${target.name} foi quebrada!`)
            console.log(`${target.name} recebeu um dano de ${damage} pontos.`)
            
            target.lifePoints = target.lifePoints - damage

            if (target.lifePoints <= 0) {
                console.log(`${target.name} foi morto.`)
            }

        }
    }
}

module.exports = Character
