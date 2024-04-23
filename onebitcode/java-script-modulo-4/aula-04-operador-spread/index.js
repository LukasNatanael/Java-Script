const heroes = ['Homem Aranha', 'Homem de Ferro', 'Capitão América', 'Thor', 'Hulk', 'Loki']

console.log(heroes)
console.log(...heroes)
console.log(...heroes[0])

const heroesCopy = heroes
heroesCopy.pop()
heroesCopy.pop()
heroesCopy.push('Arqueiro')

console.log({ heroes, heroesCopy })

const heroesClone = [...heroes]

heroesClone.push('Viúva Negra')

console.log({ heroes, heroesCopy, heroesClone })

const heroesObj = { ...heroes }
const heroesObjClone = { ...heroesObj }

heroesObjClone.test = 'Test'

console.log({ heroesObj, heroesObjClone })
