const result = prompt('Escolha uma alternativas:\n1 -\n2 -\n3 -')

const numericResult = parseFloat(result)

switch(numericResult) {
    case 1:
        console.log('O resultado é: 1')
        alert('O resultado é: 1')
        break
    case 2:
        console.log('O resultado é: 2')
        alert('O resultado é: 2')
        break
    case 3:
        console.log('O resultado é: 3')
        alert('O resultado é: 3')
        break
    default:
        console.log('Finalizando...')
        alert('Finalizando...')
}