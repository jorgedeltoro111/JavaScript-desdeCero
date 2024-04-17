//Funciones Puras e Impuras

//Side Effects ---> esto provoca que dejen de ser funciones puras
//1. Modificar  variables globales
//2. Modificar parametros
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla
//5. Manipulacion del DOM
//6. Obtener la hora actual

//Anatomia de una funcion pura
//Siempre vamos a recibir los mismos parametros y la salida siempre sera el mismo por los datos de entrada.
function sum(a, b){
    return a + b;
}
//Ya poniendo un console.log(); hara que nuestra funcion no sea una funcion pura.
//Funcion impura porque provoca un sideEffect --> efecto secundario
function sum(a, b){
    console.log('A: ', a);
    return a + b;
}

let total = 0;

function sumWithSideEffect(value){
    total += value
    return total
}
console.log(sumWithSideEffect(15));

//funcion pura
function square(x){
    return x * x;
}
console.log(square(2));


