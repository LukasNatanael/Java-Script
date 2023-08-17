// PROMISES
console.log('-------------------------------------------')

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false
        if (error) {
            reject(new Error('error in login'))
        }
        console.log('user logged!')
        resolve({email})
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get user videos')
            resolve(['video1', 'video2', 'video3'])  
        },2000);
        // reject(new Error('error at get user videos'))
    })
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get user videos details')
            resolve({title: 'video title', description: 'video description'})
        },2500)
        // reject(new Error('error at get videos details'))
    })
}

loginUser('lukas@gmail.com', 1234567)
    .then((user) => getUserVideos(user.email))
    .then((videos) => getVideoDetails(videos[0]))
    .then((videoDetails) => console.log(videoDetails))
    .catch((error) => console.log(`${error}`))


// Promise.all() -> retorna as requisições ao mesmo tempo
const yt = new Promise((resolve) => {
    setTimeout(() => {
        resolve('videos from youtube')
    }, 3000)
})

const fb = new Promise((resolve) => {
    setTimeout(() => {
        resolve('posts from facebook')
    }, 2500)
})

Promise.all([yt, fb]).then((result) => {
    console.log({result})
})

// Promise.race() -> retorna a requisição que menos demorar para ser concluida
Promise.race([yt, fb]).then((result) => {
    console.log(result)
})