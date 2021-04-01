import React, { useEffect, useState } from 'react'
import useStyles from './ItemListMenuComponentStyles'
import { MenuItem, Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getAllActivities } from "../../../../services/querys/activitiesServices";
import { SERVER_URL_ACTIVITIES } from "../../../../const/const";

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

    const [anchorEl, setAnchorEl] = useState(null);
    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }
    function handleClose() {
        setAnchorEl(null);
    }

    const renderItemList = () =>
        activities.length !== 0 &&
        activities.map((activity, index, array) => (
            <MenuItem key={index}>
                <Link
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

    return (
        <div>
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
                >
                    {item.name}
                </Link>
            </ul>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                getContentAnchorEl={null}
            >
                {renderItemList()}
            </Menu>
        </div>
    );
}
