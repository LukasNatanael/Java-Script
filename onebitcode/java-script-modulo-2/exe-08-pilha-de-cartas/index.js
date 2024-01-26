let cards = []
let option = ''

do {
    option = parseFloat(prompt(`Cartas no baralho: ${cards.length}\n \nMenu interativo: \n1 - Adicionar carta \n2 - Remover carta \n3 - Sair`))

    switch(option) {
        case 1:
            console.clear()
            cards.unshift(prompt('Qual carta você deseja adicionar ao baralho: '))
            break
        case 2:
            if (cards.length > 0) {
                alert(`A carta retirada do baralho foi: ${cards.shift()}`)
            }
            else {
                alert('Não possuem mais cartas no baralho!')
            }
            break
        case 3:
            alert('Finalizando programa...')
            break
    }
        
} while(option != 3)

alert('Programa finalizado!')
alert(`Atualmente possuem: ${cards.length} cartas no baralho`)