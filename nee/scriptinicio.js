$(document).ready(function() {
  // Configurar el carrusel Owl Carousel
  $('.recipes-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  });

  // Obtener las recetas de la API TheCocktailDB
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => response.json())
    .then(data => {
      const drinks = data.drinks;

      // Agregar cada receta al carrusel
      drinks.forEach(drink => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
          .then(response => response.json())
          .then(drinkData => {
            const drinkDetails = drinkData.drinks[0];
            const recipeItem = `
              <div class="recipe-item">
                <div class="card-animado">
                  <div class="card-inner-animado">
                    <div class="card-front-animado">
                      <img src="${drinkDetails.strDrinkThumb}" alt="${drinkDetails.strDrink}" class="recipe-image">
                    </div>
                    <div class="card-back-animado">
                      <h2 class="recipe-title">${drinkDetails.strDrink}</h2>
                      <p class="recipe-instructions">${drinkDetails.strInstructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            `;
            $('.recipes-carousel').trigger('add.owl.carousel', [$(recipeItem)]).trigger('refresh.owl.carousel');
          })
          .catch(error => console.error(error));
      });
    })
    .catch(error => console.error(error));
});

$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// CAMBIAR LA DIRECCION
document.addEventListener("DOMContentLoaded", function () {
  const locationDropdown = document.querySelector('.location-dropdown');
  const locationMenu = document.querySelector('.location-menu');

  // Funcion para abrir el menu
  function openMenu() {
    locationMenu.style.display = 'block';
  }

  // Funcion para cerrar el menu
  function closeMenu() {
    locationMenu.style.display = 'none';
  }

  // Abrir el menu con click 
  locationDropdown.addEventListener('click', function (event) {
    openMenu();
  });

  // Cerrar el menu cuando elijo una opcion
  locationMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      const selectedLocation = event.target.textContent;
      document.querySelector('.location input').value = selectedLocation;
      closeMenu();
    }
  });

  // Cerrar el menu al presionar afuera
  document.addEventListener('click', function (event) {
    if (!locationDropdown.contains(event.target) && !locationMenu.contains(event.target)) {
      closeMenu();
    }
  });
});

// no perder focus en dropdown-menu
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
  });
});


