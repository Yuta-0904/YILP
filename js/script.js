$(function () {
  $("#nav-toggle").on("click", function () {
    $("body").toggleClass("scroll-fix");
    $("#global-nav").toggleClass("open");
    $(".toggle").toggleClass("open");
  });
});
