import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.scss";
import { translationContext } from "./components/home";

var n = require("country-js");

export const DashBoard = ({ generalData, countries }) => {
  const { t, i18n } = React.useContext(translationContext);
  const [nations, setNations] = useState([]);
  const [setLang, triggerLang] = useState(false);
  const [lang, setLanguage] = useState("en");
  useEffect(() => {
    setNations([...countries]);
  }, [countries]);
  const handleSearch = (evt) => {
    let arr = [...countries];
    let newArr = [];
    newArr = arr.filter((val) =>
      val.country.toLowerCase().includes(evt.target.value.toLowerCase())
    );
    setNations([...newArr]);
  };
  const getCode = (name) => {
    if (n.search(name)[0]) {
      return n.search(name.replace("UK", "GB"))[0].code;
    } else {
      switch (name) {
        case "S. Korea":
          return "KR";
        case "Czechia":
          return "CZ";
        case "Diamond Princess":
          return "CZ";
        case "UAE":
          return "AE";
        case "North Macedonia":
          return "MK";
        case "Faeroe Islands":
          return "CC";
        case "Bosnia and Herzegovina":
          return "BA";
        case "Brunei":
          return "BN";
        case "Palestine":
          return "PS";
        case "Guadeloupe":
          return "GP";
        case "Réunion":
          return "RE";
        case "Martinique":
          return "MQ";
        case "Channel Islands":
          return "MH";
        case "Guam":
          return "GU";
        case "DRC":
          return "CD";
        case "Macao":
          return "MO";
        case "French Polynesia":
          return "PF";
        case "U.S. Virgin Islands":
          return "VI";
        case "Saint Martin":
          return "MF";
        case "New Caledonia":
          return "NC";
        case "Eswatini":
          return "IO";
        case "Curaçao":
          return "CW";
        case "Cabo Verde":
          return "CV";
        case "CAR":
          return "NI";
        case "St. Barth":
          return "BL";
        case "St. Vincent Grenadines":
          return "VC";
        case "Sint Maarten":
          return "SX";
        case "Timor-Leste":
          return "TL";
        default:
          return "UM";
      }
    }
  };
  return (
    <Container className={"cont"}>
      <Row>
        <Col xs={12} md={12}>
          <div className={"header-bar"}>
            <div className="nav-wrapper">
              <div className="sl-nav">
                Lang:
                <ul>
                  <li onClick={() => triggerLang(!setLang)}>
                    <>
                      <b
                        style={{
                          margin: "0px 8px",
                          textTransform: "capitalize",
                        }}
                      >
                        {lang}
                      </b>
                      <i
                        className={`sl-flag flag-${
                          lang === "en" ? "usa" : "de"
                        }`}
                      ></i>
                    </>
                    <i
                      className="angle fa fa-angle-down"
                      aria-hidden="true"
                    ></i>
                    {setLang && (
                      <>
                        <div className="triangle"></div>
                        <ul>
                          <li
                            onClick={() => {
                              setLanguage("fr");
                              i18n.changeLanguage("fr");
                            }}
                          >
                            <i className="sl-flag flag-de">
                              <div id="germany"></div>
                            </i>{" "}
                            <span className="active">French</span>
                          </li>
                          <li
                            onClick={() => {
                              setLanguage("en");
                              i18n.changeLanguage("en");
                            }}
                          >
                            <i className="sl-flag flag-usa">
                              <div id="germany"></div>
                            </i>{" "}
                            <span>Englisch</span>
                          </li>
                        </ul>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <h1 className="heading-one">Coronavirus COVID-19 </h1>
          <h1 className="heading-two">
            {t("subtitle", {
              framework: "react-i18next",
            })}
          </h1>
        </Col>
        <Col xs={4} md={2}>
          <div className="case">
            <p className="caption primary">
              {t("global_statistics.total_cases", {
                framework: "react-i18next",
              })}
            </p>
            <p className="title-large primary">{generalData.cases}</p>
          </div>
        </Col>
        <Col xs={4} md={2}>
          <div className="case">
            <p className="caption success">
              {t("global_statistics.recovery_rate", {
                framework: "react-i18next",
              })}
            </p>
            <p className="title-large  success">{generalData.recovered} %</p>
          </div>
        </Col>
        <Col xs={4} md={2}>
          <div className="case">
            <p className="caption warning">
              {t("global_statistics.death_rate", {
                framework: "react-i18next",
              })}
            </p>
            <p className="title-large warning">{generalData.deaths} %</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
          <div className="form-group has-search">
            <input
              className="input-box"
              placeholder={t("search_country", {
                framework: "react-i18next",
              })}
              onChange={handleSearch}
            />
            <i className="fa">&#xf002;</i>
          </div>
        </Col>
      </Row>
      <Row className={"table-header"}>
        <Col md={4}>
          <p className="caption-table">
            {t("table_header.country", {
              framework: "react-i18next",
            })}
          </p>
        </Col>
        <Col md={2}>
          <p className="caption-table">
            {t("table_header.cases", {
              framework: "react-i18next",
            })}
          </p>
        </Col>
        <Col md={2}>
          <p className="caption-table">
            {t("table_header.recovered", {
              framework: "react-i18next",
            })}
          </p>
        </Col>
        <Col md={2}>
          <p className="caption-table">
            {t("table_header.recovered_rate", {
              framework: "react-i18next",
            })}
          </p>
        </Col>
        <Col md={2}>
          <p className="caption-table">
            {t("table_header.death_rate", {
              framework: "react-i18next",
            })}
          </p>
        </Col>
      </Row>
      {nations.map((country, ind) => {
        return (
          <Row key={ind}>
            <Col xs={12} md={4}>
              <div className="countries">
                <img
                  src={`https://www.countryflags.io/${getCode(
                    country.country
                  )}/shiny/64.png`}
                  width="50px"
                  alt="flag"
                />
                <p className="titile">{country.country}</p>
              </div>
            </Col>
            <Col xs={3} md={2} className={"col-item"}>
              <div className="country-data-item primary">
                <p className="titile">
                  {country.cases
                    .toString()
                    .replace(/\d(?=(?:\d{3})+$)/g, "$&.")}
                </p>
              </div>
            </Col>
            <Col xs={3} md={2} className={"col-item"}>
              <div className="country-data-item primary">
                <p className="titile">
                  {country.recovered
                    .toString()
                    .replace(/\d(?=(?:\d{3})+$)/g, "$&.")}
                </p>
              </div>
            </Col>
            <Col xs={3} md={2} className={"col-item"}>
              <div className="country-data-item success">
                <p className="titile">
                  {((country.recovered * 100) / country.cases).toFixed(2)}%
                </p>
              </div>
            </Col>
            <Col xs={3} md={2} className={"col-item"}>
              <div className="country-data-item warning">
                <p className="titile">
                  {((country.deaths * 100) / country.cases).toFixed(2)}%
                </p>
              </div>
            </Col>
          </Row>
        );
      })}
      <Row>
        <Col xs={12} md={12}>
          <div className={"footer"}>
            <p className="footer-text">
              Source from{" "}
              <a target="blank" href="https://www.worldometers.info">
                worldometers.info
              </a>
            </p>
            <p className="footer-text">
              API from{" "}
              <a target="blank" href="https://www.programmableweb.com/">
                programmableweb.com
              </a>
            </p>
            <p className="footer-text">
              Created by{" "}
              <a
                target="blank"
                href="https://www.linkedin.com/in/mansour-kacem-3aa77b118/"
              >
                {" "}
                Mansour Kacem
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
