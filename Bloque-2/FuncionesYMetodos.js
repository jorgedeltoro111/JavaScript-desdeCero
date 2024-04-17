//Pasar funciones como argumentos --> useCallback

function a() {}
function b(a){}

b(a);

//retornar funciones
function a(){
    function b(){}
    return b;
}

//Asignar funciones a variables - Expresion de funcion
const a = function (a) {console.log(a)}
a(10);

//Tienen propiedades y metodos
function a(){}
const obj = {}
a.call(obj)

//Anidar funciones
function a(){
    function b(){
        function c(){
            b();
        }
        c();
    }
}
a();
//Almacenar funciones en objeto
const rocket = {
    name: 'falcon 9',
    launchMessage: function launchMessage(){
        console.log('Hola mundo ... desde el cohete')
    }
}
rocket.launchMessage()