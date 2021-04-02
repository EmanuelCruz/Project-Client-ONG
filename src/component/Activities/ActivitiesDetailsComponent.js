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

    useEffect(() => {
        async function fecthActivityById() {
            const activityById = await getActivityById(id);
            setActivity(activityById);
        }

        fecthActivityById();
    }, [activity, id]);

    return (
        <Grid container className={classes.grid}>
            <Grid
                item
                xs={12}
                container
                className={classes.gridTitle}
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2" align="left">
                        {activity.name}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                lg={6}
                xl={8}
                container
                className={classes.gridDescription}
            >
                <Grid
                    item
                    xs={12}
                    wrap="nowrap"
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    dangerouslySetInnerHTML={{
                        __html:
                            activity.content +
                            activity.content +
                            activity.content +
                            activity.content +
                            activity.content +
                            activity.content +
                            activity.content,
                    }}
                ></Grid>
            </Grid>
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
        </Grid>
    );
};

export default ActivitiesDetailsComponent;
