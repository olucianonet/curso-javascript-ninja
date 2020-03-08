(function(window, document){
    'use strict';

/*
O desafio dessa semana é criar uma mini library (biblioteca) para
reutilizarmos nossos códigos quando fizermos manipulação de DOM!

Requisitos:
- O nome da lib deve ser "DOM".
- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
Essa string será o nó do DOM a ser selecionado;
- No construtor, você deve atribuir à `this.element` todos os elementos
do DOM selecionados;
- Extenda a lib para ter os métodos `on`, `off` e `get`.
- O método `on` irá adicionar um listener de evento a todos os elementos
selecionados.
- O método `off` irá remover o listener de evento de todos os elementos
selecionados.
- O método `get` deve retornar os elementos.
- O código abaixo deve funcionar corretamente após a lib criada.

Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
Só passe para o próximo problema quando tiver resolvido o anterior :)
*/

var addBg = function(){this.style.backgroundColor = "red";};
var rmvBg = function(){this.style.backgroundColor = "white";};

function DOM(node){
    this.element = document.querySelectorAll(node);

    this.on = function(){
        for(var i = 0; i < this.element.length; i++){            
            this.element[i].addEventListener("mouseover", addBg, true);
            this.element[i].addEventListener("mouseleave", rmvBg, true);
        }
    };

    this.off = function(){
        for(var i = 0; i < this.element.length; i++){            
            this.element[i].removeEventListener("mouseover", addBg);
            this.element[i].removeEventListener("mouseleave", addBg);
        }
    };

    this.get = function(){
        return this.element;
    };
}

var $a = new DOM('[data-js="link"]');
$a.on('click', function(e) {
  e.preventDefault();
  console.log('clicou');
});

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(window, document);