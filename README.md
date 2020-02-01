# 06. Operador vírgula e switch

## Exercícios

6.1. Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.

```js
var championship = 'Campeonato Paulista';
console.log(championship);
```

6.2. Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.

```js
var teams = ['Santos', 'Ponte Preta', 'Palmeiras', 'São Paulo', 'Guarani',];
console.log(`Times que estão participando do campeonato: ${teams}.`);
```

6.3. Crie uma função chamada `showTeamPosition` com as seguintes características:
- A função deve receber um número por parâmetro;
- A função deve retornar a frase:
_"O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME]."_
- Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times. 
---  

> _Dica: lembre-se que arrays começam no índice zero, então a posição passada deve ser sempre um número a mais que o índice do array ;)_    

---
- A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
- Se não houver time para a posição passada, deve retornar a mensagem:
_"Não temos a informação do time que está nessa posição."_


```js
var showTeamPosition = function(posicao){
        var message = '';
        message += `O time que está em ${posicao--} é o `;
        message = teams[posicao] === undefined ? 
        'Sem informação para essa posição' : message + `${teams[posicao]}.`;
    return  message;
};
```

6.4. Escolha 4 times do campeonato selecionado e mostre a posição dele, 
usando a função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.

```js
console.log(showTeamPosition(1)); // Santos
console.log(showTeamPosition(2)); // Ponte Preta
console.log(showTeamPosition(3)); // Palmeiras
console.log(showTeamPosition(6)); // 'Sem informação para essa posição.'
``` 

6.5. Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".

```js
var showNumbers = function() {
  var show = true;
  var num = 20;
  while(show){
    console.log(num);
    num++;
    show = num > 30 ? false : true;
  }
} ;   
```

6.6. Crie uma função chamada `convertToHex`, com as seguintes características:
- A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
- Escolha 5 cores que serão convertidas do nome da cor para o seu equivalente hexadecimal (pode ser qualquer tom);
- Usando a estrutura switch, verifique se a cor passada por parâmetro é algum hexa escolhido. Se for, retorne a frase:
_"O hexadecimal para a cor [COR] é [HEXADECIMAL]."_;
- Se a cor passada por parâmetro não estiver entre as selecionadas, mostre a frase:
_"Não temos o equivalente hexadecimal para [COR]."_
- Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.

```js
var convertToHex = function(color){

    var message = `O hexadecimal para a cor ${color} é `;

    switch(color.toUpperCase()){
        case 'RED':
            return message + `${'#eb3434'}.`;
        case 'YELLOW':
            return message + `${'#dceb34'}.`;
        case 'GREEN':
            return message + `${'#6eeb34'}.`;
        case 'BLUE':
            return message + `${'#3d34eb'}.`;
        case 'CYAN':
            return message + `${'#34dfeb'}.`;
        default:
            return `Não temos o equivalente hexadecimal para ${color}.`;
    }
};

console.log('red'); // 'O hexadecimal para a cor red é #eb3434.'
console.log('brown'); // 'Não temos o equivalente hexadecimal para brown.'
.
.
.
``` 
