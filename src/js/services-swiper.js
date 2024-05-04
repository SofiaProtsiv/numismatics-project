import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const servicesSliderElement = document.querySelector('.services-swiper');
const servicesSliderProps = {
    speed: 700,
    spaceBetween: 32,
    slidesPerView: 'auto',
    pagination: {
        el: '.services-pagination',
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1440: {
            slidesPerView: '3',
            spaceBetween: 40,
            loop: false
        },
    },
};
const servicesSlider = new Swiper(servicesSliderElement, servicesSliderProps);
servicesSlider.pagination.init();
