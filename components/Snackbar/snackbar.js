const snackbarBaselineBtn = document.querySelector(".btn-action-baseline");
const snackbarLeadingBtn = document.querySelector(".btn-action-leading");
const snackbarBaseline = document.querySelector(".snackbar-baseline");
const snackbarLeading = document.querySelector(".snackbar-leading");

snackbarBaselineBtn.addEventListener("click", () => {
  snackbarBaseline.classList.remove("hide-snackbar");
  snackbarLeading.classList.add("hide-snackbar");
  closeSnackbar("baseline");
});

snackbarLeadingBtn.addEventListener("click", () => {
  snackbarBaseline.classList.add("hide-snackbar");
  snackbarLeading.classList.remove("hide-snackbar");
  closeSnackbar("leading");
});

const closeSnackbar = (snackbarType) => {
  if (snackbarType === "baseline") {
    setTimeout(() => {
      snackbarBaseline.classList.add("hide-snackbar");
    }, 3000);
  } else if (snackbarType === "leading") {
    setTimeout(() => {
      snackbarLeading.classList.add("hide-snackbar");
    }, 3000);
  }
};
