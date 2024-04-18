//Arrow funtions y lexico
//Funciones explicitas
const greeting = function (name) {
    return "hello " + name;
}

const newGreeting = (name) => {
    return "new hello " + name;
} 

//Arrow function with implicit return 
const newGreetingImplicit = name => "hello " + name;

//Lexical binding
const object = {
    name: 'jorge',
    message: function (message) {
        console.log(this.name + ' ' + 'dice ' + message)
    },
    withArrowMessagefunction:  (message) => {
        console.log(this.name + ' ' + 'el jorge dice ' + message)
    }
}
object.message('estudia mucho y seras mejor');
object.withArrowMessagefunction('haz ejercicio diario');