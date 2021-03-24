import React from 'react'
import { Toolbar } from "@material-ui/core";
import useStyles from "./DisplayDesktopComponentStyles";
import Logo from '../Logo/LogoComponent';
import Menu from '../Menu/MenuComponent';

export default function DisplayDesktop() {
    const classes = useStyles();
    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Logo />
                <Menu/>
            </Toolbar>
        </>
    );
}
