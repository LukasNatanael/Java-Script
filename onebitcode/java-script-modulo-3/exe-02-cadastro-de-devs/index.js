const form = document.querySelector('form')

document.querySelector('button[id="plusButton"]').addEventListener( 'click', event => {
    event.preventDefault()
    
    const fullname = document.querySelector('#fullname')

    // Verificando se o nome do desenvolvedor foi informado caso não, ele irá emitir um alerta solicitando para que o usuário informe o nome
    if (fullname.value === '') {
        alert('Por favor informe o nome do DEV!')
    }
    else {

        // if (!document.querySelector('#tecnologyDiv')) {
        // document.querySelector('#tecnologyDiv')
    
            const tecnologyList = document.querySelector('#tecnologyList')

            // Criando label, input, divs e button
            const tecnologyDiv = document.createElement('div')
            tecnologyDiv.setAttribute('id', 'tecnologyDiv')
    
            const tecnologyLabel = document.createElement('label')
            tecnologyLabel.innerText = 'Tecnologia'
            tecnologyLabel.setAttribute('for', 'tecnologyName')
            tecnologyLabel.setAttribute('id', 'tecnologyLabel')
            
            const tecnologyInput = document.createElement('input')
            tecnologyInput.setAttribute('id', 'tecnologyName')
            tecnologyInput.setAttribute('placeholder', 'Qual tecnologia você costuma usar ?')
    
            const radioTime1 = document.createElement('input')
            radioTime1.setAttribute('type', 'radio')
            radioTime1.setAttribute('name', 'experienceTime')
            radioTime1.setAttribute('id', '1')
            radioTime1.setAttribute('value', '0-2 anos')

            const radioTime1Label = document.createElement('label')
            radioTime1Label.setAttribute('for', '1')
            radioTime1Label.innerText = '0-2 anos'
    
            const radioTime2 = document.createElement('input')
            radioTime2.setAttribute('type', 'radio')
            radioTime2.setAttribute('name', 'experienceTime')
            radioTime2.setAttribute('id', '2')
            radioTime2.setAttribute('value', '3-4 anos')

            const radioTime2Label = document.createElement('label')
            radioTime2Label.setAttribute('for', '2')
            radioTime2Label.innerText = '3-4 anos'
            
            const radioTime3 = document.createElement('input')
            radioTime3.setAttribute('type', 'radio')
            radioTime3.setAttribute('name', 'experienceTime')
            radioTime3.setAttribute('id', '3')
            radioTime3.setAttribute('value', '+5 anos')
            
            const radioTime3Label = document.createElement('label')
            radioTime3Label.setAttribute('for', '3')
            radioTime3Label.innerText = '+5 anos'
    
            const radioDiv = document.createElement('div')
            radioDiv.setAttribute('id', 'radioDiv')
            
            // Inserindo todos os radios dentro de uma div para centraliza-los
            radioDiv.append(
                radioTime1, radioTime1Label,
                radioTime2, radioTime2Label,
                radioTime3, radioTime3Label
            )
    
            const registerButton = document.createElement('button')
            registerButton.setAttribute('id', 'registerButton')
            registerButton.innerText = 'Registrar dev'

            // Inserindo todos os elementos criados dentro de uma div
            tecnologyDiv.append(tecnologyLabel, tecnologyInput, radioDiv, registerButton)
            
            // Inserindo as tecnologias dentro da lista de tecnologias
            tecnologyDiv.className = 'tecnologyDiv'
            tecnologyDiv.id = `tecnology-${tecnologyList.childElementCount }`
            tecnologyList.appendChild(tecnologyDiv)
                
            // Inserindo todos os elementos criandos dentro do form principal
            form.appendChild(tecnologyList)

            registerButton.addEventListener( 'click', event => {
                event.preventDefault()
                const inputName = document.querySelector('#fullname')
                const experienceTimeOption = document.querySelector('input[name="experienceTime"]:checked')

    
                if (inputName.value.length == 0 || tecnologyInput.value.length == 0) {
                    alert('Preencha o formulário antes de enviar os dados!')
                }
                else {
    
                    const name = inputName.value
                    const tecnology = tecnologyInput.value
                    const experienceTime = experienceTimeOption.value

                    // Armazenando informações dos usuários
                    const devData = {
                        name,
                        tecnology,
                        experienceTime
                    }
                    
                    // Limpando valores dos inputs
                    inputName.value = ''
                    tecnologyInput.value = ''
                    experienceTimeOption.checked = false                 
                    
                    // Adicionando dados dos DEVS a aside#devsListScrool na lateral direita
                    const devsListScrool = document.querySelector('#devsListScrool')

                    // Criando os elementos da lista

                    // Lista de elementos
                    const ul               = document.createElement('ul')
                    const h3               = document.createElement('h3')
                    ul.setAttribute('id', `${devData['name']}`)
                    h3.innerText = `${devData['name']}`
                    
                    const nameLi           = document.createElement('li')
                    nameLi.innerText = `Nome: ${devData['name']}`
                    
                    const tecnologyLi      = document.createElement('li')
                    tecnologyLi.innerText = `Tecnologia(s): ${devData['tecnology']}`

                    const experienceTimeLi = document.createElement('li')
                    experienceTimeLi.innerText = `Tempo de experiência: ${devData['experienceTime']}`

                    const confirmation = confirm(
                        `Deseja adicionar o DEV ${devData['name']} com os dados:` +
                        `\n\nTecnologia utilizada: ${devData['tecnology']}` +
                        `\nTempo de experiência: ${devData['experienceTime']}` +
                        '\n\na lista ?'
                    )

                    if (confirmation) {
                        ul.append(h3, nameLi, tecnologyLi, experienceTimeLi)
                        devsListScrool.appendChild(ul)
                    }
                    else {
                        alert('Infelizmente o DEV não passou na entrevista de emprego!')
                    }
                }
        } )

        }
    }
    
// } 
)


document.querySelector('button[id="removeDevButton"]').addEventListener( 'click', () => {
    const devsListScrool = document.querySelector('#devsListScrool')
    const removeDevName = document.querySelector('#removeDevName')

    if (removeDevName.value == '') {
        alert('Informe o nome do dev a ser removido!')
    }
    else {
        const playerToRemove = devsListScrool.children[removeDevName.value]
        console.log(playerToRemove)
        
        devsListScrool.removeChild(playerToRemove)
        removeDevName.value = ''
    }

})