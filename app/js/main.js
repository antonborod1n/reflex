$(function () {
    /* $('.blog-page__content-item-slider-box').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/next.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/prev.svg" alt="arrow"></button>',
    });

    $('.contact__slider-inner').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });  */
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

