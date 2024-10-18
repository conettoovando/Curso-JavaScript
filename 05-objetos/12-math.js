console.log(
    Math.PI,
    Math.abs(-15), // valor absoluto
    Math.round(15.5),
    Math.round(15.4), // redondea 
    Math.floor(15.9), // redondea hacia abajo
    Math.ceil(15.1), // redondea hacia arriba
    Math.pow(2, 3), // calcular potencia de un numero 2**3 = 8
    Math.sqrt(9), // raiz cuadrada del valor = 3
);

console.log(Math.random()); // generación de numero aleatorio

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1,10))
