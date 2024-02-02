const person = {
    name : 'Lukas',
    age  : 19,
    sayHello() {
        console.log(`Hello world, my name is ${this.name}, I have ${this.age} year old.`)
    }
}

person.sayHello()