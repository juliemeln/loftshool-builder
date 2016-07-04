//slider

(function() {
    var counter=1;
    $('.slider-controls-top').on('click',function(e){
        e.preventDefault();

        var $this=$(this),
            container = $this.closest('.slider'),
            items = container.find('.slider-item'),
            activeItem = container.find('.slider-item.active'),
            path = $this.attr('href'),
            slideshow = $this.closest('.slideshow'),
            display = container.find('.slideshow-display-pic'),
            preloader = $('#preloader');


        if(counter>= items.length) {
            counter=0;
        }
        var reqItem = items.eq(counter);

        activeItem.animate({
            'top':'100%'
        },300);

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



//slider

(function() {
    var counter=1;
    $('.slider-controls-top').on('click',function(e){
        e.preventDefault();

        var $this=$(this),
            container = $this.closest('.slider'),
            items = container.find('.slider-item'),
            activeItem = container.find('.slider-item.active'),
            path = $this.attr('href'),
            slideshow = $this.closest('.slideshow'),
            display = container.find('.slideshow-display-pic'),
            preloader = $('#preloader');


        if(counter>= items.length) {
            counter=0;
        }
        var reqItem = items.eq(counter);

        activeItem.animate({
            'top':'100%'
        },300);

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


//slider

(function() {
    var counter=1;
    $('.slider-controls-top').on('click',function(e){
        e.preventDefault();

        var $this=$(this),
            container = $this.closest('.slider'),
            items = container.find('.slider-item'),
            activeItem = container.find('.slider-item.active'),
            path = $this.attr('href'),
            slideshow = $this.closest('.slideshow'),
            display = container.find('.slideshow-display-pic'),
            preloader = $('#preloader');


        if(counter>= items.length) {
            counter=0;
        }
        var reqItem = items.eq(counter);

        activeItem.animate({
            'top':'100%'
        },300);

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
