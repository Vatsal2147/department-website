
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  const menuToggle = document.querySelector("#menuToggle");
  const navLinks = document.querySelector("#navLinks");

  if (!navbar || !menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
