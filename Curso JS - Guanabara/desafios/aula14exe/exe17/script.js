function tabuada() {
    var num = document.getElementById('numero')
    var tabuada = document.getElementById('tabuada')

    if(num.value.length == 0 ) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tabuada.innerHTML = ''
        for (var c = 1; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            tabuada.appendChild(item)
        }
    }
}