import React from 'react'
import HighlightOff from '@material-ui/icons/HighlightOff';
import { Box } from '@material-ui/core';

const NoItemsComponent = ({ item }) => {
  return (
    <Box m={2} p={2}>
      <HighlightOff color="secondary" style={{ fontSize: '80px', marginBottom: '20px' }} />
      <p>No hay {item} para mostrar.</p>
    </Box>
  )
}
//com

export default NoItemsComponent
