// const streamers = [
//   { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
//   { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
//   { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
//   { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
// ];

// const input$$ = document.querySelector(".caja");
// const button$$ = document.querySelector(".btn");

// function filtrado() {
//   const nombre = streamers.filter((streamer) =>
//     streamer.name.includes(input$$.value)
//   );
//   console.log(nombre);
// }

// button$$.addEventListener("click", filtrado);

const inputElement = document.querySelector(
  'input[data-function="toFilterStreamers"]'
);
const buttonElement = document.querySelector(
  'button[data-function="toShowFilterStreamers"]'
);

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

function showFilteredStreamers() {
  const searchText = inputElement.value.toLowerCase();
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchText)
  );
  console.log(filteredStreamers);
}

buttonElement.addEventListener("click", showFilteredStreamers);
