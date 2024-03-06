const form = document.querySelector('form')

document.querySelector('button[id="plusButton"]').addEventListener( 'click', event => {
    event.preventDefault()
    
    if (!document.querySelector('#tecnologyDiv')) {

        const tecnologyDiv = document.createElement('div')
        tecnologyDiv.setAttribute('id', 'tecnologyDiv')

        const tecnologyLabel = document.createElement('label')
        tecnologyLabel.innerText = 'Tecnologia(s)'
        tecnologyLabel.setAttribute('for', 'tecnologyName')
        tecnologyLabel.setAttribute('id', 'tecnologyLabel')
        
        const tecnologyInput = document.createElement('input')
        tecnologyInput.setAttribute('id', 'tecnologyName')
        tecnologyInput.setAttribute('placeholder', 'Qual tecnologia você costuma usar ?')

        const radioTime1 = document.createElement('input')
        radioTime1.setAttribute('type', 'radio')
        radioTime1.setAttribute('name', 'experienceTime')
        radioTime1.setAttribute('id', '1')
        const radioTime1Label = document.createElement('label')
        radioTime1Label.setAttribute('for', '1')
        radioTime1Label.innerText = '0-2 anos'

        const radioTime2 = document.createElement('input')
        radioTime2.setAttribute('type', 'radio')
        radioTime2.setAttribute('name', 'experienceTime')
        radioTime2.setAttribute('id', '2')
        const radioTime2Label = document.createElement('label')
        radioTime2Label.setAttribute('for', '2')
        radioTime2Label.innerText = '3-4 anos'
        
        const radioTime3 = document.createElement('input')
        radioTime3.setAttribute('type', 'radio')
        radioTime3.setAttribute('name', 'experienceTime')
        radioTime3.setAttribute('id', '3')
        const radioTime3Label = document.createElement('label')
        radioTime3Label.setAttribute('for', '3')
        radioTime3Label.innerText = '+5 anos'

        const radioDiv = document.createElement('div')
        radioDiv.setAttribute('id', 'radioDiv')
        
        radioDiv.append(
            radioTime1, radioTime1Label,
            radioTime2, radioTime2Label,
            radioTime3, radioTime3Label
        )

        const registerButton = document.createElement('button')
        registerButton.setAttribute('id', 'registerButton')
        registerButton.innerText = 'Registrar dev'

        registerButton.addEventListener( 'click', event => {
            event.preventDefault()
            const inputName = document.querySelector('#fullname')

            if (inputName.value.length == 0 || tecnologyInput.value.length == 0) {
                alert('Preencha o formulário antes de enviar os dados!')
            }
            else {

                const name = inputName.value
                const tecnology = tecnologyInput.value
                // const experienceTime = document.querySelectorAll('input[name="experienceTime"]:checked').value

                console.log({
                    name,
                    tecnology,
                    // experienceTime
                })

                inputName.value = ''
                tecnologyInput.value = ''
                // document.querySelector('input[name="experienceTime"]').value = ''
            }
        } )

        tecnologyDiv.append(tecnologyLabel, tecnologyInput, radioDiv, registerButton)
        
        form.appendChild(tecnologyDiv)
    }
    
} )