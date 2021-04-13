import React, { useEffect, useState } from "react";
import NewsGridComponent from "../../component/novedades/NewsGridComponent";
import { getNews } from "../../services/querys/newsServices";
import Typography from '@material-ui/core/Typography';
import NoItemsComponent from "../../component/NoItems/NoItemsComponent";
import { Container } from "@material-ui/core";
import myStyles from "./NovedadesScreenStyles"

function NovedadesScreen() {
  const [novedades, setNovedades] = useState([]);
  const classes = myStyles();

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getNews();
      setNovedades(data?.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt); }));
    };
    fetchApi();
  }, []);

  if (novedades?.length >= 1) {

    return (
      <Container>
        <Typography
          variant="h3"
          className={classes.title + ' ' + classes.typography}
        >
          Novedades
      </Typography>
        <div style={{ marginTop: '30px' }}>
          <NewsGridComponent novedades={novedades} />
        </div>
      </Container>
    )
  } else return (
    <NoItemsComponent item="novedades" />
  )
}

export default NovedadesScreen;
