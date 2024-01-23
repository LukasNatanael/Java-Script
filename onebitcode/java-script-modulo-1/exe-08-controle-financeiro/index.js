let initialMoney = parseFloat(prompt('Quantos reais atualmente você possui ?'))

const menu = (money) => {
   let opt =  prompt(`Atualmente você possui: R$${parseFloat(money)} reais. \nO que deseja fazer ? \n1 - Adicionar valor \n2 - Remover valor \n3 - Retirar metade \n4 - Encerrar`)

   return --opt
}

do {
    opt = menu(initialMoney)
    switch(opt) {
        case 0:
            var addMoney = parseFloat(prompt('Quanto você deseja adicionar a conta: '))
            initialMoney += addMoney
            alert(`Você adicionou R$${addMoney} reais à conta`)
            break
        case 1:
            var removeMoney = parseFloat(prompt('Quanto você deseja retirar da conta: '))
            if (removeMoney <= initialMoney) {
                initialMoney -= removeMoney
                alert(`Você retirou R$${removeMoney} reais da conta`)
            }
            else {
                alert(`Você não pode retirar essa quantia!`)
            }
            break
        case 2:
            initialMoney = initialMoney/2
            alert(`Você retirou R$${initialMoney} reais da conta`)
            break
    }
        
} while (opt != 3)

alert(`Atualmente você possui R$${initialMoney} reais em sua conta. \nInvista esse valor para multiplicar seus ganhos!`)