//Conversion explicita
const string = '42';
const integer = parseInt(string);
console.log(integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(stringDecimal);
//conversion implicita
const sum = '5' + 3;
console.log(sum);//=53 solo realiza una concatenacion


//si utilizamos primero strings va a buscar la concatenacion, pero si iniciamos con un numero vamos a buscar la operacion aritmetica.