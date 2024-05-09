const logoSpan = document.querySelector('.logo-footer');

const handleClick = function () {
    logoSpan.removeEventListener('click', handleClick);
    window.location.reload();
}

logoSpan.addEventListener('click', handleClick);
 
