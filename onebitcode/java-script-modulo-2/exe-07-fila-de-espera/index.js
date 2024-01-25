let pacients = ['Lukas', 'Matheus']
let pacientsMenu = ''
// pacients.length == 0 ? console.log('Ainda não possui nenhum paciente na fila') : pacients.forEach((pacient, position) => console.log(`${position} - ${pacient}`))


pacients.length > 0 ? pacients.forEach( (pacient, position) =>  { console.log(position, pacient); console.log() } ): alert('A lista não possui nenhum paciente')


// if (pacients.length > 0) {
//     pacients.forEach((pacient, position) => {
//         pacientsMenu += `${position+1} - ${pacient}\n`
//     })
//     alert(`Fila de pacientes: \n${pacientsMenu}`)
// }


let option = ''
let newPacient = ''

do {
    option = parseFloat(prompt('Menu interativo do consultório: \n1 - Novo paciente \n2 - Consultar paciente \n3 - Sair'))
    switch (option) {
        case 1:
            newPacient = prompt('Qual o nome do paciente: ')
            pacients.push(newPacient)
            alert(`Paciente ${newPacient} foi adicionado a ${pacients.indexOf(newPacient)+1}ª posição da fila. \n${pacients}`)
            
            pacientsMenu += `${newPacient} \n`
            console.clear()
            console.log(pacientsMenu)
            // alert(pacients)
            
            break
        case 2:
            if (pacients.length >=1) {
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
