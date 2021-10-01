

const navbarLanguage = document.querySelector('.header_navbar_language');
const nationalLanguage  = document.querySelector('.national_language');

// hàm shownationalLanguage
function shownationalLanguage() {
    nationalLanguage.classList.add('openflex');
    overflow.style.display = 'block';
}

// hàm hinenationalLanguage
function hinenationalLanguage() {
    nationalLanguage.classList.remove('openflex');
    overflow.style.display = 'none';
}

// bắt sự kiện click vào thẻ navbarLanguage
navbarLanguage.addEventListener('click', shownationalLanguage);

// bắt sự kiện click vào thẻ overflow
overflow.addEventListener('click', hinenationalLanguage);