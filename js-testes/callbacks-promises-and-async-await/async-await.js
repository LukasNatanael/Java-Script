// Async - await
console.log('-------------------------------------------')

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false
        if (error) {
            reject(new Error('error in login'))
        }
        else {
            console.log('user logged!')
            resolve({email})
        }
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

const displayUser = async () => {
    try {
        const user = await loginUser('lukas@gmail.com')
        console.log({user})

        const videos = await getUserVideos(user.email)
        console.log({videos})

        const videosDetails = await getVideoDetails(videos[0])
        console.log(videosDetails)
    }
    catch (error) {
        console.log(`${error}`)
    }
}

displayUser()