import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, Divider } from "@material-ui/core";

export default function ItemNovedadesRecientesComponent({ id, url }) {
    const CustomLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <>
                    <Link ref={ref} to={url} {...linkProps} />
                </>
            )),
        [url]
    );
    return (
        <>
            <Divider />
            <ListItem button component={CustomLink} key={id}>
                <ListItemText
                    primary={`Novedad Reciente ${id}`}
                    component={CustomLink}
                />
            </ListItem>
        </>
    );
}
