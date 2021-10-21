(() => {
  const catalogFilter = document.querySelector('.catalog-filter');
  const openFilterButton = document.querySelector('.button--open-filter');
  const closeFilterButton = document.querySelector('.button--close-filter');
  const resetFilterButton = document.querySelector('.button--reset');
  const catalogItems = document.querySelectorAll('.catalog-filter__item');
  const body = document.querySelector('.page-body');
  const tabletMedia = window.matchMedia('(max-width: 1023px)');

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

    openFilterButton.addEventListener('click', filterButtonHandler);
    closeFilterButton.addEventListener('click', closeFilterHandler);
    resetFilterButton.addEventListener('click', resetFilter);
  }
})();
