console.clear()
const array = [
    '1º level',
    ['2º level', 42, true],
    [
        ['3º level', '1º item', 'Hello world!'],
        ['3º level', '2º item', 'Hi world!']
    ],
    []
]

console.log(array)
console.log('Matriz level ONE')
console.log(array[0])

console.log()

console.log('Matriz level TWO')
console.log(array[1])
console.log(array[1][0])

console.log()

console.log('Matriz level THREE')
console.log(array[2][0][0])
console.log(`  ${array[2][0][1]}`)
console.log(array[2][1][0])
console.log(`  ${array[2][1][1]}`)

console.log()

const matriz = [
    ['l1, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
    ['l2, c1', 'l2, c2', 'l2, c3', 'l2, c4'],
    ['l3, c1', 'l3, c2', 'l3, c3', 'l3, c4'],
]

console.table(matriz)

// matriz.push('New line')
// matriz[0].push('New column')
// console.table(matriz)

console.log()
console.log('Iterando matriz')

// matriz.forEach( (line, column) => console.log(line, column) )

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const element = matriz[i][j]
        console.log(`Posição: (${i}, ${j}) Valor: ${element}`)
    }
}