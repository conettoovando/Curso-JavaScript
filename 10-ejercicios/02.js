const obj = {
    nombre: 'Nicolas',
};

function exteneder(usuario) {
    // usuario.login = () => {
    //     console.log(`iniciando sesion ${usuario.nombre}`)
    // }
    // usuario.logout = () => {
    //     console.log(`cerrando sesion ${usuario.nombre}`)
    // }
    // return usuario;
    const metodos = {
        login() {
            console.log(`iniciando sesion ${this.nombre}`)
        },
        logout() {
            console.log(`cerrando sesion ${this.nombre}`)
        },
    }
    return Object.assign(usuario, metodos)
}

const usuario = exteneder(obj);

console.log(usuario);
usuario.login();

