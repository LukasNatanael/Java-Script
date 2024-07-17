console.clear()

async function sum( x, y ) {
    if ( typeof x !== 'number' || typeof y !== 'number' ) {
        return Promise.reject('arguments for summation must be of type number')
    }
    else {
        return x + y
    }
}

async function sub( x, y ) {
    if ( typeof x !== 'number' || typeof y !== 'number' ) {
        return Promise.reject('arguments for subtraction must be of type number')
    }
    else {
        return x - y
    }
}

const sumResult = sum(50, 33)
const subResult = sub(50, null)

Promise.all([ sumResult, subResult ]).then( (result) => {
    console.log({ sum: result[0], sub: result[1] })
}).catch( error => {
    console.log(error)
} )

// limpando tela para não mostrar o código acima
console.clear()

const numbers = [ 4, 9, 5, 13, 77 ]

async function square( x ) {
    return x ** 2
}

Promise.all( numbers.map( number => square(number) ) ).then( squares => {
    console.log( squares )
}).catch( error => console.log(error) )