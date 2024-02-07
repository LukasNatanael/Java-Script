console.clear()

function calculate(x, y, operation) {
    // console.log('Realizando uma operação')
    const result = operation(x, y) // sum(5, 4)
    return result
}

function sum(x, y) {
    console.log(`Realizando uma soma \n${x} + ${y}`)
    return x + y
}

const soma = calculate(5, 4, sum)

console.log(soma)

const subtracao = calculate(8, 4, (x, y) => {
    console.log(`Realizando uma subtração \n${x} - ${y}`)
    return x - y
})

console.log(subtracao, '\n')

function showElement(element, index, array) {
    const dict = { element, index, array } 
    console.log(dict)
}

const shopList = ['Maça', 'Banana', 'Laranja', 'Limão']

shopList.forEach( (index, element, array) => {
    showElement(index, element, array)
} )

console.log()