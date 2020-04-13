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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/map"}>
          <Tunisia />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
