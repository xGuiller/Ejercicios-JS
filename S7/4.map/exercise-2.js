const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


const lista = users.map(user => {
    const nombre = user.name.startsWith('A') ? 'Anacleto' : user.name;

    return nombre;


})


console.log(lista);
