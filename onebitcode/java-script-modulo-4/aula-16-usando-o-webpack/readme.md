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

## Instalando webpack
Instalando pacotes necessários para começar o empacotamento
```js
npm i -D webpack webpack-cli
```

### Empacotando módulos
```js
npx webpack
```
Ao utilizar esse comando ele irá criar uma pasta `dist` com um bundle chamado `main.js`. **Após o bundle ser criado a pasta** `node_modules` **poderá ser excluida**.

### Configurando webpack
Criando o arquivo de configuração do webpack:
```ps1
ni webpack.config.js
```

#### Instalando módulos necessários
Esse módulos são necessários para interpretar e empacotar arquivos .css

```js
npm i -D style-loader css-loader
```

Setando as configurações do webpack e exportando-as. Várias dessas configurações são padrões do webpack, não sendo necessário definir algumas delas.
```js
const path = require('path')

module.exports = {
    // definindo os pontos de entrada, com seus respectivos caminhos
    entry: {
        index: './src/index.js',
        // esse será o nome do webpack, pode ser trocado para outro nome

        hello: './src/hello.js',
        // caso seja necessário definir outro ponto de entrada, basta informar o caminho e o nome do arquivo
    },

    // definindo o modo do empacotamento [production, development ]
    mode: 'development',

    // definindo loaders, para importar outros tipos de arquivos
    module: {
        rules: [{
            test: /\.css$/,
            // serve para identificar o arquivo em que o loader deve ser executado

            use: ['style-loader', 'css-loader']
            // informa quais loaders serão utilizados
        }]
    },

    // definindo diretório de saída, com o nome dos respectivos pontos de entrada
    output: {
        path: path.resolve(__dirname, 'public'),
        // ele irá criar a pasta `public` e criar o arquivo `index.js` dentro dela 

        filename: '[name].bundle.min.js'
        // posso escolher o nome do arquivo, que não precisa ser necessáriamente `index.js`
    }
}
```

**É necessário incluir os novos arquivos no ponto de entrada que nesse caso é** `index.js`

Diretório: `./src/index.js`
```js
import './styles/index.css'
```
