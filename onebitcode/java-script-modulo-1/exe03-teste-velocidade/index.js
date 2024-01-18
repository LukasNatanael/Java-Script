const car1Model = prompt('Modelo do 1º carro: ')
const car1Speed = parseFloat(prompt(`Velocidade em km/h do ${car1Model}: `))

const car2Model = prompt('Modelo do 2º carro: ')
const car2Speed = parseFloat(prompt(`Velocidade em km/ do ${car2Model}: `))

const speedDifference = (car1Speed + car2Speed) / 2

if (car1Speed > car2Speed) {
    alert(`${car1Model} está há ${speedDifference}km a frente do ${car2Model}.\n${car1Model} está há ${car1Speed}km/h`)
}
else if (car1Speed < car2Speed) {
    alert(`${car2Model} está há ${speedDifference}km/h a frente do ${car1Model}\n${car2Model} está há ${car2Speed}km/h`)
}
else if (car1Speed == car2Speed) {
    alert(`${car1Model} e ${car2Model} estão há ${car1Speed}km/h`)
}