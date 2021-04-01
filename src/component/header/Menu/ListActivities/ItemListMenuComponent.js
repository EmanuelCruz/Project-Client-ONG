import React, { useEffect, useRef, useState } from 'react'
import useStyles from './ItemListMenuComponentStyles'
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Button } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { getAllActivities } from "../../../../services/querys/activitiesServices";
import { MAIN_URL, SERVER_URL_ACTIVITIES } from "../../../../const/const";

export default function ItemListMenuComponent({item}) {
    const classes = useStyles();
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        async function fecthActivities() {
            const activities = await getAllActivities();
            setActivities(activities);
        }

        fecthActivities();
    }, []);

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const renderMenuItem = () =>
        activities.length !== 0 &&
        activities.map((activity, index, array) => (
            <MenuItem key={index} onClick={handleClose}>
                <Link
                    className={classes.navLink}
                    exact
                    key={activity.name}
                    to={`/${SERVER_URL_ACTIVITIES}/${activity.id}`}
                >
                    {activity.name}
                </Link>
            </MenuItem>
        ));

    return (
        <div>
            <ul className={classes.menuUl}>
                <Link
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    activeClassName={classes.menuButtonActive}
                    className={classes.menuButton}
                    exact
                    key={item.name}
                    // to={item.path}
                    onClick={handleToggle}
                >
                    {item.name}
                </Link>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom"
                                        ? "center top"
                                        : "center bottom",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        {renderMenuItem()}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </ul>
        </div>
    );
}
