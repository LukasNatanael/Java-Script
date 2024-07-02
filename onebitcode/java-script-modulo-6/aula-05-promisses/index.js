console.clear()
/*
    pending
    resolved
    rejected
*/
function execute(error=false) {
   return new Promise(( resolve, reject ) => {
        console.log('Promise is being executed')
        setTimeout(() =>  {
            if(error) {
                reject('rejected')
            }
            console.log('Resolving promisse...')
            resolve('resolved')
        }, 1000)
    })
}

const promisse = execute()
console.log(promisse)
setTimeout(() => {
    console.log(promisse)
}, 1000 * 2)