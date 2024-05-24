/*
    Criar uma classe mãe/super para um Component genério que deve possuir:
        - atributo #privado que armazena a referencia ao DOM
        - método para ler o valor desse atributo
        - metodo build() para criar um elemento, que deve ser chamado apenas UMA VEZ no construtor, mas também deve ser possível ser chamado através da instância
        - metodo render() para adicionar o elemento a página que pode ser chamado pela instância a qualquer momento
        ** opcional **:
            - metodo destroy() para remover o elemento da página que pode ser chamado pela instância a qualquer momento
    
    Criar classes filhas/sub class que devem herdar a classe Componet específica para cada elemento:
        - sub class Input deve possuir:
            - método para adicionar placeholder
            ...
        - sub class Label deve possuir:
            - metodo para adicionar conteúdo de texto
            - metodo para adicionar For
            ...
        - sub class Form deve possuir:
            - metodo para atribuir elemento como filho através das instâncias das classes Component e suas subclasses
    
*/


const main = document.createElement('main')
const style = document.createAttribute('style')
const classe = document.createAttribute('class', 'main')

// classe.value = 'heigth: 100px'

// main.setAttribute('class', 'main')
// style.value = ['height: 100px; width: 100px; background: red']
// main.setAttributeNode(style)



// console.log(classe)
// console.log(main)
// document.body.appendChild(main)