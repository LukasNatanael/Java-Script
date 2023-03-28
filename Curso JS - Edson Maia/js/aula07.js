// DOM = Document Object Model
// Árvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento html que formam os conteúdos

/*
    navigator
        window
            location
            document -> html -> head e body
            history
*/

// PARA MANIPULAR O DOM PRECISAMOS 
// Indicar qual objeto usar, para
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc.

// query.Selector()
// Selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('#titulo')
console.log(titulo)

// .textContent
// Propriedade ou atributo textContent
// serve para acessar ou alterar o conteúdo
// de um elemento que foi selecionado
// console.log(titulo.textContent)
// console.log(titulo.innerHTML)

titulo.textContent = 'DOM'
console.log(titulo.textContent)

// query.SelectorAll()
// Seleciona TODO elemento com base na tag, #id ou .class
let caixas = document.querySelectorAll('.box')

console.log(caixas)
document.write(caixas[0].textContent)
document.write(caixas[1].textContent)
document.write(caixas[2].textContent)
caixas[0].textContent = 'texto qualquer'

// Existem também outros métodos
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementsByTagName()
.getElementsById()
.getElementsByClassName()
*/

let testeTag = document.getElementsByTagName('div')
// console.log(testeTag)
// document.write(testeTag[0].textContent)
// document.write(testeTag[1].textContent)

let testeId = document.getElementById('titulo')
// console.log(testeId)

let testeClass = document.getElementsByClassName('box')
// console.log(testeClass)
// console.write(testeClass[0].textContent)
// console.write(testeClass[1].textContent)