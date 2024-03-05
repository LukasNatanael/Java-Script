const form = document.querySelector('form')

document.querySelector('button[id="plusButton"]').addEventListener( 'click', (event) => {
    event.preventDefault()
    
    const tecnologyDiv = document.createElement('div')
    tecnologyDiv.setAttribute('id', 'tecnologyDiv')
    const tecnologyLabel = document.createElement('label')
    tecnologyLabel.innerText = 'Tecnologia'
    tecnologyLabel.setAttribute('for', 'tecnologyName')
    tecnologyLabel.setAttribute('id', 'tecnologyLabel')

    const tecnologyInput = document.createElement('input')
    tecnologyInput.setAttribute('id', 'tecnologyName')

    tecnologyDiv.append(tecnologyLabel, tecnologyInput)

    form.appendChild(tecnologyDiv)
} )