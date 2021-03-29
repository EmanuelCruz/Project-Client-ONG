import axios from "axios";
import { MAIN_URL, SERVER_URL_CATEGORIES } from "../../const/const";
import apiServices from "./apiServices";

const getCategories = () => {
    return apiServices.get(SERVER_URL_CATEGORIES);
};


const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(
            `${MAIN_URL}${SERVER_URL_CATEGORIES}/${id}`
        );
        return response.data;
    } catch (err) {
        return err;
    }
};

export {
    getCategories,
    deleteCategory
};