/**
 * Centralized constant management for the application.
 * Using environment variables with sensible defaults.
 */

export const CONFIG = {
  BUSINESS_NAME: import.meta.env.VITE_BUSINESS_NAME || "SR PUNCH",
  PHONE_NUMBER: import.meta.env.VITE_PHONE_NUMBER || "9307204061",
  COUNTRY_CODE: "+91",
  WHATSAPP_MESSAGE: import.meta.env.VITE_WHATSAPP_MESSAGE || "Hi, I'd like to know more about training at SR PUNCH.",
  SOCIAL: {
    INSTAGRAM: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/srpunch_boxing_club/",
    FACEBOOK: import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/srpunchboxingclub/",
  },
  THEME: {
    PRIMARY: "hsl(var(--primary))",
    ACCENT: "hsl(var(--accent))",
  }
} as const;

export const CONTACT_LINKS = {
  PHONE: `tel:${CONFIG.COUNTRY_CODE}${CONFIG.PHONE_NUMBER}`,
  WHATSAPP: (text: string = CONFIG.WHATSAPP_MESSAGE) => 
    `https://wa.me/${CONFIG.COUNTRY_CODE.replace('+', '')}${CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(text)}`,
};
