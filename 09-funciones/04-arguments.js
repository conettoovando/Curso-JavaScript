function suma(a, b){
    // console.log(arguments) // Retorna un objeto, ¡No un array!
    // let total = 0;
    // for (let valor of arguments){
    //     total += valor
    // }

    // return total

    // Mejor forma de iterar los argumentos.
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
}

console.log(suma(1, 2, 3, 4));