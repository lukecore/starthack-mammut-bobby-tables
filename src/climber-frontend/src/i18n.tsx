import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
          "heavySeverity": "We have detected a heavy fall. Treat yourself with a regeneration day.",
          "middleSeverity": "We have detected a middle fall. Treat yourself with a regeneration day.",
          "lowSeverity": "We have detected a low fall. Take care of you.",
          "saftyTipsTitle": "Safety tips",
          "friendsTitle": "Friends",
          "pageTitle": "MAMMUT - GRIPCAST",
          "plottTitle": "Eigerrun, 4a",
          "plottText": "Use the slider below to track your climbing route. Blue is your left hand red is your right hand.",
          "challenge": "challenge",
          "compare": "compare",
          "acceleration": "Impact",
          "date": "Date"
    }
  },
  de: {
    translation: {
            "heavySeverity": "Lorem Ipusm Stark",
            "middleSeverity": "Lorem Ipusm Mittel",
            "lowSeverity": "DE - We have detected a low fall. Take care of you.",
            "saftyTipsTitle": "Sicherheitstips",
            "friendsTitle": "Freunde",
            "pageTitle": "COMPARE WITH FRIENDS",
            "plottTitle": "Eigerrun, 4a",
            "plottText":"Nutze den Slider unten um deine Kletterroute nachzuverfolgen. Blau ist deine linke Hand rot ist deine rechte Hands",
            "challenge": "herausfordern",
            "compare": "vergleichen",
            "acceleration": "Aufschlag",
            "date": "Datum"
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