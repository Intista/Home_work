var button = document.getElementById('burgers__btn');
var drop = document.getElementById('burgers__drop');
var dropClose = document.getElementById('burgers__close');

button.addEventListener('click', function() {
    drop.style.display = 'flex';
    drop.classList.add('active');

});

button.addEventListener('mouseover', function() {
    drop.style.display = 'flex';
    drop.classList.add('active');

});

var buttonOut = button.onmouseout();
var dropOut = drop.onmouseout;

if (buttonOut == true || dropOut == true) {
    drop.style.display = 'none';
} else {

    drop.style.display = 'flex';
}

dropClose.addEventListener('click', function() {
    drop.classList.remove('active');
    drop.style.display = 'none';
});

/* button.addEventListener('mouseout', function() {
    drop.classList.remove('active');
    drop.style.display = 'none';

});

drop.addEventListener('mouseout', function() {
    drop.style.display = 'none';

}); */