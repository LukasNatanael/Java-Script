/*
    Ambos os usuários de devem ser instâncias de uma classe User própria
*/

class Transfer{
    #fromUser
    #toUser
    #transferValue
    #createdAt
    constructor(fromUser, toUser, transferValue) {
        this.#fromUser      = fromUser
        this.#toUser        = toUser
        this.#transferValue = transferValue
        this.#createdAt     = new Date()

        // console.log(`[ New transference ] ${this.fromUser.fullname} depositou $${this.value} para ${this.toUser.fullname}`)
    }

    get fromUser()    { return this.#fromUser      }
    get toUser()      { return this.#toUser        }
    get value()       { return this.#transferValue }
    get depositDate() { return this.#createdAt     }
}

// console.clear()
// const transfer = new Transfer( 
//     { name: 'Lukas'},
//     { name: 'Talita'},
//     500
// )

module.exports = Transfer