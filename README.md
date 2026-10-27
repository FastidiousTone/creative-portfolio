# AR / Studio — Creative Portfolio

[View live site](https://ar-studio-antoine.netlify.app/)

A responsive, five-page website for a fictional creative studio, built by Antoine Randle with HTML, CSS, JavaScript, and Vite.

This learning project explores translating a design brief into reusable components, responsive layouts, and accessible interactions without a JavaScript framework.

## Pages

- **Home:** introduction, featured artwork, selected projects, services, and contact call to action.
- **Work:** four projects with All, Brand, Digital, and Editorial filters.
- **Project:** a Form & Field case study with client details, challenge, approach, supporting artwork, and outcome.
- **About:** studio introduction, perspective, process, and fictional experience.
- **Contact:** email link and a client-side demo inquiry form.

## Features

- Responsive desktop, tablet, and mobile layouts.
- Mobile navigation with an accessible toggle, synchronized expansion state, Escape-to-close behavior, and focus returned to the toggle.
- Project filtering without a page reload, selected-button states, and a status region reporting the number of visible projects.
- Support for `work.html?filter=brand` to open the gallery with Brand selected.
- Custom form validation on submission and blur, plus validation during edits after a field has been checked.
- Field-specific errors connected to controls, updated invalid states, and focus moved to the first invalid field on submission.
- Preservation of entered form values after validation.
- Light and dark themes with sun/moon icons, accessible action labels, and a preference saved in localStorage.
- System color preference used when no valid theme selection has been saved.
- Skip-to-main-content links, visible keyboard focus, and reduced-motion handling.
- Shared CSS custom properties for colors, typography, spacing, and other design decisions.

## Built with

- Semantic HTML
- Vanilla CSS, including custom properties, Flexbox, Grid, and media queries
- Vanilla JavaScript and DOM APIs
- Vite 8
- Google Fonts

## Run locally

Install a Node.js version supported by the Vite version in `package.json`, with npm available.

After cloning this repository, open its folder in a terminal and install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal. Stop the server with Ctrl+C.

## Production build

```bash
npm run build
npm run preview
```

Vite generates the production files in `dist`. The multi-page configuration in `vite.config.js` includes `index.html`, `work.html`, `project.html`, `about.html`, and `contact.html`.

Preview serves the built output locally. Rebuild after source changes before checking them in preview. Publishing the repository on GitHub does not automatically deploy the website.

## Source organization

- The five HTML pages live in the project root.
- `src/css/tokens.css` defines shared design tokens and theme overrides.
- `src/css/styles.css` imports the component stylesheets.
- `src/css/components/` contains component and utility styles.
- `src/js/main.js` handles shared navigation and theme behavior.
- `src/js/work.js` handles gallery filtering.
- `src/js/contact.js` handles contact-form validation.
- `public/images/` contains artwork assets, referenced in HTML with `/images/...` URLs.
- `vite.config.js` configures the multi-page build.

## Manual checks performed

- Navigation across all five pages and the case-study return link.
- Responsive layouts at mobile, tablet, and desktop widths, plus browser zoom at 200%.
- Keyboard navigation, visible focus, the mobile menu, and skip links.
- Filter counts: All 4, Brand 2, Digital 1, Editorial 1.
- Empty required fields, an invalid email format, valid demo submission, error correction, and focus handling.
- Removal of the previous validation-success message when form values change.
- Theme switching, matching icons and action labels, persistence across pages and reloads, and a system-preference fallback.
- Successful production build with all five HTML pages and checks in local preview.

These are manual checks, not an automated test suite or a formal accessibility audit.

## What I learned

- Structuring a multi-page site and organizing reusable CSS components.
- Choosing Grid and Flexbox for different layout needs.
- Using design tokens to adapt a site to multiple screen sizes and color themes.
- Selecting DOM elements, handling events, and understanding event bubbling.
- Working with Boolean conditions, block scope, functions, data attributes, and browser storage.
- Reusing validation functions across submit, blur, and input events.
- Debugging selectors, file paths, loading behavior, and build configuration using browser developer tools.
- Distinguishing a development server from a production build and local preview.

## Project scope and credits

This is a fictional studio website created as a front-end portfolio project. Alex Rivers, AR / Studio, the displayed experience, and the case-study narratives are practice content, not claims about my employment history or client work.

I implemented and tested the website with step-by-step AI assistance. The design brief and artwork were AI-assisted or AI-generated with ChatGPT. This repository demonstrates my front-end implementation and learning; it does not present the artwork as original client design work by me.

The contact form performs client-side validation only. A successful check displays **“Demo inquiry validated. No message was sent.”** There is no message-delivery backend. The sample email address and generic social destinations are demonstration content.

Other project cards are gallery previews rather than separate completed case studies; Form & Field is the representative case study.

## Next improvements

- Publish a live demo and add its URL to this README and the repository details.
- Add desktop and mobile screenshots.
- Continue reviewing image performance, theme initialization, and accessibility.
