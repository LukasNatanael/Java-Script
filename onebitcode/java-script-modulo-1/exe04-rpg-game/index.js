const playerOneName      = prompt('Nome jogador 1: ')
var   playerOneStrength  = parseFloat(prompt('Poder de ataque: '))
const playerOneDefense   = parseFloat(prompt('Nível de defesa: '))
var   playerOneHelth     = parseFloat(prompt('Saúde: '))

console.log(`
Player 1 registrado
Nome:   ${playerOneName}
Vida:   ${playerOneHelth}
Ataque: ${playerOneStrength}
Defesa: ${playerOneDefense}
`)

const playerTwoName     = prompt('Nome jogador 2: ')
var   playerTwoStrength = parseFloat(prompt('Poder de ataque: '))
const playerTwoDefense  = parseFloat(prompt('Nível de defesa: '))
var   playerTwoHelth    = parseFloat(prompt('Saúde: '))

const playerTwoShield   = true
var damage              = undefined

console.log(`
Player 2 registrado
Nome:   ${playerTwoName}
Vida:   ${playerTwoHelth}
Ataque: ${playerTwoStrength}
Defesa: ${playerTwoDefense}
Escudo: ${playerTwoShield}
`)


if (playerOneStrength > playerTwoDefense && playerTwoShield == false) {
    damage =  playerOneStrength - playerTwoDefense
    playerTwoHelth -= damage
    console.log(`${playerTwoName} recebeu ${damage} de dano\nA saúde de ${playerTwoName} caiu para ${playerTwoHelth}hp`)
}
else if (playerOneStrength > playerTwoDefense && playerTwoShield == true) {
    damage =  (playerOneStrength - playerTwoDefense) / 2
    playerTwoHelth -= damage
    console.log(`\nO escudo de ${playerTwoName} recebeu metade do dano`)
    console.log(`${playerTwoName} recebeu ${damage} de dano\nA saúde de ${playerTwoName} caiu para ${playerTwoHelth}hp`)
}

else {
    alert(`${playerOneName} errou o ataque!`)
    console.log(`${playerOneName} errou o ataque!`)
    console.log(`${playerTwoName} não recebeu nenhum dano\nA saúde de ${playerTwoName} permanece cheia!`)
}

console.log(`
Dados Player 1
Nome:   ${playerOneName}
Vida:   ${playerOneHelth}
Ataque: ${playerOneStrength}
Defesa: ${playerOneDefense}
`)

console.log(`
Dados Player 2
Nome:   ${playerTwoName}
Vida:   ${playerTwoHelth}
Ataque: ${playerTwoStrength}
Defesa: ${playerTwoDefense}
Escudo: ${playerTwoShield}
`)