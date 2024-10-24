const suma = (a, b, ...rest) => {
    console.log(rest)
}
// function suma(a, b, ...rest){
//     console.log(rest)
// }

// suma(1, 2, 3, 4);

// funciona con funciones o fat arrow function.
const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

// logMsg('Servidor:', 'Error 1', 'peticion aceptada', 'Socket activo');
let mensajes = [
    'Error 1', 'peticion aceptada', 'Socket activo'
]
logMsg('Cliente movil', ...mensajes, 'Otro error!');