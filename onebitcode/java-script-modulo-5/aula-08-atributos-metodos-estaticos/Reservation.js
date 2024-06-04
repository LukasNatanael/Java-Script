// static -> É utilizado para criar atributos/metodos globais de uma classe, que não precisam de uma instância para serem executados

class Reservation {
    constructor(guest, room, days) {
        this.guest = guest
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get premiumFee() {
        return Reservation.baseFee * 1.5
    }
}

console.clear()
Reservation.showBaseFee()
console.log(`Premium fee is $${Reservation.premiumFee}`)

const r1 = new Reservation(3, 201, 5)

Reservation.baseFee = 200

const r2 = new Reservation(2, 104, 2)

console.log(r1)
console.log(r2)
console.log(`Premium fee is $${Reservation.premiumFee}`)