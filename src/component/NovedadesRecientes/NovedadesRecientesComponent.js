import React, { useState } from "react";
import { List, ListSubheader, makeStyles } from "@material-ui/core";
import ItemNovedadesRecientes from "./Item/ItemNovedadesRecientesComponent";
const ARRAY_NOVEDADES = [
    { id: 3, url: "/novedad/3" },
    { id: 2, url: "/novedad/2" },
    { id: 1, url: "/novedad/1" },
];
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
export default function NovedadesRecientesComponent() {
    const classes = useStyles();
    const [novedadesRecientes, setNovedadesRecientes] = useState(
        ARRAY_NOVEDADES
    );
    const listarItems = novedadesRecientes.map((novedad) => {
        return (
            <ItemNovedadesRecientes
                id={novedad.id}
                url={novedad.url}
                key={novedad.id}
            />
        );
    });
    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Novedades Recientes
                    </ListSubheader>
                }
                className={classes.root}
            >
                {listarItems}
            </List>
        </div>
    );
}
