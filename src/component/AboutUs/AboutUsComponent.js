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
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Nosotros
      </Typography>
      <div>
        <Typography variant="h5">Historia</Typography>
        <Typography paragraph className={classes.paragraph}>
          La organización surge de todas las emergencias alimentarias que
          emergieron a partir de la pandemia. Con el hashtag
          CuarentenaSolidaria, Zonas Grises se unió a otras organizaciones para
          recibir donaciones y juntar dinero para distribuir en distintos
          barrios de Moreno.
        </Typography>
      </div>
      <div>
        <Typography variant="h5">Misión</Typography>
        <Typography paragraph className={classes.paragraph}>
          La organización tiene diversas lineas de acción:
        </Typography>
        <ul>
          <li>
            <Typography paragraph>Inserción laboral</Typography>
          </li>
          <li>
            <Typography paragraph>
              TSICG - Teach me something I can’t Google
            </Typography>
          </li>
          <li>
            <Typography paragraph>Facilitación de clases online</Typography>
          </li>
          <li>
            <Typography paragraph>Talleres</Typography>
          </li>
          <li>
            <Typography paragraph>
              Desarrollo de habilidades socioemocionales
            </Typography>
          </li>
        </ul>
        <Typography paragraph className={classes.paragraph}>
          Las campañas de recolección que suelen llevar a cabo son:
        </Typography>
        <ul>
          <li>
            <Typography paragraph>Cuarentena Solidaria</Typography>
          </li>
          <li>
            <Typography paragraph>Día del Niño</Typography>
          </li>
          <li>
            <Typography paragraph>Vuelta a Clases</Typography>
          </li>
          <li>
            <Typography paragraph>Navidad</Typography>
          </li>
        </ul>
      </div>
      <div>
        <Typography variant="h5">Visión</Typography>
        <Typography paragraph className={classes.paragraph}>
          Organización que tiene como fin brindar contención, ayuda y colaborar
          en estrategias para potenciar el desarrollo de poblaciones vulnerables
          del Cono urbano Bonaerense a través de estrategias integrales que
          contemplan ayuda social directa y programas de inclusión social con
          foco en educación.
        </Typography>
      </div>
      <div>
        <Typography variant="h5">Equipo</Typography>
        <div className={classes.containerTeam}>
          {members?.map((member) => (
            <Card key={member.id} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={member.image}
                  title={member.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    {member.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUsComponent;
