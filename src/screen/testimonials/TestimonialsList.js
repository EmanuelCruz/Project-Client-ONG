import React, { useState, useEffect } from "react";
import useStyles from "../../style/materialUiStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import {
  testimonialsServices,
  testimonialDelete,
  getATestimonial,
} from "../../services/querys/testimonialsServices";
import testimonialsComponentForm from "../../component/testimonials/testimonialsComponentForm";

const testimonialMock = [
  {
    id: 1,
    name: "Soy el testimonio 1",
    content: "<h1>Soy un contenido testimonial</h1>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
  {
    id: 2,
    name: "Soy el testimonio 2",
    content: "<p>Soy un contenido no tan re piola la verdad</p>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
  {
    id: 3,
    name: "Soy el testimonio 5",
    content: "<p>Soy un contenido testimonial</p>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
  {
    id: 4,
    name: "Soy el testimonio 31",
    content: "<p>Soy un contenido testimonial</p>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
];

function TestimonialsList() {
  const [testimonials, setTestimonials] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchTestimonials = async () => {
      let testimonial = await testimonialsServices();
      if (testimonial) {
        setTestimonials(testimonial);
      } else {
        setTestimonials(testimonialMock);
      }
    };
    fetchTestimonials();
  }, []);

  const handleDelete = async (id) => {
    await testimonialDelete(id);
  };

  const handleEdit = async (id) => {
    let testimonialToModify = await getATestimonial(id);
    return (
      <testimonialsComponentForm toModifyTestimonial={testimonialToModify} />
    );
  };

  return (
    <Container>
      {testimonials.map((testimonial) => (
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
                  dangerouslySetInnerHTML={{ __html: testimonial.content }}
                />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
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
    </Container>
  );
}

export default TestimonialsList;
