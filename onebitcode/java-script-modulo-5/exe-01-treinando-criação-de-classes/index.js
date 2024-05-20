const User = require('./User.js');
const Product = require('./Product.js');

const rafael     = new User('Rafael', 'rafael@gmail.com', '123')
const watch = new Product('Smart Watch', '...', 80)

console.clear()
rafael.login('rafael@gmail.com', '123')

watch.addToStock(15)
watch.calculateDiscount(50)

const watchWithDiscount = watch.calculateDiscount(15)
console.log(`O valor original do ${watch.name} é ${watch.price},00 pagando à vista você tem 15% de desconto totalizando em R$${watchWithDiscount},00 reais`)