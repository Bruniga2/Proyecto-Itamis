
// carrusel inferior
$(document).ready(function() {
  $(".recipes-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
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
        items: 4

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



// Inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
  const loginModal = document.querySelector('.login-modal');
  const loginBtn = document.querySelector('.login-btn');
  const closeBtn = document.querySelector('.login-close');

  // Mostrar el modal al hacer clic en el botón de inicio de sesión
  loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'flex';
  });

  // Ocultar el modal al hacer clic en el botón de cerrar
  closeBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
  });

  // Ocultar el modal al hacer clic fuera del contenido del modal
  window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });
});


// Registro de Cliente
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.bares-overlay');
  const showModalBtn = document.getElementById('showModalBtn');
  const closeModalBtn = document.querySelector('.close-register');

  // Mostrar la pantalla emergente al hacer clic en el botón "Mostrar Modal"
  showModalBtn.addEventListener('click', function () {
    overlay.style.display = 'flex'; 
  });

  // Ocultar la pantalla emergente al hacer clic en el botón de cerrar
  closeModalBtn.addEventListener('click', function () {
    overlay.style.display = 'none'; 
  });

  // Ocultar la pantalla emergente al hacer clic fuera del modal
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      overlay.style.display = 'none'; 
    }
  });
});


// CAMBIAR LA DIRECCION
document.addEventListener("DOMContentLoaded", function() {
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
  locationDropdown.addEventListener('click', function(event) {
    openMenu();
  });

  // Cerrar el menu cuando elijo una opcion
  locationMenu.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const selectedLocation = event.target.textContent;
      document.querySelector('.location input').value = selectedLocation;
      closeMenu();
    }
  });

  // Cerrar el menu al presionar afuera
  document.addEventListener('click', function(event) {
    if (!locationDropdown.contains(event.target) && !locationMenu.contains(event.target)) {
      closeMenu();
    }
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

window.onload = function() {
  productos.forEach(function(producto) {
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
    nombre: "La Pizka Sour Limón Sutil 24° Botella 1000cc",
    precioAntes: 15900,
    precioAhora: 11590,
    imagen: "https://brindo.cl/666-home_default/1x-la-pizka-sour-limon-sutil-24-botella-1000cc.jpg"
  }
  
];
