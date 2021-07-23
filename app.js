let sharebutton = document.querySelector('.share');
let boxShare = document.querySelector('.hide');

sharebutton.addEventListener('click', () => {
    boxShare.classList.toggle('hide');
})