var firstName = window.prompt('Informe seu primeiro nome recruta: ')
var lastName = window.prompt('Informe seu sobrenome recruta: ')

alert(`Bem-vindo a área de alistamento recruta ${firstName}`)

var fieldOfStudy = prompt('Informe sua área de estudo: ')
var birthday = prompt('Informe seu ano de nascimento: ')
var fullName = `${firstName} ${lastName}`

data = new Date()
var age = parseFloat(data.getFullYear() - birthday)

alert(`
Recruta cadastrado com sucesso!
Dados cadastrais:

Nome completo: ${fullName}
Campo de estudo: ${fieldOfStudy}
Idade: ${age}
`)