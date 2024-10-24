// Dentro de un objeto: this hace referencia a un objeto
// Dentro de una function: this hace referencia al objeto window, global
// Si se usa new hace referencia al objeto que será creado 

// const user = {
//     name: 'Nicolas',
//     login() {
//         console.log(this);
//     }
// }

// user.logout = function logout() {
//     console.log(this);
// }
// user.logout();

// this en funcion
// function log(){
//     console.log(this);
// }

// log();

function Log(message) {
    this.message = message;
    console.log(this);
}

/**
 * CUANDO SE UTILIZA NEW
 * Se crea un objeto literal
 * se vicula el objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
 */
const l = new Log('Hola mundo');