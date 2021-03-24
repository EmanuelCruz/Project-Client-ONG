import React, { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import useStyles from "./HeaderComponentStyles";
import DisplayDesktop from './DisplayDesktop/DisplayDesktop'
import DisplayMobile from './DisplayMobile/DisplayMobile'

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
            <DisplayMobile
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
                    <DisplayDesktop/>
                )}
            </AppBar>
        </>
    );
}

export default HeaderComponent;
