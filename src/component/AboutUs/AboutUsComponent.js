import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import { getMembersList } from "../../services/querys/membersServices";
import useStyles from "./styled/AboutStyles";
import Team from "./Columns/Team";
import Mision from "./Columns/Mision";

const AboutUsComponent = () => {
  let [members, setMembers] = useState();
  const classes = useStyles();
  useEffect(() => {
    async function fetchMembers() {
      const response = await getMembersList();
      setMembers(response.data);
    }
    fetchMembers();
  }, []);

  return (
    <Container>
      <Typography className={`${classes.typography} ${classes.title}`} variant="h2">
        Nosotros
      </Typography>
      <div>
        <div>
          <img className='img-fluid' src="https://www.upload.ee/image/13032154/IMG-5838__1_.JPG" />
        </div>
        <Typography className={`${classes.typography} ${classes.subtitle}`} variant="h5">Historia</Typography>
        <Typography className={classes.paragraph} align="center" color="textSecondary" paragraph>
          La organización surge de todas las emergencias alimentarias que
          emergieron a partir de la pandemia. Con el hashtag
          CuarentenaSolidaria, Zonas Grises se unió a otras organizaciones para
          recibir donaciones y juntar dinero para distribuir en distintos
          barrios de Moreno.
        </Typography>
      </div>
      <hr />
      <div>
        <Typography className={`${classes.typography} ${classes.subtitle}`} variant="h5">Misión</Typography>
        <Mision />
      </div>
      <hr />
      <div>
        <Typography className={`${classes.typography} ${classes.subtitle}`} variant="h5">Visión</Typography>
        <Typography className={classes.paragraph} align="center" color="textSecondary" paragraph>
          Organización que tiene como fin brindar contención, ayuda y colaborar
          en estrategias para potenciar el desarrollo de poblaciones vulnerables
          del Cono urbano Bonaerense a través de estrategias integrales que
          contemplan ayuda social directa y programas de inclusión social con
          foco en educación.
        </Typography>
      </div>
      <hr />
      <div>
        <Typography className={`${classes.typography} ${classes.subtitle}`} variant="h5">Equipo:</Typography>
        <Team />
      </div>
    </Container >
  );
};

export default AboutUsComponent;
