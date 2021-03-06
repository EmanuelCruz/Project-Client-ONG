import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  activitiesServices,
  deleteActivity,
  getAllActivities,
} from "../../services/querys/activitiesServices";
import { DeleteActitivySucces } from "../../component/Alert/AlertComponent";
import useStyles from "../../style/materialUiStyle";

function BackOfficeActivitiesScreen() {
  let history = useHistory();
  const [activities, setActivities] = useState([]);
  const classes = useStyles();
  const itemsPerPage = 1;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const dataActivities = await activitiesServices();
      setActivities(dataActivities.data);
      setNoOfPages(Math.ceil(dataActivities.data.length / itemsPerPage));
    };
    fetchApi();
  }, []);

  const handleDelete = async (id) => {
    await deleteActivity(id).then(() => {
      DeleteActitivySucces();
    });
    let dataActivities = await activitiesServices();
    setActivities(dataActivities?.data);
    setNoOfPages(Math.ceil(dataActivities?.data.length / itemsPerPage));
    window.location.reload();
  };

  const handleEdit = async (id) => {
    history.push("/backoffice/edit-activities/" + id);
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  return (
    <Box m={2} p={2}>
      <Container>
        <h3>Actividades</h3>
        {activities
          ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((testimonial) => (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Imagen de testimonio"
                  height="140"
                  image={testimonial.image}
                  title={testimonial.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: testimonial.content,
                      }}
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardCenterStyle}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleEdit(testimonial.id)}>
                  Editar
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleDelete(testimonial.id)}>
                  Borrar
                </Button>
              </CardActions>
            </Card>
          ))}
        <Container className={classes.cardCenterStyle}>
          <Pagination
            count={noOfPages}
            page={page}
            onChange={handlePagination}
            defaultPage={1}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Container>
      </Container>
    </Box>
  );
}

export default BackOfficeActivitiesScreen;
