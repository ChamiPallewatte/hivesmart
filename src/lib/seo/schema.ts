/**
 * Structured Data (JSON-LD) Generator
 * Full compliance with Google Search Central schema specifications.
 */

import { SITE_CONFIG } from '../../config/site';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/favicon.svg`,
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.facebook
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.contacts.sriLanka.phoneTel,
        contactType: 'customer support',
        areaServed: 'LK',
        availableLanguage: ['en', 'si']
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.contacts.dubai.phoneTel,
        contactType: 'customer support',
        areaServed: ['AE', 'GCC'],
        availableLanguage: ['en', 'ar']
      }
    ]
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/services?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getLocalBusinessSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_CONFIG.url}/#local-lk`,
      name: `${SITE_CONFIG.name} - Sri Lanka Office`,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.contacts.sriLanka.phoneTel,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.contacts.sriLanka.city,
        addressLocality: SITE_CONFIG.contacts.sriLanka.city,
        addressCountry: 'LK'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '7.2513',
        longitude: '80.3464'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_CONFIG.url}/#local-uae`,
      name: `${SITE_CONFIG.name} - Dubai Office`,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.contacts.dubai.phoneTel,
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.contacts.dubai.fullAddress,
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '25.2631',
        longitude: '55.3255'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '09:00',
        closes: '20:00'
      }
    }
  ];
}

export function getServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    areaServed: [
      { '@type': 'Country', name: 'Sri Lanka' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Worldwide' }
    ],
    url: `${SITE_CONFIG.url}/services/${service.slug}/`,
    description: service.description
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${article.slug}/`
    },
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE_CONFIG.url}/favicon.svg`,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/favicon.svg`
      }
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`
    }))
  };
}

