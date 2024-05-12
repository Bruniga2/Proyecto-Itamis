function obtenerDetallesCocktail(id) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => data.drinks[0]) // Solo tomamos el primer cóctel de la lista
        .catch(error => console.error('Error:', error));
}

async function obtenerDetallesCocktails() {
    const detallesCocktails = [];

    for (let i = 11000; i <= 11015; i++) {
        const cocktail = await obtenerDetallesCocktail(i.toString());
        detallesCocktails.push(cocktail);
    }

    return detallesCocktails;
}

async function mostrarDetallesCocktails() {
    const detallesCocktails = await obtenerDetallesCocktails();

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    detallesCocktails.forEach(cocktail => {
        const nombre = cocktail.strDrink;
        const ingredientes = [];

        // Recorrer los ingredientes del cóctel
        for (let i = 1; i <= 15; i++) {
            const ingrediente = cocktail[`strIngredient${i}`];
            if (ingrediente) {
                ingredientes.push(ingrediente);
            }
        }

        const cocktailElemento = document.createElement('div');
        cocktailElemento.innerHTML = `
            <h2>${nombre}</h2>
            <p>Ingredientes: ${ingredientes.join(', ')}</p>
            <img src="${cocktail.strDrinkThumb}" alt="${nombre}">
        `;
        resultadoDiv.appendChild(cocktailElemento);
    });
}

// Llamar a la función para mostrar los detalles de los cócteles cuando se cargue la página
mostrarDetallesCocktails();