import React, { useEffect, useState } from "react";
import axios from "axios";
import NovedadesRecientes from "../../component/NovedadesRecientes/NovedadesRecientesComponent";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    title: { margin: "20px 0" },
    image: { maxWidth: "100%", maxHeight: "100%", marginBottom: 40 },
    content: { marginTop: 60 },
    links: { marginTop: 60 },
}));

export default function DetalleNovedadScreen({ match }) {
    const classes = myStyles();
    const URL_API = "http://localhost:3000/news/";
    let { id } = match.params;

    const [detalleNovedad, setDetalleNovedad] = useState({});
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await axios.get(`${URL_API}${id}`);
            setDetalleNovedad(response.data[0]);
        }
        fetchMyAPI();
    }, [detalleNovedad, id]);

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography
                        align="left"
                        variant="h1"
                        className={classes.title}
                    >
                        {detalleNovedad.name}
                    </Typography>
                </Grid>
                <Grid item xs={9} className={classes.content}>
                    <img
                        src={detalleNovedad.image}
                        alt="Imagen de la novedad"
                        className={classes.image}
                    />
                    <p>{detalleNovedad.content}</p>
                </Grid>
                <Grid item xs={3} className={classes.links}>
                    <NovedadesRecientes />
                </Grid>
            </Grid>
        </Container>
    );
}
