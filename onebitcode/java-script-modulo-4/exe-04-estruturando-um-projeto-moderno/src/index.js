import { CPF, CNPJ } from '@julioakira/cpf-cnpj-utils'
import './styles/index.css'

// Returns 30.306.294/0001-45
const formatted = CNPJ.Format('30306294000145')
const stripped = CNPJ.Strip('30.306.294/0001-45')

const validFormatted = CNPJ.Validate(formatted)
const validStripped = CNPJ.Validate(stripped)

console.log(formatted, validFormatted)
console.log(stripped, validStripped)