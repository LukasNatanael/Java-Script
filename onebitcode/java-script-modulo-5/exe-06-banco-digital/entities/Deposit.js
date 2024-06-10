/*
    A classe Deposit deve possui os atributos:
        - transferValue
        - createdAt
    e atributos e métodos extras se necessário como:
        - Tipo de transferência:
            - pix:
                - é debitado o valor solicitado sem nenhuma taxa adicional
            - cartão de crédito:
                - cobra uma taxa de de 1.2% em cima do valor debitado
                - alertar o usuário sobre essa taxa
        - Método de autenticação privado
            - Token de autenticação de usuário
                - sequência de 10 números aleatórios que será utilizado para autenticar o usuário
*/


class Deposit {
    #value
    #createdAt
    constructor(value) {
        this.#value = value
        this.#createdAt     = new Date()
        console.log(`[ New deposit ] $${this.value} foram adicionados a sua conta!`)
    }

    get value() {
        return this.#value
    }

    get depositDate() {
        return this.#createdAt
    }
}

// console.clear()
// const deposit = new Deposit(120)


module.exports = Deposit