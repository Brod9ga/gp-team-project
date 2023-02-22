// =========================================================================
// ===============МОДАЛКА ДЛЯ PRICE-ЦІНА НА НОМЕР
// ДВОХМІСНИЙ ЛЮКС
(() => {
  const refs = {
    openModalBtn: document.querySelector('[price-modal-open]'),
    closeModalBtn: document.querySelector('[price-modal-close]'),
    modal: document.querySelector('[price-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-price-hidden');
  }
})();
