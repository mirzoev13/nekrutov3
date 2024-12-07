let menuItems = document.querySelectorAll('.menu_wrapper > ul > li');
let subMenus = document.querySelectorAll('.menu_sub');

for (let i = 0; i < menuItems.length; i++) {
    // Проверяем, существует ли подменю для текущего элемента
    let subMenu = subMenus[i];
    
    if (subMenu) {
        // Открываем подменю при наведении
        menuItems[i].addEventListener('mouseover', function () {
            // Сначала закрываем все подменю
            subMenus.forEach(function (submenu) {
                submenu.classList.remove('active');
            });

            // Открываем текущее подменю
            subMenu.classList.add('active');
        });

        // Закрываем подменю при уходе курсора за его пределы
        subMenu.addEventListener('mouseleave', function () {
            subMenu.classList.remove('active');
        });
    }
}
