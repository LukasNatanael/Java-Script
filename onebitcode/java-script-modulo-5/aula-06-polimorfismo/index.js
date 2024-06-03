/*
    Polimorfismo é o conceito que descreve o ato de um objeto poder assumir diferentes formas
    Na POO, isso pode ser percebido na ***sobrescrita de métodos***
    Quando uma classe herda de outra classe, ela pode sobrescrever os métodos da classe mãe
*/

class Vehicle {
    move() {
        console.log('The vehicle is moving.')
    }
}

class Car extends Vehicle {
    move(speed) {
        speed == '' ? speed = speed: speed = 80
        console.log(`The car is moving at ${speed} mph.`)
    }
}
class Ship extends Vehicle {
    move() {
        console.log('The ship is navigating.')
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        speed == '' ? speed = speed: speed = 180
        console.log(`The aircraft is flying at ${speed} hm/h.`)
    }
}

console.clear()

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

// delorean.move('180')
// blackPearl.move()
// epoch.move()

function start(vehicle) {
    console.log('Starting a vehicle...')
    vehicle.move()
    console.log()
}

start(blackPearl)
start(delorean)
start(epoch)