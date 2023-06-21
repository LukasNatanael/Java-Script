// let dia = document.querySelector('#dia')
// let mes = document.querySelector('#mes')
// let ano = document.querySelector('#ano')

let data = new Date

// Pegando a data
let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()

console.log(d, m, a)