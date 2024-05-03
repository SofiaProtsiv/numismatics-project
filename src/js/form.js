const form = document.querySelector('.js-modal-form');
const selectButton = document.querySelector('.js-select-button');
const selectList = document.querySelector('.js-modal-select-list');
const selectContainer = document.querySelector('.js-modal-select');
const numberPrefix = document.querySelector('.js-modal-label-name');

const nameInput = document.querySelector('input[name="name"]');
const phoneInput = document.querySelector('input[name="phone"]');
const servicesInput = document.querySelector('button[name="services"]');

const modal = document.querySelector('.js-consultation-modal');
const closeModalBtn = document.querySelector('.js-consultation-modal-close');

const INVALID = 'invalid';
const ACTIVE_SELECT = 'select-active';
const SHOW_PREFIX = 'show-prefix';
const VISIBLE = 'visible';
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
phoneInput.addEventListener('focus', e => {});
phoneInput.addEventListener('blur', e => {});

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

  //   fetchConsultation({ name, phone, service: servicesValue, question: comment });
  e.target.reset();
}

function validateForm({ name, phone, services }) {
  let isValid = true;

  if (!name) {
    nameInput.classList.add(INVALID);
    isValid = false;
  }

  if (!phone) {
    phoneInput.classList.add(INVALID);
    isValid = false;
  }

  if (services === buttonAttribute.notSelected) {
    servicesInput.classList.add(INVALID);
    isValid = false;
  }

  return isValid;
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
      e.target.textContent;
    selectContainer.classList.remove(ACTIVE_SELECT);
    window.removeEventListener('click', closeDropdownOnClickOutside);
  }
}

function fetchConsultation(data) {
  fetch('https://numismatics-project-backend.onrender.com/api/application', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Application submitted successfully:', data);
    })
    .catch(error => {
      console.error('Error submitting application:', error);
    });
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
  modal.classList.remove(VISIBLE);
  document.body.style.overflow = '';
  window.removeEventListener('keydown', handleEsc);
}
export function handleOpenModal() {
  modal.classList.add(VISIBLE);
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', handleEsc);
}

const op = document.querySelector('.hero-btn');
op.addEventListener('click', handleOpenModal);
