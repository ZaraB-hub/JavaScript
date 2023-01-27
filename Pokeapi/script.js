document.querySelector("#search").addEventListener("click", ()=>{

    const pokemonName = document.querySelector("#pokemonName").value;
    // const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
        <div>
        <img
            src="${data.sprites.other["official-artwork"].front_default}"/>
        </div>
            <div class="pokemonInfos">
            <h1>${data.name}</h3>
            <p>Weight: ${data.weight}</p>
        </div>`;
        })
        .catch((err) => {
            document.querySelector(".pokemonBox").innerHTML = `<h4>Pokemon not found 😞</h4>`;
        });




});
