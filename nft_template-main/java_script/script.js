const navigationBar = document.querySelector(" .primary__nav-bar");
const toogleNavBar = document.querySelector(".mobile-nav-bar-toogle ");

toogleNavBar.addEventListener("click", () => {
  const visible = navigationBar.getAttribute("data-visible");

  if (visible === "false") {
    toogleNavBar.setAttribute("aria-expanded", true);
    navigationBar.setAttribute("data-visible", true);
  } else if (visible === "true") {
    toogleNavBar.setAttribute("aria-expanded", false);
    navigationBar.setAttribute("data-visible", false);
  }
});
