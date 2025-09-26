// Enable Page Library - Main Export File

// Type exports
export type {
  HeroData,
  Section,
  ArticleData,
  SEOData,
  PageData,
  ServicePageData,
  AboutPageData,
  ContactPageData
} from './types';

// Component exports
export { default as Hero } from './components/Hero';
export { default as Article } from './components/Article';
export { default as PageBuilder } from './components/PageBuilder';
export { default as InteractiveAccordion } from './components/InteractiveAccordion';
export { default as MarketingBlock, MarketingBlock1Style, MarketingBlock2Style } from './components/MarketingBlock';
export { default as FullBleedDivider } from './components/FullBleedDivider';

// Utility functions
export const createPageData = (
  hero: HeroData,
  article: ArticleData,
  seo: SEOData
): PageData => ({
  hero,
  article,
  seo
});

export const createHeroData = (
  title: string,
  subtitle?: string,
  description?: string,
  backgroundImage?: string,
  ctaText?: string
): HeroData => ({
  title,
  subtitle: subtitle || '',
  description: description || '',
  backgroundImage,
  ctaText
});

export const createArticleSection = (
  heading: string,
  content: string | string[],
  type: 'text' | 'html' | 'list' | 'quote' = 'text',
  author?: string
): Section => ({
  heading,
  content,
  type,
  author
});

// Default configurations - Consistent Layout System
// All pages use: max-width: 1140px, px-6 padding, left-aligned content
export const defaultHeroConfig = {
  className: "relative",
  showCTA: false,
  // Hero uses: max-width: 1140px + px-6 + max-w-3xl content + text-left + 400px height
};

export const defaultArticleConfig = {
  className: "py-16 px-6",
  // Article uses: max-width: 1140px + px-6 + full-width content
};

// Layout System Constants
export const LAYOUT_CONSTANTS = {
  // Page container max-width (matches homepage)
  PAGE_MAX_WIDTH: '1140px',

  // Hero configuration
  HERO_HEIGHT: '400px',
  HERO_CONTENT_MAX_WIDTH: 'max-w-3xl', // Narrow for readability
  HERO_TEXT_ALIGNMENT: 'text-left',

  // Article configuration
  ARTICLE_CONTENT_MAX_WIDTH: 'full-width', // Full page width

  // Consistent padding
  HORIZONTAL_PADDING: 'px-6', // 24px on each side
};
