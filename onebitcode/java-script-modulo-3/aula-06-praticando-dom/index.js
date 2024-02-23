function addContact() {

    const contactsList = document.querySelector('#contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')
    const nameLi = document.createElement('li')

    ul.setAttribute('role', 'list')
    ul.style = 'list-style-type: none'

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'nome'
    // nameInput.placeholder = 'insira seu nome'

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'nome')
    nameLabel.innerText = 'Username: '

    nameLi.append(nameLabel, nameInput)
    ul.appendChild(nameLi)


    const phoneLi = document.createElement('li')
    const phoneInput = document.createElement('input')
    phoneInput.id = 'phone'
    phoneInput.type = 'text'

    const phoneLabel = document.createElement('label')
    phoneLabel.setAttribute('for', 'phone')
    phoneLabel.innerText = 'Telefone: '
    // phoneInput.placeholder = 'insira seu telefone'


    phoneLi.append(phoneLabel, phoneInput)
    ul.appendChild(phoneLi)

    contactsList.appendChild(ul)

    const addressLi = document.createElement('li')
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.id = 'address'

    const addressLabel = document.createElement('label')
    addressLabel.setAttribute('for', 'address')
    addressLabel.innerText = 'Endereço: '
    // addressInput.placeholder = 'insira seu endereço'


    addressLi.append(addressLabel, addressInput)
    ul.appendChild(addressLi)
    
    contactsList.append(h3, ul)

}

function removeContact() {
    const contactsList = document.querySelector('#contacts-list')

    const titles = document.querySelectorAll('h3')
    const contacts = document.querySelectorAll('ul')

    contactsList.removeChild(titles[titles.length - 1])
    contactsList.removeChild(contacts[contacts.length - 1])
}