import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Label } from "./Label.js"
import { Input } from "./Input.js"

const title = new Component( 'h1', 'body', { textContent: 'Olá mundo!' } )
console.log(title)
title.render()

title.tag = 'h3'

title.build().render()

const form = new Form('body')

const label = new Label('Nome:', form, { htmlFor: 'nameInput'})
const input = new Input(form, { id: 'nameInput', name: 'name' })

label.render()
form.render()
form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de nascimento', form ,{ htmlFor: 'inputBirthday'}),
    new Input(form, { id: 'inputBirthday', name: 'birthday', type: 'date' })
)