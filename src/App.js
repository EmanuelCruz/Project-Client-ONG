import React from "react";
import { Counter } from "./features/counter/Counter";
import Header from "./features/header/Header";
import AboutUs from "./features/aboutUs/AboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/nosotros">
            <AboutUs />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
