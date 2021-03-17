import React, { useState } from "react";
import { List, ListSubheader } from "@material-ui/core";
import ItemNovedadesRecientes from "./Item/ItemNovedadesRecientesComponent";
import myStyles from "./StylesNovedadesRecientesComponente";

const ARRAY_NOVEDADES = [
    { id: 3, url: "/novedad/3" },
    { id: 2, url: "/novedad/2" },
    { id: 1, url: "/novedad/1" },
];

export default function NovedadesRecientesComponent() {
    const classes = myStyles();
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
