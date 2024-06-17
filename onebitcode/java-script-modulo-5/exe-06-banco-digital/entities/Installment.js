class Installment {
    #quantity = []
    #value
    #total
    constructor(loanValue, installments) {
        this.#value = loanValue
        // this.#value = (loanValue / installments) * feeValue
        // for ( var number = 1; number <= installments; number++) {
        //     this.#quantity.push({ number, value: this.#value, pay: false })
        // }
        this.#total = this.#value * installments
    }

    get quantity()     { return this.#quantity }
    get value()        { return this.#value    }
    get total()        { return this.#total    }

    pay(quantityInstallment=1) {
        var number = 0 
        var remainingInstallments = 0
        this.quantity.forEach((installMent) => {
            if ( installMent.pay === true ) {
                number ++
            }
        } )

        number += quantityInstallment

        while ( number != 0 ) {
            this.quantity[number-1].pay = true
            number --
        }

        this.quantity.forEach((installMent) => {
            if ( installMent.pay === true ) {
                remainingInstallments ++
            }

        } )
        
        remainingInstallments = this.quantity.length - remainingInstallments
        if ( remainingInstallments === 0 ) {
            console.log('Todas suas parcelas estão pagas!')
            return
        }
        console.log(`\n[ +${quantityInstallment} parcelas pagas ] Ainda restam ${remainingInstallments} parcelas de $${this.value}\n`)
    }

    get data() {
        return {
            value:    this.#value,
            quantity: this.#quantity,
            total:    this.#total
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