let startIn = 0

// Parâmetro REST sempre precisam ser o último parâmetro adicionado 
function sum(...numbers) {
    return numbers.reduce( (accumute, number) => accumute + number, startIn)
}

console.log( sum( 2, 2 ) )
console.log( sum( 2, 2, 2, 2, 2, 2 ) )
console.log( sum( 32, 5, 74, 7, 1, 9, 90 ) )