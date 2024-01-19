let measure = parseFloat(prompt('Informe um valor em metros: '))

const option = parseFloat(prompt('Converter para: \n1 - Milímetro \n2 - Centímetro \n3 - Decímetro \n4 - Decâmetro \n5 - Hectômetro \n6 - Quilômetro'))


switch(option) {
    case 1:
        alert(`Resultado: ${measure}m = ${measure *= 1000}mm`)
        break
    case 2:
        alert(`Resultado: ${measure}m = ${measure *= 100}cm`)
        break
    case 3:
        alert(`Resultado: ${measure}m = ${measure *= 10}dm`)
        break
    case 4:
        alert(`Resultado: ${measure}m =: ${measure /= 10}dam`)
        break
    case 5:
        alert(`Resultado: ${measure}m = ${measure /= 100}hm`)
        break
    case 6:
        alert(`Resultado: ${measure}m = ${measure /= 1000}km`)
        break
    default:
        alert('Opção inválida!')
        break
}



