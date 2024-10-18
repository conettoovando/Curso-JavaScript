const ahora = new Date();
// console.log(ahora);

const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha)
// Mes Dia Año

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14+15, 15);
console.log(fecha2);
console.log(fecha3);

console.log('datestring', fecha3.toDateString());
console.log('ISOstring', fecha3.toISOString()); // formato de fecha para enviar al servidor
console.log('timestring', fecha3.toTimeString()); // formato de fecha para enviar al servidor

console.log(fecha3.getDate());
console.log(fecha3.getDay());
console.log(fecha3.getFullYear());
console.log(fecha3.getHours()); //....

fecha3.setFullYear(1978); // cambiar valores de las fechas
console.log(fecha3);