let burgerButton = document.querySelector('.burger_button');
let mobileMenu = document.querySelector('.mobile_menu');
let mobileMenuItems = document.querySelectorAll('.mobile_menu > ul > li');

burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

mobileMenuItems.forEach(item => {
    let accordeon = item.querySelector('.accordeon');
    
    if (accordeon) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();

            document.querySelectorAll('.accordeon').forEach(acc => {
                if (acc !== accordeon) {
                    e.stopPropagation(); 
                    acc.classList.remove('active');
                }
            });

            accordeon.classList.toggle('active');
        });
    }
});

let submenuLinks = document.querySelectorAll('.submenu a');

submenuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); 

        let submenu = link.closest('.submenu');

        document.querySelectorAll('.submenu').forEach(sub => {
            if (sub !== submenu) {
                sub.classList.remove('active');
            }
        });

        if (submenu) {
            submenu.classList.toggle('active');
        }
    });
});

