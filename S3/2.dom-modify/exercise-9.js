

const div$$ = document.querySelectorAll("div")
for (const div of div$$) {

    const p$$ = document.createElement("p");

    p$$.textContent = `Voy dentro!`

    div.appendChild(p$$);
    
}