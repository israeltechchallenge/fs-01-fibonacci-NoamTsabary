input.addEventListener("keyup", () => {
  if (input.value === "") {
    isBtn.disabled = true;
    result.innerText = ""}
  else 
    isBtn.disabled = false;
});

const print = (location, printed) => {
    document.querySelector(location).innerText = (printed)
}
