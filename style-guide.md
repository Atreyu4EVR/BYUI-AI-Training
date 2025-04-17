# BYU-Idaho AI Training Platform - Style Guide

## Color Palette

### Primary Colors

| Purpose          | Light Mode                                 | Dark Mode                                 |
| ---------------- | ------------------------------------------ | ----------------------------------------- |
| Primary Text     | `text-byui-light-text-primary` (#1F2937)   | `text-byui-dark-text-primary` (#EBEBEB)   |
| Secondary Text   | `text-byui-light-text-secondary` (#6B7280) | `text-byui-dark-text-secondary` (#D2D2D2) |
| Highlight Text   | -                                          | `text-byui-dark-text-highlight` (#4F9ACF) |
| Backgrounds      | `bg-byui-light-background` (#FFFFFF)       | `bg-byui-dark-background` (#0D1B2A)       |
| Navbar           | `bg-byui-light-navbar` (#006EB6)           | `bg-byui-dark-navbar` (#152238)           |
| Card Backgrounds | `bg-byui-light-card` (#F1F5F9)             | `bg-byui-dark-card` (#1E293B)             |
| Borders          | `border-byui-light-border` (#D1D5DB)       | `border-byui-dark-border` (#214491)       |

### BYU-Idaho Brand Colors

#### Official Primary Colors

| Color | Value     | Usage                |
| ----- | --------- | -------------------- |
| Blue  | `#006EB6` | Primary brand color  |
| Black | `#000000` | Official brand usage |
| White | `#FFFFFF` | Official brand usage |
| Gray  | `#949598` | Official brand usage |

#### Accent Colors

| Color         | Value     | Class                     | Usage                       |
| ------------- | --------- | ------------------------- | --------------------------- |
| Purple        | `#7C3AED` | `byui-dark-accent-purple` | Accent elements, buttons    |
| Cyan          | `#06B6D4` | `byui-dark-accent-cyan`   | Links, interactive elements |
| Red           | `#DC2626` | `byui-dark-accent-red`    | Warnings, errors            |
| Green         | `#22C55E` | `byui-dark-accent-green`  | Success indicators          |
| Navy (Dark)   | `#0D1B2A` | `byui-accent-navy-dark`   | Background elements         |
| Navy (Darker) | `#152238` | `byui-accent-navy-darker` | Navbar, header elements     |

#### Brand Blues

| Color  | Value     | Class               |
| ------ | --------- | ------------------- |
| Blue 1 | `#214491` | `byui-brand-blue-1` |
| Blue 2 | `#4F9ACF` | `byui-brand-blue-2` |
| Blue 3 | `#A0D4ED` | `byui-brand-blue-3` |

#### Brand Greens

| Color   | Value     | Class                |
| ------- | --------- | -------------------- |
| Green 1 | `#78974D` | `byui-brand-green-1` |
| Green 2 | `#8CBA54` | `byui-brand-green-2` |
| Green 3 | `#BBD592` | `byui-brand-green-3` |
| Green 4 | `#D0E2B3` | `byui-brand-green-4` |

#### Brand Purples

| Color    | Value     | Class                 |
| -------- | --------- | --------------------- |
| Purple 1 | `#561E4C` | `byui-brand-purple-1` |
| Purple 2 | `#942F6E` | `byui-brand-purple-2` |

#### Brand Reds

| Color | Value     | Class              |
| ----- | --------- | ------------------ |
| Red 1 | `#9C2427` | `byui-brand-red-1` |
| Red 2 | `#CE3A34` | `byui-brand-red-2` |
| Red 3 | `#D45C5B` | `byui-brand-red-3` |
| Red 4 | `#DA8181` | `byui-brand-red-4` |

#### Brand Oranges

| Color    | Value     | Class                 |
| -------- | --------- | --------------------- |
| Orange 1 | `#BB6637` | `byui-brand-orange-1` |
| Orange 2 | `#DF863C` | `byui-brand-orange-2` |
| Orange 3 | `#E69F54` | `byui-brand-orange-3` |
| Orange 4 | `#EAB677` | `byui-brand-orange-4` |

#### Other Brand Colors

| Color  | Value     | Class               |
| ------ | --------- | ------------------- |
| Yellow | `#F6CD45` | `byui-brand-yellow` |
| Gray 1 | `#D2D2D2` | `byui-brand-gray-1` |
| Gray 2 | `#EBEBEB` | `byui-brand-gray-2` |

## Typography

### Font Family

- Primary Font: Sans-serif (`font-sans`)
- Line Height: `leading-normal`
- Tracking: `tracking-normal`

### Type Scale

| Element                  | Class                                                 | Usage                              |
| ------------------------ | ----------------------------------------------------- | ---------------------------------- |
| Main Headings (H1)       | `text-3xl font-bold text-byui-light-text-primary`     | Page titles                        |
| Section Headings (H2)    | `text-2xl font-semibold text-byui-light-text-primary` | Major content sections             |
| Subsection Headings (H3) | `text-xl font-semibold text-byui-light-text-primary`  | Card titles, content groups        |
| Minor Headings (H4)      | `font-semibold text-byui-light-text-primary`          | Feature headings                   |
| Body Text - Large        | `text-lg text-byui-light-text-primary`                | Introductory paragraphs            |
| Body Text - Regular      | `text-byui-light-text-primary`                        | Standard paragraphs                |
| Body Text - Small        | `text-sm text-byui-light-text-secondary`              | Supporting text, card descriptions |

## UI Components

### Buttons

#### Primary Button

```html
<button class="btn-primary">Primary Button</button>
```

#### Secondary Button

```html
<button class="btn-secondary">Secondary Button</button>
```

#### Accent Buttons

```html
<button class="btn-accent-purple">Purple Accent</button>
<button class="btn-accent-cyan">Cyan Accent</button>
<button class="btn-accent-green">Green Accent</button>
<button class="btn-accent-red">Red Accent</button>
```

### Container

- Main container: `container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8`
- Content wrapper: `bg-byui-light-background dark:bg-byui-dark-card p-6 sm:p-8 rounded-lg shadow-sm space-y-10`

### Cards

#### Standard Card

```html
<div class="card">
  <!-- Card content -->
</div>
```

#### Highlighted Card

```html
<div class="card-highlight">
  <!-- Card content -->
</div>
```

#### Interactive Card

```html
<Link
  class="group block p-6 bg-byui-light-background dark:bg-byui-dark-card rounded-lg border border-byui-light-border dark:border-byui-dark-border shadow-sm hover:shadow-md hover:border-byui-dark-blue transition-all duration-300"
>
  <h3
    class="text-xl font-semibold text-byui-light-text-primary dark:text-byui-dark-text-primary mb-2 group-hover:text-byui-dark-blue transition-colors duration-200"
  >
    Card Title
  </h3>
  <p class="text-sm text-byui-light-text-secondary dark:text-byui-dark-text-secondary">
    Card description text
  </p>
</Link>
```

#### Disabled Card

```html
<div
  class="p-6 bg-byui-light-card dark:bg-byui-dark-background rounded-lg border border-byui-light-border dark:border-byui-dark-border cursor-not-allowed"
>
  <h3
    class="text-xl font-semibold text-byui-light-text-secondary dark:text-byui-dark-text-secondary mb-2"
  >
    Disabled Card Title
  </h3>
  <p
    class="text-sm text-byui-light-text-secondary dark:text-byui-dark-text-secondary"
  >
    Disabled card description
  </p>
</div>
```

### Callout Boxes

#### Information Callout

```html
<div
  class="bg-byui-light-card dark:bg-byui-dark-background/80 p-5 rounded-lg border-l-4 border-byui-dark-blue dark:border-byui-brand-blue-2"
>
  <h2
    class="text-xl font-semibold text-byui-light-text-primary dark:text-byui-dark-text-highlight mb-2"
  >
    Callout Title
  </h2>
  <p class="text-byui-light-text-primary dark:text-byui-dark-text-primary">
    Callout content goes here
  </p>
</div>
```

### Grid Layouts

- Two column grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Three column grid: `grid grid-cols-1 md:grid-cols-3 gap-6`

### Links

#### Standard Link

```html
<Link to="/path" class="text-byui-dark-blue font-medium hover:text-byui-brand-blue-2 transition-colors duration-200 dark:text-byui-dark-accent-cyan dark:hover:text-blue-400">
  Link Text
</Link>
```

#### List Link

```html
<Link to="/path" class="block text-byui-dark-blue font-medium hover:text-byui-brand-blue-2 text-sm">
  • List Link Item
</Link>
```

### Navbar

```html
<nav class="navbar shadow-md w-full">
  <!-- Navbar content -->
</nav>
```

```html
<a class="navbar-link">Navbar Link</a>
<a class="navbar-button">Navbar Button</a>
<a class="navbar-highlight">Highlighted Item</a>
```

## Spacing System

### Margin & Padding

- Standard vertical spacing between sections: `space-y-10`
- Standard vertical spacing between elements: `space-y-6`, `mb-6`
- Card padding: `p-6`, `p-4` (smaller cards)
- Section padding: `pt-8` (with border-t separator)

### Borders

- Standard separator: `border-t border-byui-light-border dark:border-byui-dark-border`
- Card borders: `border border-byui-light-border dark:border-byui-dark-border`
- Callout highlight border: `border-l-4 border-byui-dark-blue dark:border-byui-brand-blue-2`

## Responsive Behavior

- Default layout is single column
- Two/three column layouts at medium breakpoint: `md:grid-cols-2`, `md:grid-cols-3`
- Adjusted padding at breakpoints: `px-4 sm:px-6 lg:px-8`

## Dark Mode Adaptations

Dark mode is implemented using Tailwind's dark mode variant with the BYU-Idaho specific color scheme. All components include dark mode variants for optimal viewing experience.

Key dark mode treatments:

- Text colors shift from light text scheme to dark text scheme with #EBEBEB for primary text
- Background colors shift to a navy palette (#0D1B2A, #152238, #1E293B)
- Borders use the BYU-Idaho brand blue (#214491)
- Accent colors (purple, cyan, red, green) are used for highlights and interactive elements
- Special callout backgrounds use opacity for subtle distinction

## Transitions

- Mode transitions: `transition: background-color 0.3s ease, color 0.3s ease`
- Hover transitions: `transition-all duration-300`, `transition-colors duration-200`

---

This style guide reflects the BYU-Idaho branded design system for the AI Training Platform. Follow these patterns for consistency when adding new components or pages.
