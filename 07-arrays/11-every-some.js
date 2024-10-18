let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

// Se ejecuta hasta que encuentre un valor falso
// let todosActivos = usuarios.every(u => {
//     console.log('todos activos', u.id);
//     return u.activo;
// });

// console.log(todosActivos);

// -------------------------

// Se ejecuta hasta que encuentre alguna vez el valor de true
let algunoActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo
})

console.log(algunoActivo);