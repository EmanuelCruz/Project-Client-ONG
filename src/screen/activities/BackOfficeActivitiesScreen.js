import React, { useEffect, useState } from 'react';
import BackOfficeActivitiesList from "../../component/BackOfficeActivities/BackOfficeActivitiesList";
import { getAllActivities } from '../../services/querys/activitiesServices';

function BackOfficeActivitiesScreen() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getAllActivities();
            setActivities(data);
        };
        fetchApi();
    }, []);

    const handleDeleteActivity = (id) => {
        const newsActivities = activities.filter(
            (activity) => activity.id !== id
        );
        setActivities(newsActivities);
    };

    return (
        <div className="container w-50">
            <BackOfficeActivitiesList activities={activities}  handleDeleteActivity={handleDeleteActivity}/>
        </div>
    )
}

export default BackOfficeActivitiesScreen;
