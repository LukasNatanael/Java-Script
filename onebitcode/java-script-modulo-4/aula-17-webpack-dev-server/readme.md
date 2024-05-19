# Criando um projeto front-end moderno com webpack e babel
Preparar toda a estrutura necessária para trabalhar em um projeto front-end moderno unificando todo o conhecimento aprendido até o momento.

Módulos necessários para iniciar o o projeto:
1. webpack
1. babel

Objetivo:
Integrar o babel ao webpack utilizando o **babel-loader**.Você também deverá **integrar o css ao webpack, utilizando o style-loader e o css-loader** (ambos podem ser instalados através do npm).

**Para executar o webpack você deverá criar um script chamado “build”**. Além disso, a saída do webpack deve ser nomeada de acordo com o nome do ponto de entrada no formato “[name].min.js” e o seu conteúdo deve estar minificado.

Por fim, você deve testar seu projeto criando uma página html simples que seja capaz de carregar a estilização e o javascript de saída do webpack corretamente.

## webpack-dev-server
Funciona como o liveserver do vscode, para instalar o módulo basta rodar:
```js
npm i -D webpack-dev-server
```

Para executar o server basta rodar o seguinte comando no terminal:
```js
npx webpack-dev-server
```

caso queira automatizar o processo basta criar um script:

```json
  "scripts": {
    "dev": "webpack-dev-server"
  }
```
Agora basta rodar ```npm run dev``` para inicializar o servidor
