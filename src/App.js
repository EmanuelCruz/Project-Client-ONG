import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import BackOffice from "./screen/backoffice/";
import ContactScreen from "./screen/contact/ContactScreen";
import HeaderScreen from "./screen/header/HeaderScreen";
import HomeScreen from "./screen/home/HomeScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import SignUpScreen from "./screen/signUp";
import EditOrganizationScreen from "./screen/editOrganization/EditOrganizationScreen";
import BackOfficeNewsScreen from "./screen/news/BackOfficeNewsScreen";
import AdminUsersListScreen from "./screen/adminUsersList/AdminUsersListScreen";
import NovedadesScreen from "./screen/novedades/NovedadesScreen";
import DetalleNovedadScreen from "./screen/detalleNovedad/DetalleNovedadScreen";
import ActivitiesScreen from "./screen/activities/ActivitiesScreen";
import LoginFormComponent from "./component/login/LoginFormComponent";
import BackOfficeActivitiesScreen from "./screen/activities/BackOfficeActivitiesScreen";
import BackOfficeContactsScreen from "./screen/backofficeContacts/BackOfficeContactsScreen";
import TestimonialsList from "./screen/testimonials/TestimonialsList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderScreen />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="page fade"
            >
              <Switch location={location}>
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
                <Route exact path="/novedades">
                  <NovedadesScreen />
                </Route>
                <Route
                  exact
                  path="/novedad/:id"
                  component={DetalleNovedadScreen}
                ></Route>
                <Route exact path="/activities/:id" component={ActivitiesScreen}>
                  <ActivitiesScreen />
                </Route>
                {/* The /login route is a placeholder, since there is no Login Screen */}
                <Route exact path="/login">
                  <LoginFormComponent />
                </Route>
                <Route exact path="/">
                  <HomeScreen />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    </Router>
  );
}

export default App;
