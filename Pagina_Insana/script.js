
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
