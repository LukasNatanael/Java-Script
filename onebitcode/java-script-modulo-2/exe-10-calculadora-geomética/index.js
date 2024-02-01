function triangleArea() {

    const base = prompt('Área do triângulo \nInforme a base do triângulo: ')
    const height = prompt('Área do triângulo \nInforme a altura do triângulo: ')
    const area = (base * height) / 2

    const data = {
        base,
        height,
        area
    }

    return data 
}

function rectangleArea() {
    const base = prompt('Área do retângulo \nInforme a base do retângulo: ')
    const height = prompt('Área do retângulo \nInforme a altura do retângulo: ')
    const area = (base * height)

    const data = {
        base,
        height,
        area
    }

    return data
}

function squareArea() {
    const side = prompt('Área do quadrado \nInforme o lado do quadrado: ')
    const area = side**2

    const data = {
        side,
        area
    }

    return data
}

function trapezeArea() {

    const largerBase = prompt('Área do trapézio \nInforme a base maior do trapézio: ')
    const smallerBase = prompt('Área do trapézio \nInforme a base menor do trapézio: ')
    const height = prompt('Área do trapézio \nInforme a altura do trapézio: ')
    const area = ((largerBase + smallerBase) * height) / 2

    const data = {
        largerBase,
        smallerBase,
        height,
        area
    }

    return data
}

function circleArea() {
    const ray = prompt('Área do círculo \nInforme o raio do círculo: ')
    
    const π = 3.14
    const area = π * ray**2

    const data = {
        ray,
        area
    }

    return data
}



let option      = ''
do {
    
    option = parseFloat(prompt(
        'Bem vindo(a) a Calculadora geométrica \n\n' +
        'Escolha o que deseja calcular: \n' + 
        '1 - Área do triângulo \n' + 
        '2 - Área do retângulo \n' +
        '3 - Área do quadrado \n' +
        '4 - Área do trapézio \n' +
        '5 - Área do círculo \n' +
        '6 - Encerrar \n'
        ))

    switch(option) {

        case 1:
            data = triangleArea()
            alert(
                'Área do triângulo \n' +
                `Base:   ${data.base} \n` +
                `Altura: ${data.height} \n` +
                `Área:   ${data.area} \n`
            )
            break

        case 2:
            data = rectangleArea()
            alert(
                'Área do retângulo \n' +
                `Base:   ${data.base} \n` +
                `Altura: ${data.height} \n` +
                `Área:   ${data.area} \n`
            )
            break

        case 3:
            data = squareArea(side)
            alert(
                'Área do quadrado \n' +
                `Lado: ${data.side} \n` +
                `Área: ${data.area} \n`
            )
            break

        case 4:
            data = trapezeArea()
            alert(
                'Área do trapézio \n' +
                `Base maior: ${data.largerBase} \n` +
                `Base menor: ${data.smallerBase} \n` +
                `Altura:     ${data.height} \n` +
                `Área:       ${data.area} \n`
            )   
            break

        case 5:
            data = circleArea()
            alert(
                'Área do círculo \n' +
                `Área: ${data.ray} \n`
            )
            break

        case 6:
            alert('Finalizando programa...')
            break
            
        default:
            alert('Opção inválida!')
            break
    }
        
} while (option != 6)

alert('Programa finalizado!')