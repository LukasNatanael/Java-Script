do {
    option = parseFloat(prompt('Bem-vindo! \nEscolha uma das opções abaixo: \n1 - Novo jogo \n2 - Carregar \n3 - Configurações \n4 - Ajuda \n5 - Encerrar'))
    
    switch(option) {
        case 1:
            alert(`Você escolheu a opção: \n${option} - Novo jogo`)
            break
        case 2:
            alert(`Você escolheu a opção: \n${option} - Carregar`)
            break
        case 3:
            alert(`Você escolheu a opção: \n${option} - Configurações`)
            break
        case 4:
            alert(`Você escolheu a opção: \n${option} - Ajuda`)
            break
        case 5:
            alert("Encerrando o programa...")
            break
        default:
            alert('Opção inválida! Escolha uma das cinco opções')
    }
} while(option != 5)

alert('Programa finalizado!')