# Banco digital

## Deposit
Deverá possuir atributos para:
    
    - valor 
    - data de criação

## Transfer
Deverá possuir atributos para: 

    - usuário que enviou a transferência
    - usuário que recebeu a transferência
    - valor
    - data de criação

## Installment
Deve possuir atributos para: 

    - valor da parcela
    - número dela 
    - seu status (paga ou pendente)


## User
Deve possuir atributos para:

    - nome completo
    - email
    - conta



## Loan
Deverá possuir: 

    - Um atributo estático privado para a taxa de juros e que possui um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem.

    - Atributos para o valor do empréstimo e para a data de criação. 

    - Um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo.


## Account
Deve possuir atributos para:

    - Saldo
        O atributo do saldo deve ser privado e somente de leitura, ou seja, seu valor não pode ser reatribuído, somente podendo ser modificado através dos depósitos, empréstimos e transferências. 

    - Uma lista de todos os depósitos realizados
        Deve possuir um método para fazer um novo depósito, onde o valor do deposito será acrescentado ao saldo e a instância de Deposit ao atributos array de depósitos.

    - Uma lista de todos os empréstimos realizados
        Deve possuir um método para fazer um novo empréstimo, que deverá acrescentar o valor do empréstimo ao saldo e salvar a instância de Loan no atributo array de empréstimos. 

    - Uma lista de todas as transferências realizadas
        Deve possuir um método de fazer uma transferência, onde é verificado se a transferência foi feita para o dono da conta ou pelo dono da conta para outro usuário. Se feito para o dono da conta, o valor dela deve ser acrescentado ao saldo. Se feito pelo dono da conta para outro usuário, o valor dela deve ser descontado do saldo. Além disso, a transferência deve ser salva no atributo array de transferências.

    - Informar o dono da conta


## App 

Deve possuir:
    
    - Um atributo estático privado para a lista dos usuários do app.

    - Um método estático para encontrar um usuário a partir do seu email.

    - Um método estático para criar um novo usuário que só permite criar um usuário por email, ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente.
    
    - Métodos estáticos para realizar as operações de:
        - depósito
        - transferência 
        - empréstimo
        
        Elas devem ter como parâmetro as informações necessárias, como o email do usuário que está realizando a operação e o valor.
    
    - Um método para alterar a taxa dos empréstimos.
    