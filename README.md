# 07. Operador módulo e array

## Exercícios 

7.1. Crie um array com 5 items (tipos variados).

```js
var arr = [1, 2.1, 'string', null, function(){return 'hello'},];
```

7.2. Crie uma função chamada `addItem`, que irá adicionar itens no array criado. A função deverá retornar o array atualizado.

```js
arr.addItem = function(item){
    arr.push(item);
    return arr;
};
```

7.3. Adicione um novo array ao array criado no início do desafio, com ao 
menos 3 itens de tipos diferentes, mostrando o resultado no console.

```js
console.log(arr.addItem(
        [{nome: 'luciano', profissao: 'programador',}, null, undefined]));
```

7.4. Mostre no console o segundo elemento desse último array, criado acima, 
com a frase:
_"O segundo elemento do segundo array é [ELEMENTO]."_

```js
console.log(`O segundo elemento do segundo array é ${arr[5][1]}.`);
```

7.5. Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."

```js
console.log(`O primeiro array tem ${arr.length} itens.`)
```

7.6. Agora mostre no console quantos itens tem o segundo array criado, com a frase: _"O segundo array tem [QUANTIDADE DE ITENS] itens."_

```js
console.log(`O segundo array tem ${arr[5].length} itens.`)
```

7.7. Utilizando a estrutura de repetição `while`, mostre no console todos 
os números pares entre 10 e 20, inclusive esses 2.

```js
console.log( 'Números pares entre 10 e 20:' );

var showEvenNumbers = function(min, max){
    
    while(min <= max){

        !(min % 2) ? console.log(min) : null;
        min++;
    }

};

showEvenNumbers(10, 20);
```

7.8. Na mesma ideia do exercício acima: mostre agora os números ímpares.

```js
console.log( 'Números ímpares entre 10 e 20:' );

var showOddNumbers = function(min, max){
    
    while(min <= max){

        (min % 2) ? console.log(min) : null;
        min++;
    }

};

showOddNumbers(10, 20);
```

7.9. Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
- Só vamos mudar o range:
    - No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
    - No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.

```js
console.log( 'Números pares entre 100 e 120:' );
var showEvenNumbers = function(min, max){
    
    for ( ;min <= max; min++ )
    while(min <= max){

        !(min % 2) ? console.log(min) : null;
        min++;
    }

};

showEvenNumbers(100, 120);
```

```js
console.log( 'Números ímpares entre 111 e 125:' );

var showOddNumbers = function(min, max){
    
    for ( ;min <= max; min++ )
    while(min <= max){

        min % 2 ? console.log(min) : null;
        min++;
    }

};

showOddNumbers(111, 125);
```
