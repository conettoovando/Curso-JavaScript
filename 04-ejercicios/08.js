/**
 * crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */
let array = [{
    id:1,
    name:'Nicolas',
}, {
    id:2,
    name:'Felipe',
},{
    id:3,
    name:'Chanchito',
}]

let pares = [
    [1, {id:1, name:'Nicolas'}],
    [2, {id:2, name:'Felipe'}],
    [3, {id:3, name:'Chanchito'}],
];

function toPairs(arr){
    retorno = [];
    for (elemento in arr){
        let elm = arr[elemento];
        retorno[elemento] = [elm.id, elm];
    }
    return retorno
}

let resultado = toPairs(array);
console.log(resultado);