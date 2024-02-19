// Criar lista de vagas disponíveis no ESCOPO GLOBAL
const vacancies = []

// <=========================== LISTA TESTE ===========================>


// const vacancies = [
//     {
//         name: 'Programador Júnior',
//         description: 'Um programador com experiência mínima no mercado de trabalho',
//         finalDate: '23/05/2024',
//         candidates: [
//             'Jorge',
//             'Bruno'
//         ]
//     },
//     {
//         name: 'Programador Pleno',
//         description: 'Um programador com experiência mediana no mercado de trabalho',
//         finalDate: '23/05/2024',
//         candidates: [
//             'Lukas',
//             'Matheus'
//         ]

//     },
//     {
//         name: 'Programador Sênior',
//         description: 'Um programador FODÃO no mercado de trabalho',
//         finalDate: '23/05/2024',
//         candidates: [
//             'Cadoni',
//             'Edinho'
//         ]

//     },
// ]

// <=============================== ## ===============================>

// FUNÇÕES

// - Criar uma nova vaga
function newVacancy() {
    const name        = prompt('Nome da vaga: ')
    const description = prompt('Descrição da vaga: ')
    const finalDate   = prompt('Data final para inscrição: ')

    const confirmation = confirm(
        'Deseja adicionar uma vaga com os seguintes dados: \n' +
        `Nome: ${name} \n` +
        `Descrição: ${description} \n` +
        `Data limite para inscrição: ${finalDate} \n`
        )
    
    if (confirmation) {
        const newVacancy = {
            name,
            description,
            finalDate,
            candidates: []
        }
        vacancies.push(newVacancy)
        alert('Vaga criada!')
    }
    else {
        alert('A vaga não foi adicionada a lista de vagas!')
    }
}

// - Visualizar informações de uma vaga
function listVacancies() {
    const textVacancies = vacancies.reduce( (finalText, vacancy, index) => {
        finalText += `${index}. `
        finalText += vacancy.name
        finalText += ` (${vacancy.candidates.length} candidatos) \n`

        return finalText
    }, '' )

    if (textVacancies.length == 0) {
        alert('A lista de vagas está vazia!')
    }
    else {
        alert(textVacancies)
    }
}

// - Listar vagas disponíveis
function showVacancyInformations() {
    const indexVacancy = prompt('Visualizar informações da vaga. \nInforme o índice da vaga que deseja exibir: ')
    if (indexVacancy >= vacancies.length || indexVacancy < 0) {
        alert('Índice inválido!')
        return // encerra a função sem executar o resto do código
    }

    const vacancy = vacancies[indexVacancy]

    const textCandidates = vacancy.candidates.reduce( (finalText, cadidate) => {
        return finalText + `\n - ${cadidate}`
    }, '')
    alert(
        `Vaga nº ${indexVacancy} \n` +
        `Nome: ${vacancy.name} \n` +
        `Descrição: ${vacancy.description} \n` +
        `Data limite para inscrição: ${vacancy.finalDate} \n` +
        `Quantidade de candidatos: ${vacancy.candidates.length} \n` +
        `Candidatos inscritos: ${textCandidates} \n`
    )
}


// - Inscrever um novo(a) candidato(a) em uma vaga
function nominateCandidate() {
    const candidateName = prompt('Informe o nome do(a) candidato(a): ')
    const indexVacancy = prompt('Informe o índice da vaga para o qual o(a) candidato(a) deseja se inscrever: ')

    let vacancy = vacancies[indexVacancy]

    const confirmation = confirm(
        `Deseja inscrever o candidato ${candidateName} na vaga ${indexVacancy} ? \n` +
        `Nome: ${vacancy.name} \n` +
        `Descrição: ${vacancy.description} \n` +
        `Data limite para inscrição: ${vacancy.finalDate} \n`
    )

    if (confirmation) {
        vacancy.candidates.push(candidateName)
        alert('Inscrição realizada com sucesso!')
    }
    else {
        alert('O candidato não foi inscrito à vaga!')
    }
}

// - Excluir uma vaga
function removeVacancy() {
    const indexVacancy = prompt('Informe o índice da vaga que deseja excluir: ')
    const vacancy = vacancies[indexVacancy]

    const confirmation = confirm(
        `Tem certeza que deseja excluir a vaga ${vacancy.name} ?` +
        `Nome: ${vacancy.name} \n` +
        `Descrição: ${vacancy.description} \n` +
        `Data limite para inscrição: ${vacancy.finalDate} \n`
    )

    if (confirmation) {
        vacancy.splice(indexVacancy, 1)
        alert('Vaga excluída com sucesso!')
    }
    else {
        alert('A vaga não foi excluída!')
    }
}

// - Listar opções
function showOptions() {
    const option = parseFloat(prompt(
        'Bem vindo(a) ao Sistema de Vagas de Emprego\n\n' +
        'Escolha uma das opções abaixo: \n' +
        '1 - Listar vagas disponíveis \n' +
        '2 - Criar uma nova vaga \n' +
        '3 - Visualizar uma vaga \n' +
        '4 - Inscrever um candidato em uma vaga \n' +
        '5 - Excluir uma vaga \n' +
        '6 - Sair \n'
    ))

    return option
}

// - Executar script
function execute() {
    let option = ''

    do {

        option = showOptions()

        switch(option) {
            case 1:
                listVacancies()
                break
            case 2:
                newVacancy()
                break
            case 3:
                showVacancyInformations()
                break
            case 4:
                nominateCandidate()
                break
            case 5:
                removeVacancy()
                break
            case 6:
                alert('Finalizando sistema...')
                break
            default:
                alert('Opção inválida!')
        }
    }
    while (option != 6)
    alert('Sistema finalizado com sucesso!')
}

execute()