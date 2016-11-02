'use strict';

$(document).ready(function(){
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $('.scrollspy').scrollSpy();
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutSine');
        event.preventDefault();
    });
});
