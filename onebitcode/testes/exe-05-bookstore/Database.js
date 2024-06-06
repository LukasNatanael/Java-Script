/*
    Criar um database que seja possível:
        - adicionar
        - remover
        - pesquisar
        - retornar armazenamento
    essa classe deve possuir um método estático que retorne o armazenamento geral dela que contém:
        - authors
        - books
        - orders
        - posters
        - users
        
*/

const Book     = require( './entities/Book')
const Poster   = require( './entities/Poster')


class Database {
    #storage = {
        authors: [],
        books:   [],
        orders:  [],
        posters: [],
        users:   []
    }

    #show(key) {
        this.#storage[key].forEach(( { data } ) => console.log(data))
    }

    #getInStock(key) {
        // this.find(key).forEach( ({ title, inStock }) => { console.log(title, inStock) } )
        const total = this.find(key).reduce( (sum, { inStock }) =>  sum + inStock, 0 )
        return total
    }

    #getQuantity(key) {
        return this.#storage[key].length
    }

    #getFormatedDate(object) {
        return `${object.createdAt.getDate()}/${object.createdAt.getMonth()}/${object.createdAt.getFullYear()} at ${object.createdAt.getHours()}:${object.createdAt.getMinutes()}`
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
        console.log(`\n[ Author ] ${author.name} foi cadastrado com sucesso!\n`)

    }

    getAuthors(show=false) {
        if (show) { this.#show('authors') }
        // return {
        //     quantity: this.#storage.authors.length,
        //     authors:  this.#storage.authors,
        // }
        return this.#storage.authors
    }

    findBookByTitle(bookTitle) {
        return this.#storage.books.find( book => book.title === bookTitle)
    }
    findPosterByName(posterName) {
        return this.#storage.posters.find( poster => poster.name === posterName)
    }
    findUserByEmail(email) {
        return this.#storage.users.find( user => user.email === email)
    }

    saveBook(book) {
        const bookExists = this.findBookByTitle(book.title)
        if (!bookExists) {
            this.#storage.books.push(book)
            // this.#storage.books.inStock += book.inStock
            console.log(`\n[ Book ] "${book.name}" foi salvo com sucesso!\n`)
            return
        }
        console.log(`\n[ Book ] "${book.name}" já existe!\n`)
    }

    getBooks(show=false) {
        if (show) { this.#show('books') }
        // return {
        //     quantity: this.#storage.books.length,
        //     books:    this.#storage.books,
        // }
        return this.#storage.books
    }

    addBookToStock(book, quantity) {
        const bookToAdd = this.findBookByTitle(book.title)
        bookToAdd?.addToStock(quantity)
        console.log(`\n[ +${quantity} ] livros de "${bookToAdd.title}" foram adicionados ao estoque!\n`)
    }

    removeBookFromStock(book, quantity) {
        const bookToRemove = this.findBookByTitle(book.title)
        bookToRemove?.removeFromStock(quantity)
        console.log(`\n[ -${quantity} ] livros de "${bookToRemove.title}" foram removidos do estoque!\n`)

    }

    saveOrder(order) {
        this.#storage.orders.push(order)
        console.log(`\n[ Order ] Pedido de ${order.client.name} foi cadastrado com sucesso!\n`)

        // Removendo quantidade de itens solicitados do estoque
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                this.removeBookFromStock(product, quantity)
            }
            else if (product instanceof Poster) {
                this.removePosterFromStock(product, quantity)
            }
            
        }) 

    }

    getOrders(show=false) {
        if (show) { this.#show('orders') }
        // return {
        //     quantity: this.#storage.orders.length,
        //     orders:   this.#storage.orders,
        // }
        return this.#storage.orders
    }

    saveUser(user) {
        const userExists = this.findUserByEmail(user.email)
        if (!userExists) {
            this.#storage.users.push(user)
            console.log(`\n[ User ] ${user.name} foi cadastrado com sucesso!\n`)
            return
        }
        console.log(`\n[ User ] ${user.name} já está cadastrado!\n`)
    }

    getUsers(show=false) {
        if (show) { this.#show('users') }
        // return {
        //     quantity: this.#storage.users.length,
        //     users:    this.#storage.users,
        // }
        return this.#storage.users

    }
    
    savePoster(poster) {
        const posterExists = this.find(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
            console.log(`\n[ Poster ] "${poster.name}" foi salvo com sucesso!\n`)
            return
        }
        console.log(`\n[ Poster ] "${poster.name}" já existe\n`)
    }

    getPosters(show=false) {
        if (show) { this.#show('posters') }
        // return {
        //     quantity: this.#storage.posters.length,
        //     posters:  this.#storage.posters,
        // }
        return this.#storage.posters

    }

    addPosterToStock(poster, quantity) {
        const posterToAdd = this.findPosterByName(poster.name)
        posterToAdd?.addToStock(quantity)
        console.log(`\n[ +${quantity} ] Posters de "${posterToAdd.name}" foram adicionados ao estoque!\n`)
    }

    removePosterFromStock(poster, quantity) {
        const posterToRemove = this.findPosterByName(poster.name)
        posterToRemove?.removeFromStock(quantity)
        console.log(`\n[ -${quantity} ] posters de "${posterToRemove.name}" foram removidos do estoque!\n`)

    }

    getStorage() {
        console.table({
            books:   { quantity: this.#getQuantity('books'),   inStock: this.#getInStock('books') },
            posters: { quantity: this.#getQuantity('posters'), inStock: this.#getInStock('posters') },
            authors: { quantity: this.#getQuantity('authors'), inStock: null },
            orders:  { quantity: this.#getQuantity('orders'),  inStock: null },
            users:   { quantity: this.#getQuantity('users'),   inStock: null },
        })
    }


}

// Importar os módulos antes de executar

// console.clear()
// const database      = new Database()
// const lukas         = new User( 'Lukas', 'Biscoito', 'lukas@contact.com', 1234 )
// const math          = new User( 'Math', 'Mathsquezee', 'squezze@contact.com', 1234 )
// const doe           = new Author( 'John Doe', 'Itallian', 'doe@contact.com' )
// const HarryPotter   = new Book( 'Harry Potter e a Pedra Filosofal', '...', 'J.K Rowling', 317, 'Fantasy', '...', 59.90, 100 )
// const Eldest        = new Book( 'Eldest', '...', 'Christopher Paolini', 468, 'Fantasy', '...', 50, 20)
// const AirJordan     = new Product( 'Air Jordan', 'Um tênis de um jogador famoso ai...', 500, 15 )
// const MarvelPoster  = new Poster( 'Avengers Infinite War', 'Poster de um dos filmes mais vendidos da década', 250, 50, 90, 30 )

// const produts = [
//     { product: HarryPotter, quantity: 1 },
//     { product: AirJordan,   quantity: 1 },
//     { product: Eldest,      quantity: 1 },
// ]

// const order = new Order( lukas, produts )

// database.saveUser(lukas)
// database.saveUser(math)

// console.log()

// database.saveAuthor(doe)
// database.saveBook(HarryPotter)
// database.saveBook(Eldest)

// console.log()

// database.saveOrder(order)
// database.savePoster(MarvelPoster)

// console.log()

// database.addBookToStock(HarryPotter, 15)
// database.removeBookFromStock(Eldest, 2)

// console.log()

// database.getStorage()

module.exports = Database