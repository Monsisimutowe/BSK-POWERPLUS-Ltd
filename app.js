const menu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
