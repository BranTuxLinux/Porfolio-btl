import { getLangFromUrl, useTranslations } from "./utils";

export const useTranslate = (url ) => {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  return {lang, t}
};
