const Database = require('./Database')
const Author   = require('./entities/Author')
const Book     = require('./entities/Book')
const Order    = require('./entities/Order')
const Poster   = require('./entities/Poster')
const User     = require('./entities/User')

class App {
    static #database = new Database()

    createUser(fullname, username, email, password) {
        const user = new User(fullname, username, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(name, nationality, bio,  contactEmail) {
        const author = new Author(name, nationality, bio,  contactEmail)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock=0) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    getBooks() {
        return App.#database.find('books')
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster(name, description, price, width, height, inStock=0) {
        const poster = new Poster(name, description, price, width, height, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder(user, items) {
        const order = new Order(user, items)
        App.#database.saveOrder(order)
        
        // removendo produtos do estoque conforme a quantidade solicitada pelo usuário
        order.data.items.forEach(({ product, quantity }) => {
            if ( product instanceof Book ) {
                App.#database.removeBooksFromStock( product.name, quantity )
            }
            else if ( product instanceof Poster) {
                App.#database.removeBooksFromStock( product.name, quantity )
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }

}

module.exports = App