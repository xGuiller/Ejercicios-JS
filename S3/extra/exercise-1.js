

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const lista = document.createElement("ul")
for (let i = 0; i < countries.length; i++) {
    const paises = document.createElement("li");
    lista.appendChild(paises)
}

document.body.appendChild(lista);

