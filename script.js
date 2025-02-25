document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Переключаем класс 'active' для отображения меню
        
        if (navLinks.classList.contains('active')) { // Блокируем прокрутку, если меню открыто

            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });

    body.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll'); // Разрешить прокрутку
        }
    });
});
