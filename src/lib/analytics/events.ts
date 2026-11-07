/**
 * HiveSmart Analytics & Conversion Tracking System
 * Dispatches structured events to GA4, GTM, and internal privacy-safe beacon.
 */

export interface WhatsAppEventPayload {
  service: string;
  location: string;
  placement: string;
  url: string;
  title: string;
  searchKeyword?: string;
  referrer: string;
  timestamp: string;
}

export interface InternalSearchEventPayload {
  query: string;
  resultsCount: number;
  timestamp: string;
}

export interface ContactClickPayload {
  type: 'whatsapp' | 'phone' | 'map';
  location: 'Sri Lanka' | 'Dubai / UAE';
  target: string;
  placement: string;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Dispatches a tracked event safely to GA4, GTM, and Beacon API
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    const enrichedParams = {
      ...params,
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
      timestamp: new Date().toISOString()
    };

    // Google Tag Manager
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...enrichedParams
      });
    }

    // Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, enrichedParams);
    }

    // Lightweight Beacon to server API for real-time analytics aggregation
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify({ event: eventName, data: enrichedParams })], {
        type: 'application/json'
      });
      navigator.sendBeacon('/api/analytics', blob);
    }

    // Development logger
    if (import.meta.env.DEV) {
      console.log(`[HiveSmart Analytics] ${eventName}:`, enrichedParams);
    }
  } catch (err) {
    // Fail silently without disrupting user interaction
  }
}

/**
 * Specifically tracks WhatsApp Lead Generation clicks
 */
export function trackWhatsAppClick(options: {
  service?: string;
  location?: string;
  placement?: string;
  searchKeyword?: string;
}) {
  const payload: WhatsAppEventPayload = {
    service: options.service || 'General Inquiry',
    location: options.location || 'Sri Lanka',
    placement: options.placement || 'button',
    url: typeof window !== 'undefined' ? window.location.href : '',
    title: typeof document !== 'undefined' ? document.title : '',
    searchKeyword: options.searchKeyword || (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('q') || '' : ''),
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    timestamp: new Date().toISOString()
  };

  trackEvent('whatsapp_click', payload);
}

