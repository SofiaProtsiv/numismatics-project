import { onErrorModalContact, mdShow } from './modal';
import { openModalLoader, closeModalLoader } from './loader';

const form = document.querySelector('.js-modal-form');
const selectButton = document.querySelector('.js-select-button');
const selectList = document.querySelector('.js-modal-select-list');
const selectContainer = document.querySelector('.js-modal-select');

const nameInput = document.querySelector('input[name="name"]');
const phoneInput = document.querySelector('input[name="phone"]');
const commentInput = document.querySelector('textarea[name="comment"]');
const servicesInput = document.querySelector('button[name="services"]');

const phoneWrapper = phoneInput.closest('.modal-input-wrapper');

const modal = document.querySelector('.js-consultation-modal');
const closeModalBtn = document.querySelector('.js-consultation-modal-close');

const INVALID = 'invalid';
const ACTIVE_SELECT = 'select-active';
const SHOW_PREFIX = 'show-prefix';
const VISIBLE = 'visible';

const STORAGE_KEY = 'select-lang';

const placeholderNames = {
  name: { ua: 'Ваше ім’я', en: 'Your name' },
  phone: { ua: 'Номер телефону', en: 'Phone number' },
  comment: { ua: 'Коментар', en: 'Comment' },
};

const selectBtnText = { ua: 'Послуги', en: 'Services' };

const URL = 'https://numismatics-project-backend.onrender.com/api/application';

const buttonAttribute = {
  key: 'data-selected',
  selected: 'true',
  notSelected: 'false',
};

form.addEventListener('submit', handleSubmit);
selectButton.addEventListener('click', toggleSelect);
selectList.addEventListener('click', handleListSelect);

nameInput.addEventListener('focus', removeInvalid);
phoneInput.addEventListener('focus', removeInvalid);
servicesInput.addEventListener('focus', removeInvalid);

phoneInput.addEventListener('input', validateNumber);
phoneInput.addEventListener('focus', handlePhoneFocus);
phoneInput.addEventListener('blur', handlePhoneBlur);

// Modal
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', handleBackdropClose);

function handleSubmit(e) {
  e.preventDefault();

  const data = e.target.elements;
  const name = data.name.value.trim();
  const phone = data.phone.value.trim();
  const comment = data.comment.value.trim();
  const services = data.services.getAttribute(buttonAttribute.key);

  const isValid = validateForm({ name, phone, services });

  if (!isValid) return;

  const servicesValue =
    data.services.querySelector('#modal-services').textContent;

  fetchConsultation({
    name,
    phone: '+38' + phone,
    service: servicesValue,
    question: comment,
  });
}

function resetForm() {
  form.reset();
  form.services.querySelector('span').textContent =
    selectBtnText[localStorage.getItem(STORAGE_KEY) || 'ua'];
  form.services.dataset.selected = 'false';
  phoneWrapper.classList.remove(SHOW_PREFIX);
}

function resetError() {
  nameInput.classList.remove(INVALID);
  phoneInput.classList.remove(INVALID);
  servicesInput.classList.remove(INVALID);
}

async function fetchConsultation(data) {
  openModalLoader();
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(URL, config);
    if (!response.ok) throw new Error();
    // need onSuccessModalContact() or not, if the modal changes from error to success when it is closing
    mdShow();
    closeModal();
  } catch {
    onErrorModalContact();
    mdShow();
  } finally {
    closeModalLoader();
  }
}

function validateForm({ name, phone, services }) {
  let isValid = true;

  if (!name) {
    nameInput.classList.add(INVALID);
    isValid = false;
  }
  if (phone.length < 10) {
    phoneInput.classList.add(INVALID);
    isValid = false;
  }

  if (services === buttonAttribute.notSelected) {
    servicesInput.classList.add(INVALID);
    isValid = false;
  }

  return isValid;
}
function handlePhoneFocus(e) {
  phoneWrapper.classList.add(SHOW_PREFIX);
}
function handlePhoneBlur(e) {
  if (e.target.value.trim()) return;
  e.target.value = '';
  phoneWrapper.classList.remove(SHOW_PREFIX);
}

function removeInvalid(e) {
  e.currentTarget.classList.remove(INVALID);
}

function toggleSelect() {
  selectContainer.classList.toggle(ACTIVE_SELECT);

  if (selectContainer.classList.contains(ACTIVE_SELECT)) {
    window.addEventListener('click', closeDropdownOnClickOutside);
  } else {
    window.removeEventListener('click', closeDropdownOnClickOutside);
  }
}

function closeDropdownOnClickOutside({ target }) {
  if (!selectButton.contains(target) && !selectList.contains(target)) {
    selectContainer.classList.remove(ACTIVE_SELECT);
    window.removeEventListener('click', closeDropdownOnClickOutside);
  }
}

function handleListSelect(e) {
  if (e.target !== e.currentTarget) {
    selectButton.setAttribute(buttonAttribute.key, buttonAttribute.selected);
    selectButton.querySelector('#modal-services').textContent =
      e.target.textContent.trim();
    selectContainer.classList.remove(ACTIVE_SELECT);
    window.removeEventListener('click', closeDropdownOnClickOutside);
  }
}

function validateNumber(event) {
  const phoneInput = event.target.value.replace(/\D/g, '');
  if (phoneInput.length > 10) {
    event.target.value = phoneInput.slice(0, 10);
    return;
  }

  event.target.value = phoneInput;
}

function handleEsc(e) {
  if (e.key !== 'Escape') return;
  closeModal();
}

function handleBackdropClose(e) {
  if (e.target !== e.currentTarget) return;
  closeModal();
}

export function closeModal() {
  resetForm();
  resetError();
  modal.classList.remove(VISIBLE);
  document.body.style.overflow = '';
  window.removeEventListener('keydown', handleEsc);
}

export function handleOpenModal() {
  setPlaceholders();
  modal.classList.add(VISIBLE);
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', handleEsc);
}

//
function setPlaceholders() {
  const language = localStorage.getItem(STORAGE_KEY) || 'ua';
  nameInput.setAttribute('placeholder', placeholderNames.name[language]);
  phoneInput.setAttribute('placeholder', placeholderNames.phone[language]);
  commentInput.setAttribute('placeholder', placeholderNames.comment[language]);
}

//  Тимчасовий код
const openButtonHero = document.querySelector('.hero-btn');
if (openButtonHero) {
  openButtonHero.addEventListener('click', handleOpenModal);
}

const openButtonServices = document.querySelector('.services-button');
if (openButtonServices) {
  openButtonServices.addEventListener('click', handleOpenModal);
}
