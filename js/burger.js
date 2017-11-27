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
    content.style.display = 'Pic';
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
    const content = $('.team__content');
    content.css({
        'height': 0
    })

    $('.team__name').on('click', e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const container = $this.closest('.team__accordeon');
        const item = $this.closest('.team__item');
        const items = $('.team__item', container);
        const content = $('.team__content', item);
        const otherContent = $('.team__content', container);

        if (!item.hasClass('team__item--active')) {
            items.removeClass('team__item--active')
            item.addClass('team__item--active')

            otherContent.css({
                'height': 0
            })

            content.css({
                'height': ''
            })

        } else {

            item.removeClass('team__item--active');
            content.css({
                'height': 0
            })
        }

    })
})

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

//One Page Scroll

$(function() {
    const main = $('.maincontent')
    $(main).bind('scroll', function(e) {
        e.preventDefault()
        const $this = $(this),
            pages = main.find('.page', ),
            activePage = pages.filter('.page--active'),
            reqPage = activePage.next()
        pages.animate({
            'top': -100 % ;
        })



    })


})