import React from "react";
import HeaderComponent from "./component/header/HeaderComponent";
import AboutUsComponent from "./component/aboutUs/AboutUsComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/nosotros">
            <AboutUsComponent />
          </Route>
          <Route path="/">
            <HeaderComponent />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
