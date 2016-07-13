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
    $('.autorize-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),

            c = $this.parent().next('.white-wrapper'),
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

// валидация формы




    
// для админки

  $('.tabs-item').first().addClass('active');
    
  $('.tabs-menu a').click(function(e) {
      e.preventDefault();
      $('.tabs-item.active').removeClass('active');
      $(this).parent().addClass('active');
      var tab = $(this).attr('href'),
          tabactive = document.getElementById(tab);

      console.log(tabactive);
      $('.tab').not(document.getElementById(tab)).hide();
      console.log($('.tab').not(document.getElementById(tab)));

      $(tabactive).show();

/*      console.log(tabactive);

      console.log(tab);
      var x = $('.tab').not(tab);
      console.log(x);
      $('.tab').not(tab).hide();
      $(tab).fadeIn(400);  */
  });



}());

/*
////   ****** HAMBURGER
    document.getElementById('burgericon').addEventListener('click', function () {
        this.classList.toggle('open');
    });
///прогресс прелоадер


 $(document).ready(function () {
 $(function () {
 var imgs = [];
 $.each($('*'), function () {
 var $this = $(this),
 background = $this.css('background-image'),
 img = $this.is('img');
 if (background != 'none') {
 var path = background.replace('url("', '').replace('")', '');
 imgs.push(path);
 }
 if (img) {
 var path = $this.attr('src');
 if (path) {
 imgs.push(path);
 }
 }
 });
 ​
 var percents = 1;
 ​
 for (var i = 0; i < imgs.length; i++) {
 var image = $('<img>', {
 attr: {
 src : imgs[i]
 }
 });
 ​
 image.load(function () {
 setPercents(imgs.length, percents);
 percents++;
 });
 }
 ​
 function setPercents(total, current) {
 var percent = Math.ceil(current / total * 100);
 console.log('i am counting it!');
 if (percent >= 100) {
 $('#preloader_text tspan', svg.root()).text(percent + '%');
 }
 }
 });
 });




*/
/*
//якорь
$('.anchor').on('click', function(e) {
  e.preventDefault();
  var target = $(this).attr('href'),
      offset = $(target).offset().top;

  $(document).scrollTop(offset);
}());
*/