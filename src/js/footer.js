const logoLink = document.getElementById('header');

const handleClick = function (event) {
    window.location.reload();
}

logoLink.addEventListener('click', handleClick);

logoLink.removeEventListener('click', handleClick);