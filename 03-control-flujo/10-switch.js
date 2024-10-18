let accion = 'actualizar';

switch (accion){
    case 'listar':
        console.log('Acción de listar');
        break; // Siempre debe agregarse el break
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no reconocida');    
}