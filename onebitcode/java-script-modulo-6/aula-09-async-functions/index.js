console.clear()

async function sum( x, y ) {
    return x + y
}

async function sub( x, y ) {
    return x - y
}

const sumResult = sum(50, 33)
const subResult = sub(50, 33)

Promise.all([ sumResult, subResult ]).then( (result) => {
    console.log({ sum: result[0], sub: result[1] })
})

// limpando tela para não mostrar o código acima
console.clear()

const numbers = [ 4, 9, 5, 13, 77 ]

async function square( x ) {
    return x ** 2
}

Promise.all( numbers.map( number => square(number) ) ).then( squares => {
    console.log( squares )
}).catch( error => console.log(error) )