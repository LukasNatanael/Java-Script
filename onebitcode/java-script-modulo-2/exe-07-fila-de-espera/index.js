// let pacients = ['Lukas', 'Matheus', 'João']
let pacients = []
let pacientsList = ''

let option = ''

do {
    pacientsList = ''
    pacients.forEach( (pacient, position) =>  { 
        pacientsList += `${position+1}º - ${pacient} \n`
        }
    )

    option = parseFloat(prompt(`Pacientes: \n${pacientsList} \nEscolha uma ação: \n1 - Novo paciente \n2 - Consultar paciente \n3 - Sair`))
    switch (option) {
        case 1:
            let newPacient = prompt('Qual o nome do paciente: ')
            pacients.push(newPacient)

            console.clear()
            alert(`Paciente ${newPacient} foi adicionado a ${pacients.indexOf(newPacient)+1}ª posição da fila.`)
            break

        case 2:
            if (pacients.length > 0) {
                let removedPacient = pacients.shift()
                alert(`Paciente ${removedPacient} recebeu alta.`)
            }
            else {
                alert('A lista de pacientes está vazia!')
            }
            break
        
        case 3:
           alert('Finalizando consultas...')
           break
    }
} while(option != 3)

alert('As consultas de hoje estão todas finalizadas.')
