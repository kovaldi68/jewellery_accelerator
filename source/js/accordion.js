(() => {
  const faqAccordion = document.querySelector('.faq__questions--accordion');
  const faqContent = document.querySelectorAll('.faq__tab');

  if (faqAccordion) {
    faqContent.forEach(element => element.classList.remove('faq__tab--active'));
    Array.from(faqContent)[0].classList.add('faq__tab--active');

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

    faqAccordion.addEventListener('click', faqAccordionHandler);
  }


  const filterAccordion = document.querySelector('.catalog-filter__wrapper--accordion');
  const filterContent = document.querySelectorAll('.catalog-filter__item');

  if (filterAccordion) {
    const filterItemsArray = Array.from(filterContent);
    filterContent.forEach(element => element.classList.remove('catalog-filter__item--active'));
    filterItemsArray[0].classList.add('catalog-filter__item--active');
    filterItemsArray[3].classList.add('catalog-filter__item--active');

    function filterAccordionHandler(event) {
      const eventTarget = event.target;
      if(!(eventTarget.classList.contains('catalog-filter__title'))) return;
      if (eventTarget.classList.contains('catalog-filter__title--accord-select')) {
        eventTarget.classList.remove('catalog-filter__title--accord-select');
        eventTarget.closest('.catalog-filter__item').classList.remove('catalog-filter__item--active');
      } else {
        eventTarget.classList.add('catalog-filter__title--accord-select');
        eventTarget.closest('.catalog-filter__item').classList.add('catalog-filter__item--active');
      }
    }

    filterAccordion.addEventListener('click', filterAccordionHandler);
  }
})();
