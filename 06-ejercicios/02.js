function createUsuario(name){
    return {name, id:Math.random()};
}

let user = createUsuario('Felipe');
let user2 = createUsuario('Chanchito');
console.log(user, user2);