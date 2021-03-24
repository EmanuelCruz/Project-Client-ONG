import React from 'react'
import {
    Toolbar,
    IconButton,
    Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./DisplayMobileStyles";
import LogoComponent from "../Logo/LogoComponent";
import MenuComponent from '../Menu/MenuComponent';

export default function DisplayMobile({handleDrawerOpen,handleDrawerClose,drawerOpen}) {
    const classes = useStyles();

    return (
        <Toolbar>
            <IconButton
                {...{
                    edge: "start",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}
            >
                <div className={classes.drawerContainer}>
                    <MenuComponent/>
                </div>
            </Drawer>
            <LogoComponent />
        </Toolbar>
    );
}
