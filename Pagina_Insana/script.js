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


// Carrito de compras
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.querySelector('.cart-dropdown');
const closeCartButton = document.querySelector('.close-cart');

cartIcon.addEventListener('click', () => {
  cartDropdown.classList.add('show');
  cartDropdown.style.width = '400px'; // Aumentar el ancho del carrito
  cartDropdown.style.height = '500px'; // Aumentar la altura del carrito
});

closeCartButton.addEventListener('click', () => {
  cartDropdown.classList.remove('show');
  cartDropdown.style.width = '300px'; // Restablecer el ancho del carrito
  cartDropdown.style.height = '400px'; // Restablecer la altura del carrito
});



// anti bastis
//   verifica si eres mayor de edad



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