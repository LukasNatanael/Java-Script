// Criar objeto

let pessoa = {
    nome: 'lukas',
    idade: 18,
    peso: 61,
    altura: 1.67,
    doador: false
}

let produtos = {
    descricao: [],
    preco: []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Mustang', 'Uno', 'Corsa'],
    ano: [2022, 205, 2010]
}

// Como acessar uma propriedade usando .
/*
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
pessoa.doador
*/

// Acessar propriedade usando ['']
/*
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
pessoa['doador']
*/

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura)**2

// .toFixed(x)
// Limita o número de casa decimais
console.log(`IMC ${imc.toFixed(2)}`)

// ALTERNAR/ATUALIZAR VALOR de propiedade
pessoa.nome = 'Lukas Natanael'
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

// Usando spreead operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

// Usando spreead operator em objetos const
carros.marca = [...carros.marca, 'VolksWagen']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carros.ano, 1979]