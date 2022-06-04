const charactersList = document.getElementById("charactersList");
let hpCharacter = [];
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredCharacters = hpCharacter.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.house.toLowerCase().includes(searchString)
    );
  });
  displayCharacter(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://hp-api.herokuapp.com/api/characters");
    hpCharacter = await res.json();
    console.log(hpCharacter);
    displayCharacter(hpCharacter);
  } catch (e) {
    console.log(err);
  }
};

const displayCharacter = (character) => {
  const html = character
    .map((character) => {
      return `
        <li class="character">
        <h2>${character.name}</h2>
        <p>House: ${character.house}</p>
        <img src="${character.image}"></img>
    </li>
            `;
    })
    .join("");

  charactersList.innerHTML = html;
};

loadCharacters();
