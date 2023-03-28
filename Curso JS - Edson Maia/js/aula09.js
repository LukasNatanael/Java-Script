let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 - Manipulando CSS'
// titulo.innerHTML = 'Aula 09 - Manipulando CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '../images/pride-fc.jpg')
imagem.setAttribute('width', '280px')
imagem.style.borderRadius = '5px'

// MANIPULAR CSS
// document.querySelector('h1').style.color = 'red'
titulo.style.width = '450px'
titulo.style.color = 'red'
titulo.style.backgroundColor = '#000'
titulo.style.borderBottom = '2px solid red'
titulo.style.padding = '.625em'
titulo.style.borderRadius = '5px'

let box = document.querySelectorAll('.box')
box[0].style.width = '300px'
box[0].setAttribute('class', 'escura')
box[1].setAttribute('class', 'amarelo')
box[1].removeAttribute('class')

/*-=-=-=-=-=-=- MODOS DE COR -=-=-=-=-=-=-*/
let tela = document.querySelector('main')
let btnDark = document.querySelector('#btndark')
let btnLight = document.querySelector('#btnlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    console.log('Dark mode')
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function modoLight() {
    console.log('Light mode')
    tela.classList.add('light')
    tela.classList.remove('dark')
}