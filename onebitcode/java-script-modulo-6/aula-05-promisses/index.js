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

const promise = execute()
console.log(promise)
setTimeout(() => {
    console.log(promise)
}, 1000 * 2)