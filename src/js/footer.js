export function applyFooterMargin(lang) {
    const el = document.querySelector('.container-website')
    lang === 'en' ? el.classList.add('margin-english') : el.classList.remove('margin-english')
}
