// function saludar(...rest) {
//     console.log(this, rest);
// }
// (function saludar(...rest) {
//     console.log(this, rest);
// }).bind({ propiedad: 'hola mundo'})(3, 5);

// saludar.call({ propiedad: 'hola mundo'}, 1, 5);
// saludar.apply({ propiedad: 'hola mundo'}, [2, 5]);
// saludar.bind({ propiedad: 'hola mundo'})(3, 5);

const usuario = {
    nombre: 'Nicolas',
    ciudananias : ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudananias() {
        this.ciudananias.forEach(function (ciudanania) {
            console.log(this.nombre, ciudanania)
        }.bind(this));
    }
}

usuario.mostrarCiudananias()