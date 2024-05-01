import { name, label, input, br  } from './functions.js'

console.log( label({ for: 'fullname', textContent: 'Nome Completo' }) )
console.log( label({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...' }) )
console.log(br())
