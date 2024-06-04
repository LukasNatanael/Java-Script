class Order {
    #user
    #items
    #total
    constructor(user, items) {
        items.forEach(( { product, quantity } ) => {
            if ( quantity > product.inStock) {
                throw new Error(`Não temos ${quantity} ${product.name} em estoque`)
            }
        })
        this.#user  = user
        this.#items = items
        this.#total = items.reduce((sum, { product, quantity }) => sum + ( product.price * quantity), 0 )
    }

    get data() {
        return {
            user: this.#user,
            items: this.#items,
            total: this.#total
        }
    }
}

module.exports = Order