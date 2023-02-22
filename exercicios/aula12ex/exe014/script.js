function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var cump = window.document.getElementById('cumprimento')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/manhã2.jpg'
        document.body.style.background = 'linear-gradient(to right, rgb(255, 177, 61), rgb(248, 206, 114))'
        cump.innerHTML = 'Bom dia!'
    }
    else if (hora < 18) {
        // Boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'linear-gradient(to right, rgb(68, 155, 10), rgb(188, 204, 40))'
        cump.innerHTML = 'Boa tarde!'
    }
    else {
        // Boa noite
        img.src = 'img/noite.jpg'
        document.body.style.background = 'linear-gradient(to right, rgb(6, 31, 83), rgb(28, 63, 128))'
        cump.innerHTML = 'Boa noite!'
    }
}
