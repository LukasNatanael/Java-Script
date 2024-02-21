function show() {
    const contactList = document.querySelector('#contact-list')
    console.log(contactList)
    
    const listElements = document.querySelectorAll('label')
    console.log(listElements)

    const contactInput = document.querySelectorAll('.contact-input')
    console.log(contactInput)

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)
    
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}