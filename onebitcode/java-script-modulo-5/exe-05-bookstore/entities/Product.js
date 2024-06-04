class Product {
    #name
    #description
    #price
    #inStock
    constructor( name, description, price, inStock=0 ) {
        this.#name        = name
        this.#description = description
        this.#price       = price
        this.#inStock     = inStock
    }

    #isString(value) {
        if ( typeof value !== 'string' ) {
            throw new Error('O valor informado deve ser uma string!')
        }

        return value
    }

    #isNumber(value) {
        if ( typeof value !== 'number' ) {
            throw new Error('O valor informado deve ser um número!')
        }

        return value
    }

    #isInteger(value) {
        if ( typeof value !== 'number' ) {
            throw new Error('O valor informado deve ser um número!')
        }
        else if ( !Number.isInteger(value) ) {
            throw new Error('O valor informado deve ser um número inteiro!')
        }

        return value
    }

    get name() {
        return this.#name
    }

    set name(newName) {
        this.#name = this.#isString(newName)
    }

    get description() {
        return this.#description
    }

    set description(newDescription) {
        this.#description = this.#isString(newDescription)
    }

    get price() {
        return this.#price
    }

    set price(newPrice) {
        this.#price = this.#isNumber(newPrice)
    }
    
    get inStock() {
        return this.#inStock
    }

    set inStock(newInStock) {
        this.#inStock = this.#isInteger(newInStock)
    }

    addToStock(quantity) {
        this.#inStock += this.#isInteger(quantity)
    }
    removeFromStock(quantity) {
        this.#inStock -= this.#isInteger(quantity)
    }
}

module.exports = Product
