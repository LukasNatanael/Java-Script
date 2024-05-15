import dayjs from 'dayjs'
import './styles/index.css'

// alert(`Hoje é ${dayjs().format('DD/MM/YYYY')}`)

document.querySelector('h2').innerText = `Hoje é ${dayjs().format('DD/MM/YYYY')}`