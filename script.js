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

document.querySelectorAll("form[action='#']").forEach((form) => {
    const status = form.querySelector(".form-status");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (status) {
            status.textContent = form.classList.contains("contact-form")
                ? "Thanks — your message is ready to be connected to email."
                : "Your details are valid. Connect a backend to finish this action.";
            status.classList.add("is-visible");
        }
    });
});

document.querySelectorAll(".btn-1, .btn-2").forEach((button) => {
    button.addEventListener("click", () => {
        const status = button.closest("form")?.querySelector(".form-status");
        if (!status) return;

        status.textContent = "Social sign-in needs to be connected to a provider first.";
        status.classList.add("is-visible");
    });
});
