(function(){
    'use strict';

    var acertos = [];
/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/
    acertos.push(1);    

/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/

    var name = 'Luciano'
    console.log( 'As letras do seu nome:' );
    for (var i = 0; i < name.length; i++){
        console.log(`${name.charAt(i)} é a ${i + 1}ª letra do meu nome.`);
    }

    acertos.push(1); 

/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/

    console.log( '\nNome convertido à partir de um slug:' );

    var fullName ='luciano-cunha';
    console.log(`Formato slug: ${fullName}`);

    console.log(`Formato Final: ${fullName.split('-').map(function(item){
                return item.split(item[0]).join(item[0].toUpperCase());
            }).join(' ')}`); 

    acertos.push(1); 

/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/

    console.log( '\nMeus amigos:' );
    var names = ['Maria','João','José', 'Marcos', 'Antonio'];
    console.log(names);
    console.log('Com reduce: ');
    console.log(
        names.slice(0,-1).reduce(function(acc, cur){
            return acc + ', ' + cur;
        }) + ` e ${names[names.length-1]} são meus amigos.`);

    acertos.push(1); 
/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/

    var name = 'Roberto';
    console.log( `\nEra ${name}, agora é: ${name.replace('to', 'ta')}`);

    acertos.push(1); 
/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/

    console.log( '\nParte de uma string:' );
    var str = 'Fernando';
    console.log(str.substr(-5));

    acertos.push(1); 
/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/

    var myName = 'Luciano';
    console.log(myName);
    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    var myNameCap = '';

    console.log(myName.split('').map(function(item, index){
        return !(index % 2) 
            ? item.toUpperCase()
            : item.toLowerCase();
        }).join(''));

// eof.

acertos.push(1); 
var pontos = acertos.reduce(function(acc, cur){
    return acc + cur;
});

var nota = 10 / acertos.length * pontos;

console.log('\n===========================');
console.log(`Nota: ${nota} `);
console.log('===========================');


})();