console.clear()
console.log('Programa iniciado!')

const timeoutID = setTimeout( () => {
    console.log('Já se passaram 3 segundos desde o início do código.')
}, 1000 * 3)

// Para cancelar o timeout, utilize a função clearTimeout passando o timeoutID retornado pela setTimeout
clearTimeout( timeoutID )

let seconds = 0

// setInterval() -> irá verificar periódicamente seu código a fim de encontrar algo 
const intervalID = setInterval(() => {
    seconds += 3
    console.log(`Já se passaram ${seconds} segundos desde o início do código.`)
    
    if( seconds > 10 ) {
        // Para cancelar o intervalo, utilize a função clearInterval passando o intervalID retornado pela setInterval
        clearInterval( intervalID )
        console.log('Tempo esgotado. Encerrando...')
    }
}, 1000 * 3)
