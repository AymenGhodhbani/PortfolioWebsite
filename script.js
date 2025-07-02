function toggleMenu() {
    const menu = document.querySelector('.hamburgerMenu');
    const icon = document.querySelector('.hamburgerIcon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}