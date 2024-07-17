console.clear()
/*
    pending
    resolved
    rejected
*/
function showIMC(error=false) {
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

showIMC().then( result => {
    console.log('Promise result:', result)
}).catch( error => {
    console.log('Promise error:', error)
}).finally( () => {
    console.log('Promise execution finished!')
})