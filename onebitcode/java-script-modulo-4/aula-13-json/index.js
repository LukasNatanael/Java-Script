console.clear()

const data = {
    name: 'Lukas',
    age: 19,
    job: 'Developer',
    parents: [
        'Bill Gates',
        'Elon Musk'
    ]
}

const dataSrt = JSON.stringify(data)
const dataJson = JSON.parse(dataSrt)

console.log(data)
console.log(dataSrt)
console.log(dataJson)