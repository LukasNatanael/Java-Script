let visitedCities = ''
let city = ''
let cont = 0

const name = prompt('Olá turista, como posso chama-lo ?')
let question = prompt(`${name} você já visitou alguma cidade ? [s/n]`)[0].toLowerCase()

while (question == 's') {
    city = prompt('Qual o nome da cidade visitada ?')
    visitedCities += `- ${city}\n`
    cont ++

    question = prompt('Você visitou mais alguma outra cidade ? [s/n]')
}
alert(`${name}, você visitou um total de ${cont} cidades sendo elas: \n${visitedCities}`)
