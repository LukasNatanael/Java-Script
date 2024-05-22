"use strict";

var Author = require('./Author.js');
console.clear();
var lukas = new Author('Lukas Natanael', 'lukas@lukas.lukas', 123);
var pcGamer = lukas.createNewPost('Montei meu pc gamer', 'Comecei a trabalhar ano passado, e desde então comecei a dar pequenos passos para alcançar cada meta que eu possuia...');
pcGamer.addComment('Matheus', 'Que maneiro! Como você começo a trabalhar, provavelmente possui alguma nova meta, quais seriam elas ?');
var perifericos = lukas.createNewPost('Gostaria de comprar novos perféricos, alguém recomenda algum ?', 'Recentemente montei meu pc gamer praticamente completo, mas aida faltam alguns periféricos, não me importo tanto com quanto irei gastar, desde que sejam periféricos de boa qualidade. Vocês tem algum para me recomendar ?');
perifericos.addComment('Pedro', 'Você precisa de algum perifério em específico ?');
perifericos.addComment('João', 'Tem algum gosto para que eu possa ter como base ?');
perifericos.addComment('Talita', 'Quais são as cores que você utiliza em seu setup ?');
console.log(lukas);
console.log(pcGamer);