console.clear()

function asyncSum( x, y ) {
    return new Promise((resolve, reject) => {
        if ( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( 'arguments must be of type number' )
        }
        else {
            resolve( x + y )
        }
    })
}

function asyncSub( x, y ) {
    return new Promise((resolve, reject) => {
        if ( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( 'arguments must be of type number' )
        }
        else {
            resolve( x - y )
        }
    })
}

const sumResult = asyncSum(50, 33)
const subResult = asyncSub(50, 33)

Promise.all([ sumResult, subResult ]).then( (result) => {
    console.log( `Sum result: ${result[0]} \nSub result: ${result[1]}` )
})

// limpando tela para não mostrar o código acima
console.clear()

const numbers = [ 4, 9, 5, 13, 77 ]

function asyncSquare( x ) {
    return new Promise(( resolve, reject ) => {
        if ( typeof x !== 'number' ) {
            reject('argument must be of type number')
        }
        else {
            resolve( x ** 2 )
        }
    })
}

Promise.all( numbers.map( number => asyncSquare(number) ) ).then( squares => {
    console.log( squares )
}).catch( error => console.log(error) )