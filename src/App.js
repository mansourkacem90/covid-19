import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import styles from "./styles.scss";
import { Tunisia } from "./components/tunisia";
import HomePage from "./components/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
} from "react-router-dom";

const App = ({ t, i18n }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/map"} component={Tunisia} />
      </Switch>
    </Router>
  );
};

export default App;
