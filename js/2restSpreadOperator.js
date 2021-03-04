/*function sum(a, b){
  return a + b;
}

console.log(sum(25,25));*/


 //jeito "normaL"

/*function sum(a, b){
  var value = 0;

  for (var i = 0; i <arguments.length; i++) {
    value += arguments[i];
  }
   return value;
}

console.log(sum(2,5,2));*/

// ES6 rest operator (...) pega todos os parametros de uma função e transforma em um array

/*function sum(...args){
  return args.reduce((acc, value) => acc + value, 0);
  }
   

console.log(sum(5,2,5));*/

/*const multiply = (...args) => args.reduce((acc,value) => acc * value, 1);


const sum = (...rest) => {
  return multiply.apply(undefined, rest)
};



console.log(sum(5,5,5,2,3));*/

/*const multiply = (...args) => args.reduce((acc,value) => acc * value, 1);


const sum = (...rest) => {
  return multiply(...rest)
};



console.log(sum(5,5,5,2,3));*/

//spread operator => pega todos os itens do array e transforma para parametros paera função (serve para strings, arrays, objects e objetos literais)

/*const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);*/

//Possui indice ao lado de cada caractere

/*const str = 'Digital Innovation One';
const arr = [1,2,3,4,5];

function logArgs() {
    console.log(arguments);
}

logArgs(...arr); //cada item do array vira um argumento da função*/

//spread operator para construir arrays

// const str = 'Digital Innovation One';
// const arr = [1,2,3,4,5];

// function logArgs() {
//     console.log(arguments);
// }

// const arr2 = arr.concat([5,6,7]); //uma forma de cobinar arrays

// console.log(arr2)

// const str = 'Digital Innovation One';
// const arr = [1,2,3,4,5];

//  function logArgs(a,b,c) {
//     console.log(a,b,c);
// }

// const arr2 = [...arr,5,6,7]; //uma forma de cobinar arrays

// console.log(arr2);

// const str = 'Digital Innovation One';
// const arr = [1,2,3,4,5];

//  function logArgs(a,b,c) {
//     console.log(a,b,c);
// }

// const arrClone = [...arr]

// console.log(arrClone);

//Trabalhando spread operator com objetos iterais de


const obj = {
    test:123
};

const obj2 = obj

obj2.teste = 456


console.log(obj);