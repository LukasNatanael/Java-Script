class Product {

    static #tags = [ 'hygiene', 'food', 'eletronics', 'clothes' ]
    #name
    #quantity
    #price
    #validity
    #brand
    #inStock
    #tag

    constructor( tag, name, price, validity, quantity=1, brand=undefined ) {
        this.#name     = name
        this.#quantity = quantity
        this.#price    = price
        this.#validity = validity
        this.#brand    = brand
        this.#inStock  = this.#quantity 
        this.#tag      = tag
        Product.addTag( tag )

        // console.log( Product.#tags )
        
        // console.log( `[ ${Product.#tags} ] ${this.#name}` )
    }

    set price( value ) { this.#price = value }
    set brand( value ) { this.#brand = value }

    static addTag( newTag ) {
        const tagExists = Product.#tags.find( t => t === newTag )
        if ( !tagExists ) {
            Product.#tags.push( newTag )
        }
    }

    static get tags() { console.log(Product.#tags) }

    addInStock( quantity )      { this.#inStock += quantity }
    removeFromStock( quantity ) { this.#inStock -= quantity }


    get data() {
        return {
            tag:      this.#tag,
            name:     this.#name,
            quantity: this.#quantity,
            validity: this.#validity,
            price:    this.#price,
            brand:    this.#brand,
        }
    }
}

console.clear()
const pastaDeDentes = new Product( 'hygiene', 'Pasta de dentes', 10, '12/05/2025' )
const arroz = new Product( 'food', 'Arroz 5kg', 20, '12/05/2025', 1, 'Zorzo' )

console.log(arroz.data)
Product.tags

// console.log( pastaDeDentes )
// console.log( Product.productsInStock )

module.exports = Product