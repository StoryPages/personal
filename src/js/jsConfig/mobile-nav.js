const $headerBurger = document.querySelector('.header__burger');
const $mobileNav = document.querySelector('.mobile');
const $body = document.querySelector('.body');
const $mobileLinks = document.querySelectorAll('.mobile__link');
const $mobileBtn = document.querySelector('.mobile__btn');
const $mobileClose = document.querySelector('.mobile__close');

$headerBurger.onclick = (event) => {
     event.stopPropagation();
     $mobileNav.classList.add('open');
     $body.classList.add('stop-scroll');
};

const closeMobileNav = () => {
     $mobileNav.classList.remove('open');
     $body.classList.remove('stop-scroll');
};

[$body, ...$mobileLinks, $mobileBtn, $mobileClose].forEach((el) => {
     el.onclick = closeMobileNav;
});

$mobileNav.onclick = (event) => event.stopPropagation();
