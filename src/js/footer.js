const logoSpan = document.querySelector('.logo-footer');

const handleClick = function (event) {
    window.location.reload(); 
}

logoSpan.addEventListener('click', handleClick);

logoSpan.removeEventListener('click', handleClick);
