class Post {
    constructor( title, ...comments ) {
        // this.author = author
        this.title = title
        this.comments = [...comments]
    }

    createNewPost( title, comments ) {
        this.posts.createNewPost( title, comments )
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

        // return this.comments

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
        this.posts = []
    }

    createNewPost(title, ...comments) {
        this.posts.push(new Post(title, ...comments))

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
const lukas = new Author( 'Lukas Natanael', 'lukas@lukas.lukas', 123 )
lukas.createNewPost('Montei meu pc gamer',
    new Comment('Jefferson', 'Caramba, que legal! Qual a configuração dele ?')
)

lukas.createNewPost('Gostaria de comprar novos perféricos, alguém recomenda algum ?',
    new Comment('Pedro', 'Você precisa de algum perifério em específico ?'),
    new Comment('João', 'Tem algum gosto para que eu possa ter como base ?')
)

lukas.posts[0].addComment( 'Matheus', 'Em qual loja você pegou as peças ?' )

lukas.createNewPost( post1.title, ...post1.comments )
// console.log(lukas.posts)
post1.addAuthor( 'Matheus', 'matheuzinho@gmail.com', 55555 )

console.log( post1.author.name )
console.log( post1 )
// console.log(lukas.name)
// console.log(lukas.posts)
