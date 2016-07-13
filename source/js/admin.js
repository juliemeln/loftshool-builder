


$('.tabs-menu a').click(function(e) {
    e.preventDefault();
    $('.tabs-menu .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');
    console.log(tab);

    $('.tab').not(tab).css({'display':'none'});
    var x = $('.tab').not(tab);
    console.log(x);

    $(tab).fadeIn(400);
});