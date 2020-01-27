# 04. Condicionais e escopos.

## Exercícios

4.1. Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.

```js
var isTrusty = function(param) {
	return param ? true : false;
};
```

4.2. Invoque a função criada acima, passando todos os tipos de valores `falsy`.

```js
isTrusty(NaN);
isTrusty(null);
isTrusty('');
isTrusty(0);
isTrusty(undefined);
isTrusty(-0)
isTrusty(false);
isTrusty(function(){})
```

4.3. Invoque a função criada acima passando como parâmetro 10 valores `truthy`.

```js
isTrusty(1);
isTrusty(-1);
isTrusty("true");
isTrusty(true);
isTrusty(1.1);
isTrusty(!!true);
isTrusty(!false);
isTrusty(!!true);
isTrusty('verdadeiro');
isTrusty(function () {return true;});
isTrusty([]);
isTrusty({});
```

4.4. Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão

```js
var carro = {
  marca: 'Toyota',
  modelo: 'Etios',
  placa: 'CGH1233',
  ano: '2020',
  cor: 'Prata',
  quantidadeDePortas: 4,
  assentos: 5,
  quantidadeDePessoas: 5,
}

```


4.5. Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.

```js
carro.mudarCor = function(novaCor){
	carro.cor = novaCor;
}
```


4.6. Crie um método chamado `obterCor`, que retorne a cor do carro.

```js
carro.obterCor = function(){
	return carro.cor;
}
```

4.7. Crie um método chamado `obterModelo` que retorne o modelo do carro.

```js
carro.obterModelo = function(){
	carro.modelo;
}
```

4.8. Crie um método chamado `obterMarca` que retorne a marca do carro.

```js
carro.obterMarca = function(){
	return carro.marca;
}
```

4.9. Crie um método chamado `obterMarcaModelo`, que retorne:
	- "Esse carro é um [MARCA] [MODELO]"
	- Para retornar os valores de marca e modelo, utilize os métodos criados.

```js
carro.obterMarcaModelo = function(){
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()} .`;
}
```

4.10. Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
	ok- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
	ok- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
	ok- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
	ok- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
	ok- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".

```js
carro.adicionarPessoas = function(pessoas){
	
	var message = '';

	if (carro.quantidadeDePessoas === carro.assentos && pessoas > 0) {
		message += 'O carro já está lotado!';
	} else if ((carro.quantidadeDePessoas + pessoas) > carro.assentos) {
		message += 'Só ';
		message += carro.assentos - carro.quantidadeDePessoas === 1 ? 'cabe mais' : 'cabem mais'; 
		message += ` ${carro.assentos - carro.quantidadeDePessoas} `;
		message += (carro.assentos - carro.quantidadeDePessoas) === 1 ? 'pessoa' : 'pessoas';
	} else {
		carro.quantidadeDePessoas += pessoas;
		message += `Já temos ${carro.quantidadeDePessoas} ` 
		message += carro.quantidadeDePessoas === 1 ? `pessoa` : `pessoas`;
		message += ` no carro!`;
	}

	return message;	
}
```

4.11. Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

4.12. Qual a cor atual do carro?

```js
console.log(carro.obterCor()); // Prata
```

4.13. Mude a cor do carro para vermelho.

```js
carro.mudarCor('Preta'); // Preta
```

4.14. E agora, qual a cor do carro?

```js
console.log(carro.obterCor()); // Preta
```

4.15. Mude a cor do carro para verde musgo.

```js
carro.mudarCor('Verde Musgo');
```

4.16. E agora, qual a cor do carro?

```js
console.log(carro.obterCor()); // Verde Musgo
```

4.17. Qual a marca e modelo do carro?

```js
console.log(carro.obterMarca()); // Toyota
```

4.18. Adicione 2 pessoas no carro.

```js
console.log(carro.adicionarPessoas(2)); // Já temos 2 pessoas no carro.
```

4.19. Adicione mais 4 pessoas no carro.

```js
console.log(carro.adicionarPessoas(2)); // Só cabem mais 3 pessoas!
```

4.20. Faça o carro encher.

```js
console.log(carro.adicionarPessoas(3)); // Já temos 5 pessoas no carro.
```

4.21. Tire 4 pessoas do carro.

```js
console.log(carro.adicionarPessoas(-4)); // Já temos 1 pessoa no carro.
```

4.22. Adicione 10 pessoas no carro.

```js
console.log(carro.adicionarPessoas(10)); // Só cabem mais 4 pessoas!
```

4.23. Quantas pessoas temos no carro?

```js
console.log(carro.quantidadeDePessoas); // 1
```