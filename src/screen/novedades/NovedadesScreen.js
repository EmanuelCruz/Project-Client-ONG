import React, { useState } from 'react';
import NewsCardComponent from '../../component/novedades/NewsCardComponent';

function NovedadesScreen() {
    
    // Placeholder info, delete when endpoint implemented
    const image_path = "https://via.placeholder.com/550x230.png";
    const novedades_temp = [
        {
            id: 1,
            title: "‘Spa Night,’ the Award-Winning Film that Almost Didn’t Get Made",
            image: image_path
        },
        {
            id: 2,
            title: "5 Lessons Designers Should be Teaching their Clients",
            image: image_path
        },
        {
            id: 3,
            title: "16 Productivity Tips Every Designer Needs to Know",
            image: image_path
        }
    ];

    const [novedades, setNovedades] = useState(novedades_temp);

    //TODO: Obtain News from endpoint

    return(
        <div className="container">
            <h1>Novedades</h1>
            {novedades.map(news => (
                <NewsCardComponent key={news.id} news={news} />
            ))}
        </div>
    )
};

export default NovedadesScreen;