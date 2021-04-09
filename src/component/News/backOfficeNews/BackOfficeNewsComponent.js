import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button
} from "@material-ui/core";
import useStyles from "../styles/MaterialUiStyles";
import { deleteNews, newsServices } from "../../../services/querys/newsServices";
import { useHistory } from "react-router";
import {
    CONFIRM,
    CONFIRM_IS_CONFIRMED,
    CONFIRM_SUCCESS,
} from "../../../const/const";
import Swal from "sweetalert2";
import { ConfirmAlertComponent } from "../../Alert/AlertComponent";
import { Pagination } from "@material-ui/lab";

const BackOfficeNewsComponent = () => {
  const classes = useStyles();
  const [newsData, setNewsData] = useState([]);
  let history = useHistory();
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      let news = await newsServices();
      setNewsData(news?.data);
      setNoOfPages(Math.ceil(news?.data.length / itemsPerPage));
    };
    fetchNews();
  }, []);

  const handleDelete = (idNew) => {
    ConfirmAlertComponent().then(async (result) => {
      if (result.isConfirmed) {
          Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
          deleteNews(idNew);
          setNewsData(newsData.filter((n) => n.id !== idNew));
      }
      let news = await newsServices();
      setNewsData(news?.data);
      setNoOfPages(Math.ceil(news?.data.length / itemsPerPage));
    });
  };

  const handleEdit = async (id) => {
    history.push("/backoffice/edit-news/" + id);
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Typography gutterBottom variant="h3" component="h2">
        Novedades
      </Typography>
      {newsData?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((news) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Imagen de testimonio"
                height="140"
                image={news.image}
                title={news.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {news.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: news.content,
                    }}
                  />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardCenterStyle}>
              <Button
                size="small"
                color="primary"
                onClick={() => handleEdit(news.id)}
              >
                Editar
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => handleDelete(news.id)}
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
};

export default BackOfficeNewsComponent;
