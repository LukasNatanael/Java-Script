//Criar uma classe genérica para os produtos
class Product {
    #name
    #description
    #price
    #inStock
    #createdAt
    constructor( name, description, price, inStock=0) {
        this.#name        = name
        this.#description = description
        this.#price       = price
        this.#inStock     = inStock
        this.#createdAt = new Date()

    }

    get name()        { return this.#name        }
    get description() { return this.#description }
    get price()       { return this.#price       }
    get inStock()     { return this.#inStock     }
    get createdAt() { return this.#createdAt }
    
    addToStock(quantity) {
        this.#inStock += quantity
    }
    removeFromStock(quantity) {
        this.#inStock -= quantity
    }

    get data() {
        return {
            name:        this.#name,
            description: this.#description,
            price:       this.#price,
            inStock:     this.#inStock,
            createdAt: this.#createdAt
        }
    }
}

module.exports = Product