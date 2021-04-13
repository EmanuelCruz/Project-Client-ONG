import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ProfileScreen from "../profile/ProfileScreen";
import NewsComponent from "../../component/News/NewsComponent";
import ActivitiesComponent from "../../component/Activities/ActivitiesComponent";
import Grid from "@material-ui/core/Grid";
import useStyles from "./BackOfficeStyles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core/";
import {
  PATH_BACKOFFICE_ACTIVITIES,
  PATH_BACKOFFICE_CONTACTS,
  PATH_BACKOFFICE_EDITH_ORGANIZATION,
  PATH_BACKOFFICE_NEWS,
  PATH_BACKOFFICE_PROFILE,
  PATH_BACKOFFICE_USERS,
} from "../../const/const";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";
import EditOrganizationScreen from "../editOrganization/EditOrganizationScreen";
import BackOfficeNewsScreen from "../news/BackOfficeNewsScreen";
import AdminUsersListScreen from "../adminUsersList/AdminUsersListScreen";
import BackOfficeActivitiesScreen from "../activities/BackOfficeActivitiesScreen";
import BackOfficeContactsScreen from "../backofficeContacts/BackOfficeContactsScreen";
import TestimonialsList from "../testimonials/TestimonialsList";
import FormCategories from "../../component/FormCategories/FormCategories";
import BackOfficeCategoriesScreen from "../categories/BackOfficeCategoriesScreen";
import TestimonialComponentForm from "../../component/testimonials/testimonialsComponentForm";
import BackOfficeMembersScreen from "../../screen/members/BackOfficeMembersScreen";
import CreateMemberComponent from "../../component/BackOfficeMembers/components/CreateMemberComponent";
import FormEditProfile from "../../component/FormEditProfile/FormEditProfile";
import FormEditUser from '../../component/FormEditUser/FormEditUser'

const myRoleId = 1;

export default function BackOffice() {
  const [roleId, setRoleId] = useState(myRoleId);
  const classes = useStyles();
  const itemsForAdmin = (
    <Container>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Editar Organizacion"
          to={PATH_BACKOFFICE_PROFILE}>
          Perfil
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Contactos"
          to={PATH_BACKOFFICE_CONTACTS}>
          Contactos
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Users"
          to={PATH_BACKOFFICE_USERS}>
          Usuarios
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Novedades"
          to={PATH_BACKOFFICE_NEWS}>
          Novedades
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Crear Post"
          to="/backoffice/create-news">
          Crear Novedad
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Actividades"
          to={PATH_BACKOFFICE_ACTIVITIES}>
          Actividades
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Crear Actividad"
          to="/backoffice/create-activities">
          Crear Actividad
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          Editar
          Categoría
          key="Categorias"
          to="/backoffice/categories">
          Categorías
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Crear Categoria"
          to="/backoffice/create-category">
          Crear Categoría
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Testimoniales"
          to="/backoffice/testimonios">
          Testimoniales
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Crear Testimonios"
          to="/backoffice/create-testimonial">
          Crear Testimonio
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Miembros"
          to="/backoffice/members">
          Miembros
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <NavLink
          className={classes.navLink}
          exact
          key="Miembros"
          to="/backoffice/members/create">
          Crear Miembro
        </NavLink>
      </MenuItem>
    </Container>
  );

  return (
    <Container className={classes.root}>
      <Router>
        <Container className={classes.root}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12} sm={3}>
              {myRoleId === 1 ? (
                <Typography style={{ margin: "10px" }}>
                  Menu Administrador
                </Typography>
              ) : (
                <Typography>Menu Usuario</Typography>
              )}{" "}
              {/* it's just a test */}
              <Paper className={classes.paper}>
                <MenuList>{roleId === 1 && itemsForAdmin}</MenuList>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
              <Paper>
                <Switch>
                  <Route exact path="/backoffice/profile">
                    <ProfileScreen />
                  </Route>
                  <Route exact path="/backoffice/news">
                    <BackOfficeNewsScreen />
                  </Route>
                  <Route exact path="/backoffice/users">
                    <AdminUsersListScreen />
                  </Route>
                  <Route exact path="/backoffice/activities">
                    <BackOfficeActivitiesScreen />
                  </Route>
                  <Route exact path="/backoffice/contacts">
                    <BackOfficeContactsScreen />
                  </Route>
                  <Route exact path="/backoffice/create-news">
                    <NewsComponent />
                  </Route>
                  <Route exact path="/backoffice/edit-news/:id">
                    <NewsComponent />
                  </Route>
                  <Route exact path="/backoffice/create-activities">
                    <ActivitiesComponent toModifyActivities={{}} />
                  </Route>
                  <Route exact path="/backoffice/edit-activities/:id">
                    <ActivitiesComponent />
                  </Route>
                  <Route exact path="/backoffice/testimonios">
                    <TestimonialsList />
                  </Route>
                  <Route exact path="/backoffice/create-category">
                    <FormCategories />
                  </Route>
                  <Route exact path="/backoffice/edit-category/:id">
                    <FormCategories />
                  </Route>
                  <Route exact path="/backoffice/categories">
                    <BackOfficeCategoriesScreen />
                  </Route>
                  <Route exact path="/backoffice/create-testimonial">
                    <TestimonialComponentForm />
                  </Route>
                  <Route exact path="/backoffice/edit-testimonial/:id">
                    <TestimonialComponentForm />
                  </Route>
                  <Route exact path="/backoffice/edit-activities/:id">
                    <ActivitiesComponent />
                  </Route>
                  <Route exact path="/backoffice/members">
                    <BackOfficeMembersScreen />
                  </Route>
                  <Route exact path="/backoffice/members/create">
                    <CreateMemberComponent />
                  </Route>
                  <Route exact path="/backoffice/edit-profile">
                    <FormEditProfile />
                  </Route>
                  <Route exact path="/backoffice/edit-user">
                    <FormEditUser />
                  </Route>
                </Switch>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </Container>
  );
}
