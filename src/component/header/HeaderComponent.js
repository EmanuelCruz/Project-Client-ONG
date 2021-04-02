import React, { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import useStyles from "./HeaderComponentStyles";
import DisplayDesktopComponent from './DisplayDesktop/DisplayDesktopComponent'
import DisplayMobileComponent from './DisplayMobile/DisplayMobileComponent'

function HeaderComponent() {
    const classes = useStyles();
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({
                    ...prevState,
                    mobileView: false,
                }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <DisplayMobileComponent
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                drawerOpen={drawerOpen}
            />
        );
    };

    return (
        <>
            <AppBar className={classes.header}>
                {mobileView ? (
                    displayMobile()
                ) : (
                    <DisplayDesktopComponent/>
                )}
            </AppBar>
        </>
    );
}

export default HeaderComponent;
