(() => {
  const accordion = document.querySelector('.faq__questions--accordion');
  const faqContent = document.querySelectorAll('.faq__tab');

  faqContent.forEach(element => element.classList.remove('faq__tab--active'));

  function faqAccordionHandler(event) {
    const eventTarget = event.target;
    if(!(eventTarget.classList.contains('faq__title'))) return;
    if (eventTarget.classList.contains('faq__title--accord-select')) {
      eventTarget.classList.remove('faq__title--accord-select');
      eventTarget.closest('.faq__tab').classList.remove('faq__tab--active');
    } else {
      eventTarget.classList.add('faq__title--accord-select');
      eventTarget.closest('.faq__tab').classList.add('faq__tab--active');
    }
  }

  accordion.addEventListener('click', faqAccordionHandler);
})();
