/*function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();

function renderProgress(progress)
{
  progress = Math.floor(progress);
  if(progress<25){
    var angle = -90 + (progress/100)*360;
    $(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
  }
  else if(progress>=25 && progress<50){
    var angle = -90 + ((progress-25)/100)*360;
    $(".animate-0-25-b").css("transform","rotate(0deg)");
    $(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
  }
  else if(progress>=50 && progress<75){
    var angle = -90 + ((progress-50)/100)*360;
    $(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
    $(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
  }
  else if(progress>=75 && progress<=100){
    var angle = -90 + ((progress-75)/100)*360;
    $(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b")
        .css("transform","rotate(0deg)");
    $(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
  }
  $(".text").html(progress+"%");
}

// initMap() - функция инициализации карты
function initMap() {
  // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
  var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);

  // Обязательные опции с которыми будет проинициализированна карта
  var mapOptions = {
    center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
    zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
  };

  // Создаем карту внутри элемента #map
  var map = new google.maps.Map(document.getElementById("map-google"), mapOptions);
}

// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);*/

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