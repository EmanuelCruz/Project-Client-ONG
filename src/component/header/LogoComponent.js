import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, organizationSelector } from "./slice/organizationSlice";

export default function LogoComponent() {
    const dispatch = useDispatch();
    const { data, loading, hasErrors } = useSelector(organizationSelector);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const renderData = () => {
        if (loading) return <p>Loading logo...</p>;
        if (hasErrors) return <p>Cannot display logo...</p>;

        return data.map((info, index) => {
            return <img src={info.image} />;
        });
    };

    return <div>{renderData()}</div>;
}
