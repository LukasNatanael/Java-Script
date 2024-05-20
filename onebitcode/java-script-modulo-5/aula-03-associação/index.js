const Address = require('./Address')
const Person  = require('./Person')

const address = new Address('7 de Setembro', 99, 'Centro', 'Osasco', 'SP')
const john    = new Person('John Doe', address)

console.log(john)
console.log(john.address.fullAddress())