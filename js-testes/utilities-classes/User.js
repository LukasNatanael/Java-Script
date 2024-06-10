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
        this.#password = password
    }
    #token( password ) {
        let token = ''
        for ( let number = password.length; number > 0; number-- ) {
            token += Math.floor( Math.random() * 11 )
        }
        return token
    }

    get pass() {
        console.log( this.#token( this.#password ) ) 
    }

}

console.clear()
const user = new User( 'Lukas', 'Biscoito', 'contact.lukas@gmail.com', 'aaaaaaaa' )

user.pass
