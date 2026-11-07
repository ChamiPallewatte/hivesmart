/**
 * HiveSmart Central Site & Business Configuration
 * Professional Digital Agency serving Sri Lanka, Dubai / UAE, and Global Clients.
 */

export interface ContactLocation {
  id: 'lk' | 'uae';
  country: string;
  city: string;
  fullAddress: string;
  phoneDisplay: string;
  whatsappNumber: string; // international digits without + or spaces
  phoneTel: string;
  googleMapsUrl: string;
  badge: string;
}

export const SITE_CONFIG = {
  name: 'HiveSmart',
  legalName: 'HiveSmart Digital Solutions',
  tagline: 'Building Digital Experiences That Grow Your Business.',
  subTagline:
    'We help businesses build a powerful online presence through professional website development, creative design and modern mobile applications.',
  description:
    'HiveSmart is a premier digital agency providing high-performance website development, ATS-friendly CV design, and custom mobile applications for businesses in Sri Lanka, Dubai, and worldwide.',
  url: 'https://hivesmartpro.com',
  defaultLocale: 'en',
  
  // Direct WhatsApp & Phone contact hubs
  contacts: {
    sriLanka: {
      id: 'lk',
      country: 'Sri Lanka',
      city: 'Kegalle',
      fullAddress: 'Kegalle, Sri Lanka',
      phoneDisplay: '+94 77 809 1278',
      whatsappNumber: '94778091278',
      phoneTel: '+94778091278',
      googleMapsUrl: 'https://maps.google.com/?q=Kegalle,+Sri+Lanka',
      badge: 'Sri Lanka Hub'
    } as ContactLocation,
    dubai: {
      id: 'uae',
      country: 'United Arab Emirates',
      city: 'Dubai',
      fullAddress: 'Al Rigga, Deira, Dubai, United Arab Emirates',
      phoneDisplay: '+971 54 771 5370',
      whatsappNumber: '971547713570',
      phoneTel: '+971547713570',
      googleMapsUrl: 'https://maps.google.com/?q=Al+Rigga,+Dubai,+UAE',
      badge: 'Dubai / UAE Hub'
    } as ContactLocation
  },

  // Service WhatsApp pre-filled message templates
  whatsappTemplates: {
    general:
      "Hi HiveSmart, I'm interested in your digital services. I would like to discuss a project for my business.",
    websiteDevelopment:
      "Hi HiveSmart, I'm interested in your Website Development services. I'd like to discuss a new website project or redesign for my business.",
    cvDesign:
      "Hi HiveSmart, I would like to get a professional, ATS-friendly CV/Resume designed for career opportunities.",
    mobileApp:
      "Hi HiveSmart, I have a Mobile Application project idea and would like to discuss iOS / Android development.",
    ecommerce:
      "Hi HiveSmart, I'm looking to build an Ecommerce store / online shop with payment gateway integration.",
    speedOptimization:
      "Hi HiveSmart, I need Website Speed Optimization and Core Web Vitals improvement for my existing site."
  },

  // Main navigation structure
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'About', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' }
  ],

  // Social & verification placeholders
  social: {
    github: 'https://github.com/ChamiPallewatte/hivesmart',
    linkedin: 'https://linkedin.com/company/hivesmart-digital',
    facebook: 'https://facebook.com/hivesmartdigital'
  }
} as const;

