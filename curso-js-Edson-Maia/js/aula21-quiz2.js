// Selecionando elementos no DOM
// titulo, instruções, aviso, progresso
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')

// PLACAR
let pontos = 0 
let placar = 0

// ÁUDIO
let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTAS
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// Article com a CLASS questoes
let articleQuestoes = document.querySelector('.questoes')
// Lista ordenada com as alternativas
let alternativas = document.querySelector('#alternativas')

// Montando as questões
let q0 = {
    numQuestao: 0,
    perg: 'Pergunta',
    altA: 'Alternativa A',
    altB: 'Alternativa B',
    altC: 'Alternativa C',
    altD: 'Alternativa D',
    correta: '0'
}

let q1 = {
    numQuestao: 1,
    perg: 'Em que ano foi lançado o 1º filme da Marvel ?',
    altA: '2007',
    altB: '2005',
    altC: '2008',
    altD: '2006',
    correta: '2008'
}

let q2 = {
    numQuestao: 2,
    perg: 'Qual é o nome do martelo de Thor?',
    altA: 'Futãs',
    altB: 'Mjölnir',
    altC: 'Coãs',
    altD: 'Mjolin',
    correta: 'Mjölnir'
}

let q3 = {
    numQuestao: 3,
    perg: 'Do que é feito o escudo do Capitão América?',
    altA: 'Carbonádio',
    altB: 'Vibranium',
    altC: 'Adamantium',
    altD: 'Promécio',
    correta: 'Vibranium'
}

let q4 = {
    numQuestao: 4,
    perg: 'Antes de se tornar Visão, qual é o nome da IA do Homem de Ferro ?',
    altA: 'Alfred',
    altB: 'Jarvis',
    altC: 'Marvin',
    altD: 'Homer',
    correta: 'Jarvis'
}
let q5 = {
    numQuestao: 5,
    perg: 'Qual é o nome da cidade submersa do Namor?',
    altA: 'Lotakan',
    altB: 'Atlantis',
    altC: 'Talokan',
    altD: 'Atlantida',
    correta: 'Talokan'
}

let q6 = {
    numQuestao: 6,
    perg: 'Kryptonita é a fraqueza de qual super-herói?',
    altA: 'Lanterna Verde',
    altB: 'Hulk',
    altC: 'Superman',
    altD: 'Visão',
    correta: 'Superman'
}

let q7 = {
    numQuestao: 7,
    perg: 'Qual a antiga profissão da Arlequina antes de conhecer o Coringa?',
    altA: 'Psicóloga',
    altB: 'Psiquiatra',
    altC: 'Veterinária',
    altD: 'Professora',
    correta: 'Psiquiatra'
}

let q8 = {
    numQuestao: 8,
    perg: 'Qual o verdadeiro nome do Pinguim?',
    altA: 'Harvey Dent',
    altB: 'Oswald Cobblepot',
    altC: 'Bruce Wayne',
    altD: 'Clark Kent',
    correta: 'Oswald Cobblepot'
}

let q9 = {
    numQuestao: 9,
    perg: 'Qual o verdadeiro nome da Hera Venosa?',
    altA: 'Barbara Gordon',
    altB: 'Pamela Isley',
    altC: 'Harley Quinzel',
    altD: 'Diana Prince',
    correta: 'Pamela Isley'
}

let q10 = {
    numQuestao: 10,
    perg: 'Duas caras antes de se tornar um vilão era ...',
    altA: 'Vice prefeito',
    altB: 'Detetive',
    altC: 'Promotor público de Gotham',
    altD: 'Advogado',
    correta: 'Promotor público de Gotham'
}

// CONSTANTE com ARRAY dos OBJETOS com TODAS as QUESTÕES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalQuestoes = (questoes.length) - 1
console.log(`Total de questões: ${totalQuestoes}`)
total.textContent = totalQuestoes

// Funções uteis
function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}


// Verificando se acertou
function verificarSeAcertou(nQuestao, resposta) {
    let numeroQuestao = nQuestao.value
    console.log(`Questão ${numeroQuestao}`)

    let respostaEscolhida = resposta.textContent
    console.log(`Resposta escolhida ${respostaEscolhida}`)

    let certa = questoes[numeroQuestao].correta
    console.log(`Correta: ${certa}`)

    // Verificando de acertou a resposta
    if (respostaEscolhida == certa) {
        console.log('ACERTOU!')
        piscarNoAcerto()
        somAcerto.play()
        pontos+=10
        if (nQuestao.value == 1 && pontos == 20) {pontos = 10}
    }
    else {
        console.log('ERROU!')
        piscarNoErro()
        somErro.placar
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150)

    // Atualizando o placar
    placar = pontos
    instrucoes.textContent = `Pontos ${placar}`

    // Bloqueando escolha de opções
    bloquearAlternativas()
    setTimeout(function() {
        proxima = numeroQuestao + 1

        if(proxima > totalQuestoes) {
            console.log('FIM DO JOGO!')
            fimDoJogo()
        }
        else {
            proxQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

// Montando a 1ª questão completa para iniciar o quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.perg
a.textContent = q1.altA
b.textContent = q1.altB
c.textContent = q1.altC
d.textContent = q1.altD

// Configurando VALUE inicial da 1ª questão completa
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// Para montar as proximas questões
function proxQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].perg
    a.textContent = questoes[nQuestao].altA
    b.textContent = questoes[nQuestao].altB
    c.textContent = questoes[nQuestao].altC
    d.textContent = questoes[nQuestao].altD

    // Setando atributos
    a.setAttribute('value', `${nQuestao}+A`)
    b.setAttribute('value', `${nQuestao}+B`)
    c.setAttribute('value', `${nQuestao}+C`)
    d.setAttribute('value', `${nQuestao}+D`)
    progresso.value = parseInt(progresso.value) + 1
    console.log(progresso.value)
}

// Verificar DUPLO CLICK nas alternativas
alternativas.addEventListener('dbclick', () => {
    console.log('Duble click here!')
    pontos -= 10 // Tirar pontos em caso de duplo clique
    if (numQuestao.value == 10 && pontos == 110) {pontos = 100}
})

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proxQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}