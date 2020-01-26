# 02. Operadores, estrutura e condicionais

## Exercícios

- Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções!

-  Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

```js
function soma(n1, n2){
    return n1 + n2;
}
```

-  Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

```js
f = soma(2, 2) + 5;
```

- Qual o valor atualizado dessa variável?

```js
// 9
```

- Declare uma nova variável, sem valor.

```js
var sem_valor;
```


- Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    - O valor da variável agora é VALOR.
    - Onde VALOR é o novo valor da variável.

```js
function getValue(){
    sem_valor = 100;
    return 'Valor da variável é ' + sem_valor;
}
```

- Invoque a função criada acima.

```js
get_value();
```

- Qual o retorno da função? (Use comentários de bloco).

```js
/*
100 
*/
```

- Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos;
    2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
    3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando 2 ao resultado da multiplicação.

```js
f = function (a,b,c){
    var result;
    if (a !== undefined || b !== undefined || c !== undefined){
        result = 'Preencha todos os valores corretamente!;
    } else {
        result = (a * b * c) + 2;    
    }
    return result;
}
```

- Invoque a função criada acima, passando só dois números como argumento.

```js
f(1,2);
```

- Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).


```js
Preencha todos os valores corretamente!
``` 

- Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

```js
f(1,2,3);
```

- Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

```js
// Retorno é igual a 6.
```

- Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos.
    2. Se somente um argumento for passado, retorne o valor do argumento.
    3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    5. Se nenhum argumento for passado, retorne o valor booleano `false`.
    6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.

```js
f = function (a,b,c){
    var result;
    if (a !== undefined && b === undefined && c === undefined){
        result = 'Preencha todos os valores corretamente!;
    } else if (a !== undefined && b !== undefined && c === undefined){
        result = a + b;
    } else if (a !== undefined && b !== undefined && c !== undefined){
    	result = (a + b) / c;
    } else {
        result = null;    
    }	
}
	
```  

- Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
```js
f(1); // 1
f(1,2); // 3
f(1,2,3); // 1
f(); // null
```
