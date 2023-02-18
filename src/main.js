// ===============МОДАЛКА ДЛЯ BOOKING
(() => {
  const refs = {
    openModalBtn: document.querySelector("[booking-modal-open]"),
    closeModalBtn: document.querySelector("[booking-modal-close]"),
    modal: document.querySelector("[booking-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-booking-hidden");
  }
})();