$(document).ready(function() {

  var navbartop = $('#portfolioNavbar').offset().top
  
  $(window).scroll(function () {

    if ($(window).scrollTop() > navbartop) {
      $('#portfolioNavbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < navbartop+1) {
      $('#portfolioNavbar').removeClass('navbar-fixed');
    }
  });
});