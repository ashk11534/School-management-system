$(document).ready(function () {
  // Showcase carousel (start)

  $(".my-carousel-1").owlCarousel({
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

  // About us accordion(start)

  $(".accordion-item__heading").click(function () {
    var current_accordion_item_body = $(this).next(".accordion-item__body");
    current_accordion_item_body.slideToggle();

    var down_arrow =
      $(this).find(".fa-chevron-down").length == 1
        ? $(this).find(".fa-chevron-down")
        : null;
    var up_arrow =
      $(this).find(".fa-chevron-up").length == 1
        ? $(this).find(".fa-chevron-up")
        : null;
    if (down_arrow) {
      down_arrow.remove();
      $(this).append(`<i class="fa-solid fa-chevron-up"></i>`);
    } else {
      up_arrow.remove();
      $(this).append(`<i class="fa-solid fa-chevron-down"></i>`);
    }

    var another_down_arrow =
      $(".accordion-item__heading").not(this).find(".fa-chevron-down").length ==
      1
        ? $(".accordion-item__heading").not(this).find(".fa-chevron-down")
        : null;
    var another_up_arrow =
      $(".accordion-item__heading").not(this).find(".fa-chevron-up").length == 1
        ? $(".accordion-item__heading").not(this).find(".fa-chevron-up")
        : null;

    if (another_down_arrow) {
      another_down_arrow.remove();
      $(".accordion-item__heading")
        .not(this)
        .append(`<i class="fa-solid fa-chevron-up"></i>`);
    } else {
      another_up_arrow.remove();
      $(".accordion-item__heading")
        .not(this)
        .append(`<i class="fa-solid fa-chevron-down"></i>`);
    }

    $(".accordion-item__body").not(current_accordion_item_body).slideToggle();
  });

  // About us accordion(end)
});
