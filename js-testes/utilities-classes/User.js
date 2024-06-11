class User {
    static #users = []
    #fullname
    #username
    #email
    #password
    constructor( fullname, username, email, password ) {
        this.#fullname = fullname
        this.#username = username
        this.#email    = email
        this.#password = { password, token: this.#generateToken() }
    }
    #generateToken() {
        let token = ''
        for ( let number = 12; number > 0; number-- ) {
            token += Math.floor( Math.random() * 10 )
        }
        return token
    }

    get pass() {
        console.log( this.#password ) 
    }

}

console.clear()
const user = new User( 'Lukas', 'Biscoito', 'contact.lukas@gmail.com', 'aaaaaaaa' )

user.pass
