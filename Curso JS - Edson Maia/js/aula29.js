// Pegando elementos no DOM
let aviso = document.querySelector('#aviso')

// CARROSSEL
// Selecionando todos os itens de todas as listas
let uls_lis = document.querySelectorAll('ul li')
console.log(uls_lis)

// Selecionando listas de categorias
// Ou seja ${numDeListas} tipos de categorias diferentes
let numDeListas = document.querySelectorAll('.categoria').length
console.log(`Núm. de categorias: ${numDeListas}`)

// Serve para fazer o controle do carrossel
let numDeItens = 5 // Número de capas visíveis no carrossel


function show(indice, indiceLista) {
    // Seleciona a lista com base no nome #lista + número da lista (categoria)
    let listaUl = document.querySelector(`#lista${indiceLista}`)
    console.log(listaUl)

    let mover = 100
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover

    if (indice == +1) listaUl.scrollBy(posicaoXDireita, 0)
    if (indice == -1) listaUl.scrollBy(posicaoXEsquerda, 0)
}

// Janela MODAL com VIDEO
// Exibe vídeo usando iframe do youtube com base no código do vídeo
let iframeVideo = document.querySelector('#iframeVideo')
// console.log(iframeVideo)

// Função para abrir modal
function abrirModal(videoId) {
    location.href = '#abrirModal'
    iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
}

// Endereço do arquivo JSON
const url = '../js/videos.json'

function pegarDados() {
    fetch(url)
    .then(response => response.json())
    .then( dados => {
        console.log(dados)
        // Quantidade de vídeos
        console.log(`Qtd. de vídeos JSON: ${dados.videos.length}`)
        console.log(`Qtd. de categorias JSON: ${dados.categorias.length}`)
        // console.log(dados.categorias)
        // console.log(dados.videos)

        for(let x = 0; x <= 6; x++) { console.log(dados.categorias[x]) }
    })
} // Fim pegarDados

// pegarDados()

// LISTAS com lis e images das capas
let ul1 = document.querySelector('#lista1')
let ul2 = document.querySelector('#lista2')
let ul3 = document.querySelector('#lista3')
let ul4 = document.querySelector('#lista4')
let ul5 = document.querySelector('#lista5')
let ul6 = document.querySelector('#lista6')


// usamos as funcoes createElement e appendChild
// para criar li (elemento html que vai acomodar cada video)
// criamos tambem img. Depois colocamos eles dentro do article
function criarLiImg(categoriaId, idVideo, nLista) {
    let lista = nLista
    // LI
    let item = document.createElement("li")
    //console.log(item)
    lista.appendChild(item)

    let imagem = document.createElement("img")
    imagem.setAttribute('src', `https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`)
    imagem.setAttribute('class', 'capa-thumb')
    imagem.setAttribute('onClick', `abrirModal("${idVideo}")`)
    item.appendChild(imagem)

}

let titulosCategorias = document.querySelectorAll('.tituloCategoria')
// console.log(titulosCategorias)

function pegarDadosPorCategoria(categoriaId, lista) {
    fetch(url)
    .then( response => response.json())
    .then(dados => {
        // console.log(dados)

        // Passe a categoria no parâmetro
        // atribuirDadosPorCategoria(dados, categoria)
        let qtdDeVideos = dados.videos.length
        console.log(qtdDeVideos)

        let indiceAtual = categoriaId - 1
        titulosCategorias[indiceAtual].textContent = dados.categorias[indiceAtual].titulo
        for(let y = 0; y < qtdDeVideos ; y++) {
            if(dados.videos[y].categoriaId == categoriaId) {
                criarLiImg(categoriaId, dados.videos[y].videoId , lista)}
        }
    })
}

pegarDadosPorCategoria(1, ul1)
pegarDadosPorCategoria(2, ul2)
pegarDadosPorCategoria(3, ul3)
pegarDadosPorCategoria(4, ul4)
pegarDadosPorCategoria(5, ul5)
pegarDadosPorCategoria(6, ul6)

function dadosPorCategoria(categoria) {
    console.log(categoria)
}

// Usamos as funções createElement e appendChild
// Para criarmos li (elemento HTML que vai acomodar cada vídeo)
// Criamos também img. Depois colocamnos eles dentro deo article
function criarLiImg(categoriaId, idVideo, nLista) {
    let lista = nLista
    // Li
    let item = document.createElement('li')
    console.log(item)
    lista.appendChild(item)

    let imagem = document.createElement('img')
    imagem.setAttribute('src', `https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`)
    imagem.setAttribute('class', 'capa-thumb')
    imagem.setAttribute('onClick', `abrirModal('${idVideo}')`)
    item.appendChild(imagem)
}