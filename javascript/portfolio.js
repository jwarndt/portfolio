$(document).ready(function() {

  var navbartop = $('#portfolioNavbar').offset().top
  var windowHeight = $(window).height() - 70;
  var scrollSpeed = 1000;

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

  $("#homeButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#background").offset().top}, scrollSpeed);
  });
  $("#aboutButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#aboutContainer").offset().top - 55}, scrollSpeed);
  });
  $("#projectsAndResearchButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#projectsAndResearchContainer").offset().top -55}, scrollSpeed);
  });
  $("#miscellaneousButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#miscellaneousContainer").offset().top-55}, scrollSpeed);
  });
  $("#contactButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#contactContainer").offset().top}, scrollSpeed);
  });

});