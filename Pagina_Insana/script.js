
// carrusel inferior
$(document).ready(function () {
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


// Carrito
const cartIcon = document.querySelector('.cart-icon2');
const cartDropdown = document.querySelector('.cart-dropdown');
const closeCartButton = document.querySelector('.close-cart');

function openCart() {
  cartDropdown.classList.add('show');
  cartDropdown.style.width = '400px';
  cartDropdown.style.height = '500px';
}

function closeCart() {
  cartDropdown.classList.remove('show');
  cartDropdown.style.width = '400px';
  cartDropdown.style.height = '500px';
}

// abrir y cerrar el carrito con click
cartIcon.addEventListener('click', () => {
  if (cartDropdown.classList.contains('show')) {
    closeCart();
  } else {
    openCart();
  }
});

// Cerrar el carrito con x
closeCartButton.addEventListener('click', () => {
  closeCart();
});


// anti bastis
// verifica si eres mayor de edad
const ageVerificationModal = document.querySelector('.age-verification-modal');
const ageYesButton = document.querySelector('.age-yes');
const ageNoButton = document.querySelector('.age-no');

window.addEventListener('load', () => {
  ageVerificationModal.style.display = 'flex';
});

ageYesButton.addEventListener('click', () => {
  ageVerificationModal.style.display = 'none';
});

ageNoButton.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=V5XMMHpqxRk'; // Redirige a una página apropiada
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

// document.getElementById('register-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Aquí enviarías los datos a tu servidor o a la API para registrar al usuario
//   console.log("Usuario Registrado:");
//   console.log("Nombre de Usuario:", username);
//   console.log("Correo Electrónico:", email);
//   console.log("Contraseña:", password);
// });

// document.getElementById('login-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const loginUsername = document.getElementById('login-username').value;
//   const loginPassword = document.getElementById('login-password').value;

//   // Aquí enviarías los datos a tu servidor o a la API para autenticar al usuario
//   console.log("Inicio de Sesión:");
//   console.log("Nombre de Usuario:", loginUsername);
//   console.log("Contraseña:", loginPassword);
// });


// CARRITO FUNCIONAL
const cartInfo = document.querySelector('.cart-dropdown');
const rowProduct = cartInfo.querySelector('.row-product');

const productsList = document.querySelector('.products');

let allProducts = [];

const valorTotal = cartInfo.querySelector('.total-price');

const countProducts = document.querySelector('#cart-count');

const cartTotal = cartInfo.querySelector('.cart-total');


productsList.addEventListener('click', e => {
	if (e.target.classList.contains('button-wrapper-comprar') ||
  e.target.classList.contains('text-comprar') ||
  e.target.classList.contains('icon-comprar') ||
  e.target.classList.contains('bi') || e.target.classList.contains('bi-cart2')) {

  const product = e.target.closest('.product-card')

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('.product-card h2').textContent,
			price: product.querySelector('.product-card .precio-ahora').textContent
    };

    const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

    if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

    showHTML();
  }
  
});

rowProduct.addEventListener('click', e => {
  if (e.target.classList.contains('product-delete')) {
      const productInfo = e.target.closest('.product-info');
      const title = productInfo.querySelector('.nombre-product').textContent;

      // Encuentra el índice del producto en el array
      const index = allProducts.findIndex(product => product.title === title);

      if (index !== -1) {
          // Elimina el producto del array usando splice
          allProducts.splice(index, 1);
      }

      showHTML();
  }
});


const showHTML = () => {
  rowProduct.innerHTML = '';
    
  
  if (!allProducts.length) {
    rowProduct.innerHTML = '<p class="cart-empty">El carrito está vacío</p>';
  }
  
  

  let total = 0;
	let totalOfProducts = 0;

  allProducts.forEach(product => {
      const containerProduct = document.createElement('div');
      containerProduct.classList.add('product-info');

      containerProduct.innerHTML = `
          <span class="cantidad-product">${product.quantity}</span>
          <p class="nombre-product">${product.title}</p>
          <span class="precio-product">${product.price}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="product-delete">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12" />
            </svg>
      `;

      
		rowProduct.append(containerProduct);
      
    total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;

  });

  valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
  
};





// PRODUCTOS
function mostrarProductoEnHTML(nombreProducto, producto) {
  var productoDetalle = document.getElementById(nombreProducto.replace(/ /g, '-'));
  var productoHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <div>
    <div>Antes: <span class="precio-antes" id="${nombreProducto.replace(/ /g, '-')}-precioAntes">$${producto.precioAntes}</span></div>
    <div>Ahora: <span class="precio-ahora" id="${nombreProducto.replace(/ /g, '-')}-precioAhora">$${producto.precioAhora}</span></div>
  </div>
  `;
  productoDetalle.innerHTML = productoHTML;


}

window.onload = function () {
  productos.forEach(function (producto) {
    mostrarProductoEnHTML(producto.nombre, producto);
  });
};


var productos = [
  {
    nombre: "Vino Bestia Azul Carmenere 750cc",
    precioAntes: 5990,
    precioAhora: 3990,
    imagen: "https://brindo.cl/774-large_default/24x-heineken-5-lata-470cc.jpg"
  },
  {
    nombre: "Whisky Johnnie Walker Black Label 750cc",
    precioAntes: 29900,
    precioAhora: 15990,
    imagen: "https://brindo.cl/217-large_default/1x-whisky-johnnie-walker-black-label-40-750cc.jpg"
  },
  {
    nombre: "24x Austral 4,6 Botella 330cc",
    precioAntes: 39900,
    precioAhora: 24000,
    imagen: "https://brindo.cl/90-large_default/24x-austral-46-botella-330cc.jpg"
  },
  {
    nombre: "Espíritu los Andes 40° 750cc",
    precioAntes: 16900,
    precioAhora: 12000,
    imagen: "https://brindo.cl/267-large_default/1x-pisco-espiritu-los-andes-40-750cc.jpg"
  },
  {
    nombre: "24x Austral Red Lager 5° Lata 470cc",
    precioAntes: 26900,
    precioAhora: 15000,
    imagen: "https://brindo.cl/133-large_default/24x-austral-red-5-lata-470cc.jpg"
  },
  {
    nombre: "Casillero del Diablo Merlot Botella 750cc",
    precioAntes: 6000,
    precioAhora: 4500,
    imagen: "https://brindo.cl/508-home_default/1x-casillero-del-diablo-merlot-botella-750cc.jpg"
  },
  {
    nombre: "Gin Bombay Bramble 37,5° Botella 700cc",
    precioAntes: 18900,
    precioAhora: 12859,
    imagen: "https://brindo.cl/1046-home_default/1x-gin-bombay-bramble-375-botella-700cc.jpg"
  },
  {
    nombre: "Glenfiddich 15 años 40° 750cc",
    precioAntes: 82900,
    precioAhora: 70990,
    imagen: "https://brindo.cl/3204-large_default/1x-republicano-roble-anejado-40-750cc.jpg"
  },
  {
    nombre: "Absolut Original 750cc",
    precioAntes: 14900,
    precioAhora: 12000,
    imagen: "https://brindo.cl/270-home_default/1x-vodka-absolut-original-750cc.jpg"
  },
  {
    nombre: "La Pizka Sour Limón Sutil 24° Botella 1000cc",precioAntes: 15900,precioAhora: 11590,imagen: "https://brindo.cl/666-home_default/1x-la-pizka-sour-limon-sutil-24-botella-1000cc.jpg"
  },
  {
    // CERVEZAS ARTESANALES
    nombre: "Austral Yagan 5° Botella 330cc",precioAntes: 1750,precioAhora: 1550,imagen: "https://brindo.cl/113-large_default/1x-austral-yagan-5-botella-330cc.jpg"
  },
  {
    nombre: "Austral Calafate 5° Botella 330cc",precioAntes: 1750,precioAhora: 1620,imagen: "https://brindo.cl/1090-large_default/1x-imperial-46-lata-470cc.jpg"
  },
  {
    nombre: " Kross IPA 6,5° Botella 330cc",precioAntes: 2690,precioAhora: 2620,imagen: "https://brindo.cl/120-large_default/1x-kross-ipa-65-botella-330cc.jpg"
  },
  {
    nombre: "Kross Stout 4,6° Botella 330cc",precioAntes: 1990,precioAhora: 1890,imagen: "https://brindo.cl/122-large_default/1x-kross-stout-46-botella-330cc.jpg"
  },
  {
    nombre: "Austral Pale Ale 5° Botella 330cc",precioAntes: 1750,precioAhora: 1650,imagen: "https://brindo.cl/110-large_default/1x-austral-pale-ale-5-botella-330cc.jpg"
  },
  {
    nombre: "Kunstmann Torobayo 5° Lata 470cc",precioAntes: 1590,precioAhora: 1530,imagen: "https://brindo.cl/678-large_default/1x-kunstmann-torobayo-5-lata-470cc.jpg"
  },
  {
    nombre: "Kross Golden Ale 5,2° Botella 710cc",precioAntes: 2600,precioAhora: 2200,imagen: "https://brindo.cl/119-large_default/1x-kross-golden-ale-52-botella-710cc.jpg"
  },
  {
    nombre: "Austral 4,6° Botella 330cc",precioAntes: 1750,precioAhora: 1650,imagen: "https://brindo.cl/89-large_default/1x-austral-46-botella-330cc.jpg"
  },
  {
    nombre: "Kunstmann Torobayo 5° Botella 330",precioAntes: 1890,precioAhora: 1650,imagen: "https://brindo.cl/87-large_default/1x-kunstmann-torobayo-5-botella-330.jpg"
  },
  {
    nombre: "Kross 5 Aniversario 4,5° Botella 750cc",precioAntes: 5590,precioAhora: 4990,imagen: "https://brindo.cl/3239-large_default/1x-kross-5-aniversario-45-botella-750cc.jpg"
  },
  {
  //  CERVEZAS NACIONALES
    nombre: "Dolbek Maqui 4,8° Botella 330",precioAntes: 1990,precioAhora: 1900,imagen: "https://brindo.cl/128-large_default/1x-dolbek-maqui-48-botella-330.jpg"
  },
  {
    nombre: "Austral Torres del Paine 6,1° Botella 500cc",precioAntes: 2190,precioAhora: 2000,imagen: "https://brindo.cl/96-large_default/1x-austral-torres-del-paine-61-botella-500cc.jpg"
  },
  {
    nombre: "Kunstmann Miel 4,8° Botella 330c",precioAntes: 1890,precioAhora: 1790,imagen: "https://brindo.cl/95-large_default/1x-kunstmann-miel-48-botella-330c.jpg"
  },
  {
    nombre: "Kunstmann Gran Torobayo 7,5° Botella 500cc",precioAntes: 2990,precioAhora: 2890,imagen: "https://brindo.cl/91-large_default/1x-kunstmann-gran-torobayo-75-botella-500cc.jpg"
  },
  {
    nombre: "Baltica 5,8° Lata 473cc",precioAntes: 650,precioAhora: 450,imagen: "https://brindo.cl/79-large_default/1x-baltica-58-lata-473cc.jpg"
  },
  {
    nombre: "Escudo 5,5° Lata 470cc",precioAntes: 900,precioAhora: 800,imagen: "https://brindo.cl/99-large_default/1x-escudo-55-lata-470cc.jpg"
  },
  {
    nombre: "Becker 4,5° Lata 473cc",precioAntes: 650,precioAhora: 550,imagen: "https://brindo.cl/77-large_default/1x-becker-45-lata-473cc.jpg"
  },
  {
    nombre: "Royal Guard 5° Lata 470cc",precioAntes: 1100,precioAhora: 889,imagen: "https://brindo.cl/1102-large_default/1x-austral-calafate-5-botella-330cc.jpg"
  },
  {
    nombre: "Escudo Silver 5° Lata 470cc",precioAntes: 650,precioAhora: 600,imagen: ""
  },
  {
    nombre: "Cristal 4,6° Lata 470cc",precioAntes: 900,precioAhora: 850,imagen: "https://brindo.cl/93-large_default/1x-cristal-46-lata-470cc.jpg"
  },
  {
  //  CERVEZAS IMPORTADAS
    nombre: "Andes Lata 4,5° 470cc",precioAntes: 750,precioAhora: 700,imagen: "https://brindo.cl/1001-large_default/1x-andes-lata-45-470cc.jpg"
  },
  {
    nombre: "Miller Gen Draft 4,7° Lata 473cc",precioAntes: 1590,precioAhora: 1490,imagen: "https://brindo.cl/117-large_default/1x-miller-gen-draft-47-lata-473cc.jpg"
  },
  {
    nombre: "Corona 4,5° Botella 330cc",precioAntes: 1100,precioAhora: 1000,imagen: "https://brindo.cl/85-large_default/1x-corona-45-botella-330cc.jpg"
  },
  {
    nombre: "Miller Gen Draft 4,7° Botella 355cc",precioAntes: 1390,precioAhora:1200,imagen: "https://brindo.cl/126-large_default/1x-miller-gen-draft-47-botella-355cc.jpg"
  },
  {
    nombre: "Imperial 4,6° Lata 470cc",precioAntes: 990,precioAhora: 920,imagen: "https://brindo.cl/676-large_default/1x-imperial-46-lata-470cc.jpg"
  },
  {
    nombre: "Coors 5° Lata 470cc",precioAntes: 1100,precioAhora: 1000,imagen: "https://brindo.cl/1128-large_default/1x-becker-negra-59-lata-473cc.jpg"
  },
  {
    nombre: "Estrella Damm 5.4° Lata 500cc",precioAntes: 1690,precioAhora: 1640,imagen: "https://brindo.cl/3303-large_default/1x-estrella-damm-54-lata-500cc.jpg"
  },
  {
    nombre: "Heineken 5° Lata 470cc",precioAntes: 1100,precioAhora: 900,imagen: "https://brindo.cl/681-large_default/1x-heineken-5-lata-470cc.jpg"
  },
  {
    nombre: "Cusqueña 4,8° Lata 473cc",precioAntes: 1100,precioAhora: 850,imagen: "https://brindo.cl/103-large_default/1x-cusquena-48-lata-473cc.jpg"
  },
  {
    nombre: "Stella Artois 5° Botella 330cc",precioAntes:1100,precioAhora: 1000,imagen: "https://brindo.cl/3186-large_default/1x-baltica-58-lata-473cc.jpg"
  },
  {
  //  VINOS TINTOS
    nombre: "Montes Limited Selection Carmenere Botella 750cc",precioAntes: 9900,precioAhora: 8500,imagen: "https://brindo.cl/568-large_default/1x-montes-limited-selection-carmenere-botella-750cc.jpg"
  },
  {
    nombre: "Ventisquero Grey Carmenere Botella 750cc",precioAntes: 12900,precioAhora: 12000,imagen: "https://brindo.cl/584-large_default/1x-ventisquero-grey-carmenere-botella-750cc.jpg"
  },
  {
    nombre: "Tarapacá Reserva Cabernet Sauvignon Botella 750cc",precioAntes: 6900,precioAhora: 6000,imagen: "https://brindo.cl/655-large_default/1x-tarapaca-reserva-cabernet-sauvignon-botella-750cc.jpg"
  },
  {
    nombre: "Toro de Piedra Gran Reserva Cabernet Sauvignon Botella 750cc",precioAntes: 9900,precioAhora: 8900,imagen: "https://brindo.cl/565-large_default/1x-toro-de-piedra-gran-reserva-cabernet-suavignon-botella-750cc.jpg"
  },
  {
    nombre: "Casillero del Diablo Merlot Botella 750cc",precioAntes: 6000,precioAhora: 4590,imagen: "https://brindo.cl/508-large_default/1x-casillero-del-diablo-merlot-botella-750cc.jpg"
  },
  {
    nombre: "Castillo de Molina Reserva Merlot Botella 750cc",precioAntes: 8900,precioAhora: 7800,imagen: "https://brindo.cl/546-large_default/1x-castillo-de-molina-reserva-merlot-botella-750cc.jpg"
  },
  {
    nombre: "Casillero del Diablo Syrah Botella 750cc",precioAntes: 6000,precioAhora: 5550,imagen: "https://brindo.cl/509-large_default/1x-casillero-del-diablo-syrah-botella-750cc.jpg"
  },
  {
    nombre: "Marqués de Casa Concha Syrah Botella 750cc",precioAntes: 15900,precioAhora: 13500,imagen: "https://brindo.cl/708-large_default/1x-marques-de-casa-concha-syrah-botella-750cc.jpg"
  },
  {
    nombre: "Misiones de Rengo Reserva Malbec Botella 750cc",precioAntes: 5900,precioAhora: 5500,imagen: "https://brindo.cl/496-large_default/1x-misiones-de-rengo-reserva-malbec-botella-750cc.jpg"
  },
  {
    nombre: "Caliterra Tributo Malbec Botella 750cc",precioAntes: 10900,precioAhora: 9900,imagen: "https://brindo.cl/591-large_default/1x-caliterra-tributo-malbec-botella-750cc.jpg"
  },
  {
  // VINOS BLANCOS Y ROSE
    nombre: "Concha y Toro Late Harvest Botella 375cc",precioAntes: 4900,precioAhora: 4350,imagen: "https://brindo.cl/618-large_default/1x-concha-y-toro-late-harvest-botella-375cc.jpg"
  },
  {
    nombre: "Doña Dominga Chardonnay Botella 750cc",precioAntes: 5900,precioAhora: 5000,imagen: "https://brindo.cl/488-large_default/1x-dona-dominga-chardonnay-botella-750cc.jpg"
  },
  {
    nombre: "Casillero del Diablo Chardonnay Botella 750cc",precioAntes: 6000,precioAhora: 5500,imagen: "https://brindo.cl/705-large_default/1x-casillero-del-diablo-chardonnay-botella-750cc.jpg"
  },
  {
    nombre: "Adobe Emiliana Rosé Botella 750cc",precioAntes: 6500,precioAhora: 6000,imagen: "https://brindo.cl/1121-large_default/1x-subercaseaux-moscato-botella-750cc.jpg"
  },
  {
    nombre: "Casillero del Diablo Late Harvest Rosé Botella 375cc",precioAntes: 4900,precioAhora: 4500,imagen: "https://brindo.cl/605-large_default/1x-casillero-del-diablo-late-harvest-rose-botella-375cc.jpg"
  },
  {
    nombre: "Misiones de Rengo Reserva Chardonnay Botella 750cc",precioAntes: 5900,precioAhora: 5250,imagen: "https://brindo.cl/493-large_default/1x-misiones-de-rengo-reserva-chardonnay-botella-750cc.jpg"
  },
  {
    nombre: "Santa Emiliana Sauvignon Blanc Botella 750cc",precioAntes: 3900,precioAhora: 3500,imagen: "https://brindo.cl/607-large_default/1x-santa-emiliana-sauvignon-blanc-botella-750cc.jpg"
  },
  {
    nombre: "Emiliana Reserva Chardonnay Botella 700cc",precioAntes: 5900,precioAhora: 5250,imagen: "https://brindo.cl/483-large_default/1x-emiliana-reserva-chardonnay-botella-700cc.jpg"
  },
  {
    nombre: "Las Mulas Sauvignon Blanc Botella 750cc",precioAntes: 9900,precioAhora: 9250,imagen: "https://brindo.cl/534-large_default/1x-las-mulas-sauvignon-blanc-botella-750cc.jpg"
  },
  {
    nombre: "Casillero del Diablo Sauvignon Blanc Botella 750cc",precioAntes: 6000,precioAhora: 5690,imagen: "https://brindo.cl/476-large_default/1x-casillero-del-diablo-sauvignon-blanc-botella-750cc.jpg"
  },
  {
  //  DESTILADOS WHISKY
    nombre: "Sandy Mac 40° 750cc",precioAntes: 10500,precioAhora: 10000,imagen: "https://brindo.cl/222-large_default/1x-whisky-sandy-mac-40-750cc.jpg"
  },
  {
    nombre: "The Guiligans 40° 750cc",precioAntes: 11900,precioAhora: 11000,imagen: "https://brindo.cl/331-large_default/1x-whisky-the-guiligans-40-750cc.jpg"
  },
  {
    nombre: "Jim Beam White Premium 40° 750cc",precioAntes: 17900,precioAhora: 16890,imagen: "https://brindo.cl/1111-large_default/1x-grey-goose-vx-40-750cc.jpg"
  },
  {
    nombre: "Jack Daniels 40° 750cc",precioAntes: 32900,precioAhora: 30000,imagen: "https://brindo.cl/318-large_default/1x-whisky-jack-daniels-40-750cc.jpg"
  },
  {
    nombre: "Jack Daniels N°7 40° 1000cc",precioAntes: 41900,precioAhora: 3980,imagen: "https://brindo.cl/317-large_default/1x-whisky-jack-daniels-n7-40-1000cc.jpg"
  },
  {
    nombre: "Grants Familiy Reserve 40° 1000cc",precioAntes: 13500,precioAhora: 12900,imagen: "https://brindo.cl/339-large_default/1x-whisky-grants-familiy-reserve-40-1000cc.jpg"
  },
  {
    nombre: "Johnnie Walker Black Label 40° Botella 750cc",precioAntes: 29900,precioAhora: 28900,imagen: "https://brindo.cl/217-large_default/1x-whisky-johnnie-walker-black-label-40-750cc.jpg"
  },
  {
    nombre: "Johnnie Walker Red Label 40° 750cc",precioAntes: 13900,precioAhora: 12990,imagen: "https://brindo.cl/218-large_default/1x-whisky-johnnie-walker-red-label-40-750cc.jpg"
  },
  {
    nombre: "Johnnie Double Black Label 40° 750cc",precioAntes: 37900,precioAhora: 36890,imagen: "https://brindo.cl/1021-large_default/1x-johnnie-double-black-label-40-750cc.jpg"
  },
  {
    nombre: "Chivas Regal 12 años 40° 750cc",precioAntes:33900,precioAhora: 31900,imagen: "https://brindo.cl/272-large_default/1x-whisky-chivas-regal-12-anos-40-750cc.jpg"
  },
  {
  //  TEQUILA
    nombre: "Olmeca Blanco 40° 750cc",precioAntes: 17900,precioAhora: 17000,imagen: "https://brindo.cl/269-large_default/1x-tequila-olmeca-blanco-40-750cc.jpg"
  },
  {
    nombre: "Olmeca Dorado 40° 750cc",precioAntes: 17900,precioAhora: 17000,imagen: "https://brindo.cl/254-large_default/1x-tequila-olmeca-dorado-40-750cc.jpg"
  },
  {
  //  PISCO
    nombre: "Alto del Carmen 35° Especial 1500cc",precioAntes: 10900,precioAhora: 9990,imagen: "https://brindo.cl/240-large_default/1x-pisco-alto-del-carmen-35-especial-1500cc.jpg"
  },
  {
    nombre: "Espíritu los Andes 40° 750cc",precioAntes: 16900,precioAhora: 16000,imagen: "https://brindo.cl/267-large_default/1x-pisco-espiritu-los-andes-40-750cc.jpg"
  },
  {
    nombre: "Chañaral de Caren Especial 35° 750cc",precioAntes: 9900,precioAhora: 9150,imagen: "https://brindo.cl/305-large_default/1x-pisco-chanaral-caren-especial-35-750cc.jpg"
  },
  {
    nombre: "Diablo Reservado 40° 700cc",precioAntes: 9900,precioAhora: 9159,imagen: "https://brindo.cl/328-large_default/1x-pisco-diablo-reservado-40-700cc.jpg"
  },
  {
    nombre: "Mal Paso 40° 750cc",precioAntes: 9500,precioAhora: 9000,imagen: "https://brindo.cl/329-large_default/1x-pisco-mal-paso-40-750cc.jpg"
  },
  {
    nombre: "Diablo Especial 35° 700cc",precioAntes: 8900,precioAhora: 8250,imagen: "https://brindo.cl/327-large_default/1x-pisco-diablo-especial-35-700cc.jpg"
  },
  {
    nombre: "Black Heron 43,5° 700cc",precioAntes: 26900,precioAhora: 25000,imagen: "https://brindo.cl/334-large_default/1x-pisco-black-heron-435-700cc.jpg"
  },
  {
    nombre: " Monte Fraile 40° Reservado 750cc",precioAntes: 39900,precioAhora: 38500,imagen: "https://brindo.cl/239-large_default/1x-pisco-monte-fraile-40-reservado-750cc.jpg"
  },
  {
    nombre: "Republicano Roble Añejado 40° 750cc",precioAntes: 13500,precioAhora: 13000,imagen: "https://brindo.cl/313-large_default/1x-pisco-republicano-roble-anejado-40-750cc.jpg"
  },
  {
  //  GIN
    nombre: "Caorunn Small Batch 41,8° 700cc",precioAntes: 36900,precioAhora: 34890,imagen: "https://brindo.cl/245-large_default/1x-caorunn-small-batch-418-700cc.jpg"
  },
  {
    nombre: "Lüykün 43,7° 750cc",precioAntes: 35900,precioAhora: 32500,imagen: "https://brindo.cl/300-large_default/1x-gin-luykun-437-750cc.jpg"
  },
  {
    nombre: "Bombay Sapphire 47° 750cc",precioAntes: 16900,precioAhora: 15890,imagen: "https://brindo.cl/288-large_default/1x-gin-bombay-sapphire-47-750cc.jpg"
  },
  {
    nombre: "Provincia Andes Dry 40° 700cc",precioAntes: 21900,precioAhora: 20000,imagen: "https://brindo.cl/337-large_default/1x-gin-provincia-andes-dry-40-700cc.jpg"
  },
  {
    nombre: "Gin Bombay Bramble 37,5° Botella 700cc",precioAntes: 18900,precioAhora: 17980,imagen: "https://brindo.cl/1046-large_default/1x-gin-bombay-bramble-375-botella-700cc.jpg"
  },
  {
    nombre: "Citadelle 44° 750cc",precioAntes: 29900,precioAhora: 27900,imagen: "https://brindo.cl/243-thickbox_default/1x-gin-citadelle-44-750cc.jpg"
  },
  {
    nombre: "Tanqueray Ten 47,3° 750cc",precioAntes: 33900,precioAhora: 32900,imagen: "https://brindo.cl/219-large_default/1x-gin-tanqueray-ten-473-750cc.jpg"
  },
  {
    nombre: "Gordon's 37,5° 750cc",precioAntes: 12500,precioAhora: 11590,imagen: "https://brindo.cl/230-thickbox_default/1x-gin-gordon-s-375-750cc.jpg"
  },
  {
    nombre: "Last Hope Dry 40° 700cc",precioAntes: 25900,precioAhora: 22500,imagen: "https://brindo.cl/282-large_default/1x-gin-last-hope-dry-40-700cc.jpg"
  },
  {
    nombre: "Sicario 40° 750cc",precioAntes: 23900,precioAhora: 22000,imagen: "https://brindo.cl/324-large_default/1x-gin-sicario-40-750cc.jpg"
  },
  {
    // VODKA
    nombre: "Stolichnaya 40° 750cc",precioAntes: 11500,precioAhora: 11000,imagen: "https://brindo.cl/316-large_default/1x-vodka-stolichnaya-40-750cc.jpg"
  },
  {
    nombre: "Beluga Noble Russian 40° 750cc",precioAntes: 34900,precioAhora: 33500,imagen: "https://brindo.cl/247-large_default/1x-beluga-noble-russian-40-750cc.jpg"
  },
  {
    nombre: "Absolut Original 750cc",precioAntes: 14900,precioAhora: 13990,imagen: "https://brindo.cl/270-large_default/1x-vodka-absolut-original-750cc.jpg"
  },
  {
    nombre: "Eristoff Black 18° 700cc",precioAntes: 6500,precioAhora: 6000,imagen: "https://brindo.cl/291-large_default/1x-vodka-eristoff-black-18-700cc.jpg"
  },
  {
    nombre: "Absolut Raspberri 40° Botella 750cc",precioAntes: 14900,precioAhora: 12990,imagen: "https://brindo.cl/3250-large_default/1x-absolut-raspberri-40-botella-750cc.jpg"
  },
  {
    nombre: "Stolichnaya 40° Botella 1000cc",precioAntes: 13900,precioAhora: 12000,imagen: "https://brindo.cl/3255-large_default/1x-stolichnaya-40-botella-1000cc.jpg"
  },
  {
    nombre: "Eristoff Original 37,5° 700cc",precioAntes: 4900,precioAhora: 4500,imagen: "https://brindo.cl/290-large_default/1x-vodka-eristoff-original-375-700cc.jpg"
  },
  {
  //  LICORES MIX
    nombre: "Campanario Piña Colada 12° Botella 700cc",precioAntes: 5900,precioAhora: 5200,imagen: "https://brindo.cl/1105-large_default/campanario-pina-colada-12-700cc.jpg"
  },
  {
    nombre: "La Pizka Sour Maracuyá 24° Botella 1000cc",precioAntes: 15900,precioAhora: 15000,imagen: "https://brindo.cl/663-large_default/1x-la-pizka-sour-maracuya-24-botella-1000cc.jpg"
  },
  {
    nombre: "Aba Limón Sour 12° 750cc",precioAntes: 9500,precioAhora: 9100,imagen: "https://brindo.cl/348-large_default/1x-aba-limon-sour-12-750cc.jpg"
  },
  {
    nombre: "Baileys 17° Botella 750cc",precioAntes: 19900,precioAhora: 17560,imagen: "https://brindo.cl/353-large_default/1x-baileys-17-botella-750cc.jpg"
  },
  {
    nombre: "Ruibarbo Sour Botella 750gr",precioAntes: 8900,precioAhora: 8050,imagen: "https://brindo.cl/1055-large_default/1x-ruibarbo-sour-botella-750gr.jpg"
  },
  {
    nombre: "Campanario Selección Creme 14° 700cc",precioAntes: 10900,precioAhora: 10000,imagen: "https://brindo.cl/3284-large_default/1x-campanario-seleccion-creme-14-700cc.jpg"
  },
  {
    nombre: "Secreto Peruano Sour Limón Botella 1000cc",precioAntes: 6200,precioAhora: 6000,imagen: "https://brindo.cl/3243-large_default/1x-secreto-peruano-sour-limon-botella-1000cc.jpg"
  },
  {
    nombre: "Alto del Carmen Cremisse 17° 750cc",precioAntes: 11500,precioAhora: 10990,imagen: "https://brindo.cl/3285-large_default/1x-alto-del-carmen-cremisse-17-750cc.jpg"
  },
  {
    nombre: "La Pizka Cocktail Piña Colada 13° Botella de Vidrio 1000cc",precioAntes: 15900,precioAhora: 14980,imagen: "https://brindo.cl/3291-large_default/1x-la-pizka-cocktail-pina-colada-13-botella-de-vidrio-1000cc.jpg"
  },
  {
    nombre: "La Pizka Cocktail Moscow Mule 14° Botella de Vidrio 1000cc",precioAntes: 15900,precioAhora: 14750,imagen: "https://brindo.cl/3292-large_default/1x-la-pizka-cocktail-moscow-mule-14-botella-de-vidrio-1000cc.jpg"
  },
  {
    // SOUR
    nombre: "Campanario Sour Mango 12° Botella 700cc",precioAntes: 5900,precioAhora: 5000,imagen: "https://brindo.cl/156-thickbox_default/1x-campanario-sour-mango-12-botella-700cc.jpg"
  },
  {
    nombre: "Aba Limón Sour 12° 750cc",precioAntes: 9500,precioAhora: 9400,imagen: "https://brindo.cl/348-large_default/1x-aba-limon-sour-12-750cc.jpg"
  },
  {
    nombre: "Aba Mango Sour 12° 750cc",precioAntes: 9500,precioAhora: 9000,imagen: "https://brindo.cl/345-large_default/1x-aba-mango-sour-12-750cc.jpg"
  },
  {
    nombre: "Campanario Sour 16° Botella 700cc",precioAntes: 5500,precioAhora: 5000,imagen: "https://brindo.cl/153-large_default/1x-campanario-sour-16-botella-700cc.jpg"
  },
  {
    nombre: "Ruibarbo Sour Botella 750gr",precioAntes: 8900,precioAhora: 8000,imagen: "https://brindo.cl/1055-large_default/1x-ruibarbo-sour-botella-750gr.jpg"
  },
  {
    nombre: "Secreto Peruano Sour Limón Botella 1000cc",precioAntes: 6200,precioAhora: 6000,imagen: "https://brindo.cl/3243-large_default/1x-secreto-peruano-sour-limon-botella-1000cc.jpg"
  },
  {
    nombre: "Virrey del Perú Sour Mango Botella 1000cc",precioAntes: 7200,precioAhora: 6990,imagen: "https://brindo.cl/3241-large_default/1x-virrey-del-peru-sour-mango-botella-1000cc.jpg"
  },
  {
    nombre: "Virrey del Perú Sour Limón Botella 1000cc",precioAntes: 7200,precioAhora: 6990,imagen: "https://brindo.cl/3242-large_default/1x-virrey-del-peru-sour-limon-botella-1000cc.jpg"
  },
  {
    nombre: "Secreto Peruano Sour Mango Botella 1000cc",precioAntes: 6200,precioAhora: 4000,imagen: "https://brindo.cl/3244-large_default/1x-secreto-peruano-sour-mango-botella-1000cc.jpg"
  },
  {
    nombre: "La Pizka Sour Chardonnay 14° Botella 1000cc",precioAntes: 15900,precioAhora: 14890,imagen: "https://brindo.cl/3282-large_default/1x-la-pizka-sour-chardonnay-14-botella-1000cc.jpg"
  },
  {
  // VARIDAD COCKTAIL
    nombre: "Aguardiente Doñihue 50° Botella 900cc",precioAntes: 5900,precioAhora: 4750,imagen: "https://brindo.cl/373-large_default/1x-aguardiente-donihue-50-botella-900cc.jpg"
  },
  {
    nombre: "Drambuie 40° Botella 750cc",precioAntes: 29900,precioAhora: 27000,imagen: "https://brindo.cl/376-large_default/1x-drambuie-40-botella-750cc.jpgMalibú 20° Botella 750cc"
  },
  {
    nombre: "Malibú 20° Botella 750cc",precioAntes: 12900,precioAhora: 10400,imagen: "https://brindo.cl/382-large_default/1x-malibu-20-botella-750cc.jpg"
  },
  {
    nombre: "Diamante Centenario 16° Botella 750cc",precioAntes: 8600,precioAhora: 4790,imagen: "https://brindo.cl/746-large_default/1x-diamante-centenario-16-botella-750cc.jpg"
  },
  {
    nombre: "Amarula 17° Botella 750cc",precioAntes: 17900,precioAhora: 15340,imagen: "https://brindo.cl/745-large_default/1x-amarula-17-botella-750cc.jpg"
  },
  {
    nombre: "Ramazzotti 15° Botella 700cc",precioAntes: 14900,precioAhora: 12450,imagen: "https://brindo.cl/355-large_default/1x-ramazzotti-15-botella-700cc.jpg"
  },
  {
    nombre: "Vermouth Martini Rosso 16° Botella 750cc",precioAntes: 6900,precioAhora: 45800,imagen: "https://brindo.cl/1115-large_default/friendly-url-autogeneration-failed.jpg"
  },
  {
    nombre: "Grand Marnier Cordon Rouge 40° Botella 700cc",precioAntes: 42900,precioAhora: 25700,imagen: "https://brindo.cl/1117-large_default/1x-st-germain-20-botella-750cc.jpg"
  },
  {
    nombre: "Vermouth Martini Fiero 14,9° Botella 750cc",precioAntes: 11990,precioAhora: 8900,imagen: "https://brindo.cl/1068-large_default/1x-vermouth-martini-fiero-149-botella-750cc.jpg"
  },
  {
    nombre: "Duval Curacao Blue 34° Botella 750cc",precioAntes:  7500,precioAhora: 4500,imagen: "https://brindo.cl/361-large_default/1x-duval-curacao-blue-34-botella-750cc.jpg"
  },
  {
  //  GASEOSA
    nombre: "Fanta Botella 1500cc",precioAntes: 2200,precioAhora: 2000,imagen: "https://brindo.cl/13-large_default/1x-fanta-botella-1500cc.jpg"
  },
  {
    nombre: "Fanta Zero Botella 1500cc",precioAntes: 2200,precioAhora: 1900,imagen: ""
  },
  {
    nombre: "Coca Cola Sin Azúcar Botella 1500cc",precioAntes: 2200,precioAhora: 2000,imagen: "https://brindo.cl/9-large_default/1x-coca-cola-sin-azucar-botella-1500cc.jpg"
  },
  {
    nombre: "Coca Cola Botella 1500cc",precioAntes: 2200,precioAhora: 1900,imagen: "https://brindo.cl/1-large_default/1x-coca-cola-botella-1500cc.jpg"
  },
  {
    nombre: "Sprite Zero Botella 1500cc",precioAntes: 2200,precioAhora: 1800,imagen: "https://brindo.cl/19-large_default/1x-sprite-zero-botella-1500cc.jpg"
  },
  {
    // MINERALES
    nombre: "Cachantún Sin Gas Botella 1.600cc",precioAntes: 1300,precioAhora: 1000,imagen: "https://brindo.cl/56-large_default/1x-cachantun-sin-gas-botella-1600cc.jpg"
  },
  {
    nombre: "Gatorade Cool Blue Botella 1000cc",precioAntes: 2100,precioAhora: 2000,imagen: "https://brindo.cl/1393-thickbox_default/1x-gatorade-cool-blue-botella-1000cc.jpg"
  },
  {
    nombre: "Pure Life con Gas Botella 500cc",precioAntes: 900,precioAhora: 500,imagen: "https://brindo.cl/66-large_default/1x-pure-life-con-gas-botella-500cc.jpg"
  },
  {
    nombre: "Cachantún Con Gas Botella 1.600cc",precioAntes: 1300,precioAhora: 1000,imagen: "https://brindo.cl/55-large_default/1x-cachantun-con-gas-botella-1600cc.jpg"
  },
  {
    nombre: "Cachantún Más sin Gas Sabor Pera Botella 1600cc",precioAntes: 1600,precioAhora: 1250,imagen: "https://brindo.cl/58-large_default/1x-cachantun-mas-sin-gas-sabor-pera-botella-1600cc.jpg"
  },
  {
  //  JUGOS
    nombre: "Néctar Watts Naranja Ligth Botella 1500cc",precioAntes: 2200,precioAhora: 2000,imagen: "https://brindo.cl/54-large_default/1x-nectar-watts-naranja-ligth-botella-1500cc.jpg"
  },
  {
    nombre: "Néctar Watts Naranja Botella 1500cc",precioAntes: 2200,precioAhora: 2000,imagen: "https://brindo.cl/52-large_default/1x-nectar-watts-naranja-botella-1500cc.jpg"
  },
  {
  //  OTROS
    nombre: "Hielo 1000grs",precioAntes: 1220,precioAhora:1100,imagen: "https://brindo.cl/870-large_default/1x-hielo-1000grs.jpg"
  },
  {
    nombre: "Hielo Frappé 1800grs",precioAntes: 1800,precioAhora: 1400,imagen: "https://brindo.cl/869-large_default/1x-hielo-frappe-1800grs.jpg"
  },
  {
    nombre: "Hielo 1500grs",precioAntes: 1400,precioAhora: 1000,imagen: "https://brindo.cl/871-large_default/1x-hielo-1500grs.jpg"
  },
  {
    nombre: "Carbón de Espino 4000grs",precioAntes: 5500,precioAhora: 5000,imagen: "https://brindo.cl/386-large_default/1x-carbon-de-espino-4000grs.jpg"
  },
  {
    nombre: "Bolsa Astillas",precioAntes: 2900,precioAhora: 2000,imagen: "https://brindo.cl/1118-large_default/1x-pulpa-frambuesa-333grs.jpg"
  }

];
