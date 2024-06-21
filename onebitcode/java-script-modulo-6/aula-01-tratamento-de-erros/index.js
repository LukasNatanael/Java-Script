function sum( x, y ) {
    const firstNumber = Number( x )
    const secondNumber = Number( y )


    if( isNaN(firstNumber) || isNaN(secondNumber) ) {
        throw new Error( 'Arguments must be two numbers' )
    }

    return firstNumber + secondNumber
}

console.clear()
try {

    console.log( sum(2, 9) )
    console.log( sum(true, 14) )
    console.log( sum(undefined, 22) )
    console.log( sum(18, '0') )
    console.log( sum(39, null) )
    console.log( sum(13, 'zero') )
}
catch ( error ) {
    console.log(`An error occurred! ${error.message}`)
}   
finally {
    console.log('Calculations finished! ')
}
