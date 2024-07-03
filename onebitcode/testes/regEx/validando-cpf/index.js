class CPF {
    constructor(cpfString) {
        // this.cpf = cpfString.match(/[0-9]{3,}\.[0-9]{3,}\.[0-9]{3,}\-[0-9]{2,}/)[0]
        this.start = cpfString.match(/[0-9]{3,}/)[0]
        this.middle = cpfString.match(/(?<=\.)[0-9]{3,}/)[0]
        this.end = cpfString.match(/[0-9]{3,}(?=\-)/)[0]
        this.cpf = cpfString.match(/[0-9]{3,}\.[0-9]{3,}\.[0-9]{3,}\-[0-9]{2,}/)
    }
}

console.clear()

console.log(new CPF('527.186.493-10'))