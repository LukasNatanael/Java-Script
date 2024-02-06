// Funções comuns -> Pode ser executado antes de ser definido
console.log(sum(5, 4))
console.log(div(5, 4))

function sum (a, b) {
    return a + b
} 

function div (a, b) {
    return a / b
} 


// Funções anônimas (arrow functions) -> Precisa ser definido para depois ser executado
const sub = (a, b) => {
    return a - b
} 

const mult = (a, b) => {
    return a * b
}

let operate = mult

console.log(sum(5, 4))
console.log(sub(5, 4))
console.log(operate(5, 4))