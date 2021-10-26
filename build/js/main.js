(() => {
  const faqAccordion = document.querySelector('.faq__questions--accordion');
  const faqContent = document.querySelectorAll('.faq__tab');
  const faqTitles = document.querySelectorAll('.faq__title');

  const isEnterEvent = (evt) => {
    return evt.code === ('Enter');
  };

  const onEnterFaqHandler = (event) => {
    const eventTarget = event.target;
    if (isEnterEvent(event)) {
      if (eventTarget.classList.contains('faq__title--accord-select')) {
        eventTarget.classList.remove('faq__title--accord-select');
        eventTarget.closest('.faq__tab').classList.remove('faq__tab--active');
      } else {
        eventTarget.classList.add('faq__title--accord-select');
        eventTarget.closest('.faq__tab').classList.add('faq__tab--active');
      }
    }
  }

  if (faqAccordion) {
    faqContent.forEach(element => element.classList.remove('faq__tab--active'));
    Array.from(faqContent)[0].classList.add('faq__tab--active');

    function faqAccordionHandler(event) {
      const eventTarget = event.target;
      if(!(eventTarget.classList.contains('faq__tab') || (eventTarget.classList.contains('faq__title')))) return;
      if (eventTarget.classList.contains('faq__tab--active') || (eventTarget.classList.contains('faq__title--accord-select'))) {
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
  const filterTitles = document.querySelectorAll('.catalog-filter__title');

  const onEnterFilterHandler = (event) => {
    const eventTarget = event.target;
    if (isEnterEvent(event)) {
      if (eventTarget.classList.contains('catalog-filter__title--accord-select')) {
        eventTarget.classList.remove('catalog-filter__title--accord-select');
        eventTarget.closest('.catalog-filter__item').classList.remove('catalog-filter__item--active');
      } else {
        eventTarget.classList.add('catalog-filter__title--accord-select');
        eventTarget.closest('.catalog-filter__item').classList.add('catalog-filter__item--active');
      }
    }
  }

  if (filterAccordion) {
    const filterItemsArray = Array.from(filterContent);
    filterContent.forEach(element => element.classList.remove('catalog-filter__item--active'));
    filterItemsArray[0].classList.add('catalog-filter__item--active');
    filterItemsArray[3].classList.add('catalog-filter__item--active');

    function filterAccordionHandler(event) {
      const eventTarget = event.target;
      if(!(eventTarget.classList.contains('catalog-filter__item') || (eventTarget.classList.contains('catalog-filter__title')))) return;
      if (eventTarget.classList.contains('catalog-filter__item--active') || eventTarget.classList.contains('catalog-filter__title--accord-select')) {
        eventTarget.classList.remove('catalog-filter__title--accord-select');
        eventTarget.closest('.catalog-filter__item').classList.remove('catalog-filter__item--active');
      } else {
        eventTarget.classList.add('catalog-filter__title--accord-select');
        eventTarget.closest('.catalog-filter__item').classList.add('catalog-filter__item--active');
      }
    }
    filterAccordion.addEventListener('click', filterAccordionHandler);
  }

  faqTitles.forEach(element => element.addEventListener('keydown', onEnterFaqHandler));
  filterTitles.forEach(element => element.addEventListener('keydown', onEnterFilterHandler));
})();

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

(() => {
  const pageHeader = document.querySelector('.page-header');
  const menuToggle = document.querySelector('.page-header__toggle');
  const mediaDesktop = window.matchMedia('(min-width: 1024px)');
  const body = document.body;

  pageHeader.classList.remove('page-header--nojs');

  const onMenuHandler = (evt) => {
    evt.preventDefault();
    const headerHeight = pageHeader.offsetHeight;

    if (pageHeader.classList.contains('page-header--opened')) {
      pageHeader.classList.remove('page-header--opened')
      body.classList.remove('page-body--modal-opened')
      body.style.paddingTop = 0;
    } else {
      pageHeader.classList.add('page-header--opened')
      body.classList.add('page-body--modal-opened')
      body.style.paddingTop = `${headerHeight}px`;
    }
  };

  const closeHeader = () => {
    if (mediaDesktop.matches) {
      body.style.paddingTop = 0;
      pageHeader.classList.remove('page-header--opened');
      body.classList.remove('page-body--modal-opened');
    }
  };

  menuToggle.addEventListener('click', onMenuHandler);
  window.addEventListener('resize', closeHeader);
})();

(() => {
  const signInModal = document.querySelector('.modal--sign-in');
  const modalCloseButton = document.querySelector('.modal__button-close');
  const signInButton = document.querySelector('.page-header__user-link--login');
  const signInUserMail = signInModal.querySelector('[name = user-email]');
  const body = document.querySelector('.page-body');
  const pageHeader = document.querySelector('.page-header');
  const mediaDesktop = window.matchMedia('(min-width: 1024px)');
  let focusedElementBeforeModal;

  let isStorageSupport = true;
  let storageEmail= '';

  const modalHandler = function(evt) {
    body.classList.add('page-body--modal-opened');
    showUpSignInModal(evt);
  }

  const signInModalHandler = () => {
    signInModal.classList.remove('modal--opened');
    body.classList.remove('page-body--modal-opened');

    document.removeEventListener('keydown', onEscHandler);
    document.removeEventListener('click', onClickHandler);

    focusedElementBeforeModal.focus();
  }

  const isEscEvent = (evt) => {
    return evt.key === ('Escape' || 'Esc');
  };

  const showUpSignInModal = (evt) => {
    evt.preventDefault();
    focusedElementBeforeModal = document.activeElement;
    signInModal.classList.add('modal--opened');
    signInUserMail.focus();

    if (pageHeader.classList.contains('page-header--opened')) {
      body.style.paddingTop = 0;
      pageHeader.classList.remove('page-header--opened');
      body.classList.remove('page-body--menu-opened')
    }

    const focusableElementString = 'a[href], area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]), select:not([disabled]):not([aria-hidden]), textarea:not([disabled]):not([aria-hidden]), button:not([disabled]):not([aria-hidden]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])';
    const focusableElements = signInModal.querySelectorAll(focusableElementString);
    const focusableElementsArray = Array.from(focusableElements);
    const firstTabStop = focusableElementsArray[0];
    const lastTabStop = focusableElementsArray[focusableElementsArray.length - 1];

    const trapTabKey = function(e) {
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

    try {
      storageEmail = localStorage.getItem('userEmail');
    } catch (err) {
      isStorageSupport = false;
    }

    if (storageEmail) {
      signInUserMail.value = storageEmail;
    }

    document.addEventListener('keydown', onEscHandler);
    document.addEventListener('click', onClickHandler);
    signInModal.addEventListener('keydown', trapTabKey);
  }

  const onEscHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      signInModalHandler();
    }
  }

  const onClickHandler = (evt) => {
    if (evt.target === document.querySelector('.modal--sign-in')) {
      signInModalHandler();
    }
  }

  const keepModalOpen = () => {
    if (mediaDesktop.matches && signInModal.classList.contains('modal--opened')) {
      body.classList.add('page-body--modal-opened');
    }
  };

  window.addEventListener('resize', keepModalOpen);
  signInButton.addEventListener('click', modalHandler);
  modalCloseButton.addEventListener('click', signInModalHandler);
})();

(() => {
  if(document.querySelector('.new-in__swiper')) {
    const swiper = new Swiper('.new-in__swiper', {
      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-arrow--next',
        prevEl: '.swiper-arrow--prev',
      },


      simulateTouch: false,
      spaceBetween: 30,
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: 'fraction',
            renderFraction: function(currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
            }
          },
          grabCursor: true,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: 'bullets',
            clickable: true,
            renderBullet: function(index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
          },
          grabCursor: true,
        },
        1023: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            type: 'bullets',
            clickable: true,
            renderBullet: function(index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
          },
        },
      }
    });
  }
})();
