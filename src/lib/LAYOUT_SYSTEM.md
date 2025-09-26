# Enable LLC Layout System Documentation

## Overview
Consistent layout system ensuring all pages match the homepage design pattern.

## Layout Constants
All layouts use these standardized measurements:

### Page Container
- **Max Width**: `1140px` (matches homepage)
- **Horizontal Padding**: `px-6` (24px on each side)

### Hero Section
- **Height**: Fixed `400px`
- **Content Width**: `max-w-3xl` (narrow for readability)
- **Text Alignment**: `text-left`
- **Structure**: `max-width: 1140px` container + `px-6` padding + `max-w-3xl` content

### Article Content
- **Content Width**: Full width within container
- **Structure**: `max-width: 1140px` container + `px-6` padding + full-width content

## Implementation

### Hero Component
```tsx
// Uses LAYOUT_CONSTANTS for:
- height: LAYOUT_CONSTANTS.HERO_HEIGHT
- maxWidth: LAYOUT_CONSTANTS.PAGE_MAX_WIDTH
- padding: LAYOUT_CONSTANTS.HORIZONTAL_PADDING
- content: LAYOUT_CONSTANTS.HERO_CONTENT_MAX_WIDTH + LAYOUT_CONSTANTS.HERO_TEXT_ALIGNMENT
```

### Article Component
```tsx
// Uses LAYOUT_CONSTANTS for:
- maxWidth: LAYOUT_CONSTANTS.PAGE_MAX_WIDTH
- padding: LAYOUT_CONSTANTS.HORIZONTAL_PADDING
- content: full-width within container
```

## Pages Using This System
- ✅ **Services** (`/services`) - PageBuilder with Hero + Article
- ✅ **About** (`/about`) - PageBuilder with Hero + Article
- ✅ **Zoho Consulting** (`/services/zoho-consulting`) - PageBuilder with Hero + Article
- ✅ **Zoho Developer** (`/services/zoho-developer`) - PageBuilder with Hero + Article
- ✅ **Zoho Apps** (`/zoho-apps`) - PageBuilder with Hero + Article
- ✅ **Homepage** (`/`) - Custom layout but follows same constraints

## Benefits
1. **Consistent Width**: All content aligns with header logo
2. **No Bleeding**: Proper padding prevents content overflow
3. **Maintainable**: Centralized constants for easy updates
4. **Scalable**: New pages automatically follow pattern

## Usage
```tsx
import { PageBuilder } from '../lib';
import { yourPageData } from '../data/pageData';

// Automatically applies consistent layout
<PageBuilder data={yourPageData} />
```

## Troubleshooting
- **Content bleeding**: Check if `HORIZONTAL_PADDING` is applied
- **Inconsistent width**: Verify `PAGE_MAX_WIDTH` is used
- **Hero too tall/short**: Confirm `HERO_HEIGHT` is applied
- **Text alignment**: Ensure `HERO_TEXT_ALIGNMENT` is left-aligned