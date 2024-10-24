// Fat arrow function no tiene la funcion arguments, super, this
// se debe utilizar unicamente para realizar calculos.
const suma = (a, b) => {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
    // let total = 0;
    // for (let valor of arguments){
    //     total += valor
    // }
}

console.log(suma(1, 2, 3, 4));