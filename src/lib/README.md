# Enable Page Library

A modular, object-driven page building system for the Enable.llc website.

## Overview

This library provides reusable components for building pages using data objects instead of templates. It follows the patterns established in the DR Vacations documentation for rapid, consistent page creation.

## Core Components

### 1. Hero Component
Renders hero sections with background images, titles, and optional CTAs.

```tsx
import { Hero } from '../lib';

<Hero
  data={{
    title: "Services",
    subtitle: "Your subtitle here",
    description: "Optional description",
    backgroundImage: "/images/hero-bg.jpg",
    ctaText: "Get Started"
  }}
  showCTA={false}
  className="py-28 px-6 relative"
/>
```

### 2. Article Component
Renders article content with multiple section types.

```tsx
import { Article } from '../lib';

<Article
  data={{
    sections: [
      {
        heading: "Section Title",
        content: "Section content...",
        type: "text"
      },
      {
        heading: "List Section",
        content: ["Item 1", "Item 2", "Item 3"],
        type: "list"
      }
    ]
  }}
/>
```

### 3. PageBuilder Component
Combines Hero and Article into a complete page.

```tsx
import { PageBuilder } from '../lib';

<PageBuilder
  data={pageData}
  showHeroCTA={false}
/>
```

## Section Types

- **text**: Simple paragraph content
- **html**: Raw HTML content with styling
- **list**: Bulleted list with enable-blue dots
- **quote**: Blockquote with optional author attribution

## Usage Pattern

1. **Create data object** in `/data/pageData.js`
2. **Import PageBuilder** in your page component
3. **Pass data to PageBuilder**

```tsx
import React from 'react';
import Header from '../components/Header';
import { PageBuilder } from '../lib';
import { servicesPageData } from '../data/pageData';

const Services = () => (
  <div>
    <Header />
    <PageBuilder data={servicesPageData} />
  </div>
);
```

## Benefits

- ✅ **Rapid page creation** (2 minutes vs 2 hours)
- ✅ **Consistent styling** across all pages
- ✅ **Content-focused development**
- ✅ **Easy maintenance** and updates
- ✅ **Type safety** with TypeScript
- ✅ **Modular architecture** for flexibility

## File Structure

```
src/lib/
├── components/
│   ├── Hero.tsx          # Hero section component
│   ├── Article.tsx       # Article content component
│   └── PageBuilder.tsx   # Complete page builder
├── types.ts              # TypeScript interfaces
├── index.ts              # Main exports
└── README.md             # This documentation
```

## Creating New Pages

### Quick Method
```tsx
import { createPageData, createHeroData, createArticleSection } from '../lib';

const newPageData = createPageData(
  createHeroData("Page Title", "Subtitle", "", "/images/bg.jpg"),
  {
    sections: [
      createArticleSection("Section 1", "Content here"),
      createArticleSection("FAQ", faqHTML, "html")
    ]
  },
  {
    title: "Page Title | Enable Solutions",
    description: "Page description",
    keywords: ["keyword1", "keyword2"]
  }
);
```

### Manual Method
```tsx
const pageData = {
  hero: {
    title: "Page Title",
    subtitle: "Subtitle",
    description: "",
    backgroundImage: "/images/bg.jpg"
  },
  article: {
    sections: [
      {
        heading: "Section Title",
        content: "Content here",
        type: "text"
      }
    ]
  },
  seo: {
    title: "Page Title | Enable Solutions",
    description: "Page description",
    keywords: ["keyword1", "keyword2"]
  }
};
```

## Customization

### Hero Variations
- **No CTA**: `showCTA={false}` (default)
- **With CTA**: `showCTA={true}`
- **Custom height**: `heroClassName="py-20 px-6 relative"`
- **No background**: Omit `backgroundImage` property

### Article Variations
- **Custom spacing**: `articleClassName="py-12 px-6"`
- **Section types**: Mix text, HTML, lists, and quotes
- **Empty sections**: Use empty heading for content-only sections

## Library Philosophy

Following the DR Vacations "object-driven" approach:

- **Data shapes presentation**, not the reverse
- **Single source of truth** for each page
- **Rapid deployment** over complex templating
- **Consistency** through reusable components
- **Maintainability** through separation of concerns

This library transforms page creation from hours to minutes while maintaining professional quality and consistency.