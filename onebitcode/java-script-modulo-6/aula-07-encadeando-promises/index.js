console.clear()
function checkAge( age ) {
    return new Promise(( resolve, reject ) => {
        if (age) {
            resolve( age > 18 )
        }
        reject( new Error('age is required') )
    })
}

function getAge( birthday ) {
    return new Promise(( resolve, reject ) => {
        if(birthday) {
            const birthdayYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve( currentYear - birthdayYear )
        }

        reject( new Error('birthday is required') )
    })
}

getAge( '2004-09-02' )
    .then( age => checkAge(age) )
    .then( isOver18 => {
        if (isOver18) {
            console.log('Of legal age')
        }
        else {
            console.log('Minor')
        }
    })
    .catch( error => console.log(error.message) )