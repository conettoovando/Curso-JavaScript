/**
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array.
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr){
    let cantidad = 0;
    for (numero of arr){
        if (numero > 0){
            cantidad++;
        }
    };
    return cantidad; 
}

let resultado = cuantosPositivos(array);
console.log(resultado);