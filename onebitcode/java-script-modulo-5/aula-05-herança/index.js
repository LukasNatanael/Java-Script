class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

// A classe House é uma extenção de Property, já que ambas possuem os mesmos atributos
// Logo, House recebe Property como herança
class House extends Property {}

const land = new Property( 200, 50000 )
const someHouse = new House( 120, 200000 )

console.log(land)
console.log(someHouse.getPricePerSquareMeter())

// Como House é herdeira Property, House é uma extenção/instância de Property
console.log( someHouse instanceof House )
console.log( someHouse instanceof Property )

class Apartament extends Property {
    constructor( number, area, price ) {
        /* 
            super() herda as propriedades da classe mãe que no caso é Property
            isso serve para que eu não tenha que definir todas as propiedades da classe mãe novamente
        */
        super( area, price )
        this.number = number
    }

    getFloor() {
        return this.number.toString().slice(0, -2)
    }
}


const apartament = new Apartament( '201', 100, 160000 )

console.log(apartament)
console.log(apartament.getPricePerSquareMeter())
console.log(apartament.getFloor())