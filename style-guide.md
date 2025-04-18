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

## Standardized Component Classes

For consistent page styling, use these standardized component classes defined in index.css. These classes apply appropriate styling through composed Tailwind classes, ensuring visual consistency across all pages.

### Page Structure

Use these classes for the overall page structure:

```jsx
<div className="page-container">
  <div className="page-content">
    <header className="page-header">
      <h1 className="page-title">Page Title</h1>
      <p className="page-subtitle">Subtitle or description</p>
    </header>

    {/* Page content sections */}

    <footer className="page-footer">
      <p>Footer content</p>
    </footer>
  </div>
</div>
```

### Section Headers

For consistent section headers:

```jsx
<h2 className="section-header">
  <Icon className="mr-2 text-blue-600" /> {/* Icon is optional */}
  Section Title
</h2>
```

Or for a stand-alone section title:

```jsx
<h2 className="section-title">Section Title</h2>
```

### Content Sections and Cards

For main content sections:

```jsx
<section className="content-section">
  <h2 className="section-title">Section Title</h2>
  <p className="text-primary">Section content...</p>

  {/* Additional content */}
</section>
```

For content cards within sections:

```jsx
<div className="content-card">
  <h3 className="card-title">Card Title</h3>
  <p className="text-small">Card content...</p>
</div>
```

For a grid of cards:

```jsx
<div className="card-grid">
  <div className="content-card">{/* Card 1 content */}</div>
  <div className="content-card">{/* Card 2 content */}</div>
</div>
```

### Text Styles

Use these text classes:

```jsx
<p className="text-primary">Primary text for main content</p>
<p className="text-secondary">Secondary text for supporting info</p>
<p className="text-small">Small text for notes, captions, etc.</p>
```

### Special Elements

For notes and callouts:

```jsx
<div className="note-callout">
  <p className="text-primary">
    <strong>Note:</strong> Important information...
  </p>
</div>
```

For warnings:

```jsx
<div className="warning-callout">
  <AlertTriangle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
  <div>
    <h3 className="font-bold text-slate-800 mb-1">Warning Title</h3>
    <p className="text-small">Warning content...</p>
  </div>
</div>
```

### Topic Cards with Accent Borders

For lesson topic cards:

```jsx
<div className="topic-card border-cyan-400">
  <h3 className="card-title">Topic Title</h3>
  <p className="text-primary">Topic description...</p>
</div>
```

### Numbered Lists

For step-by-step instructions:

```jsx
<div className="numbered-list">
  <div className="numbered-item">
    <div className="number-circle">
      <span className="number">1</span>
    </div>
    <p className="text-primary">
      <strong>First step:</strong> Step description...
    </p>
  </div>

  <div className="numbered-item">
    <div className="number-circle">
      <span className="number">2</span>
    </div>
    <p className="text-primary">
      <strong>Second step:</strong> Step description...
    </p>
  </div>
</div>
```

### Links

```jsx
<a href="/path" className="link-standard">
  Link text
</a>
```

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

## Example Page Structure

Here's a complete example of a lesson page using the standardized component classes:

```jsx
import React from "react";
import { Book, Info, AlertTriangle } from "lucide-react";

const ExampleLessonPage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">Lesson Title</h1>
          <p className="page-subtitle">
            Brief description of what this lesson covers
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="section-header">
            <Book className="mr-2 text-blue-600" />
            Introduction
          </h2>
          <p className="text-primary">Introductory text about this lesson...</p>
        </div>

        {/* Main Content Section */}
        <section className="content-section">
          <h2 className="section-title">Main Topic</h2>
          <p className="text-primary mb-4">
            Content explaining the main topic...
          </p>

          {/* Example Card */}
          <div className="content-card mb-6">
            <h3 className="card-title">Example</h3>
            <p className="text-small">Example details...</p>
          </div>

          {/* Two-column Card Grid */}
          <h3 className="font-semibold text-slate-800 mb-4">Key Points</h3>
          <div className="card-grid">
            <div className="content-card">
              <h4 className="card-title">First Point</h4>
              <p className="text-small">Details about first point...</p>
            </div>
            <div className="content-card">
              <h4 className="card-title">Second Point</h4>
              <p className="text-small">Details about second point...</p>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <div className="note-callout">
          <p className="text-primary">
            <strong>Note:</strong> Important information to remember...
          </p>
        </div>

        {/* Steps Section */}
        <section className="content-section">
          <h2 className="section-title">Step-by-Step Guide</h2>
          <p className="text-primary mb-4">
            Follow these steps to accomplish the task:
          </p>

          <div className="numbered-list">
            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">1</span>
              </div>
              <p className="text-primary">
                <strong>First step:</strong> Details about the first step...
              </p>
            </div>
            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">2</span>
              </div>
              <p className="text-primary">
                <strong>Second step:</strong> Details about the second step...
              </p>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <div className="warning-callout">
          <AlertTriangle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-slate-800 mb-1">Important Warning</h3>
            <p className="text-small">
              Critical information about potential issues...
            </p>
          </div>
        </div>

        {/* Page Footer */}
        <footer className="page-footer">
          <p>
            Additional resources and further reading can be found in the{" "}
            <a href="/resources" className="link-standard">
              Resources section
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ExampleLessonPage;
```

---

This style guide reflects the BYU-Idaho branded design system for the AI Training Platform. Follow these patterns for consistency when adding new components or pages.
