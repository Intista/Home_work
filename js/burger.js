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