/**
 * Google Analytics 4 Integration
 * Respects consent state and never loads GA before user consent
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
const CONSENT_STORAGE_KEY = 'tordjeman-labs-consent';

export type ConsentState = 'accepted' | 'rejected' | 'pending';

export interface ConsentPreferences {
  analytics: boolean;
  timestamp: number;
}

/**
 * Initialize Google Analytics
 * Only loads GT script if consent is given AND measurement ID is set
 */
export function initializeGA(): void {
  if (!GA_MEASUREMENT_ID) {
    console.debug('[GA] No measurement ID configured, GA disabled');
    return;
  }

  const consent = getConsent();
  if (consent.analytics) {
    loadGAScript();
  }
}

/**
 * Get current consent state
 */
export function getConsent(): ConsentPreferences {
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { analytics: false, timestamp: Date.now() };
    }
  }
  return { analytics: false, timestamp: Date.now() };
}

/**
 * Save consent choice
 */
export function setConsent(analytics: boolean): void {
  const preferences: ConsentPreferences = {
    analytics,
    timestamp: Date.now()
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));

  if (analytics && GA_MEASUREMENT_ID) {
    loadGAScript();
  }
}

/**
 * Load GA script dynamically only after consent
 */
function loadGAScript(): void {
  if (!GA_MEASUREMENT_ID) return;
  if (window.gtag) return; // Already loaded

  // Add gtag snippet
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
  (window as any).gtag = gtag;
}

/**
 * Track page view (called on route change)
 */
export function trackPageView(path: string): void {
  if (!window.gtag) return;
  (window as any).gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title
  });
}

/**
 * Track custom event
 */
export function trackEvent(
  eventName: string,
  eventData?: Record<string, any>
): void {
  if (!window.gtag) return;
  (window as any).gtag('event', eventName, eventData);
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string): void {
  trackEvent('generate_lead', { form_name: formName });
}

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string): void {
  trackEvent('outbound_click', { link_url: url });
}

/**
 * Track PDF download
 */
export function trackDownload(fileName: string, fileUrl: string): void {
  trackEvent('file_download', {
    file_name: fileName,
    file_url: fileUrl
  });
}

// Extend Window interface
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
