import "server-only";

const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((m) => m.default),
  de: () => import("../../dictionaries/de.json").then((m) => m.default),
  fr: () => import("../../dictionaries/fr.json").then((m) => m.default),
};

/** Supported locale key type. */
export type Locale = keyof typeof dictionaries;

/** Check if a string is a supported locale. */
export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

/** Load the translation dictionary for the given locale. */
export const getDictionary = async (locale: Locale) => dictionaries[locale]();

/** Inferred type of a loaded dictionary — used for component prop typing. */
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
