console.clear()
class Email {
    constructor(email) {
        const fixedString = email.replace(/\s/)
        this.email  = fixedString.match(/[a-zA-z0-9]+@[a-zA-z0-9].+[a-zA-z0-9]+/)[0]
        this.prefix = fixedString.match(/.{2,}((?=\@))/)[0]
        this.server = fixedString.match(/((?<=\@).{2,}(?=\.))/)[0]
        this.domain = fixedString.match(/((?<=\.).{2,})/g)[0]
    }
}

class Password {
    constructor(password) {
        if (password === '') {
            console.log('please enter a password')
            return
        }
        else if (password.length <= 0) {
            console.log('password so short')
            return
        }
        else if (password.length < 8) {
            console.log('password must be at least 8 characters')
            return
        }
        else if (!password.match(/[a-zA-Z]/g)) {
            console.log('password must contain at least one letter')
            return
        }
        else if (!password.match(/[A-Z]/g)) {
            console.log('password must contain at least one uppercase letter')
            return
        }
        else if (!password.match(/[a-z]/g)) {
            console.log('password must contain at least one lowercase letter')
            return
        }
        else if (!password.match(/\d/g)) {
            console.log('password must contain at least one number')
            return
        }
        else if (!password.match(/\W/g)) {
            console.log('password must contain at least one special character')
            return
        }

        this.password    = password.match(/.+/)[0]
        this.numbers     = password.match(/\d/g)
        this.letters     = password.match(/[a-zA-Z]/g)
        this.upperCase   = password.match(/[A-Z]+/g)
        this.lowerCase   = password.match(/[a-z]+/g)
        this.specialChar = password.match(/[\W_]/g)
    }
}

console.log( new Email( 'lukasnatanael987@gmail.com' ) )
// console.log( new Email( 'lucas@gmail.com' ) )
console.log( new Password( '!1B-2a_b3C@' ) )