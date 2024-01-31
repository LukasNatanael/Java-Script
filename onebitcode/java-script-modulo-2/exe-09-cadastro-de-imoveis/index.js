let properties = []
let option = ''

do {
    let propertiesList = ''
    option = parseFloat(prompt(
        'Bem vindo(a) ao Cadastro de Imóveis' +
        '\nTotal de imovéis: ' + properties.length +
        '\n\nEscolha uma opção:' +
        '\n1 - Salvar imóvel' +
        '\n2 - Mostrar imóveis' +
        '\n3 - Encerrar'
    ))

    switch(option) {
        
        case 1:
            const data = {}

            data.ownerName = prompt('Nome do proprietário do imóvel: ')
            data.roomsNumber = prompt('Quantos quartos o imóvel possui: ')
            data.bathsNumber = prompt('Quantidade de banheiros do imóvel: ')
            data.garage = prompt('Imóvel possui garagem [S/N]: ')[0].toUpperCase()

            const confirmation = confirm(
                'Salvar esse imóvel ?\n' +
                '\nProprietário: ' + data.ownerName +
                '\nQuantidade de quartos: ' + data.roomsNumber +
                '\nQuantidade de banheiros: ' + data.roomsNumber +
                '\nPossui garagem: ' + data.garage
            )

            if (confirmation == true) {
                properties.push(data)
                alert('Imóvel adicionado a lista de propriedades')
            }
            else {
                alert('Imóvel descartado. Voltando ao menu.')
            }
            break

        case 2:
            propertiesList = ''
            properties.forEach( (element, pos) => {
                alert(`\n${pos+1}º IMÓVEL \nProprietário: ${element.ownerName}\nQuantidade de quartos: ${element.roomsNumber}\nQuantidade de banheiros: ${element.bathsNumber}\nPossui garagem: ${element.garage}\n`)
                }
            )
            // alert(`Lista de imóveis: \n${propertiesList}`)
            break
        
        case 3:
            alert('Encerrando programa...')
            break
            
        default:
            alert('Opção inválida!')
        
        }
        
} while (option != 3)

alert('Programa finalizado')