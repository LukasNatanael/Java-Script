var firstName = window.prompt('Qual o seu primeiro nome ?')
var lastName = window.prompt('Qual o seu sobrenome ?')
var fullName = `${firstName} ${lastName}`

window.alert(`Olá ${firstName}, vamos continuar com o cadastro.`)

var campoDeEstudo = prompt('Qual a sua área de estudo ?')
var anoNascimento = window.prompt('Em que ano você nasceu ?')

var anoNascimento = 2004
data = new Date()
var idade = parseFloat(data.getFullYear() - anoNascimento)

console.log('Dados cadastrais:')
console.log(`Nome completo: ${fullName}\nCampo de estudo: ${campoDeEstudo}\nIdade: ${idade}`)

alert(`Dados cadastrais:\nNome completo: ${fullName}\nCampo de estudo: ${campoDeEstudo}\nIdade: ${idade}`)