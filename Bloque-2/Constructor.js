//Funcion constructora
function Rocket (name, message) {
    this.name = name,
    this.message = function () {
        console.log(message)
    }
}

const falcon9Rocket = new Rocket('falcon 9', 'mensaje de prueba');
console.log(falcon9Rocket.name);
falcon9Rocket.message();

//Ejemplo de funcion con un metodo callback por dentro
const array = [1, 2, 3, 4, 5];
const numeros = array.reverse();
console.log(numeros);
