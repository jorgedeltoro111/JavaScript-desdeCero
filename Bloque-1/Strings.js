//Creacion de string
const firstOption = 'Comillas simples';
const secondOption = "comillas dobles";
const thirdOption = `comillas simples`;

//concatenación: Opcion 1 con el operador "+"
const direccion = 'calle rosas';
const ciudad = 'gdl';
const direccionCompleta = 'Mi direccion es: ' + direccion + ' ' + ciudad;
console.log(direccionCompleta);

//concatenación: Opcion 2 con template literals
const nombre = 'jorge';
const pais = 'mexico';
const presentacion = `Hola soy ${nombre} y naci en ${pais}`;
console.log(presentacion);

//concatenación: Opcion 3 join
const primeraParte = 'Me encanta';
const segundaParte = 'la gente de';
const terceraParte = 'mexico';
const presentacion2 = [primeraParte, segundaParte, terceraParte];
console.log(presentacion2.join(' '));
//concatenación: Opcion 4 concat
const hobbie1 = 'jugar';
const hobbie2 = 'nadar';
const hobbie3 = 'salir';
const hobbies = 'Mis hobbies son:'.concat(hobbie1, ', ',hobbie2, ', ', hobbie3);
console.log(hobbies);