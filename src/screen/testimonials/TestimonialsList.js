import React, { useState, useEffect } from "react";
import useStyles from "../../style/materialUiStyle";
import {
  Container,
  Button,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
} from "@material-ui/core";
import {
  testimonialsServices,
  testimonialDelete,
} from "../../services/querys/testimonialsServices";
import { useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { DeleteTestimonialSucces } from "../../component/Alert/AlertComponent";

function TestimonialsList() {
  const [testimonials, setTestimonials] = useState([]);
  const classes = useStyles();
  let history = useHistory();
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      let testimonial = await testimonialsServices();
      setTestimonials(testimonial?.data);
      setNoOfPages(Math.ceil(testimonial?.data.length / itemsPerPage));
    };
    fetchTestimonials();
  }, []);

  const handleDelete = async (id) => {
    await testimonialDelete(id).then(() => {
      DeleteTestimonialSucces();
    });
    let testimonial = await testimonialsServices();
    setTestimonials(testimonial?.data);
    setNoOfPages(Math.ceil(testimonial?.data.length / itemsPerPage));
  };

  const handleEdit = async (id) => {
    history.push("/backoffice/edit-testimonial/" + id);
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      {testimonials?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
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
                <Typography variant="body2" color="textSecondary" component="p">
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
                onClick={() => handleEdit(testimonial.id)}
              >
                Editar
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => handleDelete(testimonial.id)}
              >
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
  );
}

export default TestimonialsList;
