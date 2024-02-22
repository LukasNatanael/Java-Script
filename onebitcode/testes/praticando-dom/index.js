function addContact() {

    const contactsList = document.querySelector('#contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.querySelector('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'nome'

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'nome')

    nameLabel.append(nameLi, nameInput)
    nameLi.appendChild(nameLabel)

    ul.appendChild(nameLi)
    
    contactsList.appendChild(ul)


    // const phoneLi = document.createElement('li')
    // phoneLi.innerText = 'Contato: '

    // const phoneInput = document.createElement('input')
    // phoneInput.id = 'phone'
    // phoneInput.type = 'text'

    // const phoneLabel = document.createElement('label')
    // phoneLabel.setAttribute('for', 'phone')

    // phoneLabel.append(phoneLi, phoneInput)
    // phoneLi.appendChild(phoneLabel)

    // ul.append(nameLabel, phoneLabel)

    // contactsList.appendChild(ul)
    


}

function removeContact() {

}