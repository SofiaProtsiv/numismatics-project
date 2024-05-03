const modalContainerRef = document.querySelector('.modal-container');
const modalBackdropRef = document.querySelector('.modal-bg');
const modalRef = document.querySelector('.modal');
const modalCloseRef = document.querySelector('.modal-close');
const modalTitleRef = document.querySelector('.modal-title');
const modalTextRef = document.querySelector('.modal-text');

const modalOpenRef = document.querySelector('.btn-open-modal');
modalOpenRef.addEventListener('click', mdShow);

function mdShow() {
  modalContainerRef.classList.add('visible');
  document.body.classList.add('body-overflow');
  console.log('mdShow');
  modalCloseRef.addEventListener('click', mdClose);
  modalBackdropRef.addEventListener('click', mdClose);
  window.addEventListener('keydown', eventsOnModal);
}

function eventsOnModal(e) {
  if (e.key === 'Escape') mdClose();
}

function mdClose() {
  // console.log('mdClose');
  modalContainerRef.classList.remove('visible');
  document.body.classList.remove('body-overflow');
  modalCloseRef.removeEventListener('click', mdClose);
  modalBackdropRef.removeEventListener('click', mdClose);
  window.removeEventListener('keydown', eventsOnModal);
}

function renderSocial() {
  return `<ul class="social-icons">
  <li><a class="icon" href="" target="_blank"></a></li>
  <li><a class="icon" href="" target="_blank"></a></li>
  </ul>`;
}

function onErrorModalContant() {
  modalRef.classList.add('modal-error');
  modalTitleRef.textContent = 'На жаль, наразі наш сервер не відповідає!';
  modalTextRef.textContent =
    'Будь ласка, скористайтеся соціальними мережами експерта  для отримання зворотнього зв’язку:';
  modalTextRef.insertAdjacentHTML('afterend', renderSocial());
}

onErrorModalContant();
