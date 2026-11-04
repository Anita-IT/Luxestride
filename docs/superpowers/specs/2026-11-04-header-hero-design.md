# Header Hero Design

## Intent
Rearrange the existing LuxeStride header so its navigation and hero copy read clearly over the background image.

## Goals
- Keep the existing logo, navigation links, cart/menu icons, headline, tagline, and call to action.
- Make the header a single background-image hero, with navigation at the top and copy below it.
- Set a deliberate background crop and improve copy contrast with a subtle overlay.
- Keep the header usable on narrow screens.

## Non-goals
- Change page sections outside the header.
- Add new assets, libraries, or interactions.

## Approaches
- Keep the current generic `.row` and `.col-2` structure and add header-specific styling.
- Restructure the header with a dedicated hero-copy container and targeted responsive styles. **Recommended:** clearer markup and avoids generic column sizing in a one-column hero.

## Constraints and implementation calls
Use the existing `images/Luxury Boutique Shoe Trolley.png` background image and current content. Modify only `index.html` and the header-related rules in `style.css`. Keep the navigation visible on desktop; adapt spacing and text sizing for narrow screens without introducing a new menu interaction.
