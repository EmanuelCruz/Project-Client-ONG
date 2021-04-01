import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, Divider } from "@material-ui/core";
import { PATH_NOVEDAD } from "../../../const/const";

export default function ItemNovedadesRecientesComponent({ novedad }) {

    const novedad_url = PATH_NOVEDAD + novedad.id;

    const CustomLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <>
                    <Link ref={ref} to={novedad_url} {...linkProps} />
                </>
            )),
        [novedad_url]
    );
    return (
        <>
            <Divider />
            <ListItem button component={CustomLink} key={novedad.id}>
                <ListItemText
                    primary={novedad.name}
                    component={CustomLink}
                />
            </ListItem>
        </>
    );
}
