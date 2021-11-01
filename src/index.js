// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// function CapitaliseName(PokemonName) {
//     let lowercaseName = PokemonName;
//     let firstLetterLowercase = lowercaseName.charAt(0);
//     let firstLetterUppercase = firstLetterLowercase.toUpperCase();
//     let restOfword = lowercaseName.slice(1);
//     let newName = firstLetterUppercase+restOfword;
//     return newName;
// }


function elementCreate(class_, tag) {
    const element = document.createElement(tag);
    element.className = class_;
    return element;
}

function abilities (abilityName, abilityValue) {
    let list = document.createElement("li");
    list.innerText = `${abilityName}: ${abilityValue}`;
    return list;
}

function createTemplate (listIndex) {
    const card = document.createElement("li");
    card.className = "card";

    const name = elementCreate("card--title", "h2")
    name.innerText = data[listIndex].name.toUpperCase();
    card.appendChild(name);

    const image = document.createElement("img");
    image.setAttribute("src", data[listIndex].sprites.other['official-artwork'].front_default);
    image.setAttribute("width", 256);
    card.appendChild(image);

    const text = elementCreate("card--text", "ul");
    text.className = "card--text";
    card.appendChild(text);
    for (let i = 0; i < data[listIndex].stats.length; i++) {
        let abilityName = data[listIndex].stats[i].stat.name;
        let abilityValue = data[listIndex].stats[i].base_stat;
        text.append(abilities(abilityName, abilityValue));
    }
    return card;

}
    
for (let i = 0; i < data.length; i++) {
    document.querySelector(".cards").append(createTemplate(i));
}
console.log(data);
