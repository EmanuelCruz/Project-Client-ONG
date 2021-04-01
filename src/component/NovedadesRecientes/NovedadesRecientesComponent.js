import React, { useState, useEffect } from "react";
import { List, ListSubheader } from "@material-ui/core";
import ItemNovedadesRecientes from "./Item/ItemNovedadesRecientesComponent";
import { getNews } from "../../services/querys/newsServices";
import myStyles from "./StylesNovedadesRecientesComponente";

export default function NovedadesRecientesComponent() {
    const classes = myStyles();
    const [novedadesRecientes, setNovedadesRecientes] = useState([]);
    
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getNews();
            setNovedadesRecientes(data
                .sort((a,b) => {return new Date(b.createdAt) - new Date(a.createdAt);})
                .slice(0, 3));
        };
        fetchApi();
    }, []);

    const listarItems = novedadesRecientes.map((novedad) => {
        return (
            <ItemNovedadesRecientes novedad={novedad} />
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
