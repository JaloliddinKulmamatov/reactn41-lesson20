let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "assets/img/light.svg";
  } else {
    this.firstElementChild.src = "assets/img/dark.svg";
  }
  document.body.classList.toggle("dark");
});