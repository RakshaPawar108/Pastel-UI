const snackbarBaseline = document.querySelector(".btn-action-baseline");
const snackbarLeading = document.querySelector(".btn-action-leading");

snackbarBaseline.addEventListener("click", () => {
  document.querySelector(".snackbar-baseline").classList.remove("hide");
  document.querySelector(".snackbar-leading").classList.add("hide");
  closeSnackbar();
});

snackbarLeading.addEventListener("click", () => {
  document.querySelector(".snackbar-baseline").classList.add("hide");
  document.querySelector(".snackbar-leading").classList.remove("hide");
  closeSnackbar();
});

const closeSnackbar = () => {
  setTimeout(() => {
    document.querySelector(".snackbar-baseline").classList.add("hide");
    document.querySelector(".snackbar-leading").classList.add("hide");
  }, 3000);
};
