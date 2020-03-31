import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    fr: {
      common: common_fr
    }
  }
});
ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
