/*
    Classe responsável por realizar empréstimos do banco.
    A classe deverá possuir os seguintes atributos:
        - loanValue    -> valor do empréstimo
        - installMents -> em quantas parcelas o empréstimo será pago
            - a quantidade de parcelas deve ser uma instância de InstallMents
        - createdAt    -> quando o empréstimo foi realizado
    
        ESTÁTICOS:
            - atributo privado que contenha a taxa de juros do banco
            - getter para ler a taxas de juros
            - setter para definir uma nova taxa de juros a partir de uma porcentagem
                Cálculo:    
                    - (loanValue * feeValue ) / 100 + loanValue

                    - feeValuePercent


*/ 

const InstallMent = require('./Installment')

class Loan {
    static #feeValue = 1.2
    #loanValue
    #installMents
    #createdAt
    constructor(loanValue, installMents) {
        this.#loanValue    = loanValue
        this.#installMents = new InstallMent(loanValue, installMents, Loan.#feeValue)
        this.#createdAt    = new Date()
    }

    get loanValue()         { return this.#loanValue             }
    get installMents()      { return this.#installMents.quantity }
    get installMentsValue() { return this.#installMents.value    }
    get total()             { return this.#installMents.total    }
    static get feeValue()   { return Loan.#feeValue              }
    get createdAt()         { return this.#createdAt             }

    static set feeValue(feeValuePercent) {
        // Loan.#feeValue = ( Loan.#feeValue * feeValuePercent ) / 100 + Loan.#feeValue
        Loan.#feeValue = feeValuePercent
    }

    get data() {
        return {
            loanValue:         this.loanValue,
            installMents:      this.installMents,
            installMentsValue: this.installMentsValue,
            total:             this.total,
            feeValue:          Loan.feeValue,
            createdAt:         this.createdAt
        }
    }
}

// console.clear()
// const emprestimo = new Loan( 1500, 12 )
// console.log(emprestimo.data)
// console.log(emprestimo.installMentsValue)

// console.log(Loan.feeValue)
// Loan.feeValue = 10
// console.log(Loan.feeValue)

module.exports = Loan