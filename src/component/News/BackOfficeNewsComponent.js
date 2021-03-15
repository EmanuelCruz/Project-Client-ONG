import React, { useEffect, useState } from "react";
import {
  makeStyles,
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
import apiServices from "../../services/querys/apiServices";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    fontWeight: 600,
    fontSize: "16px",
  },
  tableContainer: {
    marginTop: "3rem",
  },
}));

const BackOfficeNewsComponent = () => {
  const classes = useStyles();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiServices.get("/news");
        const { data } = response;
        console.log(data);
        setNewsData(data);
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, []);

  return (
    <Paper className={classes.tableContainer}>
      <Toolbar className={classes.root}>
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
              newsData.map((news) => (
                <TableRowItem
                  key={news.name}
                  name={news.name}
                  image={news.image}
                  date={news.createdAt}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BackOfficeNewsComponent;
