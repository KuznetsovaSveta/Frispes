//BURGER MENU
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-mobile');
    const menuCloseItem = document.querySelector('.header__close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__mobile-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__mobile-active');
    });

    if (window.innerWidth < 811) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__mobile-active');
            });
        }
    }
}());



//SPACE SLIDER
function resizeActiveSlide(){
    let $refEl = ($(window).width() > 810) ? $('.spaces__slider .slick-current') : $('.spaces__slider .slick-active.slick-center').next();
    let height = ($(window).width() <= 510) ? 400 : $refEl.height();
    $('.spaces__slider-content').css('height', height);
}
$(window).on("load resize", function (e) {
    resizeActiveSlide();
});

let $slideNum = $('.slideNum');
let $slideCount = $('.slideCount');
let $spacesSlider = $('.spaces__slider');
$spacesSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    $slideNum.text(i < 10 ? '0' + i : i);
    $slideCount.text(slick.slideCount < 10 ? '0' + slick.slideCount : slick.slideCount);
    resizeActiveSlide();
});
$spacesSlider.slick({
    slidesToShow: 3,
    dots: true,
    loop: true,
    responsive: [
        {
            breakpoint: 810,
            settings: {
                centerMode: true,
                slidesToShow: 3,
                variableWidth: true,
            }
        },
        {
            breakpoint: 510,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                variableWidth: true,
            }
        }
    ]
});

// GALLERY SLIDER
let $gallery = $('.gallery__slider');
$gallery.slick({
    centerMode: true,
    nextArrow: $('.gallery .slider__arrows .slick-next'),
    prevArrow: $('.gallery .slider__arrows .slick-prev'),
    variableWidth: true,
    slidesToShow: 4,
    loop: true,
});


// REVIEWS SLIDER
let $reviews = $('.reviews__slider');
$reviews.slick({
    nextArrow: $('.reviews .slider__arrows .slick-next'),
    prevArrow: $('.reviews .slider__arrows .slick-prev'),
    variableWidth: true,
    dots: true,
    loop: false,
    appendDots: $('.slider__dots'),
    responsive: [
        {
            breakpoint: 810,
            settings: {
                arrows: true,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 580,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1,
            }
        }
    ]
});

$(window).on("load resize", function (e) {
    if ($(window).width() < 810)
        return;

    let wrapWidth = $('.wrapper').first().width();
    let marginLeft = ($(window).width() - wrapWidth) / 2;
    let sliderWidth = $(window).width() - marginLeft;
    $('.reviews .slider_block').css({
        'margin-left': marginLeft,
        'width': sliderWidth
    });
});