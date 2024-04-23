const person = {
    name: 'Lukas',
    job: 'Programmer boy',
    parents: ['Bill Gates', 'Edith Ranzini']
}

const name = person.name
const { job, parents } = person
// console.log(`${name} is a ${job}, and your parents are ${parents[0]} and ${parents[1]}`)

const [ father, mother ] = parents

console.log(`${name} is a ${job}, and your parents are ${father} and ${mother}`)

function createUser({ name, job, parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const lukas = createUser(person)
console.log(lukas)