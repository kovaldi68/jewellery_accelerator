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
      body.classList.remove('page-body--menu-opened')
      body.style.paddingTop = 0;
    } else {
      pageHeader.classList.add('page-header--opened')
      body.classList.add('page-body--menu-opened')
      body.style.paddingTop = `${headerHeight}px`;
    }
  };

  const closeHeader = () => {
    if (mediaDesktop.matches) {
      body.style.paddingTop = 0;
      pageHeader.classList.remove('page-header--opened');
      body.classList.remove('page-body--menu-opened')
    }
  };

  menuToggle.addEventListener('click', onMenuHandler);
  window.addEventListener('resize', closeHeader);
})();

(() => {
  const swiper = new Swiper('.swiper', {
    // If we need pagination
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
})();

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
