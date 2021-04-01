import React, { useEffect, useState } from 'react'
import useStyles from './DropDawnActivitiesComponentStyles'
import { MenuItem, Menu, ListItem, ListItemText, Collapse, List } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { getAllActivities } from "../../../../services/querys/activitiesServices";
import { SERVER_URL_ACTIVITIES } from "../../../../const/const";
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export default function ItemListMenuComponent({item, drawerOpen}) {
    const classes = useStyles();
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        async function fecthActivities() {
            const activities = await getAllActivities();
            setActivities(activities);
        }

        fecthActivities();
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);
    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }
    function handleClose() {
        setAnchorEl(null);
    }

    const renderItemListDesktop = () =>
        activities.length !== 0 &&
        activities.map((activity, index) => (
            <MenuItem key={index}>
                <Link
                    activeClassName={classes.menuButtonActive}
                    onClick={handleClose}
                    className={classes.navLink}
                    exact
                    key={activity.name}
                    to={`/${SERVER_URL_ACTIVITIES}/${activity.id}`}
                >
                    {activity.name}
                </Link>
            </MenuItem>
        ));

    const renderItemListMobile = () =>
        activities.length !== 0 &&
            activities.map((activity, index) => (
                <ListItem
                    button
                    className={classes.nested}
                    component={NavLink}
                    to={`/${SERVER_URL_ACTIVITIES}/${activity.id}`}
                    key={index}
                >
                    <ListItemText primary={activity.name} />
                </ListItem>
            ));

    const [open, setOpen] = useState(false);
    const handleClickList = () => {
    setOpen(!open);
    };

    return (
        <div>
            {drawerOpen ? (
                <>
                    <ListItem
                        button
                        onClick={handleClickList}
                        className={classes.menuButton}
                    >
                        <ListItemText primary="Actividades" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {renderItemListMobile()}
                        </List>
                    </Collapse>
                </>
            ) : (
                <>
                    <ul className={classes.menuUl}>
                        <Link
                            activeClassName={classes.menuButtonActive}
                            className={classes.menuButton}
                            exact
                            key={item.name}
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            onMouseOver={handleClick}
                            to=""
                        >
                            {item.name}
                        </Link>
                    </ul>
                    <Menu
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                        getContentAnchorEl={null}
                    >
                        {renderItemListDesktop()}
                    </Menu>
                </>
            )}
        </div>
    );
}
