

//ФОН
$(window).scroll(function () {
  var wScroll = $(window).scrollTop();
  (function () {
    var bg = $('.hero-bg'),
        sectionText = $('.hero-section-img'),
        user = $('.hero-user');

    slideIt(bg, -wScroll / 45);
    slideIt(sectionText, wScroll / 30);
    slideIt(user, wScroll / 3);

    function slideIt(block, strafeAmount) {
      var strafe = -strafeAmount + '%',
          transformString = 'translate3d(0,' + strafe + ',0)';

      block.css({
        'transform': transformString
      });
    }
  }());
});


//Прелоад
(function() {
  'use strict';
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    $('body').css({
        'overflow': 'hidden',
        'height': 100 + 'vh'
      });
  });

  $(window).on('load', function () {
  var $preloader = $('#page-preloader');
    $preloader.delay(500).fadeOut('slow');
    $(document).ready(function(){
      $('body').css({
        'overflow': '',
        'height': 100 + '%'
    });
  });
  });
}());

// смена формы логин-авторизация
(function() {
  $('.btn-container').on('click', function(e) {
    e.preventDefault();
    var $this = $(this),
        container = $this.next('.white-wrapper'),
        containermain = container.find('.container-white-main'),
        containerenter = container.find('.container-white-enter');

    $(this).hide();
    containermain.addClass('flip');
    containerenter.addClass('flip');
  });
}());

// зеленое меню поверх
(function() {
  $('.nav-hamburger').on('click', function() {
    var $this=$(this),
        container = $this.parent().prev();
    container.toggle();
  });
}());

/*
////   ****** HAMBURGER
document.getElementById('burgericon').addEventListener('click', function (e) {
  this.classList.toggle('open');
});

/*
//якорь
$('.anchor').on('click', function(e) {
  e.preventDefault();
  var target = $(this).attr('href'),
      offset = $(target).offset().top;

  $(document).scrollTop(offset);
}());
*/
