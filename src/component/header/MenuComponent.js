import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "./slice/menuItemsSlice";

export default function MenuComponent() {
    const dispatch = useDispatch();
    const { items, loading, hasErrors } = useSelector(itemsSelector);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const renderItems = () => {
        if (loading) return <p>Loading items...</p>;
        if (hasErrors) return <p>Cannot display items...</p>;
        return items.map((item, index) => <div key={index}>{item.texto}</div>);
    };

    return (
        <div>
            <ul>{renderItems()}</ul>
        </div>
    );
}
