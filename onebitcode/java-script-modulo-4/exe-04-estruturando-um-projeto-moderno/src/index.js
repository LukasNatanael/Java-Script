import { CPF, CNPJ } from '@julioakira/cpf-cnpj-utils'
import dayjs from 'dayjs'
import { fakerPT_BR } from '@faker-js/faker';
import './styles/index.css'

const today = dayjs(new Date())
const birthday = today.subtract(today.date() + 4, 'year').subtract(3, 'month').subtract(2, 'day')
document.querySelector('#expedicao').innerText = today.format('DD/MM/YYYY')
document.querySelector('#nascimento').innerText = birthday.format('DD/MM/YYYY')

const person = {
    name: fakerPT_BR.person.fullName(),
    father: fakerPT_BR.person.fullName({ sex: 'male' }),
    mother: fakerPT_BR.person.fullName({ sex: 'female' }),
    naturality: 'Brasileira'
}

const { name, father, mother, naturality } = person

document.querySelector('#nome').innerText         = name
document.querySelector('#nome-pai').innerText     = father
document.querySelector('#nome-mae').innerText     = mother
document.querySelector('#naturalidade').innerText = naturality

const validateCPFButton = document.querySelector('#validar-cpf')
const cpf = document.querySelector('#cpf')
cpf.addEventListener('keydown', (event) => {
    event.preventDefault()
    const accept = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '.', '-']
    let key = event.key

    if (accept.includes(key)) {
        cpf.value += key
        return
    }

    if (event.key === 'Backspace') {
        cpf.value = cpf.value.slice(0, -1) // removendo valores
        return // para finalizar a função
    }

    if (event.key === 'Enter') {
        validateCPF()
    }
})


function validateCPF(){
    let cpf = document.querySelector('#cpf').value
    const cpfBorder = document.querySelector('#cpf-border')
    const validCPF = CPF.Validate(cpf)

    console.clear()
    console.log(cpf, CPF.Format(cpf), CPF.Strip(cpf))

    if (validCPF) {
        console.log('Válido')
        cpfBorder.classList.add('valid')
        cpfBorder.classList.remove('invalid')
    }
    else {
        cpfBorder.classList.add('invalid')
        cpfBorder.classList.remove('valid')
        console.log('Inválido')
    }
}

validateCPFButton.addEventListener('click', validateCPF)
