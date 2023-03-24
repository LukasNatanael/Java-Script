// Comentário em linha

/*
    Comentário em bloco
*/

// Criar váriaveis usando let ou var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario

document.write(`Preço total R$ ${precoTotal} <br>`)
console.log(new Intl.NumberFormat('pt-br').format(precoTotal))

document.write(`Preço total ${precoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <hr>`)

// Criar constante
const nome = 'Lukas Natanael'
const peso  = 61
const altura = 1.67
const imc = peso / (altura)**2

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write('Nota final: ' + notaFinal + '<br>')

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto
document.write(compraComDesconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + '<br>')

// Utiliza-se para definir qual a moeda
// .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})