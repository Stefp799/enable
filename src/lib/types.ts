// Type definitions for the Enable Page Library

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export interface Section {
  heading: string;
  content: string | string[];
  type: 'text' | 'html' | 'list' | 'quote';
  author?: string; // For quote type
}

export interface ArticleData {
  sections: Section[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export interface PageData {
  hero: HeroData;
  article: ArticleData;
  seo: SEOData;
}

// Template interfaces for different page types
export interface ServicePageData extends PageData {
  type: 'service';
}

export interface AboutPageData extends PageData {
  type: 'about';
}

export interface ContactPageData extends PageData {
  type: 'contact';
}

// Reusable Marketing Block (data-agnostic)
export interface MarketingBlockStyle {
  sectionClass?: string;
  containerClass?: string;
  gridClass?: string;
  imageClass?: string;
  textWrapClass?: string;
  topLineClass?: string;
  headingClass?: string;
  bodyClass?: string;
  emphasizeLineClass?: string;
  emphasizeLine2Class?: string;
  ctaWrapClass?: string;
  ctaClass?: string;
}

export interface MarketingBlockContent {
  id?: string;
  imageSrc: string;
  imageAlt?: string;
  topLine: string;
  heading: string;
  body: string;
  line1: string; // e.g., We simplify every step...
  line2: string; // e.g., A Perfect Fit... - Guaranteed
  ctaText: string;
  ctaHref: string;
}
