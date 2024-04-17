//Primitivos - inmutables - por valor
//El cambio por valor unicamente es la reasignacion de la variable
let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c)

a = 12;
b = 'mundo';
c = undefined;

console.log(x, y, z, a, b, c)

//Complejos - mutables - por referencia

let games = ['zelda'];
games.push('mario bros');
console.log(games);

let panes = ['concha']; //array con la direccion #1
let copia = panes;//la copia apunta a la direccion #1
panes.push('hola'); //si le agregamos al array original un pan entonces en la copia se podra ver el nuevo elemento porque esta apuntando al original.
console.log(copia);

