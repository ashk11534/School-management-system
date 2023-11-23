$(document).ready(function () {
  // Suborno joyonti corner gallery image carousel (start)
  $(document).on("click", ".gallery-image", function () {
    $("html, body").css("overflow", "hidden");
    $(".gallery-image-carousel").show();
  });

  $(document).on("click", ".gallery-image-carousel-cross-btn", function () {
    $("html, body").css("overflow", "auto");
    $(".gallery-image-carousel").hide();
  });
  // Showcase carousel (start)

  $(".my-carousel-4").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Showcase carousel (end)

  // Suborno joyonti corner gallery image carousel image carousel (end)
});
