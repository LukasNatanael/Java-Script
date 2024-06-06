const Product = require('./Product')

class Book extends Product {
    #title
    #sinopsy
    #author
    #pages
    #genre
    constructor( title, sinopsy, author, pages, genre, description, price, inStock=0 ) {
        super( title, description, price, inStock )
        this.#title   = title
        this.#sinopsy = sinopsy
        this.#author  = author
        this.#pages   = pages
        this.#genre   = genre
    }

    get title()   { return this.#title   }
    get sinopsy() { return this.#sinopsy }
    get author()  { return this.#author  }
    get pages()   { return this.#pages   }
    get genre()   { return this.#genre   }

    get data() {
        return {
            title:         this.#title,
            sinopsy:       this.#sinopsy,
            author:        this.#author,
            pages:         this.#pages,
            genre:         this.#genre,
            description:   super.description,
            price:         super.price,
            inStock:       super.inStock,
            dataCreated:   super.createdAt
        }
    }
}

module.exports = Book