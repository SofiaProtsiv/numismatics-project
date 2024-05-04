const modalContainerRef = document.querySelector('.modal-container');
const modalRef = document.querySelector('.modal');
const modalCloseRef = document.querySelector('.modal-close');
const modalTitleRef = document.querySelector('.modal-title');
const modalTextRef = document.querySelector('.modal-text');
const socialIconsRef = document.querySelector('.social-icons');

const modalOpenRef = document.querySelector('.btn-open-modal');
modalOpenRef.addEventListener('click', mdShow);

function mdShow() {
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

function onErrorModalContant() {
  modalRef.classList.add('modal-error');
  modalTitleRef.textContent = 'На жаль, наразі наш сервер не відповідає!';
  modalTextRef.textContent =
    'Будь ласка, скористайтеся соціальними мережами експерта  для отримання зворотнього зв’язку:';
  socialIconsRef.classList.remove('hidden-icons');
}

onErrorModalContant();
