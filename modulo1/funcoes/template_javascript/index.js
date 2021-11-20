/*Exercícios de interpretação de código

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))//A VARIAVEL SER MULTIPLICADA VAI DAR 10
console.log(minhaFuncao(10))//A VARIAVEL SER MULTIPLICADA POR E VAI DAR 0

// SE TIRAR O console.log nao vai aparecer nada,pois nada vai ser exibido no console.
*/

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//A funcao transforma todas letras da string em minusculas e verifica se a string contém a palavra "cenoura", retornando resultado booleano true ou false
/*
i.   Eu gosto de cenoura // retorna valor true
ii.  CENOURA é bom pra vista // retorna valor true
iii. Cenouras crescem na terra //retorna valor true

*/
