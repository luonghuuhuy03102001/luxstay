

const headerMenu = document.querySelector('.header_menu');
const navbarMenu = document.querySelector('.navbar_menu');
const overflowIpab = document.querySelector('.overflow_ipab');
const closeMenu = document.querySelector('.navbar_menu_close');

function showNavbarMenu() {
    navbarMenu.classList.add('open')
    overflowIpab.classList.add('open')
}

function hineNavbarMenu() {
    navbarMenu.classList.remove('open')
    overflowIpab.classList.remove('open')
}

headerMenu.addEventListener('click', showNavbarMenu);

closeMenu.addEventListener('click', hineNavbarMenu);
overflowIpab.addEventListener('click', hineNavbarMenu);