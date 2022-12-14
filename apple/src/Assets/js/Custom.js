import $ from "jquery";

$(document).ready(function () {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("collapseClass");
  } else {
    $(".footer-links-wrapper").removeClass("collapseClass");
    $(".footer-links-wrapper ul").show();
  }
  $(window).on("resize", function (event) {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("collapseClass");
    } else {
      $(".footer-links-wrapper").removeClass("collapseClass");
      $(".footer-links-wrapper").removeClass("addXToClose");
      $(".footer-links-wrapper ul").show();
    }
  });
  $(document).on("click", ".collapseClass h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("addXToClose");
  });
});

// header conde
