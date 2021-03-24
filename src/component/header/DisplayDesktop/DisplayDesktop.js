import React from 'react'
import { Toolbar } from "@material-ui/core";
import useStyles from "./DisplayDesktopStyles";
import LogoComponent from '../Logo/LogoComponent';
import MenuComponent from '../Menu/MenuComponent';

export default function DisplayDesktop() {
    const classes = useStyles();
    return (
        <>
            <Toolbar className={classes.toolbar}>
                <LogoComponent />
                <MenuComponent/>
            </Toolbar>
        </>
    );
}
