import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivityById } from "../../services/querys/activitiesServices";
import { ERROR_PARAGRAPH } from "../../const/const";

const ActivitiesDetailsComponent = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(ERROR_PARAGRAPH);

  useEffect(() => {
    async function fecthActivityById() {
      const activityById = await getActivityById(id);

      setActivity(activityById.data);
      return activityById;
    }

    fecthActivityById();
  }, [id]);

  return (
    <div>
      <h4>Aca se puede ver la actividad en detalle: {activity} </h4>
    </div>
  );
};

export default ActivitiesDetailsComponent;
