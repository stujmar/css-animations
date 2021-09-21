console.log("loaded js");

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_link');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menu.classList.add('open');

        navItems.forEach(item => {
            item.classList.add('open');
        })
        showMenu = true;

    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menu.classList.remove('open');
        navItems.forEach(item => {
            item.classList.remove('open');
        })
        showMenu = false;

    }
}