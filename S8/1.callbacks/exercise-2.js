const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return propmt(description)
}

function father(description, callback){
    userAnwsers.push(callback(description));
}




father("hoy es día 19 de diciembre?", confirmExample);
father("Que día vas a salir de fiesta estas navidades", promptExample);


console.log(userAnwsers);