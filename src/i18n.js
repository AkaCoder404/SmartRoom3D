import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_ZH } from "./assets/i18n/translations/zh"
import { TRANSLATIONS_EN } from "./assets/i18n/translations/en";
 
i18n
//  .use(LanguageDetector)
 .use(initReactI18next)
 .init({
    
   resources: {
     en: { translation: TRANSLATIONS_EN },
     zh: { translation: TRANSLATIONS_ZH }
   }
 });
i18n.changeLanguage("zh");
export { i18n };
 

