// Pegando elementos no DOM

let citacao00 = document.querySelector('#citacao00')
let citacaoData = citacao00.querySelector('h2')
let citacaoTexto = citacao00.querySelector('blockquote')
let citacaoAutoria = citacao00.querySelector('span')

let aviso = document.querySelector('#aviso')
let baixar = document.querySelector('#divBaixar')

// Abri modal (mensagem caso o usuário não preencha os dados)
function modal() {
    location.href = '#abrirModal'
}

// Baixar mensagem
function download() {
    html2canvas(citacao00).then(canvas => {
        document.body.appendChild(canvas)
    })

    let aviso2 = document.querySelector('#aviso2')
    aviso2.textContent = 'Clique com o botão direito e escolha SALVAR IMAGEM COMO..'
}

// Limpar INPUTS
const btnLimpar = document.querySelector('#btnLimpar')
btnLimpar.addEventListener('click', () => {
    document.location.reload()
    window.scroll(0, 0)
})


// Criar mensagem
function criarMensagem(data, citacao, autoria) {
    citacaoData.textContent = data
    citacaoTexto.textContent = citacao
    citacaoAutoria.textContent = autoria

    download()
}

// Criando a citação
function criarCitacao() {
    let dataInput = document.querySelector('#data').value
    let citacao = document.querySelector('#citacao').value
    let autoria = document.querySelector('#autoria').value

    let data = new Date(dataInput)
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    // Verificação simples
    if(dataInput == '' || citacao == '' || autoria == '') {
        modal()
    }
    else {
        criarMensagem(dataFormatada, citacao, autoria)
        window.scroll(0,670)
    }
}