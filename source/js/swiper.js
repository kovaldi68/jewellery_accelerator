(() => {
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
})();
