function dividePorTipo(arr){
    return arr.reduce((acc, value) => {
        let llave = typeof value;
        acc[llave] = acc[llave] ? acc[llave] : []
        acc[llave].push(value);
        return acc;
    }, {})
}

const miArr = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
];

let arr = dividePorTipo(miArr);
console.log(arr);