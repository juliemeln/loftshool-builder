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


// анимация прогресс-кругов

$(window).scroll(function () {
  var wscroll = $(window).scrollTop();
  (function () {
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
        svgPos = $('.about-wrapper').offset().top,
        windowMargin = $(window).height() / 3,
        startAnimate = wscroll - svgPos + windowMargin,
        pixelsElapsed = svgPos - wscroll,
        percentsElapsed = Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
        percentsDraw = 500 / 100 * percentsElapsed;

    svg(svgHtml, 50);
    svg(svgCss, 50);
    svg(svgjava, 70);
    svg(svgPhp, 10);
    svg(svgMysql, 80);
    svg(svgNode, 80);
    svg(svgMongo, 90);
    svg(svgGit, 60);
    svg(svgGulp, 40);
    svg(svgBower, 30);

    function svg(block, dash) {

      if (startAnimate >= 0) {
        var drawAmount = percentsDraw;
        if (drawAmount > 0 && drawAmount >= dash) {
          block.css({
            'stroke-dashoffset': drawAmount
          });
        }
      }
    }
  })();
});

//КАРТА
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(59.8589317,30.1043374),
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#61dac9"},{"visibility":"on"}]}]

  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

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


////   ****** HAMBURGER
document.getElementById('burgericon').addEventListener('click', function (e) {
  this.classList.toggle('open');
});

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

    //  menu.css({
    //  	top : wScroll - stickyStart + 'px'
    //  });

    if (!fixedSidebar.find('.menu-wrapper').length) {
      fixedSidebar.append(menuClone);
      menu.hide();
    }

  } else {
    fixedSidebar.find('.menu-wrapper').remove();
    menu.show();
  }
});


/*
//якорь
$('.anchor').on('click', function(e) {
  e.preventDefault();
  var target = $(this).attr('href'),
      offset = $(target).offset().top;

  $(document).scrollTop(offset);
}()); */



(function(){
  'use strict';

  var counter = 0;

  var itemPrev = $('.slider__controls-item_prev').find('.slider__img'),
      itemNext = $('.slider__controls-item_next').find('.slider__img');
  console.log('.slider__controls-item_prev');
  if (itemPrev.data('id') === 'work1'){
    $(this).addClass('active');
  };

  if (itemNext.data('id') === 'work3'){
    $(this).addClass('active');
  };

  $('.slider__controls-item_prev').on('click', function(e){
    e.preventDefault();
    slider('down');
  });

  $('.slider__controls-item_next').on('click', function(e){
    e.preventDefault();
    slider('up');
  });

  function slider(direction){
    var	slider = $('.slider'),
        container = slider.find('.slider__controls'),
        imgPrev = container.find('.slider__controls-item_prev').find('.slider__img'),
        imgNext = container.find('.slider__controls-item_next').find('.slider__img'),
        activeImgPrev = imgPrev.filter('.active'),
        activeImgNext = imgNext.filter('.active'),
        display = slider.find('.slider__display').find('.slider__img'),
        text = slider.find('.about-me__header'),
        skills = slider.find('.works__skills-info'),
        reqImgPrev,
        reqImgNext;

    if (counter >= imgPrev.length) {
      counter = 0;
    };

    if (direction === 'down'){
      reqImgPrev = imgPrev.eq(counter-1);
      reqImgNext = imgNext.eq(counter+1);
    } else {
      reqImgPrev = imgPrev.eq(counter+1);
      reqImgNext = imgNext.eq(counter-1);
    }

    var	reqImg = imgPrev.eq(counter),
        name = reqImg.data('name'),
        description = reqImg.data('description'),
        path = reqImg.attr('src');


    activeImgPrev.animate({
      'top': '200%'
    },300);
    reqImgPrev.animate({
      'top': '0'
    },300, function() {
      activeImgPrev.removeClass('active').css('top', '0');
      $(this).addClass('active');
      text.text(name);
      skills.text(description);
    });

    activeImgNext.animate({
      'top': '200%'
    },300);
    reqImgNext.animate({
      'top': '0'
    },300, function() {
      activeImgNext.removeClass('active').css('top', '0');
      $(this).addClass('active');
      text.text(name);
      skills.text(description);
    });

    display.fadeOut(function() {
      $(this).attr('src', path).fadeIn();
    });

    counter++;
  };
})();