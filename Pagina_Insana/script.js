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
        items: 5

      }
    }
  });
});


// Carrito
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.querySelector('.cart-dropdown');
const closeCartButton = document.querySelector('.close-cart');

function openCart() {
  cartDropdown.classList.add('show');
  cartDropdown.style.width = '400px'; // Aumentar el ancho del carrito
  cartDropdown.style.height = '500px'; // Aumentar la altura del carrito
}

function closeCart() {
  cartDropdown.classList.remove('show');
  cartDropdown.style.width = '300px'; // Restablecer el ancho del carrito
  cartDropdown.style.height = '400px'; // Restablecer la altura del carrito
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
  const closeBtn = document.querySelector('.btn-close');

  // Mostrar el modal al hacer clic en el botón de inicio de sesión
  loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
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

// CAMBIAR LA DIRECCION
document.addEventListener("DOMContentLoaded", function() {
  const locationDropdown = document.querySelector('.location-dropdown');
  const locationMenu = document.querySelector('.location-menu');
  const locationText = document.querySelector('.location');

  locationMenu.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
          const selectedLocation = event.target.textContent;
          locationText.textContent = selectedLocation;
      }
  });
});





document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.bares-overlay');
  const showModalBtn = document.getElementById('showModalBtn');
  const closeModalBtn = document.querySelector('.close-register');

  // Mostrar la pantalla emergente al hacer clic en el botón "Mostrar Modal"
  showModalBtn.addEventListener('click', function () {
    overlay.style.display = 'flex'; // Mostrar el overlay al centro
  });

  // Ocultar la pantalla emergente al hacer clic en el botón de cerrar
  closeModalBtn.addEventListener('click', function () {
    overlay.style.display = 'none'; // Ocultar el overlay
  });

  // Ocultar la pantalla emergente al hacer clic fuera del modal
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      overlay.style.display = 'none'; // Ocultar el overlay
    }
  });
});