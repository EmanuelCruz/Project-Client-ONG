import React, { useEffect, useState } from "react";
import CategoriesCardComponent from "../../component/Categories/CategoriesCardComponent";
import { getCategories } from "../../services/querys/categoriesServices";

function BackOfficeCategoriesScreen() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data);
        }).catch(err => console.log(err.message));
    }, [categories]);

    return (
        <div className="container mt-5 pt-5 w-50">
            <h1>Categories</h1>
            {categories.map((category) => (
                <CategoriesCardComponent key={category.id} category={category} />
            ))}
        </div>
    );
}

export default BackOfficeCategoriesScreen;