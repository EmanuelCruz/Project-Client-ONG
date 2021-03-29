import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "../ContactStyled";

export const ContactSocialMedia = () => {
  const classes = useStyles();
  return (
    <div className="col-sm-6 text-left mt-5">
      <Typography variant="h2">Datos de Contacto</Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          component="a"
          href="https://www.facebook.com/fundacionzonasgrises/"
          className={classes.link}
          target="_blank"
        >
          <ListItemIcon>
            <FacebookIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText secondary="Facebook" />
        </ListItem>

        <ListItem
          button
          component="a"
          href="https://www.instagram.com/fundacionzonasgrises/?hl=es"
          className={classes.link}
          target="_blank"
        >
          <ListItemIcon>
            <InstagramIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText secondary="Instagram" />
        </ListItem>

        <ListItem
          button
          component="a"
          href="mailto:trinanesc@gmail.com"
          className={classes.link}
          target="_blank"
        >
          <ListItemIcon>
            <EmailIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText secondary="trinanesc@gmail.com" />
        </ListItem>
      </List>
    </div>
  );
};
