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




// анимация прогресс-кругов
(function() {
    'use strict';
    $(window).scroll(function () {
        var wScroll = $(window).scrollTop();
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
                startAnimate = wScroll - svgPos + windowMargin,
                pixelsElapsed = svgPos - wScroll,
                percentsElapsed = Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
                percentsDraw = 490 / 100 * percentsElapsed;
            console.log(wScroll);

            svg(svgHtml, 50);
            svg(svgCss, 50);
            svg(svgjava, 50);
            svg(svgPhp, 50);
            svg(svgMysql, 50);
            svg(svgNode, 50);
            svg(svgMongo, 50);
            svg(svgGit, 50);
            svg(svgGulp, 50);
            svg(svgBower, 50);
            console.log(svgPos);

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
})();
