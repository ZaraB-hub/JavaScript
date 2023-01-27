
document.addEventListener('DOMContentLoaded', function() {
    // Send a GET request to the URL
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    // Put response into json form
    .then(response => response.json())
    .then(data => {
        // Log data to the console
        const ul=document.createElement('ul');
        data.results.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = pokemon.name;
            ul.appendChild(li);
            li.addEventListener('click', function(event) {
                window.location.href = pokemon.url;
            });
        });
        document.querySelector(".pokemon").appendChild(ul);
    });
});


