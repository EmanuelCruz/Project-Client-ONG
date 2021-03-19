import React, { useState ,useEffect } from 'react';
import BackOfficeActivitiesList from "../../component/BackOfficeActivities/BackOfficeActivitiesList";
import {ACTIVITIES} from '../../const/const'

function BackOfficeActivitiesScreen() {

    // Placeholder info, delete when endpoint implemented
    let activities_temp = [
        { id: 1, name: "Setup a list" },
        { id: 2, name: "Get a job" },
        { id: 3, name: "Go to meeting" },
        { id: 4, name: "Have lunch" },
    ];
    // TODO: GET activities from endpoint

    const [activities, setActivities] = useState(activities_temp);

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
