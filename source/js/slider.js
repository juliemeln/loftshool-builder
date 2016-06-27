function() {
    var counter = 1;
    $('.slider-controls-top').on('click',function(e){
        e.preventDefault();
        var $this=$(this),
            container = $this.closest('.slider'),
            items = container.find('.slider-item'),
            activeItem = container.find('.slider-item active');
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
            activeItem.removeClass('active').css('top','-100%'),
                $(this).addClass('active');
        });
        counter ++;

    });

}