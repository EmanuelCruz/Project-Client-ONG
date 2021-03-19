import React, { useEffect, useState } from "react";
import NewsCardComponent from "../../component/novedades/NewsCardComponent";
import { getNews } from "../../services/querys/newsServices";

function NovedadesScreen() {
  const [novedades, setNovedades] = useState([]);

  //TODO: Obtain News from endpoint
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getNews();
      setNovedades(data);
    };
    fetchApi();
  }, []);

  return (
    <div className="container">
      <h1>Novedades</h1>
      {novedades.map((news) => (
        <NewsCardComponent key={news.name} news={news} />
      ))}
    </div>
  );
}

export default NovedadesScreen;
