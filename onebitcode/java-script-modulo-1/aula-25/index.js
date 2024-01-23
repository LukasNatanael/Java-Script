let   speed     = 0
const roadSpeed = 120
do {
    alert(`A velocidade atual do veículo é: ${speed} km/h \nVocê ainda está abaixo da velocidade da via! \nAumentando a velocidade em 20 km/h`)
    speed += 20
} while (speed < roadSpeed)

alert(`Você está na velocidade da via: ${roadSpeed}km/h \nVelocidade final do veículo: ${speed} km/h`)