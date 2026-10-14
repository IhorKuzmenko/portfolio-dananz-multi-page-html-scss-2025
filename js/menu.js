const menuButton = document.querySelector(".header__menu_button");
const menu = document.querySelector(".header__menu");

if (menuButton && menu) {
  const setMenuOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    document.body.classList.toggle("menu-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (
      menu.classList.contains("is-open") &&
      !event.target.closest(".header")
    ) {
      setMenuOpen(false);
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 1440px)");

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) {
      setMenuOpen(false);
    }
  });
}
