import React, { useEffect, useState } from "react";
import NovedadesRecientes from "../../component/NovedadesRecientes/NovedadesRecientesComponent";
import { Container, Grid, Typography } from "@material-ui/core";
import { getDetalleNovedad } from "../../services/querys/detalleNovedadServices";
import myStyles from "./StylesDetalleNovedadScreen";

export default function DetalleNovedadScreen({ match }) {
    const classes = myStyles();
    let { id } = match.params;

    const [detalleNovedad, setDetalleNovedad] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await getDetalleNovedad(id);
            setDetalleNovedad(data);
        }
        fetchData();
    }, [id]);

    return (
        <>
            {detalleNovedad ? (
                <Container maxWidth="lg" className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography
                                align="left"
                                variant="h3"
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
                            <Typography variant="body1" align="left">{detalleNovedad.content}</Typography>
                        </Grid>
                        <Grid item xs={3} className={classes.links}>
                            <NovedadesRecientes />
                        </Grid>
                    </Grid>
                </Container>
            ) : (
                <Container maxWidth="lg" className={classes.root}>
                    <Typography
                        align="center"
                        variant="h5"
                        className={classes.title}
                    >
                        News Not Found
                    </Typography>
                </Container>
            )}
        </>
    );
}
