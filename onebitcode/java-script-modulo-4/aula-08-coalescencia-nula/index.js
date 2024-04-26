let a = 0
let b = a || 42 // b === 42
let c = a ?? 42 // b === 0
let d = undefined ?? 15

/*
    O operador ?? serve para verificar se um valor é `undefined` ou `null` e caso seja, ele atribui outro valor padrão a variável (definido pelo dev)
    Ou seja, ele verifica se a variável `a` é `undefined` ou `null` e caso seja, ele atribui o valor `42` a variável `b` que seria o valor padrão da variável

    Diferente do || que considera 0 como `undefined` ou  `null` o operador ?? considera 0 como um valor válido
*/

console.log({ a, b, c, d })
