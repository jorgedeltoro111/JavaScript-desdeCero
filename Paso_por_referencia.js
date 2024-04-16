//Tipo de dato complejo - Paso por referencia
let frutas = {
    naranja: 'naranja'
}
let vegetales = frutas;

vegetales.naranja = 'Manzana';
console.log(frutas);