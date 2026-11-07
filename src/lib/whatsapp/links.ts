/**
 * WhatsApp Lead Generation & Link Formatter
 * Generates valid wa.me URLs with customized pre-filled messages and analytics attributes.
 */

import { SITE_CONFIG, type ContactLocation } from '../../config/site';

export interface WhatsAppLinkOptions {
  location?: 'lk' | 'uae';
  customMessage?: string;
  serviceName?: string;
  referrerPage?: string;
  searchKeyword?: string;
}

/**
 * Builds a direct wa.me link with encoded prefilled message
 */
export function buildWhatsAppUrl(options: WhatsAppLinkOptions = {}): string {
  const targetLocation: ContactLocation =
    options.location === 'uae' ? SITE_CONFIG.contacts.dubai : SITE_CONFIG.contacts.sriLanka;

  let message = options.customMessage;

  if (!message) {
    if (options.serviceName) {
      message = `Hi HiveSmart, I'm interested in your ${options.serviceName} services. I'd like to discuss a project.`;
    } else {
      message = SITE_CONFIG.whatsappTemplates.general;
    }
  }

  // Append context if search keyword was used
  if (options.searchKeyword && options.searchKeyword.trim() !== '') {
    message += ` (Found via search: "${options.searchKeyword.trim()}")`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${targetLocation.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Generates data attributes for client-side analytics event tracking
 */
export function getWhatsAppTrackingAttributes(options: {
  service?: string;
  location?: 'lk' | 'uae';
  placement?: string;
}) {
  return {
    'data-wa-track': 'true',
    'data-wa-service': options.service || 'General Inquiry',
    'data-wa-location': options.location === 'uae' ? 'Dubai / UAE' : 'Sri Lanka',
    'data-wa-placement': options.placement || 'general'
  };
}

