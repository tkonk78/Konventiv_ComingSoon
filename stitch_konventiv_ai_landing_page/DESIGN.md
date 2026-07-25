---
name: Cybernetic Precision
colors:
  surface: '#07151b'
  surface-dim: '#07151b'
  surface-bright: '#2d3b42'
  surface-container-lowest: '#031016'
  surface-container-low: '#0f1d23'
  surface-container: '#142128'
  surface-container-high: '#1e2c32'
  surface-container-highest: '#29373d'
  on-surface: '#d6e5ed'
  on-surface-variant: '#bcc9cb'
  inverse-surface: '#d6e5ed'
  inverse-on-surface: '#253239'
  outline: '#879395'
  outline-variant: '#3d494b'
  surface-tint: '#62d6e8'
  primary: '#62d6e8'
  on-primary: '#00363d'
  primary-container: '#0b9fb0'
  on-primary-container: '#002f35'
  inverse-primary: '#006874'
  secondary: '#6dd6e3'
  on-secondary: '#00363c'
  secondary-container: '#2a9fab'
  on-secondary-container: '#002f34'
  tertiary: '#aaccd7'
  on-tertiary: '#12353e'
  tertiary-container: '#7596a0'
  on-tertiary-container: '#092e37'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#98f0ff'
  primary-fixed-dim: '#62d6e8'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#8df2ff'
  secondary-fixed-dim: '#6dd6e3'
  on-secondary-fixed: '#001f23'
  on-secondary-fixed-variant: '#004f56'
  tertiary-fixed: '#c5e8f4'
  tertiary-fixed-dim: '#aaccd7'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#2a4b55'
  background: '#07151b'
  on-background: '#d6e5ed'
  surface-variant: '#29373d'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a high-tech AI software consultancy, prioritizing **Innovation, Intelligence, and Technical Mastery**. The brand personality is "The Architect of the Future"—authoritative yet visionary, deeply technical but elegantly accessible.

The visual style is a hybrid of **Corporate Modern** and **Glassmorphism**, set against a deep, immersive dark-mode environment. It leverages the precision of developer tools with the premium finish of a luxury tech brand. 

Key stylistic pillars include:
- **Atmospheric Depth:** Utilizing multi-layered blurs and subtle gradients to suggest a limitless digital horizon.
- **Data-Driven Clarity:** High-contrast typography and generous whitespace to ensure complex AI concepts remain digestible.
- **Kinetic Accents:** Thin, vibrant "light-traces" (1px strokes with gradients) that mimic the flow of data through neural networks.

## Colors

The palette is derived directly from the core identity, optimized for a high-contrast dark environment to reduce eye strain during deep work.

- **Primary (Teal - #009DAE):** Represents the core "logic" and stability of the software. Used for primary actions and brand-heavy components.
- **Secondary (Cyan - #5AC4D1):** Represents "innovation" and light. Used for highlights, active states, and glowing accents.
- **Tertiary (Deep Sea - #1A3C45):** A structural color for container backgrounds and subtle borders.
- **Neutral (Midnight Navy - #0D1B21):** The foundation of the dark mode. It provides a more sophisticated, "inkier" depth than pure black.

**Functional Tints:**
- **Success:** Vibrant Emerald to contrast with the teal.
- **Error:** High-chroma Crimson for immediate visibility.
- **Surface:** A series of semi-transparent layers of the Neutral color to create hierarchy.

## Typography

This design system uses a triple-font strategy to balance geometric innovation with technical precision.

1.  **Sora (Headlines):** Its geometric construction and unique "ink traps" provide a futuristic, assertive look for marketing and section headers.
2.  **Geist (Body):** A highly legible, developer-focused sans-serif that ensures clarity in documentation and technical descriptions.
3.  **JetBrains Mono (Labels/Data):** Used for micro-copy, metadata, and status indicators to reinforce the software development nature of the brand.

**Scalability:**
- Desktop headings utilize negative letter-spacing to appear tighter and more professional.
- Mobile headings scale down significantly to maintain readability without excessive wrapping.
- All body text is set with a slightly increased line-height to maximize whitespace within text blocks.

## Layout & Spacing

The layout philosophy is based on a **Fluid Grid** with strict 8px increments. This creates a rhythmic, systematic feel essential for a software-centric brand.

- **Desktop (1440px+):** 12-column grid, 64px side margins, 24px gutters.
- **Tablet (768px - 1439px):** 8-column grid, 32px side margins, 20px gutters.
- **Mobile (Up to 767px):** 4-column grid, 16px side margins, 16px gutters.

**Spacial Principles:**
- Use "Large" (48px) and "Extra Large" (80px) vertical spacing between major sections to evoke a sense of "Innovation" and premium breathing room.
- Components should favor internal padding over external margins to keep the modular structure clean.

## Elevation & Depth

This design system utilizes **Tonal Layers** combined with **Glassmorphism** to create a multi-dimensional environment.

- **Level 0 (Background):** Neutral (#0D1B21). Deepest layer.
- **Level 1 (Cards/Panels):** Tertiary (#1A3C45) with a 40% opacity and a 20px Backdrop Blur.
- **Level 2 (Modals/Popovers):** Higher opacity Surface with a subtle 1px border using a "Linear Gradient" (from Secondary Cyan at 30% to transparent).
- **Shadows:** Avoid traditional black shadows. Use "Ambient Glows"—extra-diffused (40px-60px blur) shadows with a very low opacity (10%) teal tint to make elements feel like they are floating on a bed of light.

## Shapes

The shape language balances technical rigidity with modern approachability.

- **Default (8px):** Applied to standard buttons, input fields, and small cards. This creates a "precision" look that isn't too harsh.
- **Large (16px):** Used for primary container cards and feature highlights.
- **Extra Large (24px):** reserved for large decorative elements or call-to-action sections.
- **Interactive Elements:** Active states should be reinforced with a sharp "corner glow" effect rather than just a color change.

## Components

### Buttons
- **Primary:** Gradient fill (Primary Teal to Secondary Cyan), white text, 8px radius. Subtle outer glow on hover.
- **Secondary:** Ghost style. 1px Teal border, transparent background. Fill becomes 10% Teal on hover.
- **Tertiary:** JetBrains Mono text, uppercase, with a trailing arrow icon.

### Input Fields
- Dark backgrounds (Level 1 surface). 
- Bottom-only 2px border that "activates" by sliding a Cyan gradient from left-to-right when focused.
- Labels use `label-sm` (JetBrains Mono).

### Cards
- Use the Glassmorphism effect: Backdrop blur + 40% opacity background.
- Subtle 1px top-left border to simulate a light source.
- Content should be heavily inset (32px padding).

### Chips / Status Indicators
- Pill-shaped with a tiny 4px circular "LED" indicator on the left.
- Backgrounds are 10% opacity versions of the status color (e.g., Success Green).

### Code Snippets / Data Lists
- Always use JetBrains Mono.
- Use a "Terminal" style background: dark, non-transparent, with a subtle header bar containing three "window control" dots.