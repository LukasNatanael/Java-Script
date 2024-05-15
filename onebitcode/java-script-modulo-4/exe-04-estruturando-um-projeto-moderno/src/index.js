import dayjs from 'dayjs'

const inputBirthday = document.querySelector('#birthday')
const sendDate = document.querySelector('#send-date')

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1
    
    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}


sendDate.addEventListener('click', () => {
    console.log(inputBirthday.value)
    birthday(inputBirthday.value)
})

