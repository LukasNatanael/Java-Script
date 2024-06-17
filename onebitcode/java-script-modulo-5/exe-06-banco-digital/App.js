const User    = require("./entities/User")
const Account = require("./entities/Account")
const Loan    = require("./entities/Loan")

class App {
    static #users = []

    static findUserByEmail(email) {
        // revisa isso dai querido!
        return App.#users.find( user => user.email === email)
        // console.log(App.#users.find( u => u.email === user.email))
    }

    static newDeposit( user, value ) {
        const userExists = App.findUserByEmail(user.email)

        if (userExists) {
            user.account.newDeposit( value )
            console.log(`\n[ New deposit ] $${value} foram adicionados a conta de ${user.fullname}!\n`)
            return
        }
        console.log('Não foi possível realizar o depósito! Usuário não encontrado.')
    }
    static newTransference( fromUser, toUser, value ) {
        const userFrom = App.findUserByEmail(fromUser.email)
        const userTo   = App.findUserByEmail(toUser.email)

        if ( userFrom && userTo ) {
            if ( userFrom.email === userTo.email ) {
                console.log(`\n[ New deposit ] ${fromUser.fullname} depositou $${value} em sua conta.\n`)
                userFrom.account.newDeposit( value )
                }
            else {
                console.log(`\n[ New transference ] ${fromUser.fullname} depositou $${value} para ${toUser.fullname}.\n`)
                // userToPay.account.newTransference( userToPay, userToRecive, value )
                // userToRecive.account.newDeposit( value )

                // console.log(userToPay, userToRecive, value)
                // userToRecive.account.newDeposit( value )
                userFrom.account.newTransference( userTo, value )
            }
            return
        }
        console.log('Não foi possível realizar a trânsferencia! Usuário não encontrado.')
    }
    static newLoan( user, value, installments ) {
        const userExists = App.findUserByEmail(user.email)
        if (userExists) {
            user.account.newLoan( value, installments )
            console.log(`\n[ New loan ] ${user.fullname} fez um empréstimo de $${value} dividido em ${installments}x.\n`)
            return
        }       
        console.log('Não foi possível realizar o empréstimo! Usuário não encontrado.')

    }

    static createUser( fullname, email, account ) {
        const user      = new User( fullname, email, account )
        const userExist = App.findUserByEmail(user.email)
        // console.log( userExist )

        if ( !userExist ) {
            App.#users.push( user )
            console.log(`\n[ User ] ${user.fullname} cadastrado com sucesso!\n`)
            return user
        }
        console.log('Email já cadastrado! Informe outro email.')
    }

    get users() {
        return App.#users
    }

    static set feeValue( value ) { Loan.feeValue = value; console.log(`A taxa de juros foi alterada para ${Loan.feeValue}%`) }
    static get feeValue()        { console.log(Loan.feeValue) }
    
}

console.clear()
const app = new App()

const lukas = App.createUser( 'Lukas N.', 'contactLukas@gmail.com', new Account() )
const math  = App.createUser( 'Matheus H.', 'contactMath@gmail.com', new Account() )
const users = app.users

console.log( users[0].account.data )
console.log( users[1].account.data )

App.newDeposit( lukas, 300 )
lukas.account.newTransference( math, 150 )

console.log( users[0].account.data )
console.log( users[1].account.data )

App.feeValue = 10

App.newLoan( lukas, 1500, 3 )
App.newTransference( math, lukas, 100 )
App.newDeposit( math, 550 )
App.newTransference( lukas, lukas, 250 )

console.log()
users.forEach( (user) => { console.log({ fullname: user.fullname, email: user.email }) })
console.log()

console.log( users[0].account.data )
console.log( users[1].account.data )

module.exports = App