

const menuLanguage = document.querySelector('.navbar_menu_language');
const languageSelector = document.querySelector('.menu_language_selections_list');

// showlanguageSelector
function showlanguageSelector() {
    languageSelector.classList.toggle('open');
}

// bắt sự kiện click vào tehr menulanguage
menuLanguage.addEventListener('click', showlanguageSelector);

