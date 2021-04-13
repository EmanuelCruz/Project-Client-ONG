import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivityById } from "../../services/querys/activitiesServices";
import { ERROR_PARAGRAPH } from "../../const/const";
import {
    Card,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";
import useStyles from './ActivitiesDetailsComponentStyles'

const ActivitiesDetailsComponent = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [activity, setActivity] = useState(ERROR_PARAGRAPH);
    const [emptyImage, setemptyImage] = useState(null)

    useEffect(() => {
        async function fecthActivityById() {
            const activityById = await getActivityById(id);
            setActivity(activityById);
            activityById.image.length !== 0 ? setemptyImage(false) : setemptyImage(true)
        }

        fecthActivityById();
    }, [id]);

    const activityImage = (
        <Grid
            item
            xs={12}
            lg={6}
            xl={4}
            container
            className={classes.gridImage}
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Card>
                    <CardMedia
                        className={classes.img}
                        image={activity.image}
                        title="Live from space album cover"
                        src="image"
                    />
                </Card>
            </Grid>
        </Grid>
    );

    return (
        <Grid container className={classes.grid} >
            <Grid
                item
                xs={12}
                container
                className={classes.gridTitle}
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2" align="center">
                        {activity.name}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                lg={!emptyImage ? 6 : 12}
                xl={!emptyImage ? 8 : 12}
                container
                className={!emptyImage ? classes.gridDescription : classes.gridDescriptionFull}
                justify={emptyImage && "center"}
            >
                <Grid
                    item
                    xs={12}
                    wrap="nowrap"
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={emptyImage && classes.description}
                    dangerouslySetInnerHTML={{
                        __html: activity.content,
                    }}
                ></Grid>
            </Grid>
            { !emptyImage && activityImage }
        </Grid>
    );
};

export default ActivitiesDetailsComponent;
