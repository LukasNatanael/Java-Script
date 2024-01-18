entrada1 = prompt('Primeiro valor: ')
entrada2 = prompt('Segundo valor: ')

x = parseFloat(entrada1)
y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y
const raiz = (x) => { return Math.sqrt(x) }

alert(`
Soma:          ${soma}
Subtração:     ${subtracao}
Multiplicação: ${multiplicacao}
Divisão:       ${divisao}
√${x}:         ${raiz(x)}
√${y}:         ${raiz(y)}
`)
