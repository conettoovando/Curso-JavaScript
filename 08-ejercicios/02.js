const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15},
    ['lala'],
];

function dividePorTipo(arr){
    // let numeros = [];
    // let string = [];
    // let objetos = [];

    // for (let i = 0; i < arr.length; i++){
    //     if (typeof arr[i] === 'number'){
    //         numeros.push(arr[i]);
    //     } else if (typeof arr[i] === 'string'){
    //         string.push(arr[i]);
    //     }
    //     else {
    //         objetos.push(arr[i]);
    //     }
    // }
    // return {
    //     numeros,
    //     string,
    //     objetos
    // };
    return {
        numeros: arr.filter(value => typeof(value) === 'number'), 
        strings: arr.filter(value => typeof(value) === 'string'), 
        objetos: arr.filter(value => typeof(value) === 'object'), 
    }
};

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);

