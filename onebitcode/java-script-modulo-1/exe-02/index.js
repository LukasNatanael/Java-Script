firstValue = parseFloat(prompt('Primeiro valor: '))
secondValue = parseFloat(prompt('Segundo valor: '))

console.log('SOMA')
console.log(`${firstValue} + ${secondValue} = ${firstValue + secondValue}`)
alert(`SOMA\n${firstValue} + ${secondValue} = ${firstValue + secondValue}`)

console.log('SUBTRAÇÃO')
console.log(`${firstValue} - ${secondValue} = ${firstValue - secondValue}`)
alert(`SUBTRAÇÃO\n${firstValue} - ${secondValue} = ${firstValue - secondValue}`)

console.log('MULTIPLICAÇÃO')
console.log(`${firstValue} * ${secondValue} = ${firstValue * secondValue}`)
alert(`MULTIPLICAÇÃO\n${firstValue} * ${secondValue} = ${firstValue * secondValue}`)

console.log('DIVISÃO')
console.log(`${firstValue} / ${secondValue} = ${firstValue / secondValue}`)
alert(`DIVISÃO\n${firstValue} / ${secondValue} = ${firstValue / secondValue}`)

console.log('RAIZ QUADRADA')
console.log(`${firstValue} / ${secondValue} = ${firstValue / secondValue}`)

function raiz(x) {
    console.log(`valor de x: ${x}`)
    console.log(`valor de x²: ${x**2}`)
    console.log(`valor de x²/x: ${x**2/x}`)
}


console.log(`RAIZ QUADRADA\n${firstValue}: √${firstValue**2}\n${secondValue}: √${secondValue**2}`)
alert(`
    RAIZ QUADRADA\n
    ${firstValue}: √${firstValue*firstValue}\n
    ${secondValue}: √${secondValue*secondValue}
`)

console.log(`√${firstValue}: ${raizQuadrada(firstValue)}`)