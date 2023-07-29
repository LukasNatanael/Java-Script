function registrar() {
    const nome = document.querySelector('#nome')
    const sobrenome = document.querySelector('#sobrenome')
    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')
    
    if(senha.value === '') {
        console.log('Informe seu SENHA')
        senha.focus()
    }
    if(email.value === '') {
        console.log('Informe seu EMAIL')
        email.focus()
    }
    if(sobrenome.value === '') {
        console.log('Informe seu SOBRENOME')
        sobrenome.focus()
    }
    if(nome.value === '') {
        console.log('Informe seu NOME')
        nome.focus()
    }

    dados = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        senha: senha.value
    }

    let url
    url = 'data.json' 

    fetch(url).then((response) => {
        return response.json()
    }).then(data => {
        if(data.err) {
            console.log('Erro ao carregar dados')
        }

    })
    console.log(dados)
}