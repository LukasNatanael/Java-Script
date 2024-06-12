const User    = require("./entities/User")
const Account = require("./entities/Account")

class App {
    static #users = []

    static findUserByEmail(email) {
        // revisa isso dai querido!
        return App.#users.find( user => user.email === email)
        // console.log(App.#users.find( u => u.email === user.email))

    }

    static newDeposit( email, value ) {
        const user = App.findUserByEmail(email)

        if (user) {
            user.account.newDeposit( value )
            return
        }
        console.log('Não foi possível realizar o depósito! Usuário não encontrado.')
    }
    static newTransference( fromEmail, toEmail, value ) {
        const userToPay    = App.findUserByEmail(fromEmail)
        const userToRecive = App.findUserByEmail(toEmail)

        if (userToPay || userToRecive) {
            userToPay.account.newTransference( userToPay, userToRecive, value )
            return
        }
        console.log('Não foi possível realizar a trânsferencia! Usuário não encontrado.')
    }
    static newLoan( email, value, installments ) {
        const user = App.findUserByEmail(email)
        if (user) {
            user.account.newLoan( value, installments )
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
    
}

console.clear()
const app = new App()

const lukas = App.createUser( 'Lukas N.', 'contactLukas@gmail.com', new Account() )
const lucas = App.createUser( 'Lucas N.', 'contactLukas@gmail.com', new Account() )
const math = App.createUser( 'Matheus H.', 'contactMath@gmail.com', new Account() )

App.newDeposit( lukas.email, 150 )

const users = app.users
// users.forEach( (user) => { console.log({ fullname: user.fullname, email: user.email }) })

module.exports = App