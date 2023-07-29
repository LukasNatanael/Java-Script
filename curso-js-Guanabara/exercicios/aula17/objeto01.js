let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        if(p!=0) {
            console.log(`${amigo.nome} engordou +${p}kg.`)
            this.peso + p
        } else {
            console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
        }
    }
}

amigo.engordar()
console.log(typeof amigo)
