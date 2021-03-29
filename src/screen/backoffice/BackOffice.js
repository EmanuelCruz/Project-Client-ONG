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
} from "react-router-dom";
import EditOrganizationScreen from "../editOrganization/EditOrganizationScreen";
import BackOfficeNewsScreen from "../news/BackOfficeNewsScreen";
import AdminUsersListScreen from "../adminUsersList/AdminUsersListScreen";
import BackOfficeActivitiesScreen from "../activities/BackOfficeActivitiesScreen";
import BackOfficeContactsScreen from "../backofficeContacts/BackOfficeContactsScreen";
import TestimonialsList from "../testimonials/TestimonialsList";
import FormCategories from "../../component/FormCategories/FormCategories";

const newsMock = {
    id: 1,
    title: "Soy un titulo Mock",
    image: new Blob(),
    content: "<h1>Soy un mock </h1>",
    category: "Policiales",
};

const activitiesMock = {
    id: 1,
    name: "Soy Name Mock",
    content: "<h1> Soy un Content Mock </h1>",
};

const categoryMock = {
    id: 1,
    name: "Category Name",
    description: "Category Description"
}

const myRoleId = 1;

export default function BackOffice() {
    const [activeDashboard, setActiveDashboard] = useState(<ProfileScreen />);
    const [toModifyNews, setToModifyNews] = useState(newsMock);
    const [toModifyActivities, setToModifyActivities] = useState(
        activitiesMock
    );
    const [roleId, setRoleId] = useState(myRoleId);
    const classes = useStyles();
    const itemsForAdmin = (
        <div>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Novedades"
                    to={PATH_BACKOFFICE_NEWS}
                >
                    Novedades
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Actividades"
                    to={PATH_BACKOFFICE_ACTIVITIES}
                >
                    Actividades
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Users"
                    to={PATH_BACKOFFICE_USERS}
                >
                    Users
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Contactos"
                    to={PATH_BACKOFFICE_CONTACTS}
                >
                    Contactos
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Editar Organizacion"
                    to={PATH_BACKOFFICE_EDITH_ORGANIZATION}
                >
                    Editar Organizacion
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Crear Post"
                    to="/backoffice/create-news"
                >
                    Crear Post
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Editar Post"
                    to="/backoffice/edit-news"
                >
                    Editar Post
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Crear Actividad"
                    to="/backoffice/create-activities"
                >
                    Crear Actividad
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Editar Actividad"
                    to="/backoffice/edit-activities"
                >
                    Editar Actividad
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Testimoniales"
                    to="/backoffice/testimonios"
                >
                    Testimoniales
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Crear Categoria"
                    to="/backoffice/create-category"
                >
                    Crear Categoría
                </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <NavLink
                    className={classes.navLink}
                    exact
                    key="Editar Categoria"
                    to="/backoffice/edit-category"
                >
                    Editar Categoría
                </NavLink>
            </MenuItem>
        </div>
    );

    return (
        <div className={classes.root}>
            <Router>
                <div className={classes.root}>
                    <Grid
                        item
                        xs={12}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={3}>
                            {myRoleId === 1 ? (
                                <Typography>Menu Administrador</Typography>
                            ) : (
                                <Typography>Menu Usuario</Typography>
                            )}{" "}
                            {/* it's just a test */}
                            <Paper className={classes.paper}>
                                <MenuList>
                                    <MenuItem className={classes.menuItem}>
                                        <NavLink
                                            className={classes.navLink}
                                            exact
                                            key="Editar Organizacion"
                                            to={PATH_BACKOFFICE_PROFILE}
                                        >
                                            Perfil
                                        </NavLink>
                                    </MenuItem>
                                    {roleId === 1 && itemsForAdmin}
                                </MenuList>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper>
                                <Switch>
                                    <Route exact path="/profile">
                                        <ProfileScreen />
                                    </Route>
                                    <Route
                                        exact
                                        path="/backoffice/edit-organization"
                                    >
                                        <EditOrganizationScreen />
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
                                        <NewsComponent toModifyNews={{}} />
                                    </Route>
                                    <Route exact path="/backoffice/edit-news">
                                        <NewsComponent
                                            toModifyNews={toModifyNews}
                                        />
                                    </Route>
                                    <Route
                                        exact
                                        path="/backoffice/create-activities"
                                    >
                                        <ActivitiesComponent
                                            toModifyActivities={{}}
                                        />
                                    </Route>
                                    <Route
                                        exact
                                        path="/backoffice/edit-activities"
                                    >
                                        <ActivitiesComponent
                                            toModifyActivities={
                                                toModifyActivities
                                            }
                                        />
                                    </Route>
                                    <Route exact path="/backoffice/testimonios">
                                        <TestimonialsList />
                                    </Route>
                                    <Route
                                        exact
                                        path="/backoffice/create-category"
                                    >
                                        <FormCategories dataCategory={{}}/>
                                    </Route>
                                    <Route
                                        exact
                                        path="/backoffice/edit-category"
                                    >
                                        <FormCategories dataCategory={categoryMock}/>
                                    </Route>
                                </Switch>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Router>
        </div>
    );
}
