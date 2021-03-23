import React, { useState } from "react";
import useStyles from "../../style/materialUiStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const testimonialMock = [
  {
    name: "Soy el testimonio 1",
    content: "<h1>Soy un contenido re piola la verdad</h1>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
  {
    name: "Soy el testimonio 2",
    content: "<p>Soy un contenido no tan re piola la verdad</p>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
  {
    name: "Soy el testimonio 5",
    content: "<p>Soy un contenido re piola la verdad</p>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
  {
    name: "Soy el testimonio 31",
    content: "<p>Soy un contenido re piola la verdad</p>",
    image:
      "https://alkemy-ong.s3.sa-east-1.amazonaws.com/image/1616111671995demon-slayer-mugen-train-colombia.jpeg",
  },
];

function TestimonialsList({ testimonialList }) {
  const [testimonials, setTestimonials] = useState(testimonialMock);
  const classes = useStyles();
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
        </Card>
      ))}
    </Container>
  );
}

export default TestimonialsList;
