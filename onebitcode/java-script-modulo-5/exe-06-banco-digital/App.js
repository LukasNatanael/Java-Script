const User     = require("./entities/User")
const Loan     = require("./entities/Loan")
const Deposit  = require("./entities/Deposit")
const Transfer = require("./entities/Transfer")

class App {
    static #users = []

    static findUserByEmail(email) {
        return App.#users.find( user => user.email === email)
    }

    static createUser( fullname, email ) {
        const userExist = App.findUserByEmail(email)

        if ( !userExist ) {
            App.#users.push( new User( fullname, email ) )
            console.log(`\n[ User ] ${fullname} cadastrado com sucesso!\n`)
            return
        }
        console.log('Email já cadastrado! Informe outro email.')
    }

    static deposit( email, value ) {
        const user = App.findUserByEmail(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit( newDeposit )
            console.log(`\n[ New deposit ] $${value} foram adicionados a conta de ${user.fullname}!\n`)
            return
        }
        console.log('Não foi possível realizar o depósito! Usuário não encontrado.')
    }
    static transfer( fromUserEmail, toUserEmail, value ) {
        const fromUser = App.findUserByEmail(fromUserEmail)
        const toUser   = App.findUserByEmail(toUserEmail)

        if ( fromUser && toUser ) {
            const newTransfer = new Transfer( fromUser, toUser, value )
            fromUser.account.addTransfer( newTransfer )
            toUser.account.addTransfer( newTransfer )
            return
        }
        
        console.log('Não foi possível realizar a trânsferencia! Usuário não encontrado.')
    }
    static takeLoan( email, value, installments ) {
        const userExists = App.findUserByEmail(email)
        if (userExists) {
            const newLoan = new Loan( value, installments )
            userExists.account.addLoan( newLoan )
            console.log(`\n[ New loan ] ${userExists.fullname} fez um empréstimo de $${value} dividido em ${installments}x.\n`)
            return
        }       
        console.log('Não foi possível realizar o empréstimo! Usuário não encontrado.')

    }

    static get users() {
        return App.#users
    }

    static changeLoanFee( newFeePercentage ) { Loan.fee = newFeePercentage; console.log(`A taxa de juros foi alterada para ${Loan.fee}%`) }
    static get fee()        { console.log(Loan.fee) }
    
}


module.exports = App