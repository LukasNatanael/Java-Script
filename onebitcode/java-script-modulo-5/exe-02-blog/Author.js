const Post = require('./Post.js')

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

module.exports = Author
