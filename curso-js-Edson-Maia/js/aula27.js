// Carrossel (a lista de vídeos na horizontal)
let uls_e_lis = document.querySelectorAll('ul li')
// console.log(uls_e_lis)
let qtdItens = uls_e_lis.length
console.log(`Quant. lis = ${qtdItens}`)

// Número de vídeos por carrossel
let num_de_itens = 6

// Pegando as listas de videos
let lista1 = document.querySelectorAll('#lista1 li')
let lista2 = document.querySelectorAll('#lista2 li')
let lista3 = document.querySelectorAll('#lista3 li')
let lista4 = document.querySelectorAll('#lista4 li')
let lista5 = document.querySelectorAll('#lista5 li')

let num_de_videos = document.querySelectorAll('.numDeVideos')

console.log(`Num. vídeos: ${num_de_videos.length}`)

// num_de_videos.forEach((video, pos) => {
//     num_de_videos[pos].textContent = 'EU'
//     console.log(num_de_videos[0])
//     num_de_videos[pos].textContent = video[pos]
// })

num_de_videos[0].textContent = lista1.length
num_de_videos[1].textContent = lista2.length
num_de_videos[2].textContent = lista3.length
num_de_videos[3].textContent = lista4.length
num_de_videos[4].textContent = lista5.length

// Criando movimentação do carrossel
function show(indice, indiceLista) {
    let n = indice
    num_de_itens = num_de_itens + indice
    // console.log(`${n} ${num_de_itens}`)

    let listaUl = document.querySelector(`#lista${indiceLista
    }`)
    // console.log(listaUl)    

    let mover = 100
    let posicao_x_direita = mover
    let posicao_x_esquerda = -mover

    if (indice == +1) {
        console.log('Mover para direita')
        listaUl.scrollTo(posicao_x_direita, 0)
    }
    if (indice == -1) {
        console.log('Mover para esquerda')
        listaUl.scrollTo(posicao_x_esquerda, 0)
    }
}
