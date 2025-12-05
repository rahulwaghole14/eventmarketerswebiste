// Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackDownload = (source: string) => {
  trackEvent("download_click", "engagement", source);
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", "engagement", `${buttonName}_${location}`);
};

export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submit", "conversion", formName);
};

export const trackPageView = (pageName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-4FLVCB52H4", {
      page_path: pageName,
    });
  }
};

export const trackScroll = (percentage: number) => {
  trackEvent("scroll", "engagement", `${percentage}%`);
};

