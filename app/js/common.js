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

$('.events-content__slider').slick({
    infinity: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.events-nav',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.category-page__slider').slick({
    infinity: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.category-page-nav',
});

$('.category-page__events-slider').slick({
    infinity: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.category-page__events-nav',
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 575) {
        $('.comments-slider__mobile:not(.slick-initialized)').slick({
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
        });

        $('.events-slider__mobile:not(.slick-initialized)').slick({
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
        });
    } else {
        $(".comments-slider__mobile.slick-initialized").slick("unslick");
        $(".events-slider__mobile.slick-initialized").slick("unslick");
    }
});
// slick active

$('.list-details .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.list-details .block_title').not(this).removeClass('in').next().slideUp();
});

$('.list-question .block__title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.list-question .block__hover').not(this).removeClass('in').next().slideUp();
});

$(function () {
    // hidden list > 5
    $('.archive-events__content').each(function () {
        if ($(this).find('.box__load').length > 6) {
            $(this).find('.box__load').slice(6).hide();
        }

    });

    // hidden list > 5

    // show list all
    $('.load-more').on('click', function (e) {
        e.preventDefault();
        $('.box__load:hidden').slice(0, 20).fadeIn();

        var onBlock = $('.box__load:hidden').length;
        if(onBlock <= 0) {
            $('.load-more').hide();
        }
    });

    // show list all
});

$('.btn-menu').click(function () {
   $('.dropdownMenu').fadeToggle();
});