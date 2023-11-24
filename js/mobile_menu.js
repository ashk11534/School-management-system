$(document).ready(function () {
  // Toggling mobile menu (start)

  $(".mobile-menu-hamburger-icon").click(function () {
    $("body").css("overflow", "hidden");
    $(".mobile-menu").show();
  });

  $(".mobile-menu-cross-btn").click(function () {
    $("body").css("overflow", "auto");
    $(".mobile-menu").hide();
  });

  // Toggling mobile menu (end)
});
