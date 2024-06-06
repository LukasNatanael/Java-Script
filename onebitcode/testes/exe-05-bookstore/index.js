const App = require('./App')
console.clear()

const app = new App()

app.createUser('Lukas', 'Biscoito', 'lukas@contact.com', 1234)
app.createBook('Harry Potter e a Pedra Filosofal', '...', 'J.K Rowling', 317, 'Fantasy', '...', 59.90, 100)
app.createBook('Eldest', '...', 'Christopher Paolini', 468, 'Fantasy', '...', 50, 20)
app.createPoster('Avengers Infinite War', 'Poster de um dos filmes mais vendidos da década',  250, 50, 90, 30)
app.createPoster('Avatar', 'Poster do filme mais vendido da década. Um monte de bicho azul.', 100, 70, 90, 15)
app.createAuthor('John Doe', 'Itallian', '...', 'doe@contact.com')

const users   = app.getUsers()
const authors = app.getAuthors()
const books   = app.getBooks()
const posters = app.getPosters()
const orders  = app.getOrders()


const produts = [
    { product: books[0],   quantity: 10 },
    { product: posters[1], quantity: 10 },
]

app.createOrder( authors[0], produts )

app.addPoster(posters[0], 12)
app.addPoster(posters[1], 15)
app.addBook(books[1], 30)

app.showDatabase()

console.log( app.formatedDate(users[0]) )
