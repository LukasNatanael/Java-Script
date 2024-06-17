const Deposit  = require("./Deposit")
const Loan     = require("./Loan")
const Transfer = require("./Transfer")
const User     = require("./User")

class Account {
    #balance       = 0
    #deposits      = []
    #loans         = []
    #transferences = []
    #holder        = undefined
    // constructor(holder) {
    //     this.#holder = holder
    // }

    get balance()      { return this.#balance  } 
    get holder()       { return this.#holder   } 
    set holder(holder) { this.#holder = holder }

    newDeposit( depositValue ) {
        this.#balance += depositValue
        this.#deposits.push( new Deposit(depositValue) )

        // console.log(`\n[ New deposit ] $${depositValue} foram adicionados a contaa.\n`)    
    }
    
    newLoan( loanValue, installMents ) {
        this.#balance += loanValue
        this.#loans.push( new Loan(loanValue, installMents) )

    }

    newTransference( fromUser, value ) {
        if ( this.#balance > 0 ) {

            if ( fromUser.fullname === this.holder ) {
                this.#balance += value
                console.log(`\n[ New deposit ] ${fromUser.fullname} depositou $${value} em sua conta.\n`)

            }
            else {
                this.#balance -= value
                console.log(`\n[ New transference ] ${this.#holder} depositou $${value} para ${fromUser.fullname}\n`)
                fromUser.account.newDeposit( value )
            }
            return
        }

        console.log('Você não possui saldo o suficiente para realizar esta operação.')
            
        // this.#balance += value

        this.#transferences.push( new Transfer(fromUser, value) )
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