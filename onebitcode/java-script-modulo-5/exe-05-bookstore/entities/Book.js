const Product = require('./Product')

class Book extends Product {
    constructor(title, synopsis, genre, pages, author, description, price, inStock=0) {
        super( `Livro: ${title}`, description, price, inStock )
        this.title = title
        this.genre = genre
        this.pages = pages
        this.author = author
        this.synopsis = synopsis
    }
}

module.exports = Book