const totalTip = document.querySelector('#totalTip')
const each = document.querySelector('#each')
const tip = document.querySelector('#tip')

totalTip.style.display = 'none'
each.style.display = 'none'

const tipsForm = document.querySelector('#tipsForm')

function calculateTip(event) {
    event.preventDefault()
    let bill = document.querySelector('#bill').value
    let serviceQual = document.querySelector('#serviceQual').value
    let numOfPeople = document.querySelector('#people').value

    if (bill == '' || serviceQual == 0) {
        alert('Preencha os valores corretamente!')
        return
    }

    if (numOfPeople == 0) {
        numOfPeople = 1
        each.style.display = 'none'
    }
    else {
        each.style.display = 'block'
    }

    let total = (bill * serviceQual) /numOfPeople
    total = total.toFixed(2)

    tip.innerHTML = total
    totalTip.style.display = 'block'
}

tipsForm.addEventListener('submit', calculateTip)