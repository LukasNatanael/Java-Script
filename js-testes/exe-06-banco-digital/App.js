const Loan = require('./entities/Loan')
const Transfer = require('./entities/Transfer')
const User = require('./entities/User')
const Deposit = require('./entities/Deposit')

class App {
    static #users = []

    static get users() { 
        return App.#users.length === 0 ? 'Nobody registered!' : App.#users
    }

    static changeFee( valuePercent ) {
        Loan.fee = valuePercent
    }

    get fee() { return Loan.fee }

    static findUserByEmail( email ) {
        return App.#users.find( u => u.email === email )
    }

    static createUser( fullname, email ) {
        const user = this.findUserByEmail( email )

        if (!user) {
            App.#users.push(new User( fullname, email ))
            // console.log('Usuário cadastrado com sucesso!')
        }
    }

    static takeLoan( user, value, installments ) {
        const userExists = this.findUserByEmail( user )

        if (userExists) {
            userExists.account.addLoan(new Loan( value, installments ))
            console.log('Empréstimo cadastrado com sucesso!')
        }

    }

    static deposit( email, value ) {
        const userExists = this.findUserByEmail( email )
        if (userExists) {
            userExists.account.addDeposit( new Deposit( value ) )
            console.log('Depósito realizado com sucesso!')
        }
    }

    static transfer( fromUser, toUser, value ) {
        const fromUserExists = this.findUserByEmail( fromUser )
        const toUserExists = this.findUserByEmail( toUser )

        if (fromUserExists && toUserExists) {
            const newTransfer = new Transfer( fromUserExists, toUserExists, value )

            fromUserExists.account.addTransfer( newTransfer )
            toUserExists.account.addTransfer( newTransfer )

            console.log('Transferência realizada com sucesso!')
        }
    }
}

module.exports = App