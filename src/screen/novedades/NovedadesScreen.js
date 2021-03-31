import React, { useEffect, useState } from "react";
import NewsGridComponent from "../../component/novedades/NewsGridComponent";
import { getNews } from "../../services/querys/newsServices";
import Typography from '@material-ui/core/Typography';

function NovedadesScreen() {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getNews();
      setNovedades(data.sort((a,b) => {return new Date(b.createdAt) - new Date(a.createdAt);}));
    };
    fetchApi();
  }, []);

  return (
    <div className="container mt-5">
      <Typography className="mt-2 mb-5" variant="h2" component="h2" align="left">
        Novedades
      </Typography>
      <NewsGridComponent novedades={novedades} />
    </div>
  );
}

export default NovedadesScreen;
