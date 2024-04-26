const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
}

// console.log(user.friends[0].phone.ddd)
/*
  Encadeamento Opcional:
    Simbolo => ?.
    
    É uma forma de tratar erros, parecido com `try & catch`. Ao invés de ele retornar um erro, ele retorna um valor `undefined` caso não encontre o que foi solicitado.

    Como nos exemplos abaixo, ele tenta localizar atributos que não existem dentro do array `user` logo, ele retornará o valor `undefined`

*/

console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)
console.log(user?.brothers?.[5].name)
