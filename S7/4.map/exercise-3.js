const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];


const ciudades = cities.map(city =>({
    name: city.isVisited ?  '(Visitado)' : city.name

}));


console.log(ciudades);