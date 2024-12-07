let arrow = document.querySelector('.arrow_up');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        arrow.classList.add('active');
    } else {
        arrow.classList.remove('active');
    }
});
