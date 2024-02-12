vagas = []

function novaVaga() {
    name = prompt('Informe um nome para a vaga: ')
    description = prompt('Informe a descrição da vaga: ')
    deadline = prompt('Informe uma data limite (dd/mm/aaaa) para inscrição: ')

    const confirmation = confirm(
        'Deseja criar uma data com os seguintes dados: \n' +
        `Nome da vaga: ${name} \n` +
        `Descrição da vaga: ${description} \n` +
        `Data limite: ${deadline} \n`
        )

    if (confirmation) {
        const newVacancy = {
            name,
            description,
            deadline,
            subscribers: []
        }
        vagas.push(newVacancy)
        alert('Vaga criada!')
    }

}

function exibirVaga() {
    const index = prompt('Informe o índice da vaga que deseja exibir: ')
    const vaga = vagas[index]

    const candidatosEmTexto = vagas.subscribers.reduce( (textoFinal, candidato, indice) => {
        // return textoFinal +`\n${indice}. ${candidato}`
        return textoFinal +`\n - ${candidato}`
    }, '' )
    alert(
        `Vaga nº ${indice}` +
        `Nome: ${vaga.name}` +
        `Descrição: ${vaga.description}` +
        `Data limite: ${vaga.deadline}` +
        `Quantidade de candidatos: ${vaga.subscribers.length}` +
        `Candidatos inscritos: ${candidatosEmTexto}`
    )
}


function listarVagas() {
    const vagasEmTexto = vagas.reduce( (textoFinal, vaga, indice) => {
        textoFinal += `${indice}. `
        textoFinal += vaga.name
        textoFinal += `(${vaga.subscribers.length} candidatos) \n`
        return textoFinal
    }, '')

    alert(vagasEmTexto)
}

function registerCandidate() {
    const candidate = prompt('Informe o nome do(a) candidato(a): ')
    const index = prompt('Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: ')
    const vaga = vaga[index]

    const confirmation = confirm(
        `Deseja inscrever o candidato ${candidate} na vaga ${vaga} ? \n` +
        `Nome: ${vaga.nome} \n` +
        `Descrição: ${vaga.description} \n` +
        `Data limite: ${vaga.deadline} \n`

    )

    if (confirmation) {
        vaga.subscribers.push(candidate)
        alert('Inscrição realizada!')
    }
}

function removeVacancy() {
    const index = prompt('Informe o índice da vaga que deseja excluir: ')
    const vaga = vaga[index]

    const confirmation = confirm(
        `Tem certeza de que deseja excluir a vaga ${vaga} ? \n` +
        `Nome: ${vaga.nome} \n` +
        `Descrição: ${vaga.description} \n` +
        `Data limite: ${vaga.deadline} \n`
    )

    if (confirmation) {
        vaga.splice(index, 1)
        alert('Vaga removida!')
    }
}


function showMenu() {
    const option = parseFloat(prompt(
        'Bem vindo(a) ao Sistema de Vagas de Emprego\n\n' +
        'Escolha uma opção: \n' +
        '1 - Listar vagas disponíveis \n' +
        '2 - Criar um nova vaga \n' +
        '3 - Visualizar uma vaga \n' +
        '4 - Inscrever um candidato em uma vaga \n' +
        '5 - Excluir uma vaga \n' +
        '6 - Sair \n'
    
        ))

    return option
}


function execute() {
    let option = ''

    do {
        option = showMenu()

        switch(option) {
            case 1:
                listarVagas()
                break
            case 2:
                novaVaga()
                break
            case 3:
                exibirVaga()
                break
            case 4:
                registerCandidate()
                break
            case 5:
                removeVacancy()
                break
            case 6:
                alert('Encerrando programa...')
                break
            default:
                alert('Opção inválida!')
            }
            
        } while (option != 6)
        alert('Programa finalizado!')
}

execute()
