import axios from "axios";
import { MAIN_URL } from "../../const/const";

async function getDetalleNovedad (id) {
    try {
        const path = `${MAIN_URL}news/${id}`;
        const response = await axios.get(path);
        return response.data[0];
    } catch (err) {
        console.log(err);
    }
};

export { getDetalleNovedad };