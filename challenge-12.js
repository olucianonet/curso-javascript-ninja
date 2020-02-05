(function(){
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/

	console.log( 'Propriedades de "person":' );
	var person = {
		name: 'Luciano',
		lastname: 'Cunha',
		age: 38,
	}

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/

	console.log(Object.keys(person));

	/*
	Crie um array vazio chamado `books`.
	*/

	var books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/	

	console.log( '\nLista de livros:' );
	books.push({name: 'Livro 1', pages: 100});
	books.push({name: 'Livro 2', pages: 200});
	books.push({name: 'Livro 3', pages: 300});

	/*
	Mostre no console todos os livros.
	*/
	for (var l = 0; l < books.length; l++){
		console.log(books[l]);
	}

	console.log( '\nLivro que está sendo removido:' );

	/*
	Remova o último livro, e mostre-o no console.
	*/
	// var livroRemovido = books.pop();
	console.log(`Removendo o livro: ${books.pop().name}`);

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/

	for (var l = 0; l < books.length; l++){
		console.log(books[l]);
	}

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	
	console.log( '\nLivros em formato string:' );
	for (var i = 0; i < books.length; i++){
		books.push(JSON.stringify(books.pop()));
		books.reverse();
	}

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(books);

	/*
	Converta os livros novamente para objeto.
	*/
	
	console.log( '\nAgora os livros são objetos novamente:' );
	for (var i = 0; i < books.length; i++){
		books.push(JSON.parse(books.pop()));
		books.reverse();
	}	

	console.log(books);
	console.log("")
	console.log("")

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/

	for (var i = 0; i < books.length; i++){
		var props = Object.keys(books[i]);
		for (var p = 0; p < props.length; p++){
			console.log(`${props[p]} : ${books[i][props[p]]}`);			
		}
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	// ?
	var myName = [];
	for (var i = 0; i < 'Luciano'.length; i++){
		myName.push('Luciano'[i]);
	}
	console.log(`\nMy name: ${myName}`);

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log(`Meu nome: ${myName.join('')}`)
	console.log( `\nMeu nome invertido é: ${myName.reverse().join('')}` );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	// ?

	console.log( `\nAgora em ordem alfabética: ${myName.sort().join('')}` );

	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/

})();