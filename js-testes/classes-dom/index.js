import Component from "./Component.js"
import Input from "./Input.js"
import Label from "./Label.js"
import Form from "./Form.js"

const title = new Component( 'h1', 'body', { textContent: 'Olá mundo!' } )
const inputName = new Input( 'body', { id: 'name', name: 'name', placeholder: 'Informe seu nome' } )
const labelName = new Label( 'Nome', 'body', { htmlFor: 'name' } )
const form = new Form( 'body', { id: 'data' } )

title.build().render()
labelName.build().render()
inputName.build().render()
form.build().render()

form.addChildren(
    new Label( 'Email', 'body', { htmlFor: 'email' } ),
    new Input( 'body', { id: 'email', name: 'email', placeholder: 'Informe seu email' } )
)

