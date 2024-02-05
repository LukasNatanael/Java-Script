// Funções recursivas são funçoes chamadas dentro do seu próprio escopo ou seja, ela executa dentro de si

function divide(number) {
    console.log(number)
    if (number % 2 === 0 ) {
        divide(number/2)
    }
    else {
        return number
    }
}

// divide(40)

function duble(number) {
    console.log(number)
    duble(number * 2)
}

// duble(1)


function factorial(number) {
    console.log(`Número: ${number}`)
    if (number === 0) {
        return 1
    }
    else if (number === 1) {
        return 1
    }
    else {
        console.log(`${number} x !${number - 1}`)
        return number * factorial(number - 1)
    }
}

console.log(factorial(5))