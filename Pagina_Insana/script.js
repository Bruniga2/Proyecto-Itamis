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
