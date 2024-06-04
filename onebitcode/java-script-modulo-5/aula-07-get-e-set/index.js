// get e set utilizados dessa maneira são extremamente úteis para a proteção dos dados
class Wallet {
    #amount
    #username
    constructor() {
        this.#amount = 100.99 * 100
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername === 'string'){
            this.#username = newUsername
        }
        else {
            console.log('username must be os type string')
        }
    }

    get username() {
        return this.#username
    }
}

console.clear()
const myWallet = new Wallet()
console.log(myWallet.amount)

myWallet.username = 'Lukas'
console.log(myWallet.username)
myWallet.username += ' Natanael'
console.log(myWallet.username)
myWallet.username = 818181818
console.log(myWallet.username)