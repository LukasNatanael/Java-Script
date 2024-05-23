class Author {
    constructor( name, email, password ) {
        this.name = name
        this.email = email
        this.password = password
        this.posts = []
    }

    createNewPost(title, content) {
        const post = new Post(title, content, this)
        this.posts.push(post)
        return post
    }
}

class Post {
    constructor( title, content, author ) {
        this.title = title
        this.content = content
        this.author = author
        this.comments = []
        this.createdAt = new Date()

    }
    addComment( author, content ) {
        this.comments.push( new Comment( author, content ) )
    }
}

class Comment {
    constructor(username, content ) {
        this.username = username
        this.content = content
        this.createdAt = new Date()
    }
}

console.clear()

