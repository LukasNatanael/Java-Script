class Author {
    #name
    #nationality
    #bio
    #contact
    #createdAt
    constructor(name, nationality, bio, contact) {
        this.#name        = name
        this.#nationality = nationality
        this.#bio         = bio
        this.#contact     = contact
        this.#createdAt = new Date()
    }

    get name()         { return this.#name        }
    get nationality()  { return this.#nationality }
    get bio()          { return this.#bio         }
    get contact()      { return this.#contact     }
    get createdAt()    { return this.#createdAt   }

    get data() {
        return {
            name:        this.#name,
            nationality: this.#nationality,
            bio:         this.#bio,
            contatc:     this.#contact,
            createdAt: this.#createdAt,
        }
    }
}

module.exports = Author