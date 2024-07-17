console.clear()

function waitFor( seconds ) {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve()
        }, seconds * 1000 )
    } )
}

async function IMC( weigth, height ) {
    await waitFor(2)
    if ( typeof weigth !== 'number' || typeof height !== 'number' ) {
        return Promise.reject( 'arguments must be of type number' )
    }
    return ((weigth / (height**2)) * 10**4).toFixed(2)
}

async function showIMC( weigth, height ) {
    try {
        console.log(`Calculating IMC for weigth ${weigth}kg and height ${(height / 10**2).toFixed(2)}m`)
        const result = await IMC( weigth, height )

        let situation
        
        if      (result < 18.5 )  { situation = 'Skinny';         obesity = 'O' }
        else if (result < 24.9)   { situation = 'Normal';         obesity = '0' }
        else if (result < 29.9)   { situation = 'Overweight';     obesity = 'I' }
        else if (result < 39.99)  { situation = 'Obesity';        obesity = 'II' }
        else                      { situation = 'Severe obesity'; obesity = 'III' }
        
        console.table({ result, situation, obesity })
        console.log(`Your IMC is: ${result} \nSituation: ${situation}`)
    }
    catch (error) {
        console.log( error )
    }

}

showIMC( 60, 170 )
showIMC( 50, 190 )