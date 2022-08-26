const btn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

function openMenu(){
    menu.classList.toggle('menu__list--active')
}

btn.addEventListener('click', openMenu)