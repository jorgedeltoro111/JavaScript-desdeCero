//Primitivo inmutable
let numero = 23;
numero = numero + 10;
console.log(numero);
/*Aqui lo que sucede es una suma al numero original que es el 23, pero el numero 23 no se pierde, 
javascript lo que hace es mostrar el nuevo resultado en una capa superior de donde se encuentra el 
numero 23 que fue el numero que se declaro primero.
Esto quiere decir que el valor real que se le asigne a una variable es inmutable, cuando se "modifica"
el valor de esa variable en realidad crea un nuevo valor.*/
let band = true;
band = false;
console.log(band);

//Tipo de dato complejo - mutable
let usuario = {
    nombre: 'jorge',
    edad: 21
}
usuario.edad = 30;
console.log(usuario);
/**En el anterior objeto podemos observar que se modifico el valor original de la edad 
 * y aqui si se modifico realmente la variable desde la raiz.   
 */
let juegos = ['zelda', 'mario bros'];
juegos[1] = 'inside';
console.log(juegos);
//Sucede la misma cosa con los arrays se modifica el valor original.

/**De la siguiente manera podemos utilizar una funcion para poder cambiar el valor de un objeto
 * que es de tipo de dato mutable.
 */
function cambiarNombre(objeto){
    objeto.nombre = 'Nuevo nombre';
}
let persona = {nombre: 'antonio'}
cambiarNombre(persona);
console.log(persona);