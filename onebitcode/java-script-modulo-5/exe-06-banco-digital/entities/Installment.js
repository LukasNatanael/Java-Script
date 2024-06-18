class Installment {
    // #quantity = []
    #value
    #status
    #number
    constructor(value, number) {
        this.#value = value
        this.#number = number
        this.#status = 'pending'
        // this.#total = this.#value * installments
        return this.data
    }

    // get quantity()     { return this.#quantity }
    get value()        { return this.#value    }
    get total()        { return this.#number    }

    // pay(quantityInstallment=1) {
    //     var number = 0 
    //     var remainingInstallments = 0
    //     this.quantity.forEach((installMent) => {
    //         if ( installMent.pay === true ) {
    //             number ++
    //         }
    //     } )

    //     number += quantityInstallment

    //     while ( number != 0 ) {
    //         this.quantity[number-1].pay = true
    //         number --
    //     }

    //     this.quantity.forEach((installMent) => {
    //         if ( installMent.pay === true ) {
    //             remainingInstallments ++
    //         }

    //     } )
        
    //     remainingInstallments = this.quantity.length - remainingInstallments
    //     if ( remainingInstallments === 0 ) {
    //         console.log('Todas suas parcelas estão pagas!')
    //         return
    //     }
    //     console.log(`\n[ +${quantityInstallment} parcelas pagas ] Ainda restam ${remainingInstallments} parcelas de $${this.value}\n`)
    // }

    get data() {
        return {
            number:    this.#number,
            value:    this.#value,
            status:    this.#status,
            // quantity: this.#quantity,
        }
    }
}

// console.clear()
// const parcelas = new InstallMent( 1500, 12, 1.2 )

// // console.log(parcelas.data)
// parcelas.pay(5)
// parcelas.pay(3)
// parcelas.pay(4)

module.exports = Installment