const characters = ['Flash', 'Batman', 'Super Man', 'Aquaman', 'Shazam', 'Wonder Woman', 'Batwoman']

breakLine = () => { console.log() }

console.clear()
breakLine()

// Adicionar elementos:
console.log('Adicionar elementos: ')
// push -> adiciona elemento no final da lista
console.log('push -> adiciona elemento no final da lista')
let position = characters.push('Joker')
console.log(`Insert character: ${characters[position-1]} at ${position-1}ª position`)

breakLine()
characters.forEach((char, pos) => console.log(pos, char))
breakLine()

// unshift -> adiciona elemento no início da lista
console.log('unshift -> adiciona elemento no início da lista')
position = characters.unshift('Harlequin')
console.log(`Insert character: ${characters[position-position]} at FIRST POSITION`)

breakLine()
characters.forEach((char, pos) => console.log(pos, char))
breakLine()

// Remover elementos
console.log('Remover elementos: ')
// pop -> remove o último elemento da lista
console.log('pop -> remove o último elemento da lista')
const lastCharacter = characters.pop()
console.log(`Remove character: ${lastCharacter} at ${position-1}ª position`)

breakLine()
characters.forEach((char, pos) => console.log(pos, char))
breakLine()

// shift -> remove o primeiro elemento da lista
console.log('shift -> remove o primeiro elemento da lista')
let fistCharacter = characters.shift()
console.log(`Remove character: ${fistCharacter} at FIRST POSITION`)

breakLine()
characters.forEach((char, pos) => console.log(pos, char))
breakLine()


// Pesquisar por um elemento
// includes
console.log('includes -> verifica se o elemento está no array')
const elementInArray = characters.includes('Joker')
console.log(`Joker in array: ${elementInArray}`)

breakLine()

// indexOf
console.log('indexOf -> retorna a posição do elemento dentro do array')
const elementPosition = characters.indexOf('Flash')
console.log(`Flash position: ${elementPosition}`)

breakLine()

// Cortar e concatenar
// slice -> copia determinada parte do array

console.log('slice -> copia determinada parte do array')

let womans = characters.slice(-2)
let mans = characters.slice(0, 5)
console.log(`Womans: ${womans} `)
console.log(`Mans: ${mans}`)

breakLine()

// concat -> unifica uma lista ou mais
console.log('concat -> unifica uma lista ou mais')
const society = womans.concat(mans, 'Tempestade')
console.log(`unified womans + mans and added a new character: Tempestade `)

breakLine()

// Substituição dos elementos
// splice -> substitui um grupo de elementos por outros

console.log('splice -> substitui um grupo de elementos por outros')
const removedElement = society.splice(elementPosition, 1, 'Mulher Maravilha')

console.log(`substituted: ${removedElement} by ${society[elementPosition]}`)
breakLine()

// Iterar elementos
console.log('Iterar elementos')
society.forEach((char, pos) => { console.log(pos, char) })
breakLine()