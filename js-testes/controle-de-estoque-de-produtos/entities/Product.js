class Product {
    static productsInStock = []

    #type
    #name
    #quantity
    #price
    #validity
    #brand

    constructor( type, name, price, validity, quantity=1, brand=undefined ) {
        this.#type     = type
        this.#name     = name
        this.#quantity = quantity
        this.#price    = price
        this.#validity = validity
        this.#brand    = brand

        Product.productsInStock.push( [this.data] )
        console.log( `[ ${this.#type} ] ${this.#name}` )
    }

    set price( value ) { this.#price = value }
    set brand( value ) { this.#brand = value }


    get data() {
        return {
            type:     this.#type,
            name:     this.#name,
            quantity: this.#quantity,
            validity: this.#validity,
            price:    this.#price,
            brand:    this.#brand,
        }
    }
}

console.clear()
const pastaDeDentes = new Product( 'higiene', 'Pasta de dentes', 10, '12/05/2025' )
const arroz = new Product( 'alimento', 'Arroz 5kg', 20, '12/05/2025', 1, 'Zorzo' )


// console.log( pastaDeDentes )
console.log( Product.productsInStock )

module.exports = Product