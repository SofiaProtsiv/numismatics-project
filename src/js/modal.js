import translation from '../assets/translations'

const modalContainerRef = document.querySelector('.modal-container');
const modalRef = document.querySelector('.modal');
const modalCloseRef = document.querySelector('#modal-close');
const modalTitleRef = document.querySelector('.modal-title');
const modalTextRef = document.querySelector('.modal-text');
const socialIconsRef = document.querySelector('.social-icons');

export function mdShow() {
  modalContainerRef.classList.add('visible');
  document.body.classList.add('body-overflow');
  modalCloseRef.addEventListener('click', mdClose);
  modalContainerRef.addEventListener('click', eventsOnModal);
  window.addEventListener('keydown', eventsOnModal);
}

function eventsOnModal(e) {
  if (e.target === e.currentTarget) mdClose();
  if (e.key === 'Escape') mdClose();
}

function mdClose() {
  modalContainerRef.classList.remove('visible');
  document.body.classList.remove('body-overflow');
  modalCloseRef.removeEventListener('click', mdClose);
  modalContainerRef.removeEventListener('click', mdClose);
  window.removeEventListener('keydown', eventsOnModal);
}

export function onSuccessModalContact() {
  let currentLang = localStorage.getItem('currentLang') || 'ua';

  modalRef.classList.remove('modal-error');
  modalTitleRef.textContent = `${currentLang === 'ua'
    ? translation[currentLang].successModal.title
    : translation[currentLang].successModal.title
    }`;
  modalTextRef.textContent = `${currentLang === 'ua'
    ? translation[currentLang].successModal.text
    : translation[currentLang].successModal.text
    }`;
  socialIconsRef.classList.add('hidden-icons');
}

export function onErrorModalContact() {
  let currentLang = localStorage.getItem('currentLang') || 'ua';
  modalRef.classList.add('modal-error');
  modalTitleRef.textContent = `${currentLang === 'ua'
    ? translation[currentLang].errorModal.title
    : translation[currentLang].errorModal.title
    }`;
  modalTextRef.textContent = `${currentLang === 'ua'
    ? translation[currentLang].errorModal.text
    : translation[currentLang].errorModal.text
    }`;
  socialIconsRef.classList.remove('hidden-icons');
}
