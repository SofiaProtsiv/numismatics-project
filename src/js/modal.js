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
  console.log('onSuccessModalContact ~ currentLang:', currentLang);
  modalRef.classList.remove('modal-error');
  modalTitleRef.textContent = `${
    currentLang === 'ua'
      ? 'Дякуємо! Дані успішно відправлені!'
      : 'Thank you! The data has been successfully sent!'
  }`;
  modalTextRef.textContent = `${
    currentLang === 'ua'
      ? 'Протягом доби з Вами зв’яжеться наш менеджер для обговорення усіх деталей!'
      : 'Within a day, our manager will contact you to discuss all the details!'
  }`;
  socialIconsRef.classList.add('hidden-icons');
}

export function onErrorModalContact() {
  let currentLang = localStorage.getItem('currentLang') || 'ua';
  modalRef.classList.add('modal-error');
  modalTitleRef.textContent = `${
    currentLang === 'ua'
      ? 'На жаль, наразі наш сервер не відповідає!'
      : 'Unfortunately, our server is currently unresponsive!'
  }`;
  modalTextRef.textContent = `${
    currentLang === 'ua'
      ? 'Будь ласка, скористайтеся соціальними мережами експерта  для отримання зворотнього зв’язку:'
      : "Please use the expert's social media channels to receive feedback:"
  }`;
  socialIconsRef.classList.remove('hidden-icons');
}
