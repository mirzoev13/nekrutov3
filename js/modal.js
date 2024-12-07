let modal_button = document.querySelectorAll('.btn_modal');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

modal_button.forEach(item => {
    item.addEventListener('click', function () {
        modal.classList.add('active');
    });
});

close.addEventListener('click', function () {
    modal.classList.remove('active');
});