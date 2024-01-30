let properties = []
let option = ''


do {
    option = parseFloat(prompt(
        'Imovéis cadastrados: ' + properties.length +
        '\nEscolha uma opção:' +
        '\n1 - Salvar imóvel' +
        '\n2 - Mostrar imóveis' +
        '\n3 - Encerrar'
    ))

    switch(option) {
        case 1:
            const data = {}

            data.ownerName = prompt('Nome do proprietário: ')
            data.roomsNumber = prompt('Quantidade de quartos: ')
            data.bathsNumber = prompt('Quantidade de banheiros: ')
            data.garage = prompt('Possui garagem [S/N]: ')[0].toLowerCase()

            const confirm = prompt(
                'Proprietário: ' + data.ownerName +
                '\nQuantidade de quartos: ' + data.roomsNumber +
                '\nQuantidade de banheiros: ' + data.roomsNumber +
                '\nPossui garagem: ' + data.garage +
                '\nVocê deseja salvar esse imóvel ? [S/N] ')[0].toLowerCase()


            properties.push(data)

            break
        case 2:
            break
        case 3:
            alert('Encerrando programa...')
            break
        }
        
} while (option != 3)

alert('Programa finalizado')