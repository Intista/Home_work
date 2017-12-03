// hamburger menu

let hambMenu = document.getElementById('hamburger__btn');
let hambClose = document.getElementById('hamburger__btn-close');
let hambNav = document.getElementById('hamburger__nav');
let content = document.getElementById('maincontent');

hambMenu.addEventListener('click', function() {
    hambNav.style.display = 'flex';
    content.style.display = 'none';

});

hambClose.addEventListener('click', function() {
    hambNav.style.display = 'none';
    content.style.display = 'block';
});

//drop close

let drop = document.getElementById('burgers__drop');
let dropClose = document.getElementById('burgers__close');
let button = document.getElementById('burgers__btn');

dropClose.addEventListener('click', function() {
    drop.style.opacity = '0';
    drop.style.left = '9999px';
});

button.addEventListener('mouseover', function() {
    drop.style.opacity = '';
    drop.style.left = '';
});

//team accordeon

$(function() {
    $('.team__content').slideUp(0);
    $('.team__name').on('click', (e) => {
        e.preventDefault();
        let thisElem = e.currentTarget;
        $(thisElem).siblings('.team__content').slideToggle(300);
        $('.team__content').not($(thisElem).next()).slideUp(300).parent().removeClass('team__item--active');
        $(thisElem).parent().toggleClass('team__item--active');
    })
});

// menu accordeon

const calculateWidth = () => {
    const wWidth = $(window).width();
    const titles = $('.menu__link');
    const titleWidth = titles.width();
    const reqWidth = wWidth - (titleWidth * titles.length);

    return (reqWidth > 550) ? 550 : reqWidth
}

const openItem = item => {
    const container = $('.menu__accordeon')
    const items = $('.menu__item', container)
    const accoText = $('.menu__text', container)
    const activeItem = items.filter('.menu__item--active')
    const activeContent = activeItem.find('.menu__content')
    const content = item.find('.menu__content')
    const reqWidth = calculateWidth()

    items.removeClass('menu__item--active');
    item.addClass('menu__item--active');

    accoText.hide();
    activeContent.animate({ 'width': '0px' });

    content.animate({
        'width': reqWidth + 'px'
    }, () => { accoText.fadeIn() })
}

const closeItem = item => {
    item.removeClass('menu__item--active');

    item.closest('.menu__accordeon').find('.menu__text')
        .stop(true, true).fadeOut(() => {
            item.find('.menu__content').animate({ 'width': '0px' });
        });
}

$('.menu__link').on('click', (e) => {
    e.preventDefault();

    const $this = $(e.target)
    const item = $this.closest('.menu__item')

    item.hasClass('menu__item--active') ?
        closeItem(item) :
        openItem(item)


});

$(document).on('click', (e) => {
    const $this = $(e.target);

    if (!$this.closest('.menu__accordeon').length) {
        closeItem($('.menu__item'))
    }
});

// page3 slider

$(document).ready(function(options) {

    let settings = {

    }

    const slider = $('.slider').bxSlider(settings);

    $('.scroll-left').on('click', function(e) {
        e.preventDefault();

        slider.goToPrevSlide();
    })

    $('.scroll-right').on('click', function(e) {
        e.preventDefault();

        slider.goToNextSlide();
    })

    let bxViewport = $('.bx-viewport');
    bxViewport.css({
        overflow: 'visible'
    })

})

//modal window

$(document).ready(function() {
    $('.reviews__link').click(function(e) {
        e.preventDefault();
        $('.reviews__modal').fadeIn(400,
            function() {
                $('.reviews__modal-block')
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200);
            });
    });
    $('.reviews__modal-close, .reviews__modal').click(function() {
        $('.reviews__modal-block')
            .animate({ opacity: 0, top: '45%' }, 200,
                function() {
                    $(this).css('display', 'none');
                    $('.reviews__modal').fadeOut(400);
                }
            );
    });
});

//One Page Scroll

const display = $('.maincontent');
const sections = $('.page');

let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const switchMenuActiveClass = sectionEq => {
    $('.pages__item').eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
}

const performTransition = sectionEq => {
    if (inScroll) return
    inScroll = true

    const position = (sectionEq * -100) + '%';

    display.css({
        'transform': `translate(0, ${position})`,
        '-webkit-transform': `translate(0, ${position})`
    })

    sections.eq(sectionEq).addClass('active')
        .siblings().removeClass('active');

    setTimeout(() => {
        inScroll = false;
        switchMenuActiveClass(sectionEq);
    }, 1300);
}

const difineSections = sections => {
    const activeSection = sections.filter('.active');
    return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
    }
}

const scrollToSection = direction => {
    const section = difineSections(sections)

    if (inScroll) return;

    if (direction === 'up' && section.nextSection.length) {
        performTransition(section.nextSection.index())
    }

    if (direction === 'down' && section.prevSection.length) {
        performTransition(section.prevSection.index())
    }
}

$('.wrapper').on({
    wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        let direction = (deltaY > 0) ?
            'up' :
            'down'

        scrollToSection(direction);
    },
    touchmove: e => (e.preventDefault())
});


$(document).on('keydown', e => {
    const section = difineSections(sections);

    if (inScroll) return

    switch (e.keyCode) {
        case 40:
            if (!section.nextSection.length) return;
            performTransition(section.nextSection.index());
            break;

        case 38:
            if (!section.prevSection.length) return;
            performTransition(section.prevSection.index());
            break;
    }
});

if (isMobile) {
    $(window).swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            console.log(direction);
            scrollToSection(direction);
        }
    })
}

//navigation

$('[data-scroll-to]').on('click touchstart', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-to'));

    display.css({
        'display': 'block'
    })
    performTransition(sectionIndex);
});

// Yandex Map

var myMap;
ymaps.ready(function() {
    myMap = new ymaps.Map("YMapsID", {
        center: [55.76, 37.64],
        zoom: 10
    });
});