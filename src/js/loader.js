const loader = document.querySelector('.js-loader');

const VISIBLE = 'visible';
export function openModalLoader() {
  document.body.style.overflow = 'hidden';
  loader.classList.add(VISIBLE);
}

export function closeModalLoader() {
  document.body.style.overflow = '';
  loader.classList.remove(VISIBLE);
}
