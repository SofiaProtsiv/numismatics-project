import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reviewSliderElement = document.querySelector('.reviews-swiper');
const reviewSliderProps = {
  speed: 700,
  spaceBetween: 32,
  slidesPerView: 'auto',
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },
  breakpoints: {
    1440: {
      spaceBetween: 40,
      navigation: {
        nextEl: '.reviews-btn-next',
        prevEl: '.reviews-btn-prew',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    },
  },
  loop: true,
};
const reviewSlider = new Swiper(reviewSliderElement, reviewSliderProps);
reviewSlider.pagination.init();
