import React from 'react'
import { Typography } from '@material-ui/core';
import useStyles from "../styled/ColumnsStyles";

const Mision = () => {
  return (
    <>
      <div style={{ textAlign: 'left' }}>
        <Typography paragraph>
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
      </div>
      <div style={{ textAlign: 'left' }}>
        <Typography paragraph>
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
    </>
  )
}

export default Mision
