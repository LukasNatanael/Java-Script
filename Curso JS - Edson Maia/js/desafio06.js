// Container que acomoda as cartas
let sectionConteudos = document.querySelector('.conteudos')

// Enedereço dos DADOS
let url = '../js/marioData.json'

function pegarDados(i) {
    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        if(data.err) {
            console.log('Não foi possível acessar o JSON')
            return
        }
        atribuirDados(data, i)
    })
}

// pegarDados()

function atribuirDados(data, i) {
    let cardImage = document.querySelectorAll('.card-image')
    let nome      = document.querySelectorAll('.nome')
    let altura    = document.querySelectorAll('.altura')
    let status    = document.querySelectorAll('.status')

    cardImage[i].style.backgroundImage = `url(${data.dados[i].img})`
    nome[i].setAttribute('value', `${data.dados[i].nome}`)
    altura[i].setAttribute('value', `${data.dados[i].altura}`)
    status[i].setAttribute('value', `${data.dados[i].status}`)

}

function drawCard(id) {
    // Card
    let carta = document.createElement('article')
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // Imagem do card
    let image = document.createElement('div')
    carta.appendChild(image)
    image.setAttribute('class', 'card-image')
    image.style.backgroundImage = '../images/personagens/mario.png'

    // Nome do personagem
    let personagemName = document.createElement('input')
    personagemName.setAttribute('type', 'text')
    personagemName.setAttribute('class', 'nome')
    personagemName.setAttribute('value', 'Nome')
    carta.append(personagemName)
    personagemName.disabled = true
    
    // Altura do personagem
    let personagemAltura = document.createElement('input')
    personagemAltura.setAttribute('type', 'text')
    personagemAltura.setAttribute('class', 'altura')
    personagemAltura.setAttribute('value', 'Altura')
    carta.appendChild(personagemAltura)
    personagemAltura.disabled = true
    
    // Status do personagem
    let personagemStatus = document.createElement('input')
    personagemStatus.setAttribute('type', 'text')
    personagemStatus.setAttribute('class', 'status')
    personagemStatus.setAttribute('value', 'Status')
    carta.appendChild(personagemStatus)
    personagemStatus.disabled = true
    


    pegarDados(id)
}

pegarDados(0)
drawCard(1)
drawCard(2)
drawCard(3)
drawCard(4)
drawCard(5)