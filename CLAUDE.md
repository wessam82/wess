# SYNSEERA Design System — Figma MCP Integration Rules

## Project Overview

**SYNSEERA** is an AI-powered event management platform (SaaS) for organizers.
Tagline: *"JOIN. ATTEND. PROVE IT."*
Theme: **Dark mode only** · Supports **Arabic (RTL)**
Primary stack: **React + TypeScript + Tailwind CSS**

---

## Figma File

- **File key:** `KzBp3ibxvenqiD28OC5DOd`
- **Canvas:** `Organizer Dashboard` (node `602:2`)
- **URL:** https://www.figma.com/design/KzBp3ibxvenqiD28OC5DOd/SYNSEERA?node-id=602-2

---

## Figma MCP Required Workflow

**Follow these steps in order for every Figma-driven implementation:**

1. Call `get_design_context` with the exact `nodeId` and `fileKey`
2. If the response is too large, call `get_metadata` to get the node map, then re-fetch only the required child nodes
3. Call `get_screenshot` for visual reference
4. Only after you have both `get_design_context` and `get_screenshot`, begin implementation
5. Adapt the React+Tailwind reference output to this project's conventions
6. Validate final UI against the Figma screenshot for 1:1 visual parity

---

## Screen Flow Map

### Authentication & Onboarding

| Node | Screen |
|------|--------|
| `602:16` | Organizer Registration — Step 1: Contact Information |
| `602:13788` | Organizer Registration — Step 2: OTP Verification |
| `602:13896` | Organizer Registration — Step 3: Details |
| `602:14001` | Organizer Registration — Step 4: Organization & Documents |
| `602:14119` | Organizer Registration — Step 5: Plan Selection |
| `602:14419` | Login |

### Main Dashboard

| Node | Screen |
|------|--------|
| `602:2055` | Main Organizer Portal |
| `602:2752` | Organizer Dashboard |
| `602:3408` | All Events |

### Event Creation Wizard

| Node | Screen |
|------|--------|
| `602:189` | Step 1: Basic Info |
| `602:374` | Step 2: Details |
| `602:613` | Step 3: Venue |
| `602:824` | Step 3: Venue & Spatial Config |
| `602:1766` | Step 4: Agenda |
| `602:1148` | Step 5: Guests |
| `602:1457` | Step 6: Review |

### Guest & Attendee Management

| Node | Screen |
|------|--------|
| `602:5633` | Attendees List |
| `602:6211` | Add Attendee |
| `602:6721` | Import Guests from Excel |
| `602:7826` | AI Hall Analyzer |

### Seating & Hall Management

| Node | Screen |
|------|--------|
| `602:9630` | Manual Seating Override |
| `602:10234` | AI Seating Designer |
| `602:14719` | AI Seating Rules |
| `602:16185` | Accessibility Options |

### Agenda & Content

| Node | Screen |
|------|--------|
| `602:8768` | Event Agenda Builder |
| `602:9154` | Edit Session |
| `602:17599` | Agenda Builder |
| `602:25988` | Content & Schedule |

### Speakers

| Node | Screen |
|------|--------|
| `602:25200` | Speakers List |
| `602:25599` | Add Speaker |

### Certificates

| Node | Screen |
|------|--------|
| `602:18466` | Certificate Designer |
| `602:19297` | Certificate Editor |

### Scanner & Check-in (Mobile)

| Node | Screen |
|------|--------|
| `602:22402` | Smart Scanner: Live Feed View |
| `602:22552` | Smart Scanner: Focused View |
| `602:22933` | Search & Scan Dashboard |

### Settings & Landing Page

| Node | Screen |
|------|--------|
| `602:12070` | Account Settings |
| `602:23859` | Landing Page Builder Dashboard |

---

## Color Tokens

IMPORTANT: Never hardcode hex values. Use the CSS variables below everywhere.

### Backgrounds

```css
--color-bg-deepest:     #020618;   /* Page gradient start/end */
--color-bg-deep:        #0f172b;   /* Page gradient mid */
--color-bg-darkest:     #080e21;   /* Cards, inputs */
--color-bg-card:        #1e2330;   /* Elevated cards, inactive elements */
--color-bg-header:      rgba(20, 24, 36, 0.8);  /* Navbar */
--color-bg-subheader:   rgba(20, 24, 36, 0.5);  /* Step bar */
--color-bg-overlay:     rgba(255, 255, 255, 0.05); /* Subtle overlays */
```

### Brand & Accent

```css
--color-brand-teal:     #38c2d4;   /* Primary CTA, active step circle */
--color-brand-teal-soft: #5bc4c4;  /* Step labels, active text */
--color-brand-blue:     #7eb1fc;   /* Logo tagline, brand accent */
--color-accent-blue:    #2563eb;   /* Selected card border */
--color-accent-blue-bg: rgba(37, 99, 235, 0.1); /* Selected card fill */
--color-info-teal-bg:   rgba(56, 194, 212, 0.1); /* Info banner bg */
--color-info-teal-text: rgba(56, 194, 212, 0.5); /* Info banner title */
```

### Progress / Gradient

```css
--gradient-page-bg: linear-gradient(133deg, #020618 0%, #0f172b 50%, #020618 100%);
--gradient-progress: linear-gradient(180deg, #0052cc 0%, #00d1ff 100%);
--gradient-cta-shadow: 0px 10px 15px rgba(0, 82, 204, 0.2), 0px 4px 6px rgba(0, 82, 204, 0.2);
```

### Text

```css
--color-text-white:     #ffffff;
--color-text-primary:   #d1d5dc;   /* Labels, body */
--color-text-secondary: #99a1af;   /* Subtitles, helper text */
--color-text-muted:     #6a7282;   /* Inactive steps, optional labels */
--color-text-placeholder: rgba(255, 255, 255, 0.5); /* Input placeholders */
```

### Borders

```css
--color-border-subtle:  rgba(255, 255, 255, 0.05);  /* Card borders */
--color-border-default: rgba(255, 255, 255, 0.1);   /* Input borders */
--color-border-divider: rgba(255, 255, 255, 0.1);   /* Dividers */
```

### Semantic

```css
--color-error:          #fb2c36;   /* Required asterisk, error states */
--color-success:        #38c2d4;   /* Confirmed/verified states */
```

---

## Typography

**Font family:** `Inter` (all weights). Arabic fallback: `Noto Sans Arabic`.

```css
/* Base */
font-family: 'Inter', 'Noto Sans Arabic', sans-serif;
```

### Scale

| Role | Size | Weight | Line-height | Notes |
|------|------|--------|-------------|-------|
| Logo title | 20px | Bold | 20px | letter-spacing: 4px |
| Logo tagline | 9.6px | Regular | 14.4px | uppercase, letter-spacing: 1.1px, color: `--color-brand-blue` |
| Page heading (H1) | 30px | Bold | 36px | centered |
| Section heading (H2) | 18px | Bold | 28px | |
| Card heading (H3) | 16px | Bold | 24px | |
| Label | 14px | SemiBold | 20px | color: `--color-text-primary` |
| Body / button text | 14px | Medium | 20px | color: `--color-text-secondary` |
| Input value | 16px | Regular | normal | color: `--color-text-white` |
| Caption / small | 12px | Regular | 16px | color: `--color-text-secondary` |
| Step label | 14px | SemiBold | 20px | color: `--color-brand-teal-soft` |
| Step number | 12px | Bold | 16px | |
| CTA button | 16px | Bold | 24px | |
| Nav button | 12px | Medium | 16px | |

---

## Spacing & Layout

```
Base unit: 8px
Standard padding: 24px (containers), 32px (cards)
Gap between form sections: 48px
Gap between label and input: 8px
```

### Border Radius

```css
--radius-sm:   8px;
--radius-md:   14px;   /* inputs, cards */
--radius-lg:   16px;   /* large cards */
--radius-full: 9999px; /* pills, step circles */
```

### Breakpoints

| Name | Width |
|------|-------|
| Desktop (primary) | 1260px |
| Dashboard panels | 1019–1280px |
| Mobile (scanner) | 390px |
| Tablet | 768px |

---

## Components

### Step Progress Bar

- Horizontal stepper with numbered circles + connector lines
- **Active step:** teal circle (`--color-brand-teal`), teal label (`--color-brand-teal-soft`)
- **Inactive step:** dark circle (`--color-bg-card`), muted number (`--color-text-muted`)
- Connector: 1px line, `--color-bg-card`
- Step bar container: semi-transparent header below main nav

### Navigation Bar (Header)

- Fixed top, full width
- Background: `--color-bg-header` with bottom border `--color-border-subtle`
- Left: Logo + divider + page title + step indicator
- Right: Language switcher (Arabic/العربية) + Back to Landing
- Progress accent bar: 4px height, gradient `--gradient-progress`

### Cards / Panels

- Background: `--color-bg-darkest` (#080e21)
- Border: `0.833px solid --color-border-subtle`
- Border radius: `--radius-lg` (16px)
- Padding: 32px

### Selection Cards (Toggle)

- **Default:** bg `--color-bg-card`, border `rgba(255,255,255,0.1)`
- **Selected:** bg `--color-accent-blue-bg`, border `--color-accent-blue` (2px)
- Border radius: 14px
- Contains: icon + heading + subtitle

### Text Inputs

- Background: `--color-bg-darkest`
- Border: `0.833px solid --color-border-default`
- Border radius: 14px
- Height: ~50px
- Padding: 12px 16px
- Placeholder: `--color-text-placeholder`
- Value text: `--color-text-white`, 16px Regular
- Left icon prefix: 18px icon at 12px from left

### Phone Input

- Country picker button (dark bg, flag + dial code + chevron) + phone number field
- Country button width: ~128px, right-bordered from main input

### Labels

```
14px SemiBold, color: --color-text-primary
Required asterisk: * in --color-error (#fb2c36)
Optional label: 12px Regular, --color-text-muted, "(Optional)"
```

### Info / Alert Banner

- Background: `rgba(194, 206, 226, 0.2)`
- Border: `0.833px solid rgba(56, 194, 212, 0.1)`
- Border radius: 14px
- Icon + bold title (`--color-info-teal-text`) + body text (`--color-text-primary`)

### Primary CTA Button

- Background: `--color-brand-teal` (#38c2d4)
- Border radius: 14px
- Height: 56px
- Font: 16px Bold, white
- Shadow: `--gradient-cta-shadow`
- Right-side icon (arrow)

### Ghost / Secondary Button

- Background: `rgba(255, 255, 255, 0.05)`
- Border: `0.833px solid rgba(255, 255, 255, 0.1)`
- Border radius: 9999px (pill)
- Font: 12px Medium, white

### Sidebar (Dashboard)

- Width: 256px
- Background: dark navy
- Contains: Logo, nav items, user section
- Nav items: icon + label, active state with teal accent

---

## Page Background

All pages use the global gradient background:

```css
background: linear-gradient(133deg, #020618 0%, #0f172b 50%, #020618 100%);
min-height: 100vh;
```

---

## RTL / Internationalization

- All UI supports both **English (LTR)** and **Arabic (RTL)**
- Language toggle button always visible in top-right of header
- Use `dir="auto"` on text nodes that may contain Arabic
- Font stack must include `Noto Sans Arabic` as RTL fallback

---

## Asset Handling

- IMPORTANT: If the Figma MCP server returns a `figma.com/api/mcp/asset/...` URL for an image or SVG, use that URL directly as the `src`
- IMPORTANT: Do NOT install new icon packages — all icons are served from the Figma MCP asset endpoint
- IMPORTANT: Do NOT create placeholder images if an asset URL is provided
- Store any downloaded static assets in `public/assets/`
- The SYNSEERA logo is a combination mark: SVG icon (left) + wordmark "SYNSEERA" (bold, tracked) + tagline

---

## Implementation Rules

- IMPORTANT: Always use `--color-*` CSS variables — never hardcode hex values
- IMPORTANT: All screens are dark mode only — do not add light mode variants unless explicitly requested
- Replace Tailwind's absolute positioning with proper flex/grid layouts where possible
- Reuse existing components before creating new ones
- Validate every implementation against the Figma screenshot for 1:1 visual parity
- Follow Inter font weights exactly: Regular (400), Medium (500), SemiBold (600), Bold (700)
- The `0.833px` border widths in Figma are a scaling artifact — use `1px` in code
