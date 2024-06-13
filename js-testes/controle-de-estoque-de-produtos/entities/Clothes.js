const Product = require("./Product");

class Clothing extends Product {
    
    #clothingType
    #size
    #color

    constructor(clothingType, name, quantity, size, price, color=undefined, brand=undefined  ) {
        super( 'clothes', name, quantity, price, brand );
        this.#clothingType = clothingType 
        this.#size         = size
        this.#color        = color
    }

    set size( value )  { this.#size  = value }
    set color( value ) { this.#color = value }

    get data() {
        return {
            type:     this.#clothingType,
            name:     super.data.name,
            size:     this.#size,
            color:    this.#color,
            quantity: super.data.quantity,
            price:    super.data.price,
            brand:    super.data.brand,
        }
    }
}


const AirJordan = new Clothing( 'shoes', 'Air Jordan', 1, undefined, 500, 'Black, white and red' ,'Nike' )

console.log( AirJordan )

// console.log( Product.productsInStock, Product.productsInStock.length )