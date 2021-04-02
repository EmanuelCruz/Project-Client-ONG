import React from 'react'
import {
    Toolbar,
    IconButton,
    Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./DisplayMobileComponentStyles";
import Logo from "../Logo/LogoComponent";
import Menu from '../Menu/MenuComponent';

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
                    <Menu drawerOpen={drawerOpen}/>
                </div>
            </Drawer>
            <Logo />
        </Toolbar>
    );
}
