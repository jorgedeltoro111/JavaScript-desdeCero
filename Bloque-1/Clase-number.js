//1-Entero y decimal 
let a = 3.1416;
let b = 5;

console.log(typeof a, typeof b);

//Al ver el tipo de dato de las 2 variables observamos que siguen siendo de tipo number aunque uno sea decimal y el otro entero.
//2.Notacion cientifica - para expresar una potencia.
const cientifica = 5e3;
console.log(cientifica);

//3.Numeros infinitos NaN
const infinito = Infinity;
const noEsUnNumero = NaN;

console.log(infinito, noEsUnNumero);

//Exponenciacion
const g = 2**5;
console.log(g);

//precision
const result = 0.1 + 0.2;
console.log(result.toFixed(1));

//Raiz cuadrada
const raiz = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const ramdom = Math.random();

console.log(valorAbsoluto);