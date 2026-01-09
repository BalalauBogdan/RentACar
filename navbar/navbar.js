const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = navLinks.querySelectorAll("a");
let isMenuOpen = false;

menuToggle.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menuToggle.classList.toggle("active", isMenuOpen);
  navLinks.classList.toggle("active", isMenuOpen);
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    isMenuOpen = false;
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

const currentPath = window.location.pathname.replace(".html", "");
links.forEach((link) => {
  if (
    link.dataset.path === currentPath ||
    (currentPath === "/" && link.dataset.path === "/")
  ) {
    link.classList.add("active");
  }
});
