fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(({results}) => {
    createDomCharacters(results)
})

const createDomCharacters = (characters) => {
    for (const character of characters) {
        const figure$$ = document.createElement('figure');

        figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src=${character.image}/>`;
        

        document.body.appendChild(figure$$);
    }
}