const Mage = require('./Mage')
const Thief = require('./Thief')
const Warrior = require('./Warrior')

// main characters
const Dumbledore = new Mage( 'Dumbledore', 90, 4, 2, 14 )
const PercyJackson = new Thief( 'Percy Jackson', 140, 22, 8)
const Leonidas  = new Warrior( 'Leonidas', 200, 14, 12, 4)


console.clear()
console.table({ 
    Mage: Dumbledore,
    Thief: PercyJackson,
    Warrior: Leonidas
})

// Leonidas.changePosition()
Dumbledore.attack(Leonidas)
PercyJackson.attack(Dumbledore)
Leonidas.attack(Dumbledore)
Dumbledore.heal(Dumbledore)

console.table({ 
    Mage: Dumbledore,
    Thief: PercyJackson, 
    Warrior: Leonidas
})




