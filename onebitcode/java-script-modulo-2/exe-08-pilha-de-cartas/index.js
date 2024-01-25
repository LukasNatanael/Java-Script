let cards = []
let option = ''

alert(`Atualmente possuem: ${cards.length} cartas no baralho`)
do {
    option = parseFloat(prompt('Menu interativo do consultório: \n1 - Adicionar carta \n2 - Remover carta \n3 - Sair'))

    switch(option) {
        case 1:
            alert('Você escolheu a opção número 1')
            break
        case 2:
            alert('Você escolheu a opção número 2')
            break
        case 3:
            alert('Finalizando programa...')
            break
    }
        
} while(option != 3)

alert('Programa finalizado!')