/* Перезавантаження сторінки при кліку на логотип */
const logoBtn = document.querySelector('.logo-link');
logoBtn.addEventListener('click', () => {
  window.location.reload();
});

logoBtn.removeEventListener('click', () => {
  window.location.reload();
});

/* Відкриття і закриття мобільного меню */

const burgerBtn = document.querySelector('.header-navigation-item-burger');
const mobileMenuEl = document.querySelector('.header-modal-wrapper');
const mobileMenuCloseBtn = document.querySelector(
  '.header-modal-wrapper-item-svg-container'
);
const bodyEl = document.querySelector('body');

function toggleOpenModal() {
  mobileMenuEl.classList.toggle('active');
  bodyEl.classList.toggle('open-burger-menu');
}
burgerBtn.addEventListener('click', toggleOpenModal);
mobileMenuCloseBtn.addEventListener('click', toggleOpenModal);

/* Close modal window after click link*/
const buttonLinkModal = document.querySelectorAll(
  '.header-modal-container-item'
);

function closeMobileMenuAfterClick() {
  mobileMenuEl.classList.add('visually-hidden');
  buttonLinkModal.forEach(button => {
    button.removeEventListener('click', closeMobileMenuAfterClick);
  });
}

buttonLinkModal.forEach(button => {
  button.addEventListener('click', closeMobileMenuAfterClick);
});

/* Select language */
const selectLangBtnMobileMenu = document.querySelector(
  '.header-modal-wrapper-select-box-container'
);
const selectLangBtnTablet = document.querySelector(
  '.header-modal-wrapper-select-box-container-tablet'
);
const langBoxEl = document.querySelector(
  '.header-modal-wrapper-select-box-checkbox'
);
const langContainerTablet = document.querySelector(
  '.header-modal-selectlang-container'
);

const langBoxElModal = document.querySelector(
  '.header-modal-selectlang-checkbox'
);
const visualLangElHeaderTablet = document.querySelector(
  '.header-modal-wrapper-select-box-container-text'
);
const visualLangElHeaderModal = document.querySelector(
  '.header-modal-wrapper-select-box-container-text-modal'
);
/* Heder Tablet */

const STORAGE_KEY = 'select-lang';
const allLang = ['ua', 'en'];
let currentLang = localStorage.getItem(STORAGE_KEY) || 'ua';
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;
let currentText = {};

const someObj = {
  attr: {
    ua: '',
    en: '',
  },
};

langButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    currentLang = e.target.dataset.btn;
    localStorage.setItem(STORAGE_KEY, e.target.dataset.btn);
    resetActiveClass(langButtons, 'active-header-checkbox');
    btn.classList.add('active-header-checkbox');
    visualLangElHeaderTablet.innerHTML = `<p>${currentLang.toLocaleUpperCase()}</p>`;
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach(elem => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case 'ua':
      document
        .querySelector('[data-btn="ua"]')
        .classList.add('active-header-checkbox');
      break;
    case 'en':
      document
        .querySelector('[data-btn="en"]')
        .classList.add('active-header-checkbox');
      break;

    default:
      document
        .querySelector('[data-btn="ua"]')
        .classList.add('active-header-checkbox');
      break;
  }
}
checkActiveLangButton();

/* Header modal */

const STORAGE_KEY_MODAL = 'select-lang-modal';
const allLangModal = ['ua', 'en'];
resetActiveClassModal(langButtons, 'active-header-checkbox-modal');
let currentLangModal = localStorage.getItem(STORAGE_KEY_MODAL) || 'ua';
const langButtonsModal = document.querySelectorAll('[data-btn-modal]');

langButtonsModal.forEach(btn => {
  btn.addEventListener('click', e => {
    currentLangModal = e.target.dataset.btnModal;
    localStorage.setItem(STORAGE_KEY_MODAL, e.target.dataset.btnModal);
    resetActiveClassModal(langButtonsModal, 'active-header-checkbox-modal');
    btn.classList.add('active-header-checkbox-modal');
    visualLangElHeaderModal.innerHTML = `<p>${currentLangModal.toLocaleUpperCase()}</p>`;
  });
});

function resetActiveClassModal(arr, activeClass) {
  arr.forEach(elem => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButtonModal() {
  switch (currentLangModal) {
    case 'ua':
      document
        .querySelector('[data-btn-modal="ua"]')
        .classList.add('active-header-checkbox-modal');
      break;
    case 'en':
      document
        .querySelector('[data-btn-modal="en"]')
        .classList.add('active-header-checkbox-modal');
      break;

    default:
      document
        .querySelector('[data-btn-modal="ua"]')
        .classList.add('active-header-checkbox-modal');
      break;
  }
}
checkActiveLangButtonModal();

/* Select lang box */

function toggleSelectLang() {
  langBoxEl.classList.toggle('active-checkbox');
}
selectLangBtnTablet.addEventListener('click', toggleSelectLang);

function toggleSelectLangModal() {
  langBoxElModal.classList.toggle('active-modal');
}
selectLangBtnMobileMenu.addEventListener('click', toggleSelectLangModal);
