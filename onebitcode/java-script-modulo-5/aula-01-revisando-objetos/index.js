/*
    Os objetos em JS permitem criar métodos e atributos de diversas formas sendo eles:
        - Função comum:
            function getSummary()
        - Função anônima:
            getTitle = () => { return this.title }
        - Definindo após a criação do objeto:
            book.save = () => { console.log('this function save the file in database') }
        - Função construtora:
            function Book(title, author, pages, publishYear, tags)
            
            Basta instanciar essa função e começar a utilizá-la:
            const HarryPotter = new Book(
                'Harry Potter e a Pedra Filosofal',
                'J.K.Rowling',
                317,
                1997,
                ['fantasy', 'adventure', 'romance']
            )


*/
const book = {
    title: 'Harry Potter e a Pedra Filosofal',
    author: {
        name: 'J.K.Rowling'
    },
    publishYear: 1997,
    pages: 317,
    tags: ['fantasy', 'adventure', 'romance'],
    inStock: 20,
    getSummary() {
        return `${this.title} foi escrito por ${this.author.name} em ${this.publishYear} com ${this.pages} páginas. Atualmente possuimos ${this.inStock} livros em estoque.`
    },
    addOnStock(quantity) {
        this.inStock += quantity
    }
}

console.clear()

console.log(book.getSummary())
console.log(book)
console.log()

book.addOnStock(50)
console.log(book.getSummary())
console.log()

book.save = () => {
    console.log('Livro salvo no banco de dados com sucesso!')
}

console.log(book)

// Função CONSTRUTORA
function Book(title, author, pages, publishYear, tags) {
    this.title = title
    this.author = author
    this.pages = pages,
    this.publishYear = publishYear,
    this.tags = tags
    this.published = false
    this.inStock = 0
    this.getSummary = function() {
        return `${this.title} foi escrito por ${this.author.name} em ${this.publishYear} com ${this.pages} páginas.`
    }
    this.addOnStock = function(quantity) {
        this.inStock += quantity
    }
    this.save = () => {
        console.log('Livro salvo no banco de dados com sucesso!')
    }
}
console.clear()
// PascalCase
const HarryPotterAuthor = { name: 'J.K.Rowling' }
const HarryPotterTags = ['fantasy', 'adventure', 'romance']

const HarryPotter = new Book('Harry Potter e a Pedra Filosofal', HarryPotterAuthor, 317, 1997, HarryPotterTags)
console.log(HarryPotter.getSummary())

const EldestAuthor = { name: 'Christopher Paolini' }
const EldestTags = ['fantasy', 'adventure']

const Eldest = new Book('Eldest', EldestAuthor, 468, 2005, EldestTags)
console.log(Eldest.getSummary())