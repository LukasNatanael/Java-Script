class Post {
    constructor( title, ...comments ) {
        this.title = title
        this.comments = [...comments]
    }

    createNewPost( title, comments ) {
        this.posts.createNewPost( title, comments )
        this.contPosts++
    }

    addComment( author, ...comments ) {
        this.comments.push( new Comment( author, ...comments ) )
    }

    addAuthor( ...author ) {
        this.author = new Author( ...author )
    }
}

class Comment {
    constructor(author, ...comments ) {
        this.author = author
        this.comments = []
        if ( comments instanceof Array ) {
            this.comments.push(...comments)
        }
        else {
            this.comments.push(comments)
        }
    }

    addComment( author, comments ) {
        this.author = author

        if ( comments instanceof Array ) {
            this.comments.push(...comments)
        }
        else {
            this.comments.push(comments)
        }
        
        return this.comments
    }
}

class Author {
    constructor( name, email, password ) {
        this.name = name
        this.email = email
        this.password = password
        this.quantityPosts = 0
        this.posts = []

    }

    createNewPost(title, ...comments) {
        this.posts.push(new Post(title, ...comments))
        this.quantityPosts++

        // console.log(this.posts)
    }
}

console.clear()
const post1 = new Post(
    'Saca só meu novo pisante rapaziadinha', 
    new Comment('MarceloD1' ,'Zika demais esse seu pisante tiu'),
    new Comment('MarceloD3' ,'Onde tu comprou zé ?')
)

const MarceloD4Comments = ['Brega dms', 'Parece as botas da minha avó']
post1.addComment( 'MarceloD2', 'Slk, que bagulho maneirão', 'De rocha viu zé!' )
post1.addComment( 'MarceloD4', ...MarceloD4Comments )


// console.clear()
const user1 = new Author( 'Lukas Natanael', 'lukas@lukas.lukas', 123 )
user1.createNewPost('Montei meu pc gamer',
    new Comment('Jefferson', 'Caramba, que legal! Qual a configuração dele ?')
)

user1.createNewPost('Gostaria de comprar novos perféricos, alguém recomenda algum ?',
    new Comment('Pedro', 'Você precisa de algum perifério em específico ?'),
    new Comment('João', 'Tem algum gosto para que eu possa ter como base ?'),
    new Comment('Talita', 'Quais são as cores que você utiliza em seu setup ?')
)

user1.posts[0].addComment( 'Matheus', 'Em qual loja você pegou as peças ?' )

user1.createNewPost( post1.title, ...post1.comments )
post1.addAuthor( 'Matheus', 'matheuzinho@gmail.com', 55555 )

post1.addComment('Maria Rauana' ,'Scooby-doo')
post1.addComment('Norvil Sauxicha' ,'Eu chamaria de Scooby-loo, esse gato parece chato...')


// console.log(user1)
console.log(post1.comments)
