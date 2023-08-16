// CALLBACKS
console.log('-------------------------------------------')

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false
        if (error) {
            reject(new Error('error in login'))
        }
        resolve({email})
    })
}

loginUserPromise('lukas@gmail.com', 123456789).then((user) => {
    console.log('user logged')
    console.log(user)
}).catch((error) => {
    console.log(`${error}`)
})