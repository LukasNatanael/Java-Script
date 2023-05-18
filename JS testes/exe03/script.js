let main = document.querySelector('main')

function createVideo(idContainer=0) {
    let container = document.querySelectorAll('.container')
    let video = document.createElement('section')
    video.setAttribute('class', 'video')
    container[idContainer].appendChild(video)
    
    let titulo = document.createElement('p')
    titulo.setAttribute('class', 'titulo')
    titulo.textContent = 'Título'
    video.appendChild(titulo)
    
    let thumbVideo = document.createElement('div')
    thumbVideo.setAttribute('class', 'thumb-video')
    // thumbVideo.textContent = 'IMG'
    video.appendChild(thumbVideo)
    
    let descricao = document.createElement('p')
    descricao.setAttribute('class', 'descricao')
    descricao.textContent = 'Descrição'
    video.appendChild(descricao)
}

function createCarousel() {
    let container = document.querySelectorAll('.container')

    let boxCarousel = document.createElement('fieldset')
    boxCarousel.setAttribute('class', 'boxCarousel')
    main.appendChild(boxCarousel)

    let categoria = document.createElement('h1')
    categoria.setAttribute('class', 'categoria')
    categoria.textContent = 'Categoria'
    boxCarousel.appendChild(categoria)

    let carousel = document.createElement('article')
    carousel.setAttribute('class', 'container')
    boxCarousel.appendChild(carousel)

    createVideo(container.length)
}


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


createCarousel()

createVideo()
createVideo()
createVideo()


createVideo(1)
createVideo(1)
createVideo(1)


let qtdVideos = document.querySelectorAll('.video')
console.log(qtdVideos)