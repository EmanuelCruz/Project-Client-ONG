import React from "react";
import { useSelector } from "react-redux";
import { itemsSelector } from "./slice/menuItemsSlice";

export default function MenuComponent() {
    const items = useSelector(itemsSelector);

    console.log("Items: ", items);
    return (
        <div>
            <ul>
                <li>{items[0].texto}</li>
                <li>{items[1].texto}</li>
                <li>{items[2].texto}</li>
                <li>{items[3].texto}</li>
                <li>{items[4].texto}</li>
            </ul>
        </div>
    );
}
