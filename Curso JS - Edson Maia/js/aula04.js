let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)

var test = Array(10)
test[0] = 'Oi'
test[9] = 'Tudo bem?'
test[10] = 'Opa!'

let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'

// ADICIONAR no FINAL
// push = empurre
produtos.push('Açucar', 'Trigo')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do FIANL
// pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONAR no INÍCIO unshift
produtos.unshift('Uva', 'Maçã')

// REMOVER do INÍCIO shift
produtos.shift()

// REMOVER de uma posição ESPECÍFICA
// splice = emendar
// posição inicial, quantos remover
codigos.splice(1, 3)

// COPIAR array 
// slice= fatiar, porção
// posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

// VER TAMANHO DO ARRAY
// length = tamanho, comprimento
meses.length
meses1.length
meses2.length

// spreed operator ... copia e adiciona novos elementos
let teste = [...produtos, 'Ovo', 'Pera']
let teste1 = ['Ovo', 'Pera', ...produtos]