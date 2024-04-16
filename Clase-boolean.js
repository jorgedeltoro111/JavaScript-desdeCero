const isActive = true;

const result = 5 > 3;
console.log(result);
//Nos retornara un true o un false dependiendo si la condicion es verdadera o falsa.
//Para poder ver si una variable tiene un valor podemos utilizar los signos de admiracion 
const number = 10;
console.log(!!number);
//conversion explicita - convertira el valor de value que es 0 y lo pondra en falso en la variable explicitValue.
const value = 0;
const explicitValue = Boolean(value);
console.log(explicitValue);
//valores unicos
const uniqueId = Symbol('id');
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2); // false

const ID = Symbol('id');
let user = {};
user[ID] = '12345';
console.log(user); // { [Symbol(id)]: '12345' }