class Order {
    #name
    #items
    #total
    #createdAt
    constructor( name, items ) {
        // Os itens são um Array de objetos
        // Verificando se possui a quantidade solicitada em estoque
        items.forEach(( { product, quantity } ) => {
            if (quantity > product.data.inStock) {
                throw new Error('Quantidade solicitada em estoque insuficiente')
            }

            this.#name  = name
            this.#items = items
            this.#total = items.reduce((sum, { product, quantity }) => sum + (quantity * product.data.price), 0)
            this.#createdAt = new Date()
        })

    }

    get client()     { return this.#name      }
    get items()      { return this.#items     }
    get total()      { return this.#total     }
    get createdAt()  { return this.#createdAt }

    get data() {
        return {
            client:    this.#name,
            items:     this.#items,
            total:     this.#total,
            createdAt: this.#createdAt

        }
    }
}

module.exports = Order