/*// BLUR
$(document).ready(function(){
 setBlur();
 });

 $(window).resize(function(){
 setBlur();
 });

 function setBlur() {
     var imgWidth = $('.blur-background').width(),
         blur = $('.blur-form'),
         blurSection = $('.blur'),
         posTop = blurSection.offset().top - blur.offset().top,
         posLeft = blurSection.offset().left - blur.offset().left;
     blur.css({
         'background-size': imgWidth + 'px' + ' ' + 'auto',
         'background-position': posLeft + 'px' + ' ' + posTop + 'px'
     });
 }*/