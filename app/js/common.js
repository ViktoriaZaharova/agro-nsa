$('.main-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    infinity: true
});

$('.calendar-slider').slick({
    infinity: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});