var firstName = window.prompt('Informe seu primeiro nome recruta: ')
var lastName = window.prompt('Informe seu sobrenome recruta: ')

alert(`Bem-vindo a área de alistamento recruta ${firstName}`)

var campoDeEstudo = prompt('Informe sua área de estudo: ')
var anoNascimento = prompt('Informe seu ano de nascimento: ')
var fullName = `${firstName} ${lastName}`

data = new Date()
var idade = parseFloat(data.getFullYear() - anoNascimento)

alert(`
Recruta cadastrado com sucesso!
Dados cadastrais:

Nome completo: ${fullName}
Campo de estudo: ${campoDeEstudo}
Idade: ${idade}
`)