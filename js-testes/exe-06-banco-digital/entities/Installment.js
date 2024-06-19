class Installment {
    #value
    #number
    #status
        constructor( number, value ) {
        this.#number = number
        this.#value = value
        this.#status = 'pending'

    }

    get value()  { return this.#value }
    get number() { return this.#number }
    get status() { return this.#status }

    get data() {
        return {
            number: this.#number,
            value: this.#value,
            status: this.#status
        }
    }
}

module.exports = Installment
