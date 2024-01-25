// let pacients = []
let pacients = []
let pacientsList = ''

// pacients.length > 0 ? pacients.forEach( (pacient, position) =>  { console.log(position, pacient); console.log() } ): alert('A lista não possui nenhum paciente')


if (pacients.length > 0) {
    console.log('Lista de pacientes:')
    pacients.forEach( (pacient, position) =>  { 
        console.log(`${position+1}º - ${pacient}`)
        }
    )
}


let option = ''
let newPacient = ''

do {
    option = parseFloat(prompt('Menu interativo do consultório: \n1 - Novo paciente \n2 - Consultar paciente \n3 - Listar pacientes \n4 - Sair'))
    switch (option) {
        case 1:
            newPacient = prompt('Qual o nome do paciente: ')
            pacients.push(newPacient)
            pacientsList = ''
            console.clear()
            console.log(`Paciente ${newPacient} foi adicionado a ${pacients.length}ª posição da fila. \n`)

            pacients.forEach( (pacient, position) =>  { 
                console.log(`${position+1}º - ${pacient}`)
                pacientsList += `${position+1}º - ${pacient} \n`
                }
            )

            alert(`Paciente ${newPacient} foi adicionado a ${pacients.indexOf(newPacient)+1}ª posição da fila. \n${pacientsList}`)
            console.log()
            // console.log(pacientsList)
            break

        case 2:
            if (pacients.length >=1) {
                let removedPacient = pacients.shift()
                pacientsList = ''

                console.clear()
                console.log(`Paciente ${removedPacient} recebeu alta.`)
                pacients.forEach( (pacient, position) =>  { 
                    console.log(`${position+1}º - ${pacient}`)
                    pacientsList += `${position+1}º - ${pacient} \n`
                    }
                )

                alert(`Paciente ${removedPacient} recebeu alta. \n${pacientsList}`)
            }
            else {
                console.clear()
                console.log('A lista de pacientes está vazia!')
                alert('A lista de pacientes está vazia!')
            }
            break
        
        case 3:
            console.clear()
            if (pacients.length > 0) {

                console.log(`Lista de pacientes: \n${pacientsList}`)
                alert(`Lista de pacientes: \n${pacientsList}`)
            }
            else {
                console.log('Não possui nenhum paciente na fila de espera.')
                alert('Não possui nenhum paciente na fila de espera.')
            }
            break

        case 4:
           alert('Finalizando consultas...')
           break
    }
} while(option != 4)

alert('As consultas de hoje estão todas finalizadas.')
