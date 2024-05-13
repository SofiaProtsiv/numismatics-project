import "../js/header";
import "../js/localization";
import "../js/faq";
import "../js/form";
import "../js/modal";
import "../js/team-modal";
import "../js/footer";

const logoBtnHeader = document.querySelector('.logo-link');
const logoBtnFooter = document.querySelector('.logo-footer')
const navHome = document.querySelector('.faq-nav-home');
const navReload = document.querySelector('.faq-nav-reload');

const goToHomePage = () => {
  window.location.href = '/numismatics-project';
};

const reloadPage = () => {
  window.location.reload();
};

navHome.addEventListener('click', goToHomePage);
navReload.addEventListener('click', reloadPage);
logoBtnHeader.addEventListener('click', goToHomePage);
logoBtnFooter.addEventListener('click', reloadPage)
