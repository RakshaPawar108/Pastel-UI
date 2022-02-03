const snackbarBaselineBtn = document.querySelector(".btn-action-baseline");
const snackbarLeadingBtn = document.querySelector(".btn-action-leading");
const snackbarBaseline = document.querySelector(".snackbar-baseline");
const snackbarLeading = document.querySelector(".snackbar-leading");

snackbarBaselineBtn.addEventListener("click", () => {
  snackbarBaseline.classList.remove("hide");
  snackbarLeading.classList.add("hide");
  closeSnackbar("baseline");
});

snackbarLeadingBtn.addEventListener("click", () => {
  snackbarBaseline.classList.add("hide");
  snackbarLeading.classList.remove("hide");
  closeSnackbar("leading");
});

const closeSnackbar = (snackbarType) => {
  if (snackbarType === "baseline") {
    setTimeout(() => {
      snackbarBaseline.classList.add("hide");
    }, 3000);
  } else if (snackbarType === "leading") {
    setTimeout(() => {
      snackbarLeading.classList.add("hide");
    }, 3000);
  }
};
