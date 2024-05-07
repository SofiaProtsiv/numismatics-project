// const changeAdress = () => {
//   window.history.pushState(null, null, './faq');
// };

// changeAdress();

const navHome = document.querySelector('.faq-nav-home');
const navReload = document.querySelector('.faq-nav-reload');

const goToHomePage = () => {
  window.location.href = '/';
};

const reloadPage = () => {
  window.location.href = '../faq-full.html';
};

navHome.addEventListener('click', goToHomePage);
navReload.addEventListener('click', reloadPage);
