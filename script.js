const navBars = document.querySelectorAll(".header .nav-bar");

navBars.forEach((navBar) => {
    const menuButton = navBar.querySelector(".menu-toggle");
    const menu = navBar.querySelector("nav ul");

    if (!menuButton || !menu) return;

    const closeMenu = () => {
        navBar.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    };

    menuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = navBar.classList.toggle("menu-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", (event) => {
        if (!navBar.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuButton.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) closeMenu();
    });
});

const updateHeaderNav = () => {
    navBars.forEach((navBar) => {
        navBar.classList.toggle("is-scrolled", window.scrollY > 48);
    });
};

window.addEventListener("scroll", updateHeaderNav, { passive: true });
updateHeaderNav();
