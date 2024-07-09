console.clear()

async function sum( x, y ) {
    if ( typeof x !== 'number' || typeof y !== 'number' ) {
        return Promise.reject('arguments for sum must be of type number')
    }
    return x + y
}

async function calculate() {
    try {
        const result = await sum(50, null)
        console.log( `You sum result is: ${result}` )
        
    } catch (error) {
        console.log(error)
    }

}

calculate()