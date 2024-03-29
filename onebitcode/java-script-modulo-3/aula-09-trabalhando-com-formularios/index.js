const form = document.querySelector('#orderForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name         = document.querySelector('input[id="name"]').value
    const address      = document.querySelector('input[id="address"]').value
    const breadType    = document.querySelector('select[name="breadType"]').value
    const main         = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value
    
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach( (item) => {
        salad += `- ${item.value} \n`
    } )

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    })

    alert(
        'Pedido Realizado! \n' +
        `\nNome do cliente: ${name}` +
        `\nEndereço de entrega: ${address}` +
        `\nTipo de pão: ${breadType}` +
        `\nRecheio: \n - ${main} \n ${salad}` +
        `Observações: ${observations}`
      )
})