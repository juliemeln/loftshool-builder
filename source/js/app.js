//Прелоад
(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function(event) {
        console.log("DOM fully loaded and parsed");
        $('body').css({
            'height': 100 + 'vh',
            'overflow': 'hidden'
        });
    });

    $(window).on('load', function () {
        var $preloader = $('#page-preloader');
        $preloader.delay(500).fadeOut('slow');

        $('body').delay(500).css({
            'overflow': '',
            'height': 100 + '%',
        },"slow");

    });


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




// смена формы логин-авторизация
    $('.btn-container').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            c = $this.next('.white-wrapper'),
            containermain = c.find('.container-white-main'),
            containerenter = c.find('.container-white-enter');

        $(this).hide();
        containermain.addClass('flip');
        containerenter.addClass('flip');
    });



// зеленое меню поверх

  $('.nav-hamburger').on('click', function() {
    var $this=$(this),
        container = $this.parent().prev();
    container.toggle();
  });



////   ****** HAMBURGER
    document.getElementById('burgericon').addEventListener('click', function () {
        this.classList.toggle('open');
    });
}());
/*
//якорь
$('.anchor').on('click', function(e) {
  e.preventDefault();
  var target = $(this).attr('href'),
      offset = $(target).offset().top;

  $(document).scrollTop(offset);
}());
*/