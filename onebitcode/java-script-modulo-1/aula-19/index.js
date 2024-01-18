const idade = prompt('Informe sua idade: ')

if (idade >= 18) {
    console.log('Maior de idade')
}
else if (idade >= 13 && idade <18) {
    console.log('Adolescente')
}
else {
    console.log('Criança')
}

x = 5
y = 12
// operador ternário
const resultado = (x == y) ? `${x} é igual a ${y}` : `${x} é diferente de ${y}`
console.log(resultado)