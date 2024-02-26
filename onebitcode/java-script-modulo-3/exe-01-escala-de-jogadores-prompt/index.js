/*
** é possível fazer isso de duas formas, com prompts ou inputs
    - estou fazendo com inputs
    - fazer com prompts...

** irei fazer das duas formas

Criar um prompt que pergunte:
    - posição do jogador escalado para o time
    - nome do jogador
    - número da camisa do jogador
    - se o jogador será ou não escalado para o time
Criar uma ul na página que lista todos os jogadores escalados

Criar inputs onde é possível inserir:
    - posição do jogador escalado para o time
    - nome do jogador
    - número da camisa do jogador
    - se o jogador será ou não escalado para o time

**Limpar inputs
Criar uma ul na página que lista todos os jogadores escalados

*/

function climbPlayer() {
    
    const sectionList = document.querySelector('#sectionList')
    const playerList  = document.createElement('ul')
    const h3          = document.createElement('h3')
    
    const playerName  = prompt('Nome do jogador:')
    const nameLi      = document.createElement('li')
    
    const playerPosition = prompt('Posição do jogador:')
    const positionLi  = document.createElement('li')
    
    const playerNumber   = prompt('Número da camisa do jogador:')
    const numberLi  = document.createElement('li')
    
    const confirmation = confirm(
        `Deseja adicionar o jogador ${playerName} com os dados: \n\n` +
        `Nome: ${playerName}\n` +
        `Posição: ${playerPosition}\n` +
        `N° camisa: ${playerNumber}\n`
        )
        
    if (confirmation) {
            
        nameLi.append(`Nome: ${playerName}`)
        nameLi.id = `${playerName.toLowerCase()}-name`
        
        positionLi.append(`Posição: ${playerPosition}`)
        positionLi.id = `${playerName.toLowerCase()}-position`
        
        numberLi.append(`N° da camisa: ${playerNumber.toLowerCase()}`)
        numberLi.id = `${playerName.toLowerCase()}-number`

        playerList.append(nameLi, positionLi, numberLi)
        playerList.id = `player-list-${playerName.toLowerCase()}`

        h3.innerText = `Dados do jogador ${playerName}`
        sectionList.append(h3, playerList)

        console.log(playerList)
    }
    else {
        alert('Não foi possível adicionar o jogador!')
    }

}

function removePlayer() {
    const sectionList = document.querySelector('#sectionList')
    const title       = document.querySelectorAll('h3')
    const playersList = document.querySelectorAll('ul')

    if (title.length === 0) {
        alert('Não há jogadores a serem removidos da lista!')
    }
    else {
        sectionList.removeChild(title[title.length - 1])
        sectionList.removeChild(playersList[playersList.length - 1])
    }

}