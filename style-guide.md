# Creative portfolio style guide

Use these values as your implementation reference. A proposed adjustment is
identified as a starting point rather than an exact measurement.

## Layout sizes

- Desktop design: 1440px viewport, 1248px content width.
- Tablet design: 768px viewport, 672px content width.
- Mobile design: 390px viewport, 342px content width.

Breakpoints describe browser width, not device identity:

- Mobile: below 600px; 24px side gutters.
- Tablet: 600px to below 1024px; 48px side gutters.
- Desktop: 1024px and wider; at least 96px side gutters.

Your current border-box container can have a 1440px outer maximum width,
including 96px padding per side. That leaves 1248px of inner content.
At wider viewports it centers and the outside whitespace increases.
Do not combine this with another container that subtracts the gutters again.

The Figma 12/8/4-column guides are alignment aids, not required page-wide CSS grids.
Test between references and at 320px. Text and controls must remain usable at zoom.

## Colors

- Canvas / page background: #F6F3EB.
- Ink / main text and dark buttons: #202820.
- Muted / supporting descriptions and metadata: #62695F.
- Accent / contact banner: #D9F279.
- Border / control outlines: #ADB5A4.
- Divider / subtle separators: #D5D8CC.
- Error / validation messages: #A62D24.
- Input surface / field background: #FFFFFF.
- Primary button text: Canvas, #F6F3EB.
- Secondary button text and outline: Ink, #202820.
- Primary button hover background: #354133.
- Artwork lavender: #C8C1EB.
- Artwork peach: #E9A777.
- Artwork soft green: #B6CDBA.

Define shared values in tokens.css. Give variables meaningful names by purpose.

## Typography

Font family: Arial, sans-serif. No downloaded font files are required.
Weights: 400 regular, 600 semibold, 700 bold. Arial may render 600 as bold because
many installations have no separate semibold face.

### Main page heading

- Desktop: 88px (5.5rem with a 16px root).
- Tablet: 64px.
- Mobile: 44px.
- Weight: 400.
- Line height: 1.5 to match the supplied page references.
- Letter spacing: normal.
- One h1 per page. Let the heading wrap naturally.

### Large section heading

- Suggested implementation sizes: 48px desktop, 40px tablet, 32px mobile.
- Weight: 400.
- Suggested line height: 1.2.
- SVGs retain oversized display text in some sections from the original visual
  direction. Use these smaller section sizes if following our later typography
  discussion. This difference is intentional and does not change heading semantics.

### Logo

- Size: 18px.
- Weight: 700.
- Suggested line height: 1.2.

### Eyebrow and small section label

- Size: 12px.
- Weight: 600.
- Line height: 1.4.
- Muted color; uppercase through CSS.
- A small Selected work label can still be an h2.
- Reuse .eyebrow-text; keep location-specific spacing outside that shared class.

### Body description

- Size: 17–18px; 18px is a consistent implementation starting point.
- Weight: 400.
- Line height: 1.5.

### Card title

- Size: 22px.
- Weight: 600.
- Suggested line height: 1.3.

### Navigation and buttons

- Size: 14px.
- Weight: 600.
- Suggested line height: 1.2 for buttons; your current navigation uses 1.5.

### Form and supporting text

- Form labels: 14px, weight 600.
- Field text: 16px, weight 400, line height 1.5.
- Metadata and privacy notes: 12–14px, weight 400, line height 1.5.

The SVGs specify text baselines; browser line boxes differ. Match overall rhythm
through normal flow, not by copying text coordinates. Use margin and gap to
separate elements; line height controls lines inside the same element.

## Spacing

Preferred scale: 8, 16, 24, 32, 48, 64, 96px.

- 8–16px: small separations within a component.
- 24–32px: component padding and gallery gaps.
- 48–96px: larger separations between content areas.
- Intro top padding: 40–48px is a starting point.
- Intro bottom margin: 48px is a starting point.
- Intro heading-to-description spacing: your 80px margin is acceptable when
  matching the generous reference. Compare at 1440px first.

Do not add every spacing value together. Choose one owner for the gap between
adjacent sections. Normal block margins can collapse.

## Featured artwork

Reference dimensions:

- Desktop: 1248px wide by 480px tall.
- Tablet: 672px wide by 480px tall.
- Mobile: 342px wide by 300px tall.

These are screenshot dimensions, not fixed widths for every viewport.
Let the outer artwork follow its container width. Use the supplied featured
variants to match differing compositions without distorting the inner lettering.

## Project gallery

- Two equal columns on desktop and tablet.
- One column on mobile.
- Column and row gaps: 24px.
- Desktop card artwork: approximately 612px by 440px.
- Tablet card artwork: approximately 324px by 233px.
- Mobile card artwork: approximately 342px by 246px.
- Artwork aspect ratio: approximately 1.39:1.
- Titles and metadata are outside the image panel and add to the card height.

Apply Grid to the wrapper whose direct children are the project cards.
The featured artwork can be a separate normal block above that grid.

## Corners and controls

- Inputs: radius 8px.
- Artwork: radius 16px.
- Contact banner: radius 20px; padding 24px; height grows with content.
- Buttons: radius 24px or a large pill radius; minimum height 48px;
  horizontal padding 20px.
- Header links: minimum target height 44px; maintain visible keyboard focus.
- Single-line inputs: approximately 54px high.
- Message area: initially 160px high; allow vertical resizing.

For keyboard focus, use a clear 3px outline with 3px offset and sufficient contrast.
The default browser focus style may also be used if clearly visible when tested.

## States

See design/06-interaction-states.svg for expanded menu, focus, current page,
selected category, invalid email, and valid demo submission examples.

- Hover: background-color transition, about 180ms.
- Optional pressed movement: translate 1px 1px, only with no reduced-motion request.
- Current page: underline with approximately 0.2em offset and aria-current="page".
- Preview cards with no destination should not look interactive.
- Keep entered values when form validation fails.
