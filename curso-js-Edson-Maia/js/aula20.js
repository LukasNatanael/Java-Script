// Selecionando elementos do DOM
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 // Pontos para o placar
let placar = 0 // Placar

// Pergunta
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

// Alternativas
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// Article com class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

// Formato base para questões

const q0 = {
    numQuestao: 0,
    perg: 'Pergunta',
    altA: 'Alternativa A',
    altB: 'Alternativa B',
    altC: 'Alternativa C',
    correta: '0'
}

const q1 = {
    numQuestao: 1,
    perg: 'DC é responsavel pelo...',
    altA: 'Homem-Aranha',
    altB: 'Batman',
    altC: 'Homem de Ferro',
    correta: 'Batman'
}

const q2 = {
    numQuestao: 2,
    perg: 'Stan Lee é o criador de...',
    altA: 'Flash',
    altB: 'Robin',
    altC: 'Homem-Aranha',
    correta: 'Homem-Aranha'
}

const q3 = {
    numQuestao: 3,
    perg: 'Tony Stark na verdade é...',
    altA: 'O Batman',
    altB: 'O Homem de Ferro',
    altC: 'O Mercúrio',
    correta: 'O Homem de Ferro'
}

const q4 = {
    numQuestao: 4,
    perg: 'Henry Cavil interpreta....',
    altA: 'Thor',
    altB: 'Hulk',
    altC: 'Superman',
    correta: 'Superman'
}

const q5 = {
    numQuestao: 5,
    perg: 'O flash é interpretado por...',
    altA: 'Dwayne Johnson',
    altB: 'Bruce Wayne',
    altC: 'Grant Gustin',
    correta: 'Grant Gustin'
}

// Constante com um array de objetos das questões
const questoes = [q0, q1, q2, q3, q4, q5] // Falta q0

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.innerHTML = q1['numQuestao']

let totalDeQuestoes = (questoes.length) - 1 // Tira 1 do valor total
console.log(`Total de questões: ${totalDeQuestoes}`)
total.textContent = totalDeQuestoes

// Montar a 1ª questão COMPLETA, para iniciar o quiz
numQuestao.textContent = q1['numQuestao']
pergunta.textContent = q1['perg']
a.textContent = q1.altA
b.textContent = q1.altB
c.textContent = q1.altC

// Configurando o VALUE inicial da questão completa
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// Para montar as proximas questões
function proxQuestao(nQuestao) {
    numero.innerHTML = nQuestao
    numQuestao.innerHTML = questoes[nQuestao].numQuestao
    pergunta.innerHTML = questoes[nQuestao].perg
    a.innerHTML = questoes[nQuestao].altA
    b.innerHTML = questoes[nQuestao].altB
    c.innerHTML = questoes[nQuestao].altC
    
    // Definindo atributo value
    a.setAttribute('value', `${nQuestao}A`)
    b.setAttribute('value', `${nQuestao}B`)
    c.setAttribute('value', `${nQuestao}C`)
}

// Função para bloquear as alternativas
function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

// Função para desbloquear as alternativas
function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

// Função para finalizar o jogo
function fimDoJogo() {
    instrucoes.innerHTML = 'Fim de Jogo!'
    numQuestao.innerHTML = ''

    let pont = ''
    pontos == 0 ? 'ponto': pont = 'pontos'

    pergunta.textContent = `Você conseguiu ${pontos} ${pont}`
    aviso.textContent = `Você conseguiu ${pontos} ${pont}`

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // Ocultar article da questão
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // Zerar pontos
        location.reload()
    }, 2000)
}






// Verificando se acertou
function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value
    console.log(`Questão ${numeroDaQuestao}`)

    let respEscolhida = resposta.textContent
    // console.log(`Resposta do usuário: ${respEscolhida}`)

    let certa = questoes[numeroDaQuestao].correta
    // console.log(`Resposta correta: ${certa}`)

    if (respEscolhida == certa) {
        console.log('Acertou!')
        pontos += 10
    } else {
        console.log('Errou!')
    }
    // Atualizando o placar
    placar = pontos
    instrucoes.textContent = `Pontos ${placar}`
    
    // Bloquear escolha de opções
    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proxQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

