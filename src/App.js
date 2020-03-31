import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import styles from "./styles.scss";
import { getGeneralData } from "./api/api";
import { DashBoard } from "./dash-board";
import { withTranslation } from "react-i18next";

export const translationContext = React.createContext();

const App = ({ t, i18n }) => {
  const [generalData, setGeneralData] = useState({
    cases: 0,
    deaths: 0,
    recovered: 0
  });

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getGeneralData("/all").then(({ cases, deaths, recovered }) => {
      setGeneralData({
        ...generalData,
        cases,
        deaths: ((deaths * 100) / cases).toFixed(2),
        recovered: ((recovered * 100) / cases).toFixed(2)
      });
    });
    getGeneralData("/countries").then(res => setCountries(res));
  }, []);
  return (
    <translationContext.Provider
      value={{
        t,
        i18n
      }}
    >
      <DashBoard generalData={generalData} countries={countries} />
    </translationContext.Provider>
  );
};

export default withTranslation("common")(App);
