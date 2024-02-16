let vagas = []

function novaVaga() {
    const name = prompt('Informe um nome para a vaga: ')
    const description = prompt('Informe a descrição da vaga: ')
    const deadline = prompt('Informe uma data limite (dd/mm/aaaa) para inscrição: ')

    const confirmation = confirm(
        'Deseja criar uma vaga com os seguintes dados: \n' +
        `Nome da vaga: ${name} \n` +
        `Descrição da vaga: ${description} \n` +
        `Data limite: ${deadline} \n`
        )

    if (confirmation) {
        const newVacancy = {
            name,
            description,
            deadline,
            candidatos: []
        }
        vagas.push(newVacancy)
        alert('Vaga criada!')
    }

}

function exibirVaga() {
    const index = prompt('Informe o índice da vaga que deseja exibir: ')

    if (index >= vagas.length || index < 0) {
        alert('Índice inválido')
        return
    }
    const vaga = vagas[index]
    
    const candidatosEmTexto = vaga.candidatos.reduce( (textoFinal, candidato) => {
        // return textoFinal +`\n${indice}. ${candidato}`
        return textoFinal +`\n - ${candidato}`
    }, '' )
    alert(
        `Vaga nº ${index} \n` +
        `Nome: ${vaga.name} \n` +
        `Descrição: ${vaga.description} \n` +
        `Data limite: ${vaga.deadline} \n` +
        `Quantidade de candidatos: ${vaga.candidatos.length} \n` +
        `Candidatos inscritos: ${candidatosEmTexto} \n`
    )
}


function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, index) => {
      textoFinal += index + ". "
      textoFinal += vaga.name
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return textoFinal
    }, "")
  
    alert(vagasEmTexto)
  }

function registerCandidate() {
    const candidate = prompt('Informe o nome do(a) candidato(a): ')
    const index = prompt('Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: ')
    let vaga = vagas[index]

    const confirmation = confirm(
        `Deseja inscrever o candidato ${candidate} na vaga ${index} ? \n` +
        `Nome: ${vaga.name} \n` +
        `Descrição: ${vaga.description} \n` +
        `Data limite: ${vaga.deadline} \n`

    )

    if (confirmation) {
        vaga.candidatos.push(candidate)
        alert('Inscrição realizada!')
    }
}

function removeVacancy() {
    const index = prompt('Informe o índice da vaga que deseja excluir: ')
    const vaga = vagas[index]

    const confirmation = confirm(
        `Tem certeza de que deseja excluir a vaga ${index} ? \n` +
        `Nome: ${vaga.name} \n` +
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
