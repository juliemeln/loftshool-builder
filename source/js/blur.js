// BLUR

$(window).resize(function(){
    var imgWidth=$('.blur-background').width(),
        blur=$('.blur-form'),
        blurSection=$('.blur'),
        posTop=blurSection.offset().top-blur.offset().top,
        posLeft=blurSection.offset().left-blur.offset().left;
    blur.css({
        'background-size':imgWidth+'px'+' '+'auto'
    });

});
