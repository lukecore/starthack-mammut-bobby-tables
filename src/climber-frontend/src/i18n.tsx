import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
          "heavySeverity": "Lorem Ipusm Heavy",
          "middleSeverity": "Lorem Ipusm Middle",
          "saftyTipsTitle": "Safty Tips",
          "friendsTitle": "Friends"
    }
  },
  de: {
    translation: {
            "heavySeverity": "Lorem Ipusm Stark",
            "middleSeverity": "Lorem Ipusm Mittel",
            "saftyTipsTitle": "Sicherheitstips",
            "friendsTitle": "Freunde"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;