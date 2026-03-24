/** Supported locales for the TrainTrack website. */
export const locales = ["en", "de", "fr"] as const;

/** Union type of all supported locale codes. */
export type Locale = (typeof locales)[number];

/** The locale used when no preference is detected. */
export const defaultLocale: Locale = "en";

/** Type guard to check if a string is a valid locale. */
export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
