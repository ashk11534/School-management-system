$(document).ready(function () {
  // Toggling mobile menu (start)

  $(".mobile-menu-hamburger-icon").click(function () {
    $("html, body").css("overflow", "hidden");
    $(".mobile-menu").show();
  });

  $(".mobile-menu-cross-btn").click(function () {
    $("html, body").css("overflow", "auto");
    $(".mobile-menu").hide();
  });

  // Toggling mobile menu (end)
});
