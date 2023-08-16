let p = new Promise( (resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('success')
    }
    else {
        reject('failed')
    }
} )

p.then( (response) => {
    console.log(`this is a ${response} message! the numbers are equals!`)
} ).catch( (error) => {
    console.log(`this is a ${error} message! the number aren't equals!`)
} )


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
console.log('--------------------------------------------')
const bestDev = 'lukas'

bd = new Promise( (resolve, reject) => {
    if (bestDev != 'lukas' && bestDev != 'Lukas') {
        reject({
            name: 'this is wrong',
            message: bestDev + '? Really'
        })
    }
    else {
        resolve( {
            name: bestDev,
            message: 'This guy is the best!'
        } )
    }
} )

bd.then( (result) => {
    console.log(`${result.name} ? Yeah! ${result.message}`)
} ).catch( (error) => {
    console.log(`${error.name} ${error.message}`)
} )