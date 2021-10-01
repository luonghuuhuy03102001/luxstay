

const searchNumber = document.querySelector('.header_search_number');
const NumberGuest = document.querySelector('.search_number_guest');
let overflow = document.querySelector('.overflow');

// hàm show number guest

function shownumberGuest() {
    NumberGuest.classList.add('open');
    overflow.style.display = 'block';
}

// hàm hine thẻ number guest
function hinenumberGuest() {
    NumberGuest.classList.remove('open');
    overflow.style.display = 'none';

}

// bắt sự kiện click vào thẻ search number
searchNumber.addEventListener('click', shownumberGuest);

// bắt sự kiện click vào thẻ overflow
overflow.addEventListener('click', hinenumberGuest);