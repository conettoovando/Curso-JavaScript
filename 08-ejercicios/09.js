const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium'},
    { edad: 13, nombre: 'Chanchito', plan: 'free'},
    { edad: 32, nombre: 'Fernanda', plan: 'free'},
];

const users = [
    {age: 22, name: 'Michael', membership : 'premium'},
    {age: 27, name: 'Kevin', membership : 'free'},
    {age: 29, name: 'Happy pig', membership : 'free'},
];

// Unificar las estructuras de usuarios y users
// fusionar los arrays
// ordenar por edad
// Crear plantilla HTML
/**
 * <li>Nombre : name, Edad: age</li>
 */
// Imprimir lista en consola

let newUsers = users.map(u => {return {edad: u.age, nombre: u.name, plan: u.membership}});
let combinados = usuarios.concat(newUsers);
combinados.sort((a,b) => {
    if (a.edad < b.edad) return 1;
    if (a.edad > b.edad) return -1;
    return 0;
})
const plantilla = combinados.map(u => `<li>Nombre:${u.nombre}, Edad:${u.edad}</li>`)
const html = `
<ul>
    ${plantilla.join(`
    `)}
</ul>
`
console.log(html);