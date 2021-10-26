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
