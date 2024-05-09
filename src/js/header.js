import localizeElements from './localization';

const STORAGE_KEY = 'currentLang';
const langButtons = document.querySelectorAll('[data-btn]');
const btnUaHeaderTablet = document.querySelector('[data-btn="ua"]');
const btnEnHeaderTablet = document.querySelector('[data-btn="en"]');
const btnUaModal = document.querySelector('[data-btn-modal="ua"]');
const btnEnModal = document.querySelector('[data-btn-modal="en"]');

/* Зміна мови контенту */

const savedLang = localStorage.getItem(STORAGE_KEY) || 'ua';

if (savedLang) {
  const btnUaHeader = document.querySelector('[data-btn="ua"]');
  btnUaHeader.value = savedLang;
  document.querySelector('[data-btn="en"]').value = savedLang;
  const btnUaMod = document.querySelector('[data-btn-modal="ua"]');
  btnUaMod.value = savedLang;
  const btnEnMod = document.querySelector('[data-btn-modal="en"]');
  btnEnMod.value = savedLang;

  localizeElements(savedLang);
}

btnUaHeaderTablet.addEventListener('click', changeLanguage);
btnEnHeaderTablet.addEventListener('click', changeLanguage);
btnUaModal.addEventListener('click', changeLanguage);
btnEnModal.addEventListener('click', changeLanguage);

function changeLanguage(e) {
  if (e.target.dataset.btn) {
    const currentLang = e.target.dataset.btn;
    localizeElements(currentLang);

    localStorage.setItem(STORAGE_KEY, currentLang);
  }
  if (e.target.dataset.btnModal) {
    const currentLang = e.target.dataset.btnModal;
    localizeElements(currentLang);

    localStorage.setItem(STORAGE_KEY, currentLang);
  }
}

/* Перезавантаження сторінки при кліку на логотип */
// const logoBtn = document.querySelector('.logo-link');
// logoBtn.addEventListener('click', () => {
//   window.location.reload();
// });

// logoBtn.removeEventListener('click', () => {
//   window.location.reload();
// });

/* Відкриття і закриття мобільного меню */
const burgerBtn = document.querySelector('.header-navigation-item-burger');
const mobileMenuEl = document.querySelector('.header-modal-wrapper');
const mobileMenuCloseBtn = document.querySelector(
  '.header-modal-wrapper-item-svg-container'
);
const bodyEl = document.querySelector('body');

function toggleOpenModal() {
  mobileMenuEl.classList.toggle('active');
  bodyEl.classList.toggle('is-hidden');
  langBoxEl.classList.remove('active-checkbox');
  langBoxElModal.classList.remove('active-modal');

  buttonLinkModal.forEach(button => {
    button.addEventListener('click', closeMobileMenuAfterClick);
  });
}

burgerBtn.addEventListener('click', toggleOpenModal);
mobileMenuCloseBtn.addEventListener('click', toggleOpenModal);

/* Close modal window after click link*/
const buttonLinkModal = document.querySelectorAll(
  '.header-modal-container-item'
);

function closeMobileMenuAfterClick() {
  mobileMenuEl.classList.remove('active');
  bodyEl.classList.remove('is-hidden');
  langBoxEl.classList.remove('active-checkbox');
  langBoxElModal.classList.remove('active-modal');

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

langButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    localStorage.setItem(STORAGE_KEY, e.target.dataset.btn);
    resetActiveClass(langButtons, 'active-header-checkbox');
    btn.classList.add('active-header-checkbox');

    setCurrentLang();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach(elem => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (localStorage.getItem(STORAGE_KEY)) {
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

/* Header modal */

resetActiveClass(langButtons, 'active-header-checkbox-modal');

const langButtonsModal = document.querySelectorAll('[data-btn-modal]');

langButtonsModal.forEach(btn => {
  btn.addEventListener('click', e => {
    localStorage.setItem(STORAGE_KEY, e.target.dataset.btnModal);
    resetActiveClass(langButtonsModal, 'active-header-checkbox-modal');
    btn.classList.add('active-header-checkbox-modal');

    setCurrentLang();
  });
});

function checkActiveLangButtonModal() {
  switch (localStorage.getItem(STORAGE_KEY)) {
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
function toggleSelectLang() {
  langBoxEl.classList.toggle('active-checkbox');
  langBoxElModal.classList.toggle('active-modal');
}
selectLangBtnTablet.addEventListener('click', toggleSelectLang);
selectLangBtnMobileMenu.addEventListener('click', toggleSelectLang);

function setCurrentLang() {
  const currentLang = localStorage.getItem(STORAGE_KEY) || 'UA';

  visualLangElHeaderTablet.textContent = currentLang;
  visualLangElHeaderModal.textContent = currentLang;

  checkActiveLangButton();
  checkActiveLangButtonModal();
}

setCurrentLang();
