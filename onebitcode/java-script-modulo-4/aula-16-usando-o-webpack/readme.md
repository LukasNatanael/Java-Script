# Utilizando o [webpack](https://webpack.js.org/)

## O que é o webpack ?
O webpack é um **empacotador de módulo estático** ou seja, **ele unifica todos os módulos em apenas um único arquivo**, com um ou mais **pontos de entrada** em um ou mais **bundles**, que são esses **arquivos estáticos** contendo todos os módulos necessário para o funcionamento da aplicação.

Ele basicamente faz uma varredura em seu código, pega apenas os módulos utilizados, descartando os outros e unifica todos os módulos em um ou mais **bundles** criando assim um **pacote de módulos web**.

## Peças chaves do webpack

### Entry
É um ou mais **pontos de partida** onde o webpack irá procurar os módulos necessários para o empacotamento

### Output
**É o arquivo onde estará alocado o webpack dos módulos**, normalmente na pasta `dist` ou `public`

### Loaders
**Permite que o webpack consiga entender outros formatos de arquivo como: .css, .png, .jpg entre outros**, transformando-os em módulos válidos e incluindo-os no grafo de dependências.

### Plugins
**São utilizados para estender o comportamento do webpack, adicionando novos comportamentos e funcionalidades**, realizando tarefas mais elaboradas que os loaders (que apenas transformam módulos).

