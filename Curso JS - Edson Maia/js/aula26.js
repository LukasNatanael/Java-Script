// Pegando elementos no DOM

let citação00          = document.querySelector('.citacao00')
let dataCitacao        = citacao00.querySelector('h2')
let textoCitacao       = citacao00.querySelector('blockquote')
let autoriaCitacao     = citacao00.querySelector('span')

let aviso = document.querySelector('#aviso')
let divBaixar = document.querySelector('#divBaixar')

// Criando MODAL para exibir mensagem de erro
function abrirModal() {
    location.href = '#abrirModal'
}

// Função para baixar a imagem
function download() {
    html2canvas(citacao00).then(canvas => {
        document.body.appendChild(canvas)
    })

    let aviso2 = document.querySelector('#aviso2')
    aviso2.textContent = "Clique com o botão direito e escolha Salvar imagem como..."
}

// Função para criar a mensagem
function criarMensagem(data, citacao, autoria) {
    dataCitacao.textContent = data
    textoCitacao.textContent = citacao
    autoriaCitacao.textContent = autoria

    download()
}

// Botão para limpar a tela
document.querySelector('#btnLimpar').addEventListener('click', () => {
    document.location.reload()
    window.scroll(0,0)
})

// Criando a citação
function criarCitacao() {
    let dataInput = document.querySelector('#data').value
    let citacao   = document.querySelector('#citacao').value
    let autoria   = document.querySelector('#autoria').value

    let data = new Date(dataInput)
    let dataFormatada = data.toLocaleDateString('pr-BR', {timeZone: 'UTC'})

    // Validação simples
    if (data == '' || citacao == '' || autoria == '') {
        abrirModal()
    }
    else {
        criarMensagem(dataFormatada, citacao, autoria)
        window.scroll(0, 670)
    }
}