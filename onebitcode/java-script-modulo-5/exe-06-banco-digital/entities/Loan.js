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

const Installment = require('./Installment')

class Loan {
    static #fee = 1.05
    #value
    #installments
    #createdAt
    constructor(value, installments) {
        this.#value    = value
        // this.#installments = new Installment(loanValue, installments, Loan.#feeValue)
        this.#installments = []
        for ( var number = 1; number <= installments; number++) {
            this.#installments.push( new Installment( (value * Loan.#fee ) / installments, number ) )
        }
        this.#createdAt    = new Date()
    }

    get value()             { return this.#value                 }
    get installments()      { return this.#installments          }
    get total()             { return this.#installments.total    }
    static get fee()        { return Loan.#fee                   }
    get createdAt()         { return this.#createdAt             }

    static set fee(feeValuePercent) {
        // Loan.#feeValue = ( Loan.#feeValue * feeValuePercent ) / 100 + Loan.#feeValue
        Loan.#fee = 1 + ( feeValuePercent / 100 )
    }

    get data() {
        return {
            loanValue:         this.value,
            installments:      this.installments,
            total:             this.total,
            feeValue:          Loan.fee,
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