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
  '.header-modal-wrapper-item-svg-icon'
);

let timerIdOpenModal = null;
function openMobileMenu() {
  clearTimeout(timerIdCloseModal);
  timerIdOpenModal = setTimeout(() => {
    mobileMenuEl.classList.remove('visually-hidden');
  }, 250);
}

let timerIdCloseModal = null;
function closeMobileMenu() {
  clearTimeout(timerIdOpenModal);

  timerIdCloseModal = setTimeout(() => {
    mobileMenuEl.classList.add('visually-hidden');
  }, 250);
}

burgerBtn.addEventListener('click', openMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

// burgerBtn.removeEventListener('click', openMobileMenu);
// mobileMenuCloseBtn.removeEventListener('click', closeMobileMenu);

/* Лінк */

// const linkListSections = document.querySelector('.header-about-me-container');
// linkListSections.scrollIntoView({ block: 'end', behavior: 'smooth' });
// const modalLinkSection = document.querySelector('.header-modal-container');
// modalLinkSection.scrollIntoView({ block: 'end', behavior: 'smooth' });

// /* Select language */
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
let currentLangModal = localStorage.getItem(STORAGE_KEY_MODAL) || 'ua';
const langButtonsModal = document.querySelectorAll('[data-btn-modal]');

langButtonsModal.forEach(btn => {
  btn.addEventListener('click', e => {
    currentLangModal = e.target.dataset.btnModal;
    localStorage.setItem(STORAGE_KEY_MODAL, e.target.dataset.btnModal);
    resetActiveClass(langButtonsModal, 'active-header-checkbox-modal');
    btn.classList.add('active-header-checkbox-modal');
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
checkActiveLangButton();

/* Select lang box */
let timerIdToggleLangTablet = null;
function toggleLangBox() {
  clearTimeout(timerIdToggleLangTablet);
  timerIdToggleLangTablet = setTimeout(() => {
    if (langBoxEl.classList.contains('visually-hidden')) {
      langBoxEl.classList.remove('visually-hidden');
      window.addEventListener('click', hideLangBoxOutsideClick);
    } else {
      langBoxEl.classList.add('visually-hidden');
      window.removeEventListener('click', hideLangBoxOutsideClick);
    }
  }, 250);
}

function hideLangBoxOutsideClick(event) {
  if (
    !langBoxEl.contains(event.target) &&
    event.target !== selectLangBtnTablet
  ) {
    langBoxEl.classList.add('visually-hidden');
    window.removeEventListener('click', hideLangBoxOutsideClick);
  }
}

selectLangBtnTablet.addEventListener('click', toggleLangBox);

/* Select lang box modal */
let timerIdToggleLangModal = null;
function toggleLangBoModal() {
  clearTimeout(timerIdToggleLangModal);
  timerIdToggleLangModal = setTimeout(() => {
    if (langBoxElModal.classList.contains('visually-hidden')) {
      langBoxElModal.classList.remove('visually-hidden');
      window.addEventListener('click', hideLangBoxModalOutsideClick);
    } else {
      langBoxElModal.classList.add('visually-hidden');
      window.removeEventListener('click', hideLangBoxModalOutsideClick);
    }
  }, 250);
}

function hideLangBoxModalOutsideClick(event) {
  if (
    !langBoxElModal.contains(event.target) &&
    event.target !== selectLangBtnMobileMenu
  ) {
    langBoxElModal.classList.add('visually-hidden');
    window.removeEventListener('click', hideLangBoxOutsideClick);
  }
}

selectLangBtnMobileMenu.addEventListener('click', toggleLangBoModal);
