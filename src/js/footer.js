const scrollToHeader = function () {
    const header = document.querySelector("#header");

    header.scrollIntoView({ behavior: 'smooth' });
};

const logoLink = document.querySelector('.logo');

logoLink.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToHeader();
});