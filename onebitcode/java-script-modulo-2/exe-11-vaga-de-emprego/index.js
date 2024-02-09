let vacancies = []

function newVacancy() {
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
            []
        }
    }

}

function showMenu() {
    return parseFloat(prompt(
        'Bem vindo(a) ao Sistema de Vagas de Emprego\n\n' +
        'Escolha uma opção: \n' +
        '1 - Listar vagas disponíveis \n' +
        '2 - Criar um nova vaga \n' +
        '3 - Visualizar uma vaga \n' +
        '4 - Inscrever um candidato em uma vaga \n' +
        '5 - Excluir uma vaga \n' +
        '6 - Sair \n'
    
        ))
}


function execute() {
    let option = ''

    do {
        option = showMenu()

        switch(option) {
            case 1:
                break
            case 2:
                break
            case 3:
                break
            case 4:
                break
            case 5:
                break
            case 6:
                alert('Encerrando programa...')
                break
            }
            
        } while (option != 6)
        alert('Programa finalizado!')
}
