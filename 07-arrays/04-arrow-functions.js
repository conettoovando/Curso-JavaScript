// function hola(){
//     return "Hola mundo";
// }

const hola = mensaje => mensaje + 'Hola mundo';// Anonima!

const hola2 = mensaje => {
    return mensaje + 'Hola mundo';
}// Anonima!

const resultado = hola('chanchito feliz');
console.log(resultado)