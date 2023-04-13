// Pegando objetos do DOM
let titulo = document.querySelector('#titulo')
let instrucoes = document.querySelector('#instrucoes')
let nivel = document.querySelector('#nivel')
let aviso = document.querySelector('#aviso')

// Área das questões
let questao = document.querySelector('.questao')

// Questões e alternativas
let nQuestao = document.querySelector('#nQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// Pergunta atual e Total de perguntas
let pergAtual = document.querySelector('#numero')
let totPerguntas = document.querySelector('#total')

// Definindo elementos padrões
titulo.textContent = 'Nerd Quiz'
let totalQuestoes = 0
pergAtual.textContent = 1

let pontos = 0
let placar = document.querySelector('.placar')

// Áudios
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// Atribuindo dados
function atribuirDados(data, i) {
  if(i >= data.questoes.lenght) {
    // console.log('Fim das questões!')
    i = 1
  }

  nQuestao.textContent = data.questoes[i].numQuestao
  pergunta.textContent = data.questoes[i].perg
  nivel.textContent = data.questoes[i].nivel
  nivel.classList.add(`${data.questoes[i].nivel}`)

  a.textContent = data.questoes[i].altA
  b.textContent = data.questoes[i].altB
  c.textContent = data.questoes[i].altC
  d.textContent = data.questoes[i].altD

  pergAtual.textContent = data.questoes[i].numQuestao

  let certa = document.querySelector('#correct')
  certa.value = data.questoes[i].correta
  // console.log(resposta)

}


// ENDEREÇO DO ARQUIVO JSON
const url = '../js/data.json'

function pegarDados(i) {
  fetch(url).then(response => {

    return response.json();

  }).then(data => {

    if(data.erro) {
      console.log('Erro ao acessar JSON')
      return
    }

    // Passar quantidade de questões para a variável
    let qtdQuestoes = (data.questoes.length) - 1
    // console.log(`qtdQUestões: ${qtdQuestoes}`)
    // Escrever qtdQuestoes para totPerguntas
    totPerguntas.textContent = parseInt(qtdQuestoes)

    // Passando o valor i no parâmetro
    atribuirDados(data, i)
  })
} // Fim pegarDados

// Começando o QUIZ
let questaoAtual = 1
pegarDados(1)

// Partindo para a questão seguinte
function proxQuestao(numQuestao) {
  let proxima = parseInt(numQuestao)
  pegarDados(proxima)
}

// Atualizando placar
function atualizarPlacar() {
  placar.textContent = pontos
}

// Definindo o fim do jogo
function fimJogo() {
  somAplausos.play()
  let s = 's'
  pontos == 0 ? s = '': s = s
  
  instrucoes.textContent = `Fim do jogo! Você fez um total de ${pontos} ponto${s}`

  instrucoes.classList.add('placar')

  // Ocultar área das questões
  questao.style.display = 'none'
  nivel.style.display = 'none'

  setTimeout(function() {
    pontos = 0 // zerar placar
    instrucoes.classList.remove('placar')

    // Reiniciando jogo
    questao.style.display = 'block'
    nivel.style.display = 'block'
    nivel.classList.remove('Médio')
    nivel.classList.remove('Difícil')
    proxQuestao(1)
    instrucoes.textContent = 'Leia a questão e clique na resposta correta'
  }, 7000)
}


// Verificando se acertou
function verificarSeAcertou(nQuestao, resposta) {

  let numeroDaQuestao = nQuestao.value
  //console.log("Questão " + numeroDaQuestao)

  let respostaEscolhida = resposta.textContent
  //console.log("RespU " + respostaEscolhida)

  // usar o fetch para pegar os dados
  pegarDados(numeroDaQuestao)

  let respostaCorrect = correct.value
  //console.log(respostaCorrect)

  if(respostaEscolhida == respostaCorrect) {
      //console.log("Acertou")
      somAcerto.play()      
      pontos += 10 // pontos = pontos + 10
  } else {
      console.log("Errou!")
      somErro.play()
  }

  quantidadeDeQuestoes = parseInt(total.textContent)
  //console.log("Total " + quantidadeDeQuestoes)

  proxima = parseInt(numero.textContent)+1
  //console.log("Próxima " + proxima)

  setTimeout(function() {
    
    if(proxima > quantidadeDeQuestoes) {
        console.log('Fim do Jogo!')
        fimJogo()
    } else {
        proxQuestao(proxima)
    }
  }, 50)

  // atualizar o placar
  atualizarPlacar()

}