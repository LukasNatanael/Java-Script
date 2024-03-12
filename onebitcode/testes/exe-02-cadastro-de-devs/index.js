const registerAside = document.querySelector('aside[id="register"]')
const devListAside = document.querySelector('aside[id="devList"]')
const addNewTecnology = registerAside.querySelector('button[id="newTecnology"]')
const tecnologyForm = registerAside.querySelector('form[id="tecnologyForm"]')

const tecnologies = []

function createTecnologyDiv() {

    const tecnologyDiv = document.createElement('div')
    const tecnologyDivCount = document.querySelectorAll('.tecnologyName').length+1
    tecnologyDiv.setAttribute('id', `tecnologyDiv-${tecnologyDivCount}`)
    tecnologyDiv.setAttribute('class', `tecnologyDiv`)
    
    console.clear()
    console.log(tecnologyDivCount)

    if (tecnologyDivCount < 5) {
        // Criando label e inputs do formulário
        // NOME
        const tecnologyNameLabel = document.createElement('label')
        tecnologyNameLabel.innerText = 'Tecnologia: '
        tecnologyNameLabel.setAttribute('for', `tecnologyName-${tecnologyDivCount}`)
        tecnologyNameLabel.setAttribute('class', 'tecnologyNameLabel')

        const tecnologyName = document.createElement('input')
        tecnologyName.setAttribute('class', 'tecnologyName')
        tecnologyName.setAttribute('id', `tecnologyName-${tecnologyDivCount}`)

        const experienceTimeDiv = document.createElement('div')
        experienceTimeDiv.setAttribute('class', 'experienceTimeDiv')

        // Criando radios
        const radioDiv = document.createElement('div')
        radioDiv.setAttribute('class', 'radioDiv')
        radioDiv.setAttribute('id', `radioDiv-${tecnologyDivCount}`)

        const radio1Label = document.createElement('label')
        radio1Label.innerText = '0-2 anos'
        radio1Label.setAttribute('id', `experienceTime-${tecnologyDivCount}`)
        radio1Label.setAttribute('for', `experienceTime1-${tecnologyDivCount}`)
        
        const radio1 = document.createElement('input')
        radio1.setAttribute('name', `experienceTime-${tecnologyDivCount}`)
        radio1.setAttribute('id', `experienceTime1-${tecnologyDivCount}`)
        radio1.setAttribute('type', 'radio')
        radio1.setAttribute('class', 'experienceTimeRadio')
        radio1.value = '0-2 anos'

        const radio2Label = document.createElement('label')
        radio2Label.innerText = '3-4 anos'
        radio2Label.setAttribute('id', `experienceTime-${tecnologyDivCount}`)
        radio2Label.setAttribute('for', `experienceTime2-${tecnologyDivCount}`)

        const radio2 = document.createElement('input')
        radio2.setAttribute('name', `experienceTime-${tecnologyDivCount}`)
        radio2.setAttribute('id', `experienceTime2-${tecnologyDivCount}`)
        radio2.setAttribute('type', 'radio')
        radio2.setAttribute('class', 'experienceTimeRadio')
        radio2.value = '3-4 anos'

        const radio3Label = document.createElement('label')
        radio3Label.innerText = '+5 anos'
        radio3Label.setAttribute('id', `experienceTime-${tecnologyDivCount}`)
        radio3Label.setAttribute('for', `experienceTime3-${tecnologyDivCount}`)

        const radio3 = document.createElement('input')
        radio3.setAttribute('name', `experienceTime-${tecnologyDivCount}`)
        radio3.setAttribute('id', `experienceTime3-${tecnologyDivCount}`)
        radio3.setAttribute('type', 'radio')
        radio3.setAttribute('class', 'experienceTimeRadio')
        radio3.value = '+5 anos'

        // Adicionando radiso a uma DIV
        radioDiv.append(
            radio1, radio1Label,
            radio2, radio2Label,
            radio3, radio3Label
        )

        // Criando botão para remover tecnologia
        const removeTecnology = document.createElement('button')
        removeTecnology.setAttribute('type', 'submit')
        removeTecnology.setAttribute('class', 'removeTecnology')
        removeTecnology.setAttribute('id', `removeTecnology-${tecnologyDivCount}`)
        removeTecnology.innerText = 'Remover tecnologia'

        removeTecnology.addEventListener( 'click', event => {
            event.preventDefault()
            tecnologyForm.removeChild(tecnologyDiv)
            tecnologyDivCount = document.querySelectorAll('.tecnologyName').length
            
        })

        tecnologyDiv.append(tecnologyNameLabel, tecnologyName, experienceTimeDiv, radioDiv, removeTecnology)

        tecnologyForm.appendChild(tecnologyDiv)
    }
    else {
        alert('Você excedeu o limite de tecnologias adicionáveis.')
    }

}

function getData() {
    const tecnologiesDiv = document.querySelectorAll('.tecnologyDiv') 
    const tecnologiesName = document.querySelectorAll('.tecnologyName')
    const experiencesTime = document.querySelectorAll('.experienceTimeRadio')

    const tecnologyData = []

    tecnologiesDiv.forEach( element => {
        // console.log(element)
        const tecnologiesName = element.querySelectorAll('.tecnologyName')
        const experiencesTime = element.querySelectorAll('.experienceTimeRadio')
        
        // console.log(tecnologiesName)
        // console.log(experiencesTime)
        
        tecnologiesName.forEach(element => tecnologyData['name'].push(element.value))
    
        experiencesTime.forEach( element => { 
            if (element.checked) {
                // console.log(element.value)
                tecnologyData['experienceTime'].push(element.value)
            }
        })
        
    } )
}

addNewTecnology.addEventListener('click', event => {
    event.preventDefault()

    createTecnologyDiv()
})

getData()
