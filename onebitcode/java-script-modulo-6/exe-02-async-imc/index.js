console.clear()
function IMC( weigth, height ) {
    return new Promise(( resolve, reject ) => {
        if( typeof weigth != 'number'|| typeof height != 'number' ) {
            reject( 'Arguments must be of type number!' )
        }
        const imc = ((weigth / (height**2)) * 10**4).toFixed(2)


        resolve( imc )
    })
}

function showIMC(weigth, height) {
    IMC( weigth, height ).then( imc => {
        let situation

        if      ( imc < 18.5 ) { situation = 'Skinny';         obesity = 'O' }
        else if (imc < 24.9)   { situation = 'Normal';         obesity = '0' }
        else if (imc < 29.9)   { situation = 'Overweight';     obesity = 'I' }
        else if (imc < 39.99)  { situation = 'Obesity';        obesity = 'II' }
        else                   { situation = 'Severe obesity'; obesity = 'III' }

        console.table({ imc, situation, obesity })
        console.log(`Your IMC is: ${imc} \nSituation: ${situation}`)
    })
    .catch(error => {
        console.log(`An error occured: ${error}`)
    })
    // .finally(() => {
    //     console.log('Finsih promise!')
    // })

    console.log(`Calculating IMC for weigth ${weigth}kg and height ${(height / 10**2).toFixed(2)}m`)
}

showIMC(60, 170)
showIMC(50, 190)