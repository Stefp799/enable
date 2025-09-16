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

// Default configurations
export const defaultHeroConfig = {
  className: "py-28 px-6 relative",
  showCTA: false
};

export const defaultArticleConfig = {
  className: "py-16 px-6"
};