$(function () {
    $('.lev__inner').slick({
    });

    $('.contact__slider-inner').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    }); 
});

$ (function(){
    $('.menu__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.all'
        }
    });
});

