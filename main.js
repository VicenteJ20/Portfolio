const menu = document.querySelector('.ham');
const menu_links = document.querySelector('.enlaces_menu');

menu.addEventListener('click', () => {
    menu_links.classList.toggle('active');
    menu.classList.toggle('rotate');
});

