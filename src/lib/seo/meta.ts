/**
 * SEO Metadata Generator & Canonical URL Resolver
 */

import { SITE_CONFIG } from '../../config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function buildMetadata(props: SEOProps = {}) {
  const siteTitle = props.title
    ? `${props.title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | Web Development & Digital Solutions in Sri Lanka & Dubai`;

  const description = props.description || SITE_CONFIG.description;
  const canonical = props.canonical || SITE_CONFIG.url;
  const ogImage = props.ogImage || `${SITE_CONFIG.url}/og-image.svg`;
  const ogType = props.ogType || 'website';
  const noindex = props.noindex || false;

  return {
    title: siteTitle,
    description,
    canonical,
    ogImage,
    ogType,
    keywords: props.keywords?.join(', ') || 'website development, web design sri lanka, web development dubai, cv design, mobile app development',
    noindex,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    author: props.author || SITE_CONFIG.name
  };
}

