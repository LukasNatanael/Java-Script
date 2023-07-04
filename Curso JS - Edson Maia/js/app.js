// Trabalhar com JS mais moderno
'use strict'

// Criar ARRAY, nosso "banco de dados" local (Local Storage)
let banco = []

// Armazenar em uma CONSTANTE ARRAY FUNCTION que RETORNA os valores da chave "todolist"
const getBanco = () => JSON.parse(localStorage.getItem('todolist')) ?? []

// Armazenar em CONSTANTE ARRAY FUNCTION que DEFINE um valor chave "tarefa" do nosso "todolist"
const setBanco = (banco) => localStorage.setItem('todolist', JSON.stringify(banco))

// Mostrar nosso ARRAY de objetos ["banco de dados" local]
// console.log(JSON.parse(localStorage.getItem('todolist')))

// AÇÕES DEFINIDAS EM ARROW FUNCTION

// CRIAR ITEM na nossa LISTAGEM de TAREFAS (label + definir class + criar input com checkbox e botão)
const criarItem = (tarefa, status, indice) => {
    // CRIAR label
    const item = document.createElement('label')
    
    // Adicionar class "todo__item"
    item.classList.add('todo__item')

    // DEFINIR no CONTEÚDO do LABEL(item) input CHECKBOX div com TEXTO DA TAREFA e input button
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${item}>
    `

    // DEFINIR o NOVO ITEM como FILHO do nosso TODOLIST (div)
    document.querySelector('#todolist').appendChild(item)
}

// LIMPAR TAREFAS
// Para evitar inserção duplicada da lista toda quando chamarmos a função atualizarTela()

const limparTarefas = () => {
    // elemento todolist que é a nossa lista
    const todoList = document.querySelector('#todoList')

    // enquanto todolist tiver um primeiro filho (firstChild)
    // remova o último filho adicionado ao todolist (lastChild)
    // lembrando que a lista é readicionada a cada nova inserção
    while (todoList.firstChild) { todoList.removeChild(todoList.lastChild) }

}

// ATUALIZAR TELA, limpar tela, pega o "banco" e criarItem atualizando assim a lista de tarefas
const atualizarTela = () => {
    limparTarefas()
    const banco = getBanco()
    
    banco.forEach( (item, indice) => {
        criarItem(item.tarefa, item.status, indice)
    });
    
}

// INSERIR ITEM na lista de tarefas
const inserirItem = (evento) => {
    // Pegar evento teclar e armazenar na constante tecla 
    const tecla = evento.key

    // Pegar o valor (nome) da tecla que foi pressionada (alvo do evento)
    const texto = evento.target.value

    if (tecla === 'Enter') {
        // Pegue o banco
        const banco = getBanco()

        // Faça um PUSH(adicione) de chave/valor da tarefa e status
        banco.push({'tarefa': texto, 'status': ''})

        // Coloque a chave/valor no banco
        setBanco(banco)

        // Atualizar a tela
        atualizarTela()
        
        // Limpe o value do evento da última tarefa digitada no input
        evento.target.value = ''
    }
}

// REMOVER ITEM por índice
const removerItem = (indice) => {
    
    // Pegar o banco
    const banco = getBanco()

    // Fazer um splice(corte) no seu array(banco de dados) do índice, uma única posição
    banco.splice(indice, 1)

    // set do splice no seu banco, permiti persistencia dos dados
    setBanco(banco)

    // Atualiza a tela
    atualizarTela()
}

// ATUALIZAR ITEM ou alterar status para checked ou tirar checked
const atualizarItem = (indice) => {
    const banco = getBanco()
    banco[indice].status = banco[indice].status === '' ? 'checked' : ''
    setBanco(banco)
    atualizarTela()
}

// Oque fazer quando clicarmos em uma tarefa, por meio do evendo click
const clickItem = (evento) => {

    // Selecionar o elemento (tarefa) e pegar o evento relativo a ele
    const elemento = evento.target
    
    // se for um click no botão X iremos remover a tarefa da listagem
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice
        removerItem(indice)
    // senao se for um click no botao checkbox iremos definir como checado ou vice-versa
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice
        atualizarItem(indice)
    }
    console.log(elemento.type)
}

// adicionar escutadore de eventos de tecla pressionada e de click
document.querySelector('#newItem').addEventListener('keypress', inserirItem)
document.querySelector('#todoList').addEventListener('click', clickItem)

atualizarTela()