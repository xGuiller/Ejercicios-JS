const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const peliculasPequeñas = []
const peliculasMedianas = []
const peliculasGrandes = []
mayorga()
const peliculasNombre = {

    mayorga:function(){
    for (let index = 0; index < movies.length; index++) {
        const pelicula = movies[index];
        console.log(pelicula.name);
    
    }
    
}
}