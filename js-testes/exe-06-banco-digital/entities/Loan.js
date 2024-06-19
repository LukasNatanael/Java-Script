const Installment = require("./Installment")

class Loan {
    static #fee = 1.2
    #value
    #installments
    #createdAt
    constructor( value, installments ) {
        this.#value = value
        this.#installments = []

        for ( let number = installments; number <= installments; number++ ) {
            this.#installments.push( new Installment( number, (value * Loan.#fee) / installments ) )
        }

        this.#createdAt = new Date()
    }

    get fee()   { return Loan.#fee }
    get value() { return this.#value }
    get installments() { return this.#installments }
    get createdAt() { return this.#createdAt }

    set fee( valuePercent ) { Loan.#fee = (valuePercent/100) + 1 }

    get data() {
        return {
            value: this.#value,
            installments: this.#installments,
            createdAt: this.#createdAt
        }
    }
}

module.exports = Loan