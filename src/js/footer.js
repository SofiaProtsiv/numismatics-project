const logoLink = document.querySelector('.logo-footer');

const handleClick = function (event) {
    window.location.reload();
}

logoLink.addEventListener('click', handleClick);

logoLink.removeEventListener('click', handleClick);