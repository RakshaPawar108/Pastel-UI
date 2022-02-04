const demoBtn = document.querySelector(".btn-demo");
const closeModalBtn = document.querySelector(".close-demo");
const demoWrapper = document.querySelector(".demo-wrapper");

const openModal = () => {
  demoWrapper.classList.add("open");
};

const closeModal = () => {
  demoWrapper.classList.remove("open");
};

demoBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
