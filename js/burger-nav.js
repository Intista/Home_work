var hambMenu = document.getElementById('hamburger__btn');
var hambClose = document.getElementById('hamburger__btn-close');
var hambNav = document.getElementById('hamburger__nav');
var content = document.getElementById('maincontent');

hambMenu.addEventListener('click', function() {
    hambNav.style.display = 'flex';
    content.style.display = 'none';

});

hambClose.addEventListener('click', function() {
    hambNav.style.display = 'none';
    content.style.display = 'block';
});



var button = document.getElementById('burgers__btn');
var drop = document.getElementById('burgers__drop');
var dropClose = document.getElementById('burgers__close');

button.addEventListener('click', function() {
    drop.style.display = 'flex';
    /*     drop.classList.add('active');
     */
});

/* button.addEventListener('mouseover', function() {
    drop.style.display = 'flex';
        drop.classList.add('active');
    
});
 */
/* dropClose.addEventListener('click', function() {
    drop.style.display = 'none';
});
setTimeout(start, 300); */