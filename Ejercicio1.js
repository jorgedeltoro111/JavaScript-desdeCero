//Social media profile

//1.User information
const username = 'jorgedeltoro111';
const fullName = 'Jorge Enrique';
const age = 22;
const isStudent = true;

//2. Address
const address = {
    street: '123 Main street',
    city: 'Guadalajara',
    state: 'zapopan',
    zipCode: 45138
}

//3.Hobbies
const hobbies = ['coding', 'reading', 'videogames'];

//4. Generation personalized bio
const personalized = `Hola que tal, mi nombre es ${fullName} y tengo ${age} anios, actualmente
vivo en ${address.street}, ${address.city}, ${address.state} y mi codigo postal es ${address.zipCode}
algunos de mis hobbies son ${hobbies.join(', ')} y puedes seguirme en GitHub para revisar mis proyectos
con mi usuario ${username}`;

//5.Print the user bio
console.log(personalized);