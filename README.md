# 01. Variáveis, tipos, operadores e funções

## Exercícios


1.1. Declarar uma variável chamada `myvar`, sem valor.

```js
var myvar;
```

1.2. Após declarada, atribua o valor 10 à variável `myvar`.

```js
myvar = 10;
```

1.3. Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

```js
var soma = 15 + 8;
```

1.4. Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

```js
soma++; // ou
soma += 1;
```

1.5. Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

```js
soma *= 3;
```

1.6. Qual é o valor da variável `soma` até aqui?

```js
console.log(soma); // 72
``` 

1.7. Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

```js
var souninja = true;
```

1.8. Declare uma variável chamada `comida` que recebe um array com os valores 
`arroz`, `feijão` e `ovo`.

```js
var comida = ['arroz', 'feijão', 'ovo'];
```

1.9. Digite a instrução que imprime o valor de `feijao`, que está na variável `comida`.

```js
console.log(comida); // ou
comida; 
```

2.0. Digite o código que verifica se a variável `soma` é igual a variável `myvar` (testando também o tipo).

```js
soma === myvar;
```

2.1. Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

```js
myvar <= soma;
```

2.2. Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

```js
var divisao = function(dividendo, divisor){
    return dividendo / divisor;  
};
```

2.3. Invoque a função criada acima, passando os parâmetros 10 e 2.

```js
console.log(divisao(10, 2)); // 5
```
