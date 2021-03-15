import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import BackOffice from "./screen/backoffice/";
import ContactScreen from "./screen/contact/ContactScreen";
import HeaderScreen from "./screen/header/HeaderScreen";
import HomeScreen from "./screen/home/HomeScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import SignUpScreen from "./screen/signUp";
import NewsComponent from "./component/News/NewsComponent";
import EditOrganizationScreen from "./screen/editOrganization/EditOrganizationScreen";
import AdminUsersListScreen from "./screen/adminUsersList/AdminUsersListScreen";
import NovedadesScreen from "./screen/novedades/NovedadesScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderScreen />
        <Switch>
          <Route exact path="/contacto">
            <ContactScreen />
          </Route>
          <Route exact path="/nosotros">
            <AboutUsScreen />
          </Route>
          <Route exact path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/signup">
            <SignUpScreen />
          </Route>
          <Route exact path="/backoffice">
            <BackOffice />
          </Route>
          <Route exact path="/backoffice/edit-organization">
            <EditOrganizationScreen />
          </Route>
          <Route exact path="/backoffice/users">
            <AdminUsersListScreen />
          </Route>
          <Route exact path="/novedades">
            <NovedadesScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
