

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input$$ = document.querySelector('input');

input$$.addEventListener('input', (event) => {
    const letter = streamers.filter(letras => letras.name.toLowerCase().includes(event.target.value.toLowerCase()));
    
    console.log(letter.map(streamer => streamer.name));

    
})



