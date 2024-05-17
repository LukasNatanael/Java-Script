import { CPF, CNPJ } from '@julioakira/cpf-cnpj-utils'
import dayjs from 'dayjs'
import './styles/index.css'

// Returns 30.306.294/0001-45
const formatted = CNPJ.Format('30306294000145')
const stripped = CNPJ.Strip('30.306.294/0001-45')

const validFormatted = CNPJ.Validate(formatted)
const validStripped = CNPJ.Validate(stripped)

const cpf = CPF.Generate(true);


console.log(formatted, validFormatted)
console.log(stripped, validStripped)
console.log(cpf)

// document.querySelector('#cpf').innerText = cpf

const today = dayjs(new Date())

document.querySelector('#expedicao').innerText = today.format('DD/MM/YYYY')

// console.log(today.format('DD/MM/YYYY'))