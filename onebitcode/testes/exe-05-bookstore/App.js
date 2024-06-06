const Database = require('./Database')
const Author   = require( './entities/Author')
const Book     = require( './entities/Book')
const Order    = require( './entities/Order')
const Poster   = require( './entities/Poster')
const Product  = require('./entities/Product')
const User     = require( './entities/User')

// Criando uma classe APP que centraliza todas as outras funções
class App {
    static #database = new Database()

    createUser( name, username, email, password ) {
        const user = new User( name, username, email, password)
        App.#database.saveUser(user)
    }

    createAuthor( name, nationality, bio, contact ) {
        const author = new Author( name, nationality, bio, contact )
        App.#database.saveAuthor(author)
    }

    createBook( title, sinopsy, author, pages, genre, description, price, inStock ) {
        const book = new Book( title, sinopsy, author, pages, genre, description, price, inStock  )
        App.#database.saveBook(book)
    }

    createPoster( name, descrition, price, width, height, inStock ) {
        const poster = new Poster( name, descrition, price, width, height, inStock )
        App.#database.savePoster(poster)
    }

    createOrder( name, items ) {
        const order = new Order( name, items )
        App.#database.saveOrder(order)

        // Removendo todos
    }

    getAuthors() {
        return App.#database.getAuthors()
    }
    getBooks() {
        return App.#database.getBooks()
    }

    getUsers() {
        return App.#database.getUsers()
    }
    getPosters() {
        return App.#database.getPosters()
    }
    getOrders() {
        return App.#database.getOrders()
    }
    
    formatedDate(object) {
        return `${object.createdAt.getDate()}/${object.createdAt.getMonth()}/${object.createdAt.getFullYear()} at ${object.createdAt.getHours()}:${object.createdAt.getMinutes()}`
    }

    showDatabase() {
        return App.#database.getStorage()
    }

    addPoster(poster, quantity) {
        App.#database.addPosterToStock(poster, quantity)
    }
    addBook(book, quantity) {
        App.#database.addBookToStock(book, quantity)
    }
    removeBook(book, quantity) {
        App.#database.removeBookFromStock(book, quantity)
    }
}


module.exports = App