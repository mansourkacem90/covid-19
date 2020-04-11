import React, { useState, useEffect } from "react";
import { DashBoard } from "../../dash-board";
import { getGeneralData } from "../../api/api";
import { withTranslation } from "react-i18next";

export const translationContext = React.createContext();

const HomePage = ({ t, i18n }) => {
  const [countries, setCountries] = useState([]);
  const [generalData, setGeneralData] = useState({
    cases: 0,
    deaths: 0,
    recovered: 0,
  });

  useEffect(() => {
    getGeneralData("/all").then(({ cases, deaths, recovered }) => {
      setGeneralData({
        ...generalData,
        cases,
        deaths: ((deaths * 100) / cases).toFixed(2),
        recovered: ((recovered * 100) / cases).toFixed(2),
      });
    });
    getGeneralData("/countries").then((res) => setCountries(res));
  }, []);
  return (
    <translationContext.Provider
      value={{
        t,
        i18n,
      }}
    >
      <DashBoard generalData={generalData} countries={countries} />
    </translationContext.Provider>
  );
};
export default withTranslation("common")(HomePage);
