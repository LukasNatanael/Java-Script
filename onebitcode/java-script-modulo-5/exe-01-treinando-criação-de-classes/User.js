class User {
    constructor( fullname, email, password ) {
        this.fullname = fullname
        this.email    = email
        this.password = password
    }
    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log(`Usuário ${this.fullname} logado com sucesso!`)
        }
        else {
            console.log('Dados do usuário estão incorretos!')
        }
    }
}

module.exports = User
