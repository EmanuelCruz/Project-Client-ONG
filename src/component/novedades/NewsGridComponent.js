import React from 'react';
import Grid from '@material-ui/core/Grid';
import NewsCardComponent from "../../component/novedades/NewsCardComponent";

function NewsGridComponent({novedades}) {
    return (
        <Grid container spacing={10} direction="row" justify="center">
            {novedades.map((news) => (
                <Grid key={news.id} item zeroMinWidth xs={12} sm={6} md={4} lg={4} xl={3}>
                    <NewsCardComponent key={news.id} news={news} />
                </Grid>
            ))}
        </Grid>
    )
}

export default NewsGridComponent;