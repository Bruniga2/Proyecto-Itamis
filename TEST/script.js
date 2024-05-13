$(document).ready(function () {
    var cocktailIds = [11007, 17216, 17830, 11000, 11002, 11004, 11008, 11010, 11012, 11014,11001,11002];

    cocktailIds.forEach(function (cocktailId) {
        fetchCocktailDetails(cocktailId);
    });

    function fetchCocktailDetails(cocktailId) {
        var url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailId;
        $.getJSON(url, function (data) {
            if (data.drinks) {
                var cocktail = data.drinks[0];
                var cardHtml = createCocktailCardHtml(cocktail);
                $(".cocktail-container").append(cardHtml);
            } else {
                console.log("No se encontraron datos de cócteles en la respuesta de la API para el ID: " + cocktailId);
            }
        });
    }

    function createCocktailCardHtml(cocktail) {
        var cardHtml = `
            <div class='card'>
                <div class='card-inner'>
                    <div class='card-front'>
                        <img src='${cocktail.strDrinkThumb}' alt='${cocktail.strDrink}'>
                    </div>
                    <div class='card-back'>
                        <h2>${cocktail.strDrink}</h2>
                        <p>Ingredientes:</p>
                        <ul>`;
    
        // Iterar sobre los ingredientes y medidas
        for (var i = 1; i <= 15; i++) {
            var ingredient = cocktail["strIngredient" + i];
            var measure = cocktail["strMeasure" + i];
            if (ingredient && measure) {
                cardHtml += `<li>${measure} ${ingredient}</li>`;
            } else if (ingredient) {
                cardHtml += `<li>${ingredient}</li>`;
            } else {
                break;
            }
        }
    
        cardHtml += `
                        </ul>
                    </div>
                </div>
            </div>`;
    
        return cardHtml;
    }
    
});
