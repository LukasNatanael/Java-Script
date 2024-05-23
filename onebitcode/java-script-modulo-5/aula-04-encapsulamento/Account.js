class Account {
    #fullname
    #password
    #balance = 0
    constructor(user) {
        this.#fullname = user.fullname
        this.username  = user.username
        this.email     = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if ( this.#autenticate(email, password) ) {
            return this.#balance
        }
    }

    #autenticate(email, password) {
        return email === this.email && password === this.#password 
    }
}

const user = {
    fullname: 'Lukas Natanael',
    username: 'Biscoito',
    email: 'lukas@gmail.com',
    password: '12345678'
}

const myGoogleAccount = new Account(user)

console.log(myGoogleAccount)

console.log(`Saldo: R$${myGoogleAccount.getBalance('lukas@gmail.com', '12345678')}`)