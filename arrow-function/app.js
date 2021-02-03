/*function sum(number1, number2){
    return number1 + number2
}


const sum = (number1, number2) => {
   return number1 + number2
}

Não é possível atribuir um nome a uma arrow function, apenas
atribui-la a uma variável.

===============================================

O primeiro tipo de arrow-function é o não return mas retorna,ele
retorna o valor da função mesmo sem o nome return. Porém precisa-se 
tirar as chaves da função para retornar

const sum = (number1,  number2) => number1 + number2;

console.log(sum(10, 10));

================================================

Outra funcionalidade é a função sem paramêtros

const comunnity = () => 'CollabCode';

console.log(comunnity());

================================================

const double = (number) => number * 2;

console.log(double(2));

================================================

Arrow function com 2 ou mais paramêtros.

const sum = (n1, n2, n3) => n1 + n2 + n3;

console.log(sum(20, 30, 40));

================================================

Quando se usa um objeto que tem chaves, não é possível usar 
o return pois o return exige as chaves, porém, o objeto também 
exige chaves, assim gera uma confusão pois não é possível tirar
as chaves sendo que o objeto precisa delas, então a sintaxe deve 
ter parenteses ao inves da chaves na arrow-function.

const getPerson = () => ({name: 'Pedro'});

console.log(getPerson());

================================================

Quando se tem dois arquivos de javascript dentro do mesmo HTML 
com duas funções iguais, o navegador so vai executar uma delas,
vai dar um erro com a segunda, para resolver isso é so colocar o 
codigo dentro de uma função, que pode ser sem nome ou até mesmo 
uma função que alto se chama no começo. Para deixar a função sem 
nome precisa-se envolve-la entre parentese.

function init(){
    //Código;
}
init();

(function (){
    //Código;
})()

(() => {
    //Código;
})()

==================================================
*/
