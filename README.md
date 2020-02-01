# 5. Arrays e objetos em funções

## Exercícios

5.1. Crie uma variável qualquer, que receba um array com alguns valores aleatórios - ao menos 5 - (fica por sua conta os valores do array).

```js
var arr = [1,2,3,4,5];
```

5.2. Crie uma função que receba um array como parâmetro, e retorne esse array.

```js
var f = function (arr){
 return arr; 
};
```

5.3. Imprima o segundo índice do array retornado pela função criada acima.

```js
console.log(f(arr)[1]);
```

5.4. Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.

```js
f = function (arr, num){
  return arr[num];
};
```

5.5. Declare uma variável que recebe um array com 5 valores, de tipos diferentes.

```js
var arr = [1,2,3,4,5];
```

5.6. Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.

```js
f(arr, 0);
f(arr, 1);
f(arr, 2);
f(arr, 3);
f(arr, 4);
```

5.7. Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
	- esse objeto irá receber 3 propriedades, que serão nomes de livros;
	- cada uma dessas propriedades será um novo objeto, que terá outras 3 propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
	- A função deve retornar o objeto referente ao livro passado por parâmetro.
	- Se o parâmetro não for passado, a função deve retornar o objeto com todos os livros.

```js
function book (nomeDoLivro){
	var livros = {
		'The Big Change': {
			quantidadeDePaginas: 100,
			autor: 'Carmen Castellani',
			editora: 'Longman',
			},
		'O Alienista': {
			quantidadeDePaginas: 150,
			autor: 'Machado de Assis',
			editora: 'Cultura',			
		},
		'A Metamorfose': {
			quantidadeDePaginas: 200,
			autor: 'Franz Kafka',
			editora: 'Cia das Letras',			
		}
	}

	return nomeDoLivro ? livros[nomeDoLivro] : livros;
}
```

5.8. Usando a função criada acima, imprima o objeto com todos os livros.

```js
console.log(book());
```

5.9. Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"

```js
var livro = 'O Alienista';
console.log("O livro " + livro + ' tem ' + book(livro).quantidadeDePaginas);
```

5.10. Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."

```js
console.log("O autor do livro " + livro " é " + book(livro).autor + ".");
```

5.11. Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."


```js
console.log("O livro "  + livro + " foi publicado pela editora " + book(livro).autor + ".");
```