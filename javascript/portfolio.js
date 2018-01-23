$(document).ready(function() {

  var navbartop = $('#portfolioNavbar').offset().top
  var windowHeight = $(window).height();

  $(window).scroll(function () {

    if ($(window).scrollTop() > navbartop) {
      $('#portfolioNavbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < navbartop+1) {
      $('#portfolioNavbar').removeClass('navbar-fixed');
    }
    if ($(window).scrollTop() > windowHeight) {
    	$('#portfolioNavbar').css({"background-color": "#52504f", "box-shadow": "1px 1px 1px #545251"}) 
    }
    if ($(window).scrollTop() < windowHeight) {
    	$('#portfolioNavbar').css({"background-color": "transparent", "box-shadow": "0px 0px 0px transparent"}) 
    }
  });

});