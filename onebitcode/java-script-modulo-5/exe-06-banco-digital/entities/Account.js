const Deposit  = require("./Deposit")
const Loan     = require("./Loan")
const Transfer = require("./Transfer")
const User     = require("./User")

class Account {
    #balance       = 0
    #deposits      = []
    #loans         = []
    #transferences = []
    #holder        = null
    // constructor(holder) {
    //     this.#holder = holder
    // }

    get balance()      { return this.#balance } 
    get holder()       { return this.#holder  } 
    set holder(holder) { this.#holder = holder}

    newDeposit( depositValue ) {
        this.#balance += depositValue
        this.#deposits.push( new Deposit(depositValue) )
        
    }
    
    newLoan( loanValue, installMents ) {
        this.#balance += loanValue
        this.#loans.push( new Loan(loanValue, installMents) )

    }

    newTransference( fromUser, transferValue ) {
        if ( fromUser.fullname === this.holder ) {
            this.#balance += transferValue
        }
        else {
            this.#balance -= transferValue
        }

        this.#transferences.push( new Transfer(fromUser, transferValue) )
    }

    get data() {
        return {
            hodler:  this.holder,
            balance: this.balance
        }
    }
}

// console.clear()
// const lukas = new User( 'Lukas N.', 'constactLukas@gmail.com', new Account() )
// lukas.account.newDeposit(150)

// console.log( lukas.account.data )

module.exports = Account