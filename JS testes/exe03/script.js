let main = document.querySelector('main')

function createVideo(idContainer=0, t, img, descrição) {
    let container = document.querySelectorAll('.container')
    let video = document.createElement('section')
    video.setAttribute('class', 'video')
    container[idContainer].appendChild(video)

    container[idContainer].addEventListener("wheel", (evt) => {
        evt.preventDefault();
        // container[idContainer].scrollLeft += evt.deltaY;
        container[idContainer].scrollLeft += evt.deltaY;
    })
    
    let titulo = document.createElement('p')
    titulo.setAttribute('class', 'titulo')
    titulo.textContent = t
    video.appendChild(titulo)
    
    let thumbVideo = document.createElement('div')
    thumbVideo.setAttribute('class', 'thumb-video')
    // thumbVideo.textContent = 'IMG'
    // thumbVideo.style.backgroundImage = 'url(imgs/batman.webp)'
    thumbVideo.style.backgroundImage = `url(${img})`
    video.appendChild(thumbVideo)
    
    let descricao = document.createElement('p')
    descricao.setAttribute('class', 'descricao')
    descricao.textContent = descrição
    video.appendChild(descricao)
}

function createCarousel(idCategoria, titulo, img, descrição) {
    let container = document.querySelectorAll('.container')

    let boxCarousel = document.createElement('fieldset')
    boxCarousel.setAttribute('class', 'boxCarousel')
    main.appendChild(boxCarousel)

    let categoria = document.createElement('h1')
    categoria.setAttribute('class', 'categoria')
    categoria.textContent = idCategoria
    // boxCarousel.appendChild(categoria)

    let carousel = document.createElement('article')
    carousel.setAttribute('class', 'container')
    boxCarousel.appendChild(carousel)

    createVideo(boxCarousel.length, titulo, img, descrição)
}



// createCarousel('animação')
// createVideo()
// createVideo()
// createVideo()
// createVideo()
// createVideo()
// createVideo()

// createCarousel('ficção')
// createVideo(1)
// createVideo(1)
// createVideo(1)
// createVideo(1)
// createVideo(1)
// createVideo(1)


let qtdVideos = document.querySelectorAll('.video')
console.log(qtdVideos)

// ---------------------------------------------------

let url = 'data.json'
function pegarDados(categoria) {
    fetch(url)
    .then(response => response.json())
    .then(dados => {
        console.log(`Qtd. ${categoria}: ` + dados[`${categoria}`].length)
        console.log(dados[categoria].length)
        // createCarousel(categoria)
        console.log(`Categoria: ${categoria}`)
        console.log(dados[categoria])
        dados[`${categoria}`].forEach((id, pos) => {
            createCarousel(categoria, id.titulo, id.img, id.descrição)
            // console.log(id.titulo)
            // console.log(id.img)
            // console.log(id.descrição)
        });

    })
    .catch(error => {
        console.error(error);
    });

}


pegarDados('animação')
pegarDados('ficção')
