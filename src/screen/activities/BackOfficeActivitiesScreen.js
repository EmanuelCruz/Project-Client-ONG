import React, { useState } from 'react';
import BackOfficeActivitiesList from "../../component/BackOfficeActivities/BackOfficeActivitiesList";

function BackOfficeActivitiesScreen() {

    // Placeholder info, delete when endpoint implemented
    const activities_temp = [
        {id: 1, name: "Setup a list"},
        {id: 2, name: "Get a job"},
        {id: 3, name: "Go to meeting"},
        {id: 4, name: "Have lunch"},
    ];
    // TODO: GET activities from endpoint

    const [activities, setActivities] = useState(activities_temp);

    return (
        <div className="container w-50">
            <BackOfficeActivitiesList activities={activities} />
        </div>
    )
}

export default BackOfficeActivitiesScreen;
