const Account = require('./Account')
class User {
    #fullname
    #email
    #account
    #createdAt
    constructor( fullname, email ) {
        this.#fullname = fullname
        this.#email = email
        this.#account = new Account( this )
        this.#createdAt = new Date()

    }

    get fullname()  { return this.#fullname }
    get email()     { return this.#email }
    get account()   { return this.#account }
    get createdAt() { return this.#createdAt }

    get data() {
        return {
            fullname: this.#fullname,
            email: this.#email,
            account: this.#account,
            createdAt: this.#createdAt,
        }
    }
}

module.exports = User