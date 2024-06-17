const Deposit  = require("./Deposit")
const Loan     = require("./Loan")
const Transfer = require("./Transfer")
const User     = require("./User")

class Account {
    #owner
    #balance     
    #deposits     
    #loans
    #transferences
    
    constructor(user) {
        this.#owner = user
        this.#balance       = 0
        this.#deposits      = []
        this.#loans         = []
        this.#transferences = []
    }

    get balance()      { return this.#balance } 
    get holder()       { return this.#owner   } 

    addDeposit( deposit ) {
        this.#balance += deposit.value
        this.#deposits.push( deposit )
        // console.log(`\n[ New deposit ] $${depositValue} foram adicionados a contaa.\n`)    
    }
    
    addLoan( loan) {
        this.#balance += loan.value
        this.#loans.push( loan )

    }

    // analisar
    addTransfer( transfer ) {
        if ( this.#balance > 0 ) {

            if ( transfer.toUser.email === this.#owner.email ) {
                this.#balance += transfer.value
                this.#transferences.push( transfer )
                console.log(`\n[ New deposit ] ${fromUser.fullname} depositou $${transfer.value} em sua conta.\n`)
                return
                
            }
            else if ( transfer.fromUser.email === this.#owner.email ) {
                this.#balance -= transfer.value
                console.log(`\n[ New transference ] ${transfer.toUser.fullname} depositou $${transfer.value} para ${transfer.fromUser.fullname}\n`)
                this.#transferences.push( transfer )
                return
            }
        }

        console.log('Você não possui saldo o suficiente para realizar esta operação.')
    }

    get data() {
        return {
            owner:   this.#owner.fullname,
            balance: this.#balance
        }
    }
}

// console.clear()
// const lukas = new User( 'Lukas N.', 'constactLukas@gmail.com', new Account() )
// lukas.account.newDeposit(150)

// console.log( lukas.account.data )

module.exports = Account