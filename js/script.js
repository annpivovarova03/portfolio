const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.work__ratings-coutner'),
        lines = document.querySelectorAll('.work__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});