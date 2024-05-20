class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discountPercent) {
        this.discountOf = discountPercent 
        return this.price * discountPercent / 100
    }
}

module.exports = Product

