# Utilizando o Babel

## Instalando módulos necessários do babel
```js
npm i -D @babel/core @babel/cli @babel/preset-env
```

## Convertendo códigos com babel
Esse código é mostrado no terminal apenas:
```js
npx babel index.js
```
é necessário passar o parámetro `--out-file` para que o código seja transferido para um arquivo separado

```js
npx babel index.js --out-file dist.js
```

## Utilizando presets
Esse código utiliza o preset padrão do babel que transforma o código, utilizando plugins e outros módulos, para que funcione em navegadores desatualizados, deixando nosso site ainda mais acessível. Ele permite usar mais de um preset se necessário. 
```js
npx babel index.js --out-file dist.js --presets=@babel/preset-env
```

## Configurando babel [presets, mode...]
Para configurar o `babel`, basta criar um arquivo chamado `babel.config.js`

```ps1
    ni babel.config.js
```
Após criarmos o arquivo basta inserir as configurações do mesmo no arquivo criado e exporta-las:

```js
module.exports = {
    presets: [
        ["@babel/preset-env"]
    ],
    mode: 'production'
}
```

## Como converter uma pasta de uma vez só ?
Para a conversão de vários códigos ao mesmo tempo, eles precisam estar na mesma pasta. Basta utilizar o seguinte comando:
```js
npx babel src --out-dir dist --presets=@babel/preset-env
```

Basicamente ele irá pegar todos os arquivos da pasta `src` e irá destinar sua **saida formatada** utilizando o parâmetro `--out-dir` para a pasta de sua escolha `dist` utilizando os presets padrões do babel `--presets=@babel/preset-env`

**Os presets não precisam mais ser passados pois já foram configurados anteriormente.**

#### Como automatizar essa tarefa ?
Para evitar digitar o mesmo código diversar vezes, basta adicionar como um `script` no `package.json`.

```json
  "scripts": {
    "babel": "babel src --out-dir dist"
  }
```

após isso basta utilizar o comando `npm run babel`

