const images = [
    '/opt/homebrew/var/www/website.ru/images/gallery/2.jpg',
    '/opt/homebrew/var/www/website.ru/images/gallery/3.jpg',
    '/opt/homebrew/var/www/website.ru/images/gallery/4.jpg',
    '/opt/homebrew/var/www/website.ru/images/gallery/5.png',
    '/opt/homebrew/var/www/website.ru/images/gallery/6.jpg',
];

let currentImageIndex = 0;
const galleryImage = document.getElementById('galleryImage');
const maskParts = document.querySelectorAll('.mask-part');
function changeImage(direction) {
    galleryImage.style.opacity = '0';
    maskParts.forEach(part => {
        part.style.transition = 'none'; // Отключаем анимацию для моментального скрытия
        part.style.transform = 'scaleY(1) scaleX(1)';
    });

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
        galleryImage.src = images[currentImageIndex];
        galleryImage.style.opacity = '1';
        setTimeout(() => {
            maskParts[0].style.transform = 'scaleY(0)'; // Верхняя левая
        }, 500);
        setTimeout(() => {
            maskParts[3].style.transform = 'scaleX(0)'; // Нижняя левая
        }, 700);
        setTimeout(() => {
            maskParts[1].style.transform = 'scaleX(0)'; // Верхняя правая
        }, 900);
        setTimeout(() => {
            maskParts[2].style.transform = 'scaleY(0)'; // Нижняя правая
        }, 1100);
        setTimeout(() => {
            maskParts.forEach(part => {
                part.style.transition = 'all 1s ease-in-out';
            });
        }, 2000);

    }, 1000);
}

// Обработчики событий для кнопок
document.querySelector('.prev-button').addEventListener('click', () => changeImage(-1));
document.querySelector('.next-button').addEventListener('click', () => changeImage(1));

// Инициализация первого изображения
galleryImage.style.opacity = '1';
maskParts.forEach(part => {
    part.style.transform = 'scaleY(0) scaleX(0)'; // Изначально маска скрыта
});
