class User {
    #name
    #username
    #email
    #password
    #createdAt
    constructor( name, username, email, password ) {
        if ( typeof name !== 'string') {
            throw new Error('O nome deve ser uma string!')
        }
        this.#name     = name
        this.#username = username
        this.#email    = email
        this.#password = password
        this.#createdAt = new Date()
    }

    get name()        { return this.#name        }
    get username()    { return this.#username    }
    get email()       { return this.#email       }
    get createdAt() { return this.#createdAt }

    get data() {
        return {
            name:      this.#name,
            username:  this.#username,
            email:     this.#email,
            password:  this.#password,
            createdAt: this.#createdAt ,
        }
    }

    #authenticate( email, password ) {
        if (this.#email === email && this.#password === password) {
            console.log('Usuário autenticado com sucesso!')
            return
        }
        throw new Error('Usuário ou senha inválidos!')
    }

    changeUsername( newUsername, email, password ) {
        this.#authenticate(email, password)
        this.#username = newUsername

        console.log(`Usuário alterado para ${this.#username}.`)
    }
    changePassword( newPassword, email, password ) {
        this.#authenticate(email, password)
        this.#password = newPassword
        console.log('Sua senha foi alterada.')
        
    }
}

module.exports = User