const modalWindow = document.querySelector('.projects-modal')
const viewBtn = document.querySelectorAll('.projects__item-view')

function openProjectModal(event){
    event.preventDefault()

    const currentBlock = event.target.closest('.projects__item')
    const currentBlockImg = event.target.closest('.projects__item-img')
    const currentImg = currentBlockImg.querySelector('img').src;
    const modalImg = modalWindow.querySelector('.projects-modal__img')
    const modalTitle = modalWindow.querySelector('.projects-modal__title')
    const currentTitlte = currentBlock.querySelector('.projects__item-link')

    modalImg.src = currentImg;
    modalTitle.textContent = currentTitlte.textContent

    modalWindow.classList.add('projects-modal--active')
}

viewBtn.forEach((btn) => {
    btn.addEventListener('click', openProjectModal)
})


// Закрытие модального окна
function closeProjcetsModal(e){
    const target = e.target;

    if(target.classList.contains('projects-modal__close') || target.classList.contains('projects-modal')){
        modalWindow.classList.remove('projects-modal--active')
    }
}
modalWindow.addEventListener('click', closeProjcetsModal)