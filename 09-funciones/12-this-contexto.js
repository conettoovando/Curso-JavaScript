const usuario = {
    nombre: 'Nicolas',
    ciudananias : ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudananias() {
        this.ciudananias.forEach(ciudanania => {
            console.log(this.nombre, ciudanania)
        });
    }
}

usuario.mostrarCiudananias()