import localizeElements from './localization';

const savedLang = localStorage.getItem('currentLang') || 'ua';

if (savedLang) {
  document.getElementById('langSelect').value = savedLang;
  console.log(savedLang);

  localizeElements(savedLang);
}

document
  .querySelector('#langSelect')
  .addEventListener('change', changeLanguage);

function changeLanguage() {
  const currentLang = document.getElementById('langSelect').value;
  localizeElements(currentLang);

  localStorage.setItem('currentLang', currentLang);
}

document.querySelectorAll('.faq-list-item').forEach(item => {
  const itemContainer = item.querySelector('.faq-list-item-container');

  itemContainer.addEventListener('click', () => {
    item.classList.toggle('open');
    itemContainer.classList.toggle('active');
  });
});
