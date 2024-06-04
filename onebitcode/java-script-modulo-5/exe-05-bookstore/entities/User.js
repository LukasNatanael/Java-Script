class User {
    #fullname
    #username
    #email
    #password
    constructor( fullname, username, email, password ) {
        if ( typeof fullname !== 'string') {
            throw new Error('O nome deve ser uma string!')
        }
        this.#fullname = fullname
        this.#username  = username
        this.#email    = email
        this.#password =  password
    }

    #autenticate( email, password ) {
        if (email === this.#email && password === this.#password) {
            console.log('Usuário autenticado com sucesso!')
        } 
        else { 
            throw new Error('Dados do usuário estão incorretos!')
        }

    }

    get fullname() {
        return this.#fullname
    }

    get username() {
        return this.#username
    }

    get email() {
        return this.#email
    }
    
    setUsername( newUsername, email, password ) {
        this.#autenticate(email, password)
        this.#username = newUsername
        console.log(`O usuário foi alterado para ${this.#username}`)
    }
    
    setPassword( newPassword, email, password ) {
        this.#autenticate(email, password)
        this.#password = newPassword
        console.log('Senha alterada com sucesso!')
    }
}

module.exports = User