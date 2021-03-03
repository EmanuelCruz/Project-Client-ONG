import React from "react";
import { useSelector } from "react-redux";
import { organizationSelector } from "./slice/organizationSlice";

export default function LogoComponent() {
    const data = useSelector(organizationSelector);

    console.log("Data Organization: ", data);
    return <div>{data.image}</div>;
}
