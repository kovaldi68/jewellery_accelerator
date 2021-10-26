(() => {
  const catalogFilter = document.querySelector('.catalog-filter');
  const openFilterButton = document.querySelector('.button--open-filter');
  const closeFilterButton = document.querySelector('.button--close-filter');
  const resetFilterButton = document.querySelector('.button--reset');
  const catalogItems = document.querySelectorAll('.catalog-filter__item');
  const body = document.querySelector('.page-body');

  const focusableElementString = 'a[href], area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]), select:not([disabled]):not([aria-hidden]), textarea:not([disabled]):not([aria-hidden]), button:not([disabled]):not([aria-hidden]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])';
  const focusableElements = catalogFilter.querySelectorAll(focusableElementString);
  const focusableElementsArray = Array.from(focusableElements);
  const firstTabStop = focusableElementsArray[0];
  const lastTabStop = focusableElementsArray[focusableElementsArray.length - 1];
  const mediaTablet = window.matchMedia('(max-width: 1023px)');

  if (catalogFilter) {
    const filterButtonHandler = function() {
      catalogFilter.classList.toggle('catalog-filter--opened');
      body.classList.toggle('page-body--modal-opened');
    }

    const closeFilterHandler = function() {
      catalogFilter.classList.remove('catalog-filter--opened');
      body.classList.remove('page-body--modal-opened');
    }

    const resetFilter = function() {
      catalogItems.forEach(element => {
        element.classList.remove('catalog-filter__item--active');

        if (element.classList.contains('catalog-filter__item--product') || element.classList.contains('catalog-filter__item--price')) {
          element.classList.add('catalog-filter__item--active')
        }
      });
    }

    const trapTabKey = function(e) {
      if (mediaTablet.matches) {
        if (e.keyCode === 9) {
          if (e.shiftKey) {
            if (document.activeElement === firstTabStop) {
              e.preventDefault();
              lastTabStop.focus();
            }
          } else {
            if (document.activeElement === lastTabStop) {
              e.preventDefault();
              firstTabStop.focus();
            }
          }
        }
      }
    }


    openFilterButton.addEventListener('click', filterButtonHandler);
    closeFilterButton.addEventListener('click', closeFilterHandler);
    resetFilterButton.addEventListener('click', resetFilter);
    catalogFilter.addEventListener('keydown', trapTabKey);
  }
})();
