const playerOneName      = prompt('Nome jogador 1: ')
var   playerOneStrength  = parseFloat(prompt('Poder de ataque: '))
const playerOneDefense   = parseFloat(prompt('Nível de defesa: '))
var   playerOneHelth     = parseFloat(prompt('Saúde: '))

const playerTwoName     = prompt('Nome jogador 2: ')
var   playerTwoStrength = parseFloat(prompt('Poder de ataque: '))
const playerTwoDefense  = parseFloat(prompt('Nível de defesa: '))
var   playerTwoHelth    = parseFloat(prompt('Saúde: '))
var playerTwoShield   = prompt('Escudo [S/N]: ')[0].toLowerCase()

if (playerTwoShield === 's') {
    playerTwoShield = true
}
else {
    playerTwoShield = false 
}

var damage = undefined

if (playerOneStrength > playerTwoDefense && playerTwoShield == false) {
    damage =  playerOneStrength - playerTwoDefense
}
else if (playerOneStrength > playerTwoDefense && playerTwoShield == true) {
    damage =  (playerOneStrength - playerTwoDefense) / 2
    console.log(`\nO escudo de ${playerTwoName} recebeu metade do dano`)
}
else {
    alert(`${playerOneName} errou o ataque!`)
    console.log(`${playerOneName} errou o ataque!`)
    console.log(`${playerTwoName} não recebeu nenhum dano\nA saúde de ${playerTwoName} permanece cheia!`)
}

playerTwoHelth -= damage
console.log(`${playerTwoName} recebeu ${damage} de dano\nA saúde de ${playerTwoName} caiu para ${playerTwoHelth}hp`)

console.log(`
Dados Player 2
Nome:   ${playerTwoName}
Vida:   ${playerTwoHelth}
Ataque: ${playerTwoStrength}
Defesa: ${playerTwoDefense}
Escudo: ${playerTwoShield}
`)