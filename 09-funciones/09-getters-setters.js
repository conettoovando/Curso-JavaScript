const usuario = {
    nombre: 'Chanchito',
    apellido: 'feliz',
    get nombreCompleto() {
        return `${usuario.nombre} ${usuario.apellido}`
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

usuario.nombreCompleto = 'Hola mundo';
// console.log(`${usuario.nombre} ${usuario.apellido}`);
console.log(usuario.nombreCompleto);