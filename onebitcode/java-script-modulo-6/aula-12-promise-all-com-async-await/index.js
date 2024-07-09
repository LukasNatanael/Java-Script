console.clear()

// função para simular o tempo de resposta de uma requisição
function waitFor( seconds ) {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve( 'it took me a while but I did it!' )
        }, seconds * 1000)
    } )
}

const numbers = [ 4, 5, 9, 13, 77 ]

// const squares = numbers.map( async (number) => {
//     await waitFor(2)
//     return number ** 2
// } )

async function execute() {
    console.time('map')
    const squares = await Promise.all( numbers.map( async (number) => {
            await waitFor(2)
            return number ** 2
        } ))

    console.log( squares )
    console.timeEnd('map')
}

execute()