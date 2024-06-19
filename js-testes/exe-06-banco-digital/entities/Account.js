class Account {
    #owner
    #balance
    #deposits
    #transfers
    #loans
    constructor( user ) {
        this.#owner = user
        this.#balance   = 0
        this.#deposits  = []
        this.#transfers = []
        this.#loans     = []
    }

    get owner()     { return this.#owner }
    get loans()     { return this.#loans }
    get balance()   { return this.#balance }
    get deposits()  { return this.#deposits }
    get transfers() { return this.#transfers }


    get data() {
        return {
            owner: this.#owner.fullname,
            balance: this.#balance,
            deposits: this.#deposits,
            transfers: this.#transfers,
            loans: this.#loans
        }
    }

    addDeposit( deposit ) {
        this.#balance += deposit.value
        this.#deposits.push( deposit )
    }

    addLoan( loan ) {
        this.#balance += loan.value
        this.#loans.push( loan )
    }

    addTransfer( transfer ) {

        if ( transfer.to.email === this.#owner.email ) {
            this.#balance += transfer.value
            // this.#transfers.push( transfer )
        }
        else if ( transfer.from.email === this.#owner.email ) {
            this.#balance -= transfer.value
            // this.#transfers.push( transfer )
        }
        
        this.#transfers.push( transfer )
    }
}

module.exports = Account