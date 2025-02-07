// Smooth scrolling for navbar links
$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        $(this).blur(); // Rimuove il focus dopo il click
      });
      
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 56, // Offset for fixed navbar
        },
        800
      );
    }
  });

  // Inizializza il carosello con autoplay
  $("#galleryCarousel").carousel({
    interval: 3000, // Cambia immagine ogni 3 secondi
    pause: "hover", // Ferma l'autoplay al passaggio del mouse
  });

  $('#mobileReviewsCarousel').carousel({
    interval: 5000, // Cambia recensione ogni 5 secondi
    pause: "hover" // Ferma l'autoplay al passaggio del mouse
  });
});
