let obj1 = { id: 1, name: 'chanchito'};
function crearCopia(obj){
    let newObject = {}

    for (let llave in obj){
        newObject[llave] = obj[llave];
    }

    return newObject
}

let obj2 = crearCopia(obj1);
console.log({obj1, obj2});