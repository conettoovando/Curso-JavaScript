/**
 * Crear algoritmo que devuelva número
 * menor y mayor de un array.
 */
let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let mayor = arr[0];
    let menor = arr[0];
    for (let i of arr){
        menor = menor < i ? menor: i;
        mayor = mayor > i ? mayor: i;
        // if (i > mayor){
        //     mayor = i;
        // }if (i < menor){
        //     menor = i
        // }
    }
    return [menor, mayor]
}

let numeros = getMenorMayor(array);
console.log(numeros)