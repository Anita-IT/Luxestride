# LuxeStride

LuxeStride is a responsive fashion storefront for curated bags and heels. The project uses plain HTML, CSS, and JavaScript, with a warm brown and cream visual style.

## Pages

- `index.html` — Home page with the hero section, featured products carousel, latest products, offer section, testimonials, sponsors, and footer.
- `shop.html` — Product collection with product cards, ratings, prices, and add-to-cart buttons.
- `about.html` — Brand story, mission, and reasons to choose LuxeStride.
- `contact.html` — Contact form and direct contact information.
- `account.html` — Account sign-in form and social sign-in options.
- `signup.html` — Create-account form styled to match the account page.

## Features

- Responsive layouts for desktop, tablet, and mobile screens.
- Shared navigation with a mobile menu and active-page links.
- Sticky, scroll-aware navigation styling.
- Mobile Featured Products carousel with touch scrolling and arrow controls.
- Product cards with ratings, prices, images, hover states, and cart controls.
- Responsive contact, account, and sign-up forms.
- Shared footer across the site.
- Reduced-motion support for users who prefer less animation.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts: Poppins and Montserrat

## Getting started

No build tools or dependencies are required.

1. Open the project folder.
2. Open `index.html` in a browser.
3. Use the navigation to move between the pages.

For a local development server, run a simple static server from the project folder:

```bash
python3 -m http.server
```

Then open `http://localhost:8000` in a browser.

## Project structure

```text
.
├── index.html
├── shop.html
├── contact.html
├── about.html
├── account.html
├── signup.html
├── style.css
├── script.js
├── images/
└── readme.md
```

## Notes

This is currently a front-end project. The forms use browser validation and display front-end status messages, but they are not connected to a database, email service, payment provider, or authentication system. The cart buttons are visual controls and do not yet persist a shopping cart.

Social links and some footer links are placeholders and can be connected to real destinations later.
