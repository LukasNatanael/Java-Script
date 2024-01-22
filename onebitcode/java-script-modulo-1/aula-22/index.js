let roadSpeed = 80
let carSpeed  = 120

alert(`Você está acima da velocidade da via. \nVelocidade da via: ${roadSpeed} km/h\nVelocidade do veículo: ${carSpeed} km/h`)
while (carSpeed > roadSpeed) {
    alert('Você ainda está acima da velocidade da via \nDiminuindo 20 km/h')
    alert(`O carro está a ${carSpeed} km/h`)
    carSpeed -= 20

    if (carSpeed == roadSpeed) {
        alert(`Você está no limite da via! \nVelocidade atual: ${carSpeed} km/h`)
        break
    }
}