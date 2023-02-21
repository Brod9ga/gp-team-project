// ===============МОДАЛКА ДЛЯ BOOKING-ЗАБРОНЮВАТИ НОМЕР
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
// =========================================================================
// ===============МОДАЛКА ДЛЯ PRICE-ЦІНА НА НОМЕР
// ДВОХМІСНИЙ ЛЮКС
(() => {
  const refs = {
    openModalBtn: document.querySelector("[price-modal-open]"),
    closeModalBtn: document.querySelector("[price-modal-close]"),
    modal: document.querySelector("[price-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-price-hidden");
  }
})();
// ТРОХМІСНИЙ
(() => {
  const refs = {
    openModalBtn: document.querySelector("[price-thre-modal-open]"),
    closeModalBtn: document.querySelector("[price-thre-modal-close]"),
    modal: document.querySelector("[price-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-price-hidden");
  }
})();
// ДВУХМІСНИЙ
(() => {
  const refs = {
    openModalBtn: document.querySelector("[price-two-modal-open]"),
    closeModalBtn: document.querySelector("[price-two-modal-close]"),
    modal: document.querySelector("[price-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-price-hidden");
  }
})();
// ===============МОДАЛКА ДЛЯ BOOKING-ЗАБРОНЮВАТИ СТОЛИК
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


