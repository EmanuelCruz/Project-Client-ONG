import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import ProfileScreen from "../profile/ProfileScreen";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function BackOffice() {
  const [activeDashboard, setActiveDashboard] = useState(<ProfileScreen />);
  const classes = useStyles();

  //This is a real implementation
  const viewProfile = () => {
    setActiveDashboard(<ProfileScreen />);
  };

  //This is an example of implementation
  const viewExample = () => {
    setActiveDashboard(
      <div>
        <p>LorenIpsun</p>
      </div>
    );
  };

  return (
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
          <Paper className={classes.paper}>
            <MenuList>
              <MenuItem onClick={viewProfile}>Perfil</MenuItem>
              <MenuItem onClick={viewExample}>Mi Cuenta</MenuItem>
              <MenuItem onClick={viewExample}>Crear Post</MenuItem>
              <MenuItem onClick={viewExample}>Rol</MenuItem>
              <MenuItem onClick={viewExample}>Desloguearse</MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>{activeDashboard}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}