/* Перезавантаження сторінки при кліку на логотип */
const logoBtn = document.querySelector('.logo-link');
logoBtn.addEventListener('click', () => {
  window.location.reload();
});

const reloadPage = () => {
  window.location.reload();
};
logoBtn.addEventListener('click', reloadPage);
logoBtn.removeEventListener('click', reloadPage);

const selectorsForModal = {
  burgerBtn: '.header-navigation-item-burger',
  mobileMenuEl: '.header-modal-wrapper',
  mobileMenuCloseBtn: '.header-modal-wrapper-item-svg-container',
  bodyEl: 'body',
  buttonLinkModal: '.header-modal-container-item',
  langBoxEl: '.lang-box',
  langBoxElModal: '.lang-box-modal',
};
const mobileMenuEl = document.querySelector(selectorsForModal.mobileMenuEl);
const bodyEl = document.querySelector(selectorsForModal.bodyEl);
const langBoxEl = document.querySelector('.lang-box');
const langBoxElModal = document.querySelector('.lang-box-modal');
const buttonLinkModal = document.querySelectorAll(
  selectorsForModal.buttonLinkModal
);

const classes = {
  active: 'active',
  isHidden: 'is-hidden',
  activeCheckbox: 'active-checkbox',
  activeModal: 'active-modal',
};

/* Відкриття та закриття модального вікна */
function toggleOpenModal() {
  mobileMenuEl.classList.toggle(classes.active);
  bodyEl.classList.toggle(classes.isHidden);
  langBoxEl.classList.remove(classes.activeCheckbox);
  langBoxElModal.classList.remove(classes.activeModal);

  buttonLinkModal.forEach(button => {
    button.addEventListener('click', closeMobileMenuAfterClick);
  });
}

function closeMobileMenuAfterClick() {
  mobileMenuEl.classList.remove(classes.active);
  bodyEl.classList.remove(classes.isHidden);
  langBoxEl.classList.remove(classes.activeCheckbox);
  langBoxElModal.classList.remove(classes.activeModal);

  buttonLinkModal.forEach(button => {
    button.removeEventListener('click', closeMobileMenuAfterClick);
  });
}

document
  .querySelector(selectorsForModal.burgerBtn)
  .addEventListener('click', toggleOpenModal);
document
  .querySelector(selectorsForModal.mobileMenuCloseBtn)
  .addEventListener('click', toggleOpenModal);
document.querySelectorAll(selectorsForModal.buttonLinkModal).forEach(button => {
  button.addEventListener('click', closeMobileMenuAfterClick);
});

/* Select language */

const selectors = {
  selectLangBtnMobileMenu: '.header-modal-wrapper-select-box-container',
  selectLangBtnTablet: '.header-modal-wrapper-select-box-container-tablet',
  langBoxEl: '.header-modal-wrapper-select-box-checkbox',
  langContainerTablet: '.header-modal-selectlang-container',
  langBoxElModal: '.header-modal-selectlang-checkbox',
  visualLangElHeaderTablet: '.header-modal-wrapper-select-box-container-text',
  visualLangElHeaderModal:
    '.header-modal-wrapper-select-box-container-text-modal',
  langButtons: '[data-btn]',
  langButtonsModal: '[data-btn-modal]',
};

const STORAGE_KEY = 'select-lang';
let currentLang = localStorage.getItem(STORAGE_KEY) || 'ua';

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function setActiveButton(selector, lang) {
  const button = document.querySelector(`[${selector}="${lang}"]`);
  if (button) {
    button.classList.add('active-header-checkbox');
  }
}

function resetActiveButtons(selector) {
  document.querySelectorAll(selector).forEach(elem => {
    elem.classList.remove('active-header-checkbox');
  });
}

function setCurrentLang() {
  const currentLangValue = localStorage.getItem(STORAGE_KEY).toUpperCase();
  document.querySelectorAll('[data-btn]').forEach(btn => {
    resetActiveButtons('[data-btn]');
    setActiveButton('data-btn', currentLangValue);
  });

  document.querySelectorAll('[data-btn-modal]').forEach(btn => {
    resetActiveButtons('[data-btn-modal]');
    setActiveButton('data-btn-modal', currentLangValue);
  });

  document.querySelector(
    '.header-modal-wrapper-select-box-container-text'
  ).textContent = currentLangValue;
  document.querySelector(
    '.header-modal-wrapper-select-box-container-text-modal'
  ).textContent = currentLangValue;
}

document
  .querySelector(selectors.selectLangBtnTablet)
  .addEventListener('click', () => {
    toggleClass(document.querySelector(selectors.langBoxEl), 'active-checkbox');
  });

document
  .querySelector(selectors.selectLangBtnMobileMenu)
  .addEventListener('click', () => {
    toggleClass(
      document.querySelector(selectors.langBoxElModal),
      'active-modal'
    );
  });

document.querySelectorAll(selectors.langButtons).forEach(btn => {
  btn.addEventListener('click', e => {
    localStorage.setItem(STORAGE_KEY, e.target.dataset.btn);
    setCurrentLang();
  });
});

document.querySelectorAll(selectors.langButtonsModal).forEach(btn => {
  btn.addEventListener('click', e => {
    localStorage.setItem(STORAGE_KEY, e.target.dataset.btnModal);
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

/* Select lang box */
function toggleSelectLang() {
  langBoxEl.classList.toggle('active-checkbox');
}
selectLangBtnTablet.addEventListener('click', toggleSelectLang);

function toggleSelectLangModal() {
  langBoxElModal.classList.toggle('active-modal');
}
selectLangBtnMobileMenu.addEventListener('click', toggleSelectLangModal);

function setCurrentLang() {
  const currentLang = localStorage.getItem(STORAGE_KEY) || 'ua';

  visualLangElHeaderTablet.textContent = currentLang.toUpperCase();
  visualLangElHeaderModal.textContent = currentLang.toUpperCase();

  checkActiveLangButton();
  checkActiveLangButtonModal();
}

setCurrentLang();
