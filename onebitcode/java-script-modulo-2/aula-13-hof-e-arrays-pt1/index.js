const characters = [
    { level: 42, name: 'Thrall',  race: 'Orc',          class: 'Xamã' },
    { level: 28, name: 'Garrosh', race: 'Orc',          class: 'Guerreiro' },
    { level: 35, name: 'Varok',   race: 'Orc',          class: 'Guerreiro' },
    { level: 35, name: 'Uther',   race: 'Humano',       class: 'Paladino' },
    { level: 26, name: 'Jaina',   race: 'Humano',       class: 'Maga' },
    { level: 39, name: 'Tyrande', race: 'Elfo Noturno', class: 'Sacerdotisa' },
    { level: 29, name: 'Muradin', race: 'Anão',         class: 'Guerreiro' },
]

console.clear()
console.log()

// MAP -> mapeia os itens de um array
const names = characters.map( (char) => {
    return char.name
} )

console.log(names, '\n')

// Filter -> filtra elementos de acordo com uma ou mais condições
const orcs = characters.filter( (char) => {
    return char.race === 'Orc'
} )

console.log(orcs, '\n')

// Reduce -> unifica valores do array
const fullLevel = characters.reduce( (acumulatedvalue, char) => {
    return acumulatedvalue + char.level
}, 0 ) 

console.log(fullLevel, '\n')

const races = characters.reduce( (acumulatedvalue, char) => {
    if (acumulatedvalue[char.race] == true) {
        acumulatedvalue[char.race].push(char)
    }
    else {
        acumulatedvalue[char.race] = [char]
    }

    return acumulatedvalue
}, {} )

console.log(races, '\n')
