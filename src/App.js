import React from 'react';
import HeaderScreen from './screen/header/HeaderScreen';
import AboutUsScreen from './screen/aboutUs/AboutUsScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ContactScreen } from './screen/contact/ContactScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contacto">
            <ContactScreen />
          </Route>
          <Route path="/nosotros">
            <AboutUsScreen />
          </Route>
          <Route path="/">
            <HeaderScreen />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
