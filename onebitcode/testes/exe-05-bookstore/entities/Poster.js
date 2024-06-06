const Product = require("./Product");

class Poster extends Product {
    #width
    #height
    #area
    constructor( name, descrition, price, width, height, inStock=0 ) {
        super( name, descrition, price, inStock )
        this.#width  = width
        this.#height = height
        this.#area   = this.#width * this.#height
    }

    get width()   { return this.#width  }
    get height()  { return this.#height }
    get area()    { return this.#area   }

    get data() {
        return {
            name:        super.data.name,
            descrition:  super.data.description,
            price:       super.data.price,
            width:       this.#width,
            height:      this.#height,
            inStock:     super.inStock,
            area:        this.#area,
            createdAt:   super.createdAt
        }
    }
}

module.exports = Poster