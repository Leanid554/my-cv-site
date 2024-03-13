const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImg = document.querySelector('#nav-button-img');
const navLinks = document.querySelectorAll('.nav-link'); // Получаем все ссылки в навбаре

navButton.onclick = () => {
    if(nav.classList.toggle('open')){
        navButtonImg.src = "./img/NAVCLOSE.svg";
    } else {
        navButtonImg.src = "./img/NAV.svg";
    }
};

// Добавляем обработчик события для каждой ссылки в навбаре
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Если навбар открыт в мобильной версии, закрываем его
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            navButtonImg.src = "./img/NAV.svg"; // Изменяем иконку кнопки навбара
        }

        // После нажатия на ссылку "Контакты" прокручиваем страницу к разделу с классом "contacts"
        if (link.getAttribute('href') === '#contacts') {
            scrollDown();
        }
    });
});

// Инициализация библиотеки AOS
AOS.init({
    once: true
});

// Функция для плавной прокрутки до раздела с классом "contacts"
function scrollDown() {
    document.querySelector('.contacts').scrollIntoView({
        behavior: 'smooth'
    });
}
