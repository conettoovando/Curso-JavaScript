// Tipo de dato de referencia
/**
 * Es una agrupacion de datos que hacen sentido tenerlos juntos
 * ejemplo objetos de la vida real
 * Lapiz -> Color, longitud, fabricante, peso, etc..
 */

// Personaje de TV
let nombre = "Tanjiro";
let anime = "Daemon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", // par llave - valor... llave = propiedad
    anime: "Daemon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);


// modificar propiedad
personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;
console.log(personaje)