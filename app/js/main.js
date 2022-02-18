$(function () {
    $('.blog-page__content-item-slider-box').slick({
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="blog-page__arrows blog-page__arrows-next"><img src="images/icons/next.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="blog-page__arrows blog-page__arrows-prev"><img src="images/icons/prev.svg" alt="arrow"></button>',
    });

    $('.contact__slider-inner').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

$(function () {
    $('.menu__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.menu__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--active');
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.all'
        }
    });
});

