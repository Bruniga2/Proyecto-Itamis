document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const productDetails = document.getElementById('productDetails');
  
    // Lista de productos predefinidos
    const products = [
      {
        title: "Vino Bestia Azul Carmenere 750cc",
        price: 3990,
        image: "https://brindo.cl/774-large_default/24x-heineken-5-lata-470cc.jpg"
      }
    //   {
    //     title: "Producto 2",
    //     price: 1990,
    //     image: "https://via.placeholder.com/150"
    //   },
    //   {
    //     title: "Producto 3",
    //     price: 2990,
    //     image: "https://via.placeholder.com/150"
    //   }
      // Puedes agregar más productos según sea necesario
    ];
  
    // Función para mostrar la lista de productos
    function displayProducts(products) {
      productList.innerHTML = ''; // Limpiar lista antes de agregar productos
  
      products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product.title;
        listItem.addEventListener('click', () => {
          showProductDetails(product);
        });
        productList.appendChild(listItem);
      });
    }
  
    // Función para mostrar los detalles de un producto
    function showProductDetails(product) {
      const productHTML = `
        <h2>${product.title}</h2>
        <p>Precio: $${product.price}</p>
        <img src="${product.image}" alt="${product.title}">
      `;
      productDetails.innerHTML = productHTML;
    }
  
    // Mostrar los productos al cargar la página
    displayProducts(products);
  });
  