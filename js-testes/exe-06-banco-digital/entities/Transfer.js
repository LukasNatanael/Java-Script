class Transfer {
    #from
    #to
    #value
    #createdAt
    constructor(from, to, value) {
        this.#from = from
        this.#to = to
        this.#value = value
        this.#createdAt = new Date()
    }

    get from()      { return this.#from  }
    get to()        { return this.#to    }
    get value()     { return this.#value }
    get createdAt() { return this.#createdAt }

}

module.exports = Transfer
