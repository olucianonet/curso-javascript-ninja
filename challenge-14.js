(function (){

var nota = [];	
acertos.push(1);
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/

console.log( 'Number Objects Array:' );
var numberObjects = []

for (var i = 1; i <= 10; i++) {
	numberObjects.push({number: i});
}

console.log(numberObjects);
acertos.push(1);

/*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/

var justNumbers = numberObjects.map(function (item){
	return item.number;
});

console.log( `\nJust Numbers: ${justNumbers}` );
acertos.push(1);

/*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/

var justMod2Or3 = justNumbers.filter(function(item){
	return !(item % 2) || !(item % 3);
});
console.log( `\nJust module of division by 2 or 3: ${justMod2Or3}` );
acertos.push(1);

/*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/

console.log('\n');
var operation = justMod2Or3.reduce(function(x, y, index, array){
	console.log(`${x} + 1 * ${y} =  ${(x + 1) * y}`);
	return (x + 1) * y;
}, 0);
console.log( `\nOperation: ${operation}` );
acertos.push(1);

/*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/

console.log('\n');
var operation2 = justMod2Or3.reduceRight(function(x, y, index, array){
	console.log(`${x} + 1 * ${y} =  ${(x + 1) * y}`);
	return (x + 1) * y;
}, 0);
console.log( `\nOperation2: ${operation2}` );
acertos.push(0.5);


/*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/

var name = ['Lu', 'ci', 'a', 'no'];
var reduce = name.reduce(function(acc, cur){
	return acc + 'P' + cur;
}, '');

console.log( `\nSeu nome na língua do "P": ${reduce}` );

acertos.push(0);

/*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/

var inversedName = name.reduceRight(function(acc, cur){
	return acc + cur;

});
console.log(`\nInversed Name: ${inversedName}`);
acertos.push(0);

/*
Mostre no console o array `numberObjects`.
*/

console.log( `\nNumber objects:` );
console.log(numberObjects);
acertos.push(1);

/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/

var obj = numberObjects[1];

var e = numberObjects.indexOf(obj) > -1 
		? true
		: false;

console.log( '\nExiste um { number: 2 } em numberObjects?' );
console.log(
		e 
		? 'Existe um objeto { number: 2 } em numberObjects!'
		: 'Não existe um objeto { number: 2 } em numberObjects :('
);
acertos.push(0);

/*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/

var obj = numberObjects[1];

var e = numberObjects.lastIndexOf(obj, 2) > -1 
		? true
		: false;

console.log( '\nExiste um { number: 2 } em numberObjects?' );
console.log(
		e 
		? 'Existe um objeto { number: 2 } em numberObjects!'
		: 'Não existe um objeto { number: 2 } em numberObjects :('
);
acertos.push(0);

/*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/

console.log('\njustMod2Or3 é um array? Se for, a representação dele ' +
	'em String é:');
console.log(
	Array.isArray(justMod2Or3)
	? `Sim e a representação em String é ${justMod2Or3.toString()}`
	: `Não é array.`
);
acertos.push(1);

var pontos = acertos.reduce(function(acc, cur){
	 return acc + cur;
});
var nota = 10 / acertos.length * pontos;

console.log('===========================');
console.log(`Nota: ${notaFinal} `);
console.log('===========================');
})();