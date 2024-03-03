function addPlayer() {
    const inputName = document.querySelector('#name')
    const inputPosition = document.querySelector('#position')
    const inputNumber = document.querySelector('#number')

    if (inputName.value == 0 || inputPosition.value == 0 || inputNumber.value == 0) {
        alert('Preencha os dados corretamente!')
    }
    else {
        
        const confirmation = confirm(
            `Deseja adicionar o jogador ${inputName.value} com os dados: \n`+
            `\nNome: ${inputName.value}`+
            `\nPosição: ${inputPosition.value}`+
            `\nN° camisa: ${inputNumber.value}`
        )
        
        if (confirmation) {
            alert(`Jogador ${inputName.value} agora faz parte do time!`)

            const playerData = {
                'name': inputName.value,
                'position': inputPosition.value,
                'number': inputNumber.value,
            }

            // Criando UL de jogadores
            const sectionListBottom = document.querySelector('#sectionListBottom')
            
            const sectionTitle = document.createElement('h3')
            sectionTitle.innerText = `Dados do jogador ${playerData.name}`

            const ul = document.createElement('ul')
            ul.setAttribute('id', `player-${playerData.number}`)
            
            const nameLi = document.createElement('li')
            nameLi.innerText = `Nome: ${playerData.name}`
            
            const positionLi = document.createElement('li')
            positionLi.innerText = `Posição: ${playerData.name}`
            
            const numberLi = document.createElement('li')
            numberLi.innerText = `N° camisa: ${playerData.number}`
            
            ul.append(sectionTitle, nameLi, positionLi, numberLi)
            sectionListBottom.appendChild(ul)

        }
        else {
            alert(`Infelizmente o jogador ${inputName.value} não foi escalado para o time!`)
        }


        inputName.value = ''
        inputPosition.value = ''
        inputNumber.value = ''
    }

}

function removePlayer() {
    const number = document.querySelector('#removeNumberInput').value
    const sectionListBottom = document.querySelector('#sectionListBottom')
    const playerToRemove = document.getElementById(`player-${number}`)

    
    if (number == 0) {
        alert('Informe a camisa do jogador a ser removido!')
    }
    else {
        
        const confirmation = confirm(
            `Deseja remover o jogador camisa ${number} do time ?\n`
        )

        if (confirmation) {
            alert(`Infelizmente o camisa ${number} não faz mais parte do time!`)
            sectionListBottom.removeChild(playerToRemove)
        }
        else {
            alert(`Camisa ${number} permanecerá no time!`)
        }

        number = document.querySelector('#removeNumberInput').value = ''
    }

}