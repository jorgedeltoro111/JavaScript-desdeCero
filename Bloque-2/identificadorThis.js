//La palabra this sirve para indicar que vamos a usar propiedades del mismo objeto. 
const house = {
    dogName: 'Fido',
}


function dogGeeting() {
    console.log('Hi, im ' + this.dogName);
}

const newHouse = {
    dogName: 'Terry'
}
//Enlace implicito, cuando vinculamos un  objeto con una funcion que no esta declarada dentro de un objeto.
dogGeeting.call(newHouse);

