const owner = 'Jorge'; 
const address = 'Sta.Lucia';

function dogGreeting (owner, address) {
    console.log(`Hi, i'm ${this.dogName} and i live with ${owner} on ${address}`);
}
const newHouse = {
    dogName: 'Terry'
}
//Utilizamos la funcion call para vincular la funcion con nuestro objeto.
dogGreeting.call(newHouse, owner, address);
//Otra forma de utilizar para proveer un contexto con apply, es lo mismo que el anterior
const necessaryValues = [owner, address];
dogGreeting.apply(newHouse, necessaryValues);
//Ultima forma de utilizar el contexto de ejecucion, aqui retorna una funcion y solo es ejecutarla de nuevo.
const bind = dogGreeting.bind(newHouse, owner, address);
bind();
