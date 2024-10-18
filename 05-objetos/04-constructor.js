// {id: 1, recuperarClave: function(){} }
function Usuario(){ // por convección para los constructores se utiliza uppercamelcase | pascalcase
    this.id = 1;
    this.recuperarClave = function () { // métodos
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario(); // new se crea un objeto literal, se vincula el prototipo de la función Usuario con el objeto que se crea, se asigna la palabra reservada this, retorna de manera automatica this.

console.log(usuario);