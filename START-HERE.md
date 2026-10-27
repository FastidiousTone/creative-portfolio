# AR / Studio — Creative portfolio practice project

## What this is

An intermediate, five-page design reference for independent implementation in VS Code. Includes 15 full-page SVG layouts (1440 px desktop, 768 px tablet, 390 px mobile) and one design-system SVG. This is not a native .fig file, coded website, or connected Figma prototype. Alex Rivers and the projects are fictional; the artwork is original vector placeholder artwork you may reuse in this practice project. The .example email is a placeholder.

## Import into Figma

1. Extract the ZIP to a folder.
2. Create a blank Figma design file. Drag the SVG files from your computer onto its canvas, or use Place image if your version supports SVG placement. Import one first to check your workflow.
3. Arrange desktop, tablet, and mobile variants in rows by page. Each SVG includes explicit width and height; preserve these dimensions.
4. SVG imports are vector groups, not native responsive frames. Text editability can vary with Figma’s SVG importer. If text arrives as vector outlines, recreate it using the copy visible in the layouts and Arial. If a placement workflow flattens the SVG, try dragging the original file directly into the canvas.
5. For native Figma practice, recreate parent frames at 1440, 768, and 390 px; rebuild repeating cards/buttons as components; apply Auto Layout and constraints manually. Add prototype links using the interaction map below.
6. Save/export the resulting Figma document as .fig if your account and client provide that option. No Auto Layout, component variants, or prototype connections are included in the SVGs.

## Brief

Audience: founders and small creative businesses seeking identity and digital design. Goal: let visitors assess style, understand the designer’s approach, and submit a clear inquiry. Direction: warm editorial minimalism, oversized type, generous spacing, citrus accents, rounded geometric artwork. The design should feel personal without sacrificing navigation clarity.

## Page specifications

| Page           | Sections in order                                                                                                                                 | Main action                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Home           | Navigation; introduction; featured artwork; two selected projects; services; contact banner; footer                                               | Explore work → Work           |
| Work           | Introduction; four category filters; four project cards; contact banner; footer                                                                   | Open project → Project Detail |
| Project Detail | Breadcrumb; project title; client/role/year; hero artwork; challenge; approach; supporting artwork; outcome; next project; contact banner; footer | Next project                  |
| About          | Introduction; visual; perspective; four process steps; experience; contact banner; footer                                                         | Let’s collaborate → Contact   |
| Contact        | Introduction; email link; name/email/service/message fields; privacy note; submit; footer                                                         | Validate and submit inquiry   |

Project Detail is the representative template for Form & Field. For the minimum five-page scope, link that card to the full case study and show the other cards as clearly labeled previews. Optional stretch: create additional case studies using the same template; do not send all cards to identical content without explanation.

## Design tokens

| Token          | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Canvas         | #F6F3EB                                                |
| Ink            | #202820                                                |
| Muted text     | #62695F                                                |
| Accent         | #D9F279                                                |
| Border         | #ADB5A4                                                |
| Divider        | #D5D8CC                                                |
| Error          | #A62D24                                                |
| Input surface  | #FFFFFF                                                |
| Artwork colors | #C8C1EB, #E9A777, #B6CDBA                              |
| Font           | Arial, sans-serif; regular 400, semibold 600, bold 700 |
| Space scale    | 8, 16, 24, 32, 48, 64, 96 px                           |
| Corner radius  | Inputs 8; artwork 16; CTA 20; buttons 24 px            |

Display: 88 px desktop, 64 px tablet, 44 px mobile, line height 1.5 as depicted. For a tighter editorial alternative use line height 1.1 and rebalance the section heights. Section headings: 48/40/32 px; body: 17–18 px, line height 1.5; card title 22 px; small text 12–14 px. The artwork’s lettering is part of the art, not the page hierarchy. Keep title wraps close to the reference through max-width, not forced breaks everywhere.

# Design tokens

Design tokens are reusable values for your website’s colors, typography, spacing, and rounded corners.
Define them as CSS custom properties in src/css/tokens.css. Other stylesheets can reference those properties instead of repeating the same values.

Page background — Canvas

- Color: #F6F3EB.
- Use for the website’s main cream background.
- Suggested variable name: --color-background.

Main text — Ink

- Color: #202820.
- Use for headings, primary text, and dark button backgrounds.
- Suggested variable name: --color-text.

Supporting text — Muted

- Color: #62695F.
- Use for descriptions, project categories, dates, and other secondary information.
- Suggested variable name: --color-muted.
  “Muted” means less visually prominent. It should still be readable.

Highlight color — Accent

- Color: #D9F279.
- Use for the bright green contact banner and selected decorative highlights.
- Suggested variable name: --color-accent.

Control borders

- Color: #ADB5A4.
- Use around form fields and controls that need a visible boundary.
- Suggested variable name: --color-border.

Section dividers

- Color: #D5D8CC.
- Use for subtle lines beneath the header or between content areas.
- Suggested variable name: --color-divider.

Dividers are decorative separators. They do not need to look as strong as interactive control borders.
Error messages

- Color: #A62D24.
- Use for form error messages and invalid field borders.
- Suggested variable name: --color-error.
  Always explain the error in text. A red border alone does not tell the visitor what went wrong.

Form field background

- Color: #FFFFFF.
- Use inside inputs, the service dropdown, and the message field.
- Suggested variable name: --color-input-background.

Artwork colors

- Lavender: #C8C1EB.
- Peach: #E9A777.
- Soft green: #B6CDBA.

These belong primarily to the portfolio illustrations. They do not need to become additional page backgrounds.
Typography

## Responsive rules

| Rule                          | Desktop ≥1024 px | Tablet 600–1023 px | Mobile <600 px      |
| ----------------------------- | ---------------- | ------------------ | ------------------- |
| Reference width               | 1440             | 768                | 390                 |
| Side gutter                   | 96 px            | 48 px              | 24 px               |
| Grid for Figma reconstruction | 12 columns       | 8 columns          | 4 columns           |
| Content max-width             | 1248 px          | Available width    | Available width     |
| Project cards                 | 2 columns        | 2 columns          | 1 column            |
| Card gap                      | 24 px            | 24 px              | 24 px               |
| Navigation                    | Inline links     | Inline links       | Menu toggle         |
| Filter pills                  | One row          | One row            | 2 × 2 wrapping grid |
| Hero art                      | Wide             | Wide               | Shorter, stacked    |

Use fluid widths between references, not three fixed-width pages. Suggested container: width calc(100% - 2 \* gutter), max-width 1248px, margin-inline auto. Test at 320, 390, 600, 768, 1024, 1440 and 1920 px; avoid horizontal scrolling. Scale or redraw artwork proportionally rather than stretching it. Long text and browser zoom must not clip content. SVGs are visual references; implement layouts with normal HTML flow rather than absolute coordinates.

# Responsive rules

Responsive design means the same website adapts to the available browser width.

The supplied desktop, tablet, and mobile layouts are examples of that adaptation. They are not three separate websites.

Desktop layout
Applies when the viewport is 1024px wide or larger.

- Reference design width: 1440px.
- Side gutters: at least 96px on each side.
- Maximum content width: 1248px.
- Project gallery: two columns.
- Gap between cards: 24px.
- Navigation: links displayed horizontally.
- Category filters: one horizontal row.
- Main artwork: a wide panel.
  When the viewport becomes very wide, keep the content centered rather than stretching it beyond 1248px.

Tablet layout
Applies from 600px up to, but not including, 1024px.

- Reference design width: 768px.
- Side gutters: 48px on each side.
- Content uses the remaining available width.
- Project gallery: two columns.
- Gap between cards: 24px.
- Navigation: links displayed horizontally.
- Category filters: one horizontal row.
- Main artwork: a wide panel adapted to the smaller space.

Mobile layout
Applies when the viewport is less than 600px wide.

- Reference design width: 390px.
- Side gutters: 24px on each side.
- Content uses the remaining available width.
- Project gallery: one column.
- Gap between cards: 24px.
- Navigation: a Menu button opens the links.
- Category filters: two columns and two rows.
- Main artwork: a shorter panel suited to the narrow layout.
- Content flows vertically.

How the container works

Your .container controls the shared content width and horizontal alignment.

Its job is to:

1. Leave the appropriate gutter on each side.
2. Prevent content from growing beyond 1248px.
3. Center the content when extra space is available.

For example:

- At 1440px, subtracting two 96px gutters leaves 1248px.
- At 768px, subtracting two 48px gutters leaves 672px.
- At 390px, subtracting two 24px gutters leaves 342px.

Apply the gutters once. Avoid nesting containers that repeatedly subtract space or add the same padding.

Figma grid columns

The Figma alignment guides use:

- Desktop: 12 columns.
- Tablet: 8 columns.
- Mobile: 4 columns.

These guides help align elements within a design.

They do not require you to create a matching CSS grid for the entire page. Your project gallery can simply use two columns or one column.

Fluid sizing

The website should work between the reference widths.

For example, a 900px viewport should get a usable tablet layout. It should not display a fixed 768px page with unnecessary empty space or clipped content.

Let containers and cards resize with the available width.

Text and artwork

- Allow headings and paragraphs to wrap naturally.
- Use a maximum text width when you want shorter lines.
- Avoid inserting manual line breaks throughout the copy.
- Preserve artwork proportions instead of stretching images.
- Let sections become taller when their content needs more room.

Responsive testing
Check the layout at these widths:

- 320px.
- 390px.
- 600px.
- 768px.
- 1024px.
- 1440px.
- 1920px.

Also resize slowly between them. Problems often appear between the reference sizes.

## Component specifications

- Header: logo/home link; Work, About, Contact links; thin divider. Minimum control target 44 × 44 px. Mark current page with an underline and aria-current="page".
- Mobile menu: toggle button displays Menu/Close; expanded panel below header with stacked links. aria-expanded reflects state; Escape closes; return focus to toggle on close. The SVG depicts the closed state.
- Buttons: 48 px tall, 20 px horizontal padding, 24 px radius. Primary ink with canvas text; secondary transparent with ink border. Hover primary uses #354133. Focus uses a visible 3 px ink outline with 3 px offset; the accent surround shown on the system sheet is a visual aid. Disabled buttons use actual disabled semantics and explain any relevant unavailable action.
- Project card: art at approximately 1.39:1 ratio; title below; category/year metadata; 24 px grid gap. Whole card may be one anchor. Hover: artwork translateY(-4px), title underline; preserve keyboard focus outline.
- Filter pill: same height as button. Selected state ink background; unselected outline. Use buttons with aria-pressed, not tabs, because they filter one gallery. All: four cards; Brand: Form & Field + Sol; Digital: Field Notes; Editorial: Off the Grid.
- Contact banner: citrus panel; eyebrow, headline, button; 24 px interior padding. Height grows if text wraps.
- Form: associated visible labels; 54 px single-line fields, 160 px message area; radius 8. Service options: Brand identity, Digital experience, Art direction, Other. Use a native select. Name/email/message required; service optional. Errors appear beneath fields and expand layout, with aria-invalid and aria-describedby. Preserve entered data on failure.
- Footer: logo, copyright, social links. Replace example links before publication; don’t leave misleading dead links.

# Component specifications

A component is a recognizable part of the interface, such as a header, card, button, or form.

## Header

Include:

- The AR / STUDIO logo linking to Home.
- Work, About, and Contact navigation links.
- A thin divider beneath the header.

Interaction requirements:

- Give links a comfortably clickable area, aiming for at least 44px by 44px.
- The text itself does not need to be 44px tall.
- Underline the current page’s navigation link.
- Give that link aria-current="page" so assistive technology can identify it.

## Mobile menu

On mobile, replace the horizontal navigation with a button.

Expected behavior:

1. The closed button says “Menu.”
2. Activating it reveals vertically arranged navigation links below the header.
3. The button changes to “Close.”
4. Activating it again closes the menu.
5. Pressing Escape while the menu is open closes it and returns focus to the button.

The button’s aria-expanded value should match the menu’s state:

- Closed: false.
- Open: true.

The supplied mobile SVG shows only the closed state. You will design and implement the expanded panel.

## Buttons and action links

Visual starting values:

- Minimum height: 48px.
- Horizontal padding: 20px on each side.
- Border radius: 24px.

Primary appearance:

- Dark ink background.
- Cream text.
- Hover background: #354133.

Secondary appearance:

- Transparent background.
- Dark text.
- Dark border.

Keyboard focus:

- Show a clear 3px outline.
- Leave a 3px offset between the control and outline.
- Ensure the outline remains visible against its surroundings.

Use the appropriate HTML element:

- A link navigates somewhere.
- A button performs an action, such as filtering or submitting.
  If a button is unavailable, use the actual disabled attribute rather than only changing its color.

## Project cards

Each card contains:

1. Project artwork.
2. Project title.
3. Supporting information, such as category and year.

Artwork proportions:

- Approximately 1.39 times as wide as it is tall.
- This is roughly a 7:5 shape.

Layout:

- Leave 24px between cards.
- Allow card height to grow if a title wraps.

For cards with a destination:

- The whole card may be one link.
- On hover, move the artwork upward by approximately 4px.
- Underline the project title.
- Keep a visible keyboard focus indicator.
- Avoid placing another link or button inside the card’s main link.
  Preview cards without a destination should not suggest they are clickable.

## Category filter pills

Use four buttons:

- All.
- Brand.
- Digital.
- Editorial.

Appearance:

- Minimum height: 48px.
- Selected filter: dark background with light text.
- Unselected filter: outlined appearance.

Behavior:

- Only one category is selected at a time.
- Use aria-pressed to communicate which button is selected.
- These filter a gallery; they do not need tab-interface semantics.

Expected results:

- All: four cards.
- Brand: Form & Field and Sol Coffee.
- Digital: Field Notes.
- Editorial: Off the Grid.

## Contact banner

Include:

- A bright green background.
- A short eyebrow.
- A larger invitation heading.
- A link to the Contact page.

Layout:

- Interior padding: 24px.
- Border radius: 20px.
- Let its height grow when text wraps.
  Avoid a fixed height that could cut off content.

## Contact form

Include visible labels for:

- Name.
- Email.
- Service.
- Project message.

Field dimensions:

- Single-line controls: approximately 54px tall.
- Message field: approximately 160px tall initially.
- Border radius: 8px.
  Allow the message field to be resized vertically.

Use a native <select> for these service options:

- Brand identity.
- Digital experience.
- Art direction.
- Other.

Required fields:

- Name.
- Email.
- Project message.
  The service selection is optional.

Error behavior:

- Display a specific message beneath the affected field.
- Let the layout expand to fit the message.
- Set aria-invalid when a field is invalid.
- Connect the field to its error message using aria-describedby.
- Preserve the visitor’s entered information.
  A label should be programmatically connected to its field, usually through matching for and id values.

## Footer

Include:

- Logo or site name.
- Copyright information.
- Social links.

Before publishing:

- Replace example destinations.
- Remove links that have no real destination.
- Avoid using href="#" as a finished substitute for a social link.

## Interaction map

This section describes what happens when someone uses the website.

Navigation

- Logo opens Home.
- Work opens the project gallery.
- About opens the designer biography.
- Contact opens the contact form.
- “Explore my work” opens Work.
- Contact invitations open Contact.

Gallery filtering

When a visitor chooses a category:

1. Update the selected button.
2. Show matching cards.
3. Hide nonmatching cards.
4. Keep the visitor on the same page.

The selected category remains active until another is chosen. It does not need to survive a page reload unless you implement that feature.
Announce the updated result count to screen readers using a polite live region. “Polite” means the update can be announced without interrupting the current announcement.

An optional extension is to store the category in the URL, allowing someone to share a filtered gallery.

Project navigation

- Form & Field opens its complete case study.
- The Work breadcrumb returns to the gallery.
- For the five-page version, “More brand projects” returns to Work with Brand selected.

Opening the gallery with Brand selected requires passing that choice to the Work page and reading it there. It is not accomplished by changing the link’s label alone.

## Form validation

Validate the form when the visitor submits it.

After a field has been interacted with, update its validation feedback when it changes. Avoid displaying errors immediately on untouched fields.

If the form is invalid:

1. Prevent submission.
2. Show specific messages near the invalid fields.
3. Move focus to the first invalid field.
4. Preserve all entered values.

If the demo form is valid, display:
“Demo inquiry validated. No message was sent.”
Put the confirmation in a status region so assistive technology can announce it.

If you later connect a real submission service, also handle:

- Sending.
- Successful delivery.
- Failed submission with a retry option.

## Motion

For visitors who have not requested reduced motion:

- Use short transitions of approximately 150–200 milliseconds.
- Apply them to suitable properties, such as color and transforms.

For visitors who prefer reduced motion:

- Remove unnecessary movement, such as the card’s upward hover motion.

Keep normal browser scrolling. Do not replace it with custom scrolling behavior.

## Interaction map

1. Logo → Home. Header/footer links → relevant pages. Home Explore my work → Work. All contact CTAs → Contact.
2. Work filters update visible cards without reloading; selected pill persists until another is clicked. Announce result count using a polite live region. Optional URL query parameter for shareable filters.
3. Form & Field card → Project Detail. Breadcrumb Work → Work. Next project either opens an implemented Sol case study or returns to Work with the Brand filter selected, using label “More brand projects” for the five-page version.
4. Contact form: validate on submit and after a touched field changes. Show specific inline errors; focus first invalid field. Valid demo submission displays “Demo inquiry validated. No message was sent.” in a status region. Do not claim delivery without a working backend. For real submission, show loading, success, and retryable failure states.
5. Respect prefers-reduced-motion; otherwise use 150–200 ms color/transform transitions. Avoid scroll hijacking.

## Implementation requirements

Choose vanilla HTML/CSS/JavaScript for five linked .html pages, or React with client-side routes. Both should produce the same visible pages and behaviors. Vanilla CSS is sufficient. This pack intentionally contains no finished website code so you can build independently.

Use semantic header/nav/main/section/footer, one h1 per page, ordered headings, a skip link, descriptive page titles, accessible focus states, useful artwork alt text (or empty alt if redundant), and programmatic field labels. Use CSS custom properties for tokens, Grid for cards, Flexbox for navigation, and media queries for structural changes. Keep typography and spacing consistent; don’t turn every SVG coordinate into a CSS value.

Suggested vanilla structure: index.html, work.html, project.html, about.html, contact.html; assets/css/tokens.css, styles.css; assets/js/main.js, work.js, contact.js; assets/images/. Recreate or extract artwork from the SVGs for use as images. Avoid using full-page SVGs as the implementation itself.

# Implementation requirements

Technology

For your current project, use:

- Vite.
- HTML.
- Vanilla CSS.
- JavaScript.
  You do not need React for this implementation.

## HTML pages

Create five HTML files at the project root:

- index.html.
- work.html.
- project.html.
- about.html.
- contact.html.

Give each page a descriptive browser title.
Configure Vite to include all five HTML pages when preparing the production build.

## Semantic structure

Use HTML elements according to their purpose:

- <header> for introductory site content.
- <nav> for primary navigation.
- <main> for the page’s primary content.
- <section> for a meaningful content grouping, usually with a heading.
- <footer> for closing site information.

For this project:

- Use one main <h1> per page.
- Use <h2> for major sections.
- Use <h3> for subsections where appropriate.
- Choose heading levels by hierarchy, not appearance.

## Accessibility

Include:

- A skip link that lets keyboard users jump to the main content.
- Visible focus indicators.
- Descriptive link and button names.
- Labels connected to form fields.
- Appropriate image alternative text.

Use empty alternative text for images that add no information beyond nearby content. Describe artwork when its visual content is relevant.

## CSS organization

Use your existing structure:

- src/css/tokens.css for reusable design values.
- src/css/styles.css for component imports.
- src/css/components/ for individual component styles.

Use:

- Flexbox for suitable one-dimensional arrangements, such as navigation.
- Grid for the project gallery.
- Media queries when the layout needs to change.
- Normal document flow so content pushes subsequent content down.

Avoid copying the SVG’s absolute positions into your page layout.

## JavaScript organization

Use:

- src/js/main.js for shared behavior and CSS imports.
- src/js/work.js for gallery filtering.
- src/js/contact.js for form validation.

Load page-specific scripts only on the pages that need them, or check that their target elements exist before using them.

Images and references

- Store website artwork in public/images/.
- Reference those images without including public in the URL.
- Keep the design guide and reference layouts in reference/.

Export individual artwork from Figma or extract it from the SVG layouts.

Build the website’s text, navigation, cards, and forms with HTML and CSS. Do not use a full-page SVG as a replacement for the page.

## Acceptance checklist

Use this when reviewing the finished project.

Pages and navigation

- All five pages open.
- Navigation links reach the correct destinations.
- The current page is identified in navigation.
- The production build includes every page.

Visual consistency

- Colors match the design tokens.
- Typography follows the agreed sizes and weights.
- Content aligns consistently.
- Artwork keeps its proportions.
- Desktop, tablet, and mobile layouts resemble the references.

Gallery filters

- All displays four cards.
- Brand displays two cards.
- Digital displays one card.
- Editorial displays one card.
- The selected filter is visually and programmatically identified.
- Result updates are announced appropriately.

Mobile navigation

- The Menu button opens the navigation.
- The Close button closes it.
- Keyboard users can reach every link.
- The button communicates whether the menu is expanded.
- Escape closes the menu and returns focus to the toggle.

Contact form

- Empty required fields produce useful errors.
- Invalid email addresses produce useful errors.
- Valid demo submissions show an honest confirmation.
- Entered information remains after validation errors.
- Labels and error messages are connected to their fields.

Responsive behavior

- The page remains usable at 320px wide.
- The page remains usable at 200% browser zoom.
- Content does not overlap or become clipped.
- Text wraps naturally.
- There is no unintended horizontal scrolling.

Accessibility and interaction

- Keyboard focus is visible.
- Controls have understandable names.
- Reduced-motion preferences are respected.
- Preview cards do not imply nonexistent destinations.
- The form does not claim to send messages when it only validates them.

## Acceptance checklist

- All five pages build successfully and navigation works.
- Page structure, color, artwork placement, and responsive wraps resemble all three references.
- Filtering correctly displays 4/2/1/1 cards for All/Brand/Digital/Editorial.
- Menu is operable with keyboard, announces expansion, and closes correctly.
- Form handles empty values, invalid email, valid demo submission, and preserves data on errors.
- At 320 px and 200% zoom content remains usable with no unintended horizontal scroll.
- Focus is visible, controls have accessible names, and reduced motion works.
- No placeholder links imply working destinations or messages sent.

## Suggested build order

1. Set tokens, container, header, footer, buttons.
2. Build Home and the reusable project card.
3. Build Work and filters.
4. Build Project Detail and About.
5. Build Contact and validation.
6. Compare at reference widths; finish keyboard and narrow-screen checks.

## line-height

Line height applies to text elements, so choose it by the text’s role rather than the section containing it.
For your portfolio, use these starting values:

Text role Line height Example

Main introductory heading 1.5 “Thoughtful design. Lasting impact.”

Section headings 1.2 “Small studio. Wide perspective.”

Project card titles 1.3 “Form & Field”

Paragraphs 1.5 Intro description and About text

Eyebrows 1.4 “Independent designer & creative developer”

Navigation and buttons 1.2 Work, About, Contact

Small supporting text 1.5 Project categories and dates

The introductory heading’s 1.5 matches the supplied reference, which has unusually generous spacing between lines. The other values are practical starting points where the guide didn’t specify an exact line height.

## font-weight

For your portfolio, use these as starting points:

Text role /  
Font weight

Logo  
700 — bold

Main introductory heading  
400 — regular

Large section headings  
400 — regular

Project card titles  
600 — semibold

Eyebrows  
600 — semibold

Navigation and buttons  
600 — semibold

Paragraphs  
400 — regular

Small supporting text  
400 — regular

The large headings get their emphasis from size, so they don’t need to be bold.

Two details to remember:

- Browsers make headings bold by default, so explicitly set 400 for your intro heading.
- Arial typically has regular and bold faces, without a separate semibold face. A requested 600 may therefore appear the same as 700.
  Keep 400 on body, then override individual text roles where needed.

## Typography

Use Arial, sans-serif throughout the website.

Sizes listed below follow this order: desktop, tablet, mobile. Line heights are unitless.

Logo

- Font size: 18px.
- Font weight: 700.
- Line height: 1.2.

Main page heading
Example: “Thoughtful design. Lasting impact.”

- Desktop size: 88px.
- Tablet size: 64px.
- Mobile size: 44px.
- Font weight: 400.
- Line height: 1.5 to match the supplied layouts.
- Use an h1 for the main heading of each page.

Large section headings
Example: “Small studio. Wide perspective.”

- Desktop size: 48px.
- Tablet size: 40px.
- Mobile size: 32px.
- Font weight: 400.
- Suggested line height: 1.2.
- Usually use an h2 for a major section within a page.

The generated SVGs used the larger display style for some section headings. Use the values above as your implementation guideline; they intentionally make those headings smaller than the page’s main heading.

Project card titles
Example: “Form & Field.”

- Font size: 22px.
- Font weight: 600.
- Suggested line height: 1.3.
- Choose the heading level according to the card’s place in the page hierarchy.

Body text
Example: the introduction’s supporting paragraph.

- Font size: 17–18px; choose 18px for a consistent starting point.
- Font weight: 400.
- Line height: 1.5.

Eyebrow text
Example: “Independent designer & creative developer.”

- Font size: 12px.
- Font weight: 600.
- Suggested line height: 1.4.
- Display in uppercase using CSS.
- Usually a paragraph, rather than a heading.

Navigation and buttons

- Font size: 14px.
- Font weight: 600.
- Suggested line height: 1.2.

Small supporting text
Example: project categories, dates, and privacy notes.

- Font size: 12–14px.
- Font weight: 400.
- Line height: 1.5.

Form labels and fields

- Label size: 14px.
- Label weight: 600.
- Input text size: 16px.
- Input text weight: 400.
- Suggested line height: 1.5.

Typography notes

- Arial usually provides regular and bold faces. Weight 600 may display the same as 700.
- Use margins or gaps to separate elements. Line height controls spacing between lines within an element.
- Let text wrap naturally by controlling its available width.
- You can define reusable font sizes, weights, and line heights in tokens.css.

# Typography

Use the typography list from the previous explanation:

- Font family: Arial, sans-serif.
- Regular weight: 400.
- Semibold weight: 600.
- Bold weight: 700.

Keep the detailed sizes and line heights in your typography section rather than maintaining two potentially conflicting lists.
Lettering inside an illustration, such as “FORM & FIELD,” is part of that artwork. It does not become an HTML heading simply because it looks large.

Spacing scale

Use these preferred spacing values:

- 8px.
- 16px.
- 24px.
- 32px.
- 48px.
- 64px.
- 96px.

The scale helps you make consistent decisions about:

- Padding inside components.
- Margins between elements.
- Gaps between cards or navigation links.
- Separation between major sections.

You do not need to use every value, and these numbers do not all apply to every component.

Rounded corners

Use these starting values for border-radius:

- Form fields: 8px.
- Artwork panels: 16px.
- Contact banner: 20px.
- Buttons and filter pills: 24px.

A larger radius produces more rounded corners.
