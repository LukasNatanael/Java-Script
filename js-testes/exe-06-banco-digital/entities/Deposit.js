class Deposit {
    #value
    #createdAt
    constructor ( value ) {
        this.#value = value
        this.#createdAt = new Date()
    }

    get value()     { return this.#value }
    get createdAt() { return this.#createdAt }
}

module.exports = Deposit