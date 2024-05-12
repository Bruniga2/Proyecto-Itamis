$(document).ready(function () {
    var cocktails = [
        {
            name: "Mojito",
            image: "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
            ingredients: [
                "2 oz Ron blanco",
                "1 oz Jugo de limón fresco",
                "2 cucharaditas de Azúcar",
                "8 hojas de Menta",
                "Club soda"
            ]
        },
        {
            name: "Margarita",
            image: "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
            ingredients: [
                "2 oz Tequila",
                "1 oz Triple sec",
                "1 oz Jugo de limón fresco",
                "Sal (para escarchar el vaso)"
            ]
        },
        {
            name: "Piña Colada",
            image: "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
            ingredients: [
                "2 oz Ron blanco",
                "4 oz Jugo de piña",
                "2 oz Crema de coco",
                "1 taza de Hielo"
            ]
        },
        {
            name: "Cosmopolitan",
            image: "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
            ingredients: [
                "1 1/2 oz Vodka cítrico",
                "1 oz Triple sec",
                "1/2 oz Jugo de limón fresco",
                "1/4 oz Jarabe de arándano rojo"
            ]
        },
        {
            name: "Daiquiri",
            image: "https://www.thecocktaildb.com/images/media/drink/usuuur1439906797.jpg",
            ingredients: [
                "2 oz Ron blanco",
                "3/4 oz Jugo de limón fresco",
                "1/4 oz Jarabe de azúcar"
            ]
        },
        {
            name: "Caipirinha",
            image: "https://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg",
            ingredients: [
                "2 oz Cachaça",
                "1 Lima cortada en trozos",
                "2 cucharaditas de Azúcar"
            ]
        },
        {
            name: "Old Fashioned",
            image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
            ingredients: [
                "2 oz Bourbon o whiskey de centeno",
                "2 pizcas de Angostura bitters",
                "1 terrón de Azúcar",
                "Agua con gas"
            ]
        },
        {
            name: "Manhattan",
            image: "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
            ingredients: [
                "2 oz Whiskey de centeno",
                "1 oz Vermú dulce",
                "2 pizcas de Angostura bitters",
                "Cereza para decorar"
            ]
        },
        {
            name: "Bloody Mary",
            image: "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
            ingredients: [
                "1 1/2 oz Vodka",
                "3 oz Jugo de tomate",
                "1/2 oz Jugo de limón fresco",
                "1/4 oz Salsa inglesa",
                "2 pizcas de Salsa picante",
                "Pimienta negra",
                "Sal de apio",
                "Apio o limón para decorar"
            ]
        },
        {
            name: "Tequila Sunrise",
            image: "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
            ingredients: [
                "1 1/2 oz Tequila",
                "3 oz Jugo de naranja",
                "1/2 oz Granadina"
            ]
        }
    ];
  

// Función para mostrar los detalles de un cóctel en una tarjeta específica
function createCocktailCard(cocktail) {
    var card = $("<div class='card'>");
    var cardInner = $("<div class='card-inner'>");
    var cardFront = $("<div class='card-front'>");
    var cardBack = $("<div class='card-back'>");
    var cocktailImage = $("<img src='" + cocktail.image + "' alt='" + cocktail.name + "'>");
    var ingredientList = $("<ul>");

    cardFront.append(cocktailImage);
    cardBack.append("<p>Ingredientes:</p>");
    
    cocktail.ingredients.forEach(function (ingredient) {
      ingredientList.append("<li>" + ingredient + "</li>");
    });

    cardBack.append(ingredientList);
    cardInner.append(cardFront);
    cardInner.append(cardBack);
    card.append(cardInner);

    return card;
  }

  // Agregar las tarjetas de cócteles al carrusel
  cocktails.forEach(function (cocktail) {
    var card = createCocktailCard(cocktail);
    $(".recipes-carousel").append(card);
  });

  // Inicializar el carrusel
  $(".recipes-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});

