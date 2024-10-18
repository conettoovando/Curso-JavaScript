function similares(obj1, obj2){
    //return obj1.id === obj2.id && obj1.name === obj2.name;
    let distintos = false;

    for (let llave in obj1){
        if (obj1[llave] !== obj2[llave]){
            distintos = true;
        }
    }

    return !distintos;
}

let resultado = similares(
    {id:1, name: 'Nico'},
    {id:1, name: 'Lalo'},
)

console.log(resultado)