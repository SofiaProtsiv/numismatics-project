const logoSpan = document.querySelector('.logo-footer');

const handleClick = function () {
    logoSpan.removeEventListener('click', handleClick);
    window.location.reload();
}

logoSpan.addEventListener('click', handleClick);
 


export function applyFooterMargin(lang) {
    const el = document.querySelector('.container-website')
    lang === 'en' ? el.classList.add('margin-english') : el.classList.remove('margin-english')
}
