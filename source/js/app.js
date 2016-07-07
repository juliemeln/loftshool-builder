
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



/*$(document).ready(function(){
  setBlur();
});

$(window).resize(function(){
  setBlur();
});

function setBlur() {
  var imgWidth=$('.blur-background').width(),
      blur=$('.blur-form'),
      blurSection=$('.blur'),
      posTop=blurSection.offset().top-blur.offset().top,
      posLeft=blurSection.offset().left-blur.offset().left;
  blur.css({
    'background-size':imgWidth + 'px' + ' ' + 'auto',
    'background-position': posLeft + 'px' + ' ' + posTop + 'px'
  });*/



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

//КАРТА
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(59.9289317,30.2943374),
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#61dac9"},{"visibility":"on"}]}]

  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);


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
});*/
/*
//// СТАТЬИ В БЛОГЕ
$(window).scroll(function() {
  var
      wScroll = $(window).scrollTop(),
      menu = $('.static .menu-blog'),
      sidebar = $('.static .menu-wrapper'),
      stickyStart = sidebar.offset().top,
      menuClone = sidebar.clone(),
      fixedSidebar = $('.fixed .left-col');

  if (wScroll >= stickyStart) {

     menu.css({
     	top : wScroll - stickyStart + 'px'
     });

    if (!fixedSidebar.find('.menu-wrapper').length) {
      fixedSidebar.append(menuClone);
      menu.hide();
    }

  } else {
    fixedSidebar.find('.menu-wrapper').remove();
    menu.show();
  }

});

*/

//slider

(function() {
  var counter=1;
  $('.slider-controls-top').on('click',function(e){
    e.preventDefault();

    var $this=$(this),
        container = $this.closest('.slider'),
        items = container.find('.slider-item'),
        activeItem = container.find('.slider-item.active'),
        slideshow = $this.closest('.slideshow'),
        display = container.find('.slideshow-display-pic'),
        preloader = $('#preloader');


    if(counter>= items.length) {
      counter=0;
    }
    var reqItem = items.eq(counter),
        path = reqItem.attr('href');

    reqItem.animate({
      'top':'0%'
    },300, function(){
      activeItem.removeClass('active').css('top','-100%');
      $(this).addClass('active');
    });
    display.fadeOut(300, function () {
      preloader.show();
      display.attr('src', path).load(function () {
        $(this).fadeIn();
        preloader.hide();
      });

    });


    counter ++;
  });
}());

//анимация кругов при прокрутке

$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.html').css({
      'stroke-dasharray':'250 370'
    });
  }
});


//якорь
$('.anchor').on('click', function(e) {

  e.preventDefault();

  var target = $(this).attr('href'),
      offset = $(target).offset().top;

  $(document).scrollTop(offset);

});



$(window).scroll(function() {
  var wscroll = $(window).scrollTop();
  (function(){
    var svgHtml = $('.html'),
        svgCss = $('.css'),
        svgjava = $('.java'),
        svgPhp = $('.php'),
        svgMysql = $('.mysql'),
        svgNode = $('.node'),
        svgMongo = $('.mongo'),
        svgGit = $('.git'),
        svgGulp = $('.gulp'),
        svgBower = $('.bower'),
        svgPos = $('.about-container').offset().top,
        windowMargin = $(window).height()/3,
        startAnimate = wscroll - svgPos + windowMargin,
        pixelsElapsed = svgPos - wscroll,
        percentsElapsed =  Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
        percentsDraw = 200 / 100 * percentsElapsed;

    svg(svgHtml,80);
    svg(svgCss,50);
    svg(svgjava,30);
    svg(svgPhp,10);
    svg(svgMysql,80);
    svg(svgNode,80);
    svg(svgMongo,90);
    svg(svgGit,60);
    svg(svgGulp,40);
    svg(svgBower,30);


    function svg(block, dash){

      if (startAnimate >= 0) {
        var drawAmount = percentsDraw;
        if (drawAmount > 0 && drawAmount >= dash) {
          block.css({
            'stroke-dashoffset' : drawAmount
          });
        }
      }
    }

  })();
})