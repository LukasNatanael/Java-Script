const Account = require('./Account')
class User {
    #fullname
    #email
    #account
    constructor( fullname, email) {
        this.#fullname = fullname
        this.#email    = email
        this.#account  = new Account( this )

        // account.holder = this.#fullname
    }

    get fullname() { return this.#fullname }
    get email()    { return this.#email    }
    get account()  { return this.#account  }

    get data() {
        return {
            fullname: this.fullname,
            email:    this.email,
            account:  this.account,
        }
    }
}

module.exports = User