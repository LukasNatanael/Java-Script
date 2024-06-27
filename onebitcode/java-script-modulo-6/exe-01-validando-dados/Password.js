class Password {
    constructor( password ) {
        if (password === '') {
            return new Error('please enter a password')
        }
        else if (password.length <= 0) {
            return 'password so short'
        }
        else if (password.length < 8) {
            return new Error('password must be at least 8 characters')
        }
        else if (!password.match(/[a-zA-Z]/g)) {
            return new Error('password must contain at least one letter')
        }
        else if (!password.match(/[A-Z]/g)) {
            return new Error('password must contain at least one uppercase letter')
        }
        else if (!password.match(/[a-z]/g)) {
            return new Error('password must contain at least one lowercase letter')
        }
        else if (!password.match(/\d/g)) {
            return new Error('password must contain at least one number')
        }
        else if (!password.match(/\W/g)) {
            return new Error('password must contain at least one special character')
        }

        this.password    = password
        this.numbers     = password.match(/\d/g)
        this.letters     = password.match(/[a-zA-Z]/g)
        this.upperCase   = password.match(/[A-Z]+/g)
        this.lowerCase   = password.match(/[a-z]+/g)
        this.specialChar = password.match(/[\W_]/g)
    }
}

export default Password