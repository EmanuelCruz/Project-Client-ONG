import { SERVER_URL_CATEGORIES } from "../../const/const";
import apiServices from "./apiServices";

const getCategories = () => {
    return apiServices.get(SERVER_URL_CATEGORIES);
};

export {
    getCategories
};