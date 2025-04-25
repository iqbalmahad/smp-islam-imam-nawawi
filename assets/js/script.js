const iconToggle = document.querySelector(".icon-toggle input");
const nav = document.querySelector(".nav-device");
const menu = document.querySelector(".menu");
const sub = document.querySelectorAll(".sub");
const acc = document.querySelectorAll(".accordion");

acc.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

iconToggle.addEventListener("click", function () {
  nav.classList.toggle("show");
});

sub.forEach(function (subButton) {
  subButton.addEventListener("click", function () {
    console.log("Bismillah Submenu");
    const subMenu = this.nextElementSibling;
    if (subMenu) {
      subMenu.classList.toggle("show");
    }
  });
});
