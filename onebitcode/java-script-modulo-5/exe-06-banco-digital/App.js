const User    = require("./entities/User")
const Account = require("./entities/Account")

class App {
    static #users = []

    static findUserByEmail(user) {
        App.#users.forEach( u => {
            if( u.email === user.email ) {
                return u
            }
            // return false
        } )
    }

    static createUser( fullname, email, account ) {
        const user      = new User( fullname, email, account )
        const userExist = App.findUserByEmail(user)

        console.log( userExist )

        if ( !userExist ) {
            App.#users.push( user )
            console.log(`[ User ] Usuário ${user.fullname} cadastrado com sucesso!`)
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

const users = app.users

console.log( users[0] )

module.exports = App