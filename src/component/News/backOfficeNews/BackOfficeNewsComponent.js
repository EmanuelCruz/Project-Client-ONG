import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import TableRowItem from "./TableRowItem";
import useStyles from "../styles/MaterialUiStyles";
import { getNews } from "../../../services/querys/newsServices";

const BackOfficeNewsComponent = () => {
  const classes = useStyles();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getNews();
      setNewsData(data);
    };
    fetchApi();
  }, []);

  return (
    <Paper className={classes.tableContainer}>
      <Toolbar className={classes.rootBackOffice}>
        <Typography variant="h4" className={classes.title}>
          Listado de Novedades
        </Typography>
      </Toolbar>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Nombre</TableCell>
              <TableCell className={classes.tableCell}>Imagen</TableCell>
              <TableCell className={classes.tableCell}>
                Fecha de creación
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!newsData?.length &&
              newsData.map((n) => (
                <TableRowItem
                  key={n.id}
                  news={n}
                  newsData={newsData}
                  setNewsData={setNewsData}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BackOfficeNewsComponent;
