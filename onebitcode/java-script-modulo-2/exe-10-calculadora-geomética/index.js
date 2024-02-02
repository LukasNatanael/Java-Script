function triangleArea() {

    const base   = parseFloat(prompt('Área do triângulo \nInforme a base do triângulo: '))
    const height = parseFloat(prompt('Área do triângulo \nInforme a altura do triângulo: '))
    const area   = (base * height) / 2

    const data = alert(
        'Área do triângulo \n' +
        `Base:   ${base} \n` +
        `Altura: ${height} \n` +
        `Área:   ${area} \n`
    )

    return data 
}

function rectangleArea() {
    const base   = parseFloat(prompt('Área do retângulo \nInforme a base do retângulo: '))
    const height = parseFloat(prompt('Área do retângulo \nInforme a altura do retângulo: '))
    const area   = (base * height)

    data = alert(
        'Área do retângulo \n' +
        `Base:   ${base} \n` +
        `Altura: ${height} \n` +
        `Área:   ${area} \n`
    )

    return data
}

function squareArea() {
    const side = parseFloat(prompt('Área do quadrado \nInforme o lado do quadrado: '))
    const area = side**2

    const data = alert(
        'Área do quadrado \n' +
        `Lado: ${side} \n` +
        `Área: ${area} \n`
    )

    return data
}

function trapezeArea() {

    const largerBase  = parseFloat(prompt('Área do trapézio \nInforme a base maior do trapézio: '))
    const smallerBase = parseFloat(prompt('Área do trapézio \nInforme a base menor do trapézio: '))
    const height      = parseFloat(prompt('Área do trapézio \nInforme a altura do trapézio: '))
    const area        = (largerBase + smallerBase) * height / 2

    const data = alert(
        'Área do trapézio \n' +
        `Base maior: ${largerBase} \n` +
        `Base menor: ${smallerBase} \n` +
        `Altura:     ${height} \n` +
        `Área:       ${area} \n`
    )   

    return data
}

function circleArea() {
    const ray = parseFloat(prompt('Área do círculo \nInforme o raio do círculo: '))
    
    const π = 3.14
    const area = π * ray**2

    const data = alert(
        'Área do círculo \n' +
        `Área: ${area} \n`
    )

    return data
}


function showMenu() {
    return parseFloat(prompt(
        'Bem vindo(a) a Calculadora geométrica \n\n' +
        'Escolha o que deseja calcular: \n' + 
        '1 - Área do triângulo \n' + 
        '2 - Área do retângulo \n' +
        '3 - Área do quadrado \n' +
        '4 - Área do trapézio \n' +
        '5 - Área do círculo \n' +
        '6 - Encerrar \n'
        ))
}

function execute() {
    let option = ''

    do {
        option = showMenu()
        let result

        switch(option) {
            case 1:
                result = triangleArea()
                break
            case 2:
                result = rectangleArea()
                break
            case 3:
                result = squareArea()
                break
            case 4:
                result = trapezeArea()
                break
            case 5:
                result = circleArea()
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
}

execute()