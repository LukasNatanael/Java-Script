const User = require('./User.js');
const Product = require('./Product.js');

const Rafael     = new User('Rafael', 'rafael@gmail.com', '123')
const ToucaCetim = new Product('Touca de cetim', 'Protege seu cabelo durante o sono e evita frizz', 12)

console.clear()
Rafael.login('rafael@gmail.com', '123')

ToucaCetim.addToStock(15)
ToucaCetim.calculateDiscount(50)

console.log(`A ${ToucaCetim.name} está com um desconto de ${ToucaCetim.discountOf}%. Ela saiu de R$${ToucaCetim.price},00 para R$${ToucaCetim.calculateDiscount(ToucaCetim.discountOf)},00`)