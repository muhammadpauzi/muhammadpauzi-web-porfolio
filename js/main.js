const menu = document.querySelector('.navbar .ham-menu');
const navbarList = document.querySelector('.navbar .navbar-group');

menu.addEventListener('click', function () {
    this.firstElementChild.src = navbarList.classList.toggle('active') ? "./icons/x.svg" : "./icons/menu.svg";
});