const faqItems = document.querySelectorAll('.faq-list-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.querySelector('.faq-list-item-container').classList.toggle('active');
    const answer = item.querySelector('.faq-list-item-answer');

    setTimeout(() => {
      answer.classList.toggle('show');
    }, 25);
  });
});
