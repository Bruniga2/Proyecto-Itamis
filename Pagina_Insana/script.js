$(document).ready(function() {
    // Inicializar el carrusel de recetas
    $('.recipe-carousel').owlCarousel({
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
          items: 4
        }
      },
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  
    // Cargar más productos
    let productCount = 8; // Número inicial de productos
    let loadMoreButton = $('.load-more');
    loadMoreButton.click(function() {
      let newProducts = '';
      for (let i = 0; i < 4; i++) {
        newProducts += `
          <div class="product-card">
            <img src="https://t1.uc.ltmcdn.com/es/posts/7/0/4/como_hacer_el_trago_destornillador_42407_orig.jpg" alt="Producto ${productCount + i + 1}">
            <h3>Nombre del Producto ${productCount + i + 1}</h3>
            <p>$ Precio del Producto ${productCount + i + 1}</p>
          </div>
        `;
      }
      $('.product-grid').append(newProducts);
      productCount += 4;
      if (productCount >= 20) {
        loadMoreButton.hide();
      }
    });
  });