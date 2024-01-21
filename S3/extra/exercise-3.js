

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector("div[data-function="printHere"]") 

const lista = document.createElement("ul")

for (let i = 0; i < cars.length; i++) {
    const coches = document.createElement("li");

    lista.appendChild(coches);
    
}

div$$.appendChild(lista);

