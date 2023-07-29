// Pegando container
let container = document.querySelector('.container')

url = 'data.json'

function pegarDados(i) {
  fetch(url).then(response => response.json()).
  then(dados => {
    if(dados.erro) {
      console.log("Erro ao acessar o JSON")
      return
    }
    // console.log(dados)
    atribuirDados(dados, i)
  })
}

function atribuirDados(dados, i) {
  // Pegando elementos
  let imagem = document.querySelectorAll('.imagem')
  let nome   = document.querySelectorAll('.nome')
  let tipo   = document.querySelectorAll('.tipo')
  let atk    = document.querySelectorAll('.atk')
  let def    = document.querySelectorAll('.def')
  
  console.log(dados.personagens[i])

  // Atribuindo dados
  imagem[i].style.backgroundImage = `url(${dados.personagens[i].img})`
  nome[i].setAttribute('value', dados.personagens[i].nome)
  tipo[i].setAttribute('value', dados.personagens[i].tipo)
  atk[i].setAttribute('value', dados.personagens[i].ataque)
  def[i].setAttribute('value', dados.personagens[i].defesa)
}

function drawCard(id) {
  let card = document.createElement('section')
  card.setAttribute('class', 'cards')
  container.append(card)

  // CardImage
  let cardImage = document.createElement('div')
  cardImage.setAttribute('class', 'imagem')
  card.appendChild(cardImage)

  // Input name
  let nome = document.createElement('input')
  nome.setAttribute('type', 'text')
  nome.setAttribute('class', 'nome')
  nome.disabled = true
  card.appendChild(nome)
  
  // Input tipo
  let tipo = document.createElement('input')
  tipo.setAttribute('type', 'text')
  tipo.setAttribute('class', 'tipo')
  tipo.disabled = true
  card.appendChild(tipo)
  
  // input ataque
  let ataque = document.createElement('input')
  ataque.setAttribute('type', 'text')
  ataque.setAttribute('class','atk')
  ataque.disabled = true
  card.appendChild(ataque)

  // input defesa
  let defesa = document.createElement('input')
  defesa.setAttribute('type', 'text')
  defesa.setAttribute('class', 'def')
  defesa.disabled = true
  card.appendChild(defesa)

  pegarDados(id)
}



pegarDados(0)
drawCard(1)
drawCard(2)
drawCard(3)
drawCard(4)
drawCard(5)
drawCard(6)