const Product = require('./Product')

class Poster extends Product {
    #height
    #width
    constructor(name, description, price, width, height, inStock=0) {
        super(name, description, price, inStock)
        this.#width  = width
        this.#height = height
    }

    get width() { return this.#width }

    get height() { return this.#height }

    get area() { return this.#width * this.#height }

}


module.exports = Poster