// Declaración de funciones: Function declaration
console.log(suma);

// funcion nombrada -> Named function
function suma (){
    console.log('sumando...')
}

// Funcion anonima -> anonymus function
// function (){
//     console.log('funcion anonima');
// }

// Expresión de funciones -> function expresion
// Expresión de funcion anonima
const resta = function(){
    console.log('restando');
}
// named function expresion
const multiplica = function multi (){
    console.log('restando');
}

// Esta si o si siempre será anonima.
const divide = () => {
    console.log('dividiendo');
}