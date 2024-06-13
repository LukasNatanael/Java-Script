/*
Estoque de produtos

A classe `Product` deve ter as seguintes propriedades e métodos:
	
	Propriedades privadas:
		productsInStock
			- lista de todos os produtos em estoque
			- deve ser divididos por tipo
			- deve informar a quantidade de cada tipo de produto
	
			| products | type | quantity |
	
	constructor( type, name, quantity, price=0, brand='', validity ):
		- Obrigatórias:
			tipo do produto:
				- alimento
				- roupa
				- eletrônicos
			nome 
			quantidade
		- Opcionais(são avaliadas conforme o tipo do produto):
			preço
			marca
			validade
		** OPCIONAL: usuário que adicionou o produto, que é validado a partir da classe `User`
	
	métodos: 
		set Price( value )
			- adiciona o valor do produto
			- deve possuir uma propriedade `opcional` informando se o produto estava ou não na promoção
		set Brand( brand )
			- adiciona a marca do produto
		get Data()
			- retorna todas as propriedades do produto
		addFromStock( quantity )
			- deve informar a quantidade de produtos a serem adicionados
		removeFromStock( quantity )
			- deve informar a quantidade de produtos a serem removidos
*/