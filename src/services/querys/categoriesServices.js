import { MAIN_URL, SERVER_URL_CATEGORIES } from "../../const/const";
import apiServices from "./apiServices";
import axios from "axios";

const getCategories = () => {
    return apiServices.get(SERVER_URL_CATEGORIES);
};

const createCategory = async (data) => {
    try {
        const response = await axios.post(`${MAIN_URL}${SERVER_URL_CATEGORIES}`, data);
        return response.data;
    } catch (err) {
        return err;
    }
};

const updateCategory = async (data) => {
    try {
        const response = await axios.patch(
            `${MAIN_URL}${SERVER_URL_CATEGORIES}/${data.id}`,
            data
        );
        return response.data;
    } catch (err) {
        return err;
    }
};

export {
    getCategories,
    createCategory,
    updateCategory
};