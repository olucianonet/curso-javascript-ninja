# 08. Functional programming

## Exercícios

8.1. Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.

```js
var sum = function calculateSum(x, y){
	return `A soma de ${x} e ${y} é igual a ${1 + 1}.`
};
```

8.2. Invoque a função criada acima, passando dois números que serão somados, e mostre o resultado no console, com a frase:
_"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."_

```js
console.log(sum(1, 3));
```

8.3. Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."

```js
console.log(`O nome da função que faz a soma é ${sum.name}.`);
```

8.4. Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.

```js
function showName(){
	return 'Luciano Cunha';
}

console.log(showName());
```

8.5. Declare uma variável chamada `varShowName` que recebe a função criada acima.

```js
var varShowName = showName;
```

8.6. Usando a variável criada acima, mostre no console o nome e o retorno da função atribuída a ela, com a seguinte frase:
_"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."_

```js
console.log(`A função ${varShowName.name} retorna ${varShowName()}.`)
```

8.7. Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."

```js
function calculator(oper){
	return function(a, b){
		message = `Resultado da operação:  ${a} ${oper} ${b} = `
		switch (oper){
			case '+':
				return message + `${a + b}.`;
			case '-':
				return message + `${a - b}.`;
			case '*':
				return message + `${a * b}.`;
			case '/':
				return message + `${a / b}.`;
			case '%':
				return message + `${a % b}.`;
			default: 
				return 'Operação inválida.';
		}
	}
}
```
8.8. Declare uma variável chamada `sum`, que receberá a função acima, passando como parâmetro o operador de soma.

```js
var sum = calculator('+');
```

8.9. Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.

```js
console.log(sum(10, 2)); // Resultado da operação:  10 + 2 = 12.
```

8.10. Agora, declare algumas variáveis com os nomes `subtraction`, 
`multiplication`, `division` e `mod`, e atribua a elas a função `calculator`, passando o operador correto por parâmetro para cada uma delas.

```js
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');

```
8.11. Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
```js
console.log(subtraction(10, 2)); // Resultado da operação:  10 + 2 = 12.
console.log(multiplication(10, 2)); // Resultado da operação:  10 * 2 = 20.
console.log(division(10, 2)); // Resultado da operação:  10 / 2 = 5.
console.log(mod(10, 2)); // Resultado da operação:  10 % 2 = 0.
```