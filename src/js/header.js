/* Відкриття і закриття мобільного меню */

const burgerBtn = document.querySelector('.header-navigation-item-burger');
const mobileMenuEl = document.querySelector('.header-modal-wrapper');
const mobileMenuCloseBtn = document.querySelector(
  '.header-modal-wrapper-item-svg-icon'
);

function openMobileMenu() {
  mobileMenuEl.classList.remove('visually-hidden');
}

function closeMobileMenu() {
  mobileMenuEl.classList.add('visually-hidden');
}

burgerBtn.addEventListener('click', openMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

/* Лінк */

const linkListSections = document.querySelector('.header-about-me-container');
linkListSections.scrollIntoView({ block: 'end', behavior: 'smooth' });
const modalLinkSection = document.querySelector('.header-modal-container');
modalLinkSection.scrollIntoView({ block: 'end', behavior: 'smooth' });

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
const langBoxElMobileMenu = document.querySelector(
  '.header-modal-selectlang-checkbox'
);
const mobileMenuBtnUa = document.querySelector(
  '.header-modal-wrapper-select-box-checkbox-text-ua'
);
const mobileMenuBtnEn = document.querySelector(
  '.header-modal-wrapper-select-box-checkbox-text-en'
);
const mainMenuBtnUa = document.querySelector(
  '.header-modal-selectlang-checkbox-text-ua'
);
const mainMenuBtnEn = document.querySelector(
  '.header-modal-selectlang-checkbox-text-en'
);
function selectLangMobileMenu() {
  langBoxElMobileMenu.classList.remove('visually-hidden');
}

function selectLangMainMenu() {
  langBoxEl.classList.remove('visually-hidden');
}

function removeVisualLangBox() {
  langBoxElMobileMenu.classList.add('hide-box');
}
function removeVisualLangBoxMainContainer() {
  langBoxEl.classList.add('hide-box');
}

selectLangBtnMobileMenu.addEventListener('click', selectLangMobileMenu);
selectLangBtnTablet.addEventListener('click', selectLangMainMenu);
selectLangBtnMobileMenu.removeEventListener('click', selectLangMobileMenu);
selectLangBtnTablet.removeEventListener('click', selectLangMobileMenu);

mobileMenuBtnUa.addEventListener('click', removeVisualLangBox);
mobileMenuBtnEn.addEventListener('click', removeVisualLangBox);
mainMenuBtnUa.addEventListener('click', removeVisualLangBoxMainContainer);
mainMenuBtnEn.addEventListener('click', removeVisualLangBoxMainContainer);
