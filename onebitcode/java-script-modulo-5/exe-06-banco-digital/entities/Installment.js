class InstallMent {
    #quantity
    #value
    #total
    constructor(loanValue, installMents, feeValue) {
        this.#quantity = installMents
        this.#value    = (loanValue / installMents) * feeValue
        this.#total    = this.#value * installMents
    }

    get quantity()     { return this.#quantity }
    get value()        { return this.#value    }
    get total()        { return this.#total    }

    pay(quantityInstallment=1) {
        if (this.quantity > 0) {
            this.quantity -= quantityInstallment
            console.log(`Ainda restam ${this.quantity} parcelas de ${this.value}}`)
            return
        }
        console.log('Todas suas parcelas estão pagas!')
    }

    get data() {
        return {
            value:    this.#value,
            quantity: this.#quantity,
            total:    this.#total
        }
    }
}

module.exports = InstallMent