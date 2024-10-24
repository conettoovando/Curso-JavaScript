let fuera = 'estoy afuera';

function alcance (){
    fuera = 'estoy dentro';
    function saludo(){}
    var vieja = 'ya no usar';
    let variable = 'Hola mundo';
    const constante = 'Hola Mundo!';
}
// No se pueden acceder a las varialbes fuera de la función.
// console.log(saludo);
// console.log(vieja);
// console.log(variable);
// console.log(constante);

console.log(fuera);
alcance();

console.log(fuera);