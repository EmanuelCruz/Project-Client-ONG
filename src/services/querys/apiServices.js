import axios from 'axios';
import { MAIN_URL } from '../../const/const';

const getTokenLocalStorage = JSON.stringify(localStorage.getItem('token'));
const AUTH_TOKEN = JSON.parse(getTokenLocalStorage) || '';

const apiServices = axios.create({
  baseURL: MAIN_URL,
});

if (AUTH_TOKEN !== '') {
  apiServices.defaults.headers.common['authorization'] = `Bearer ${AUTH_TOKEN}`;
}

export default apiServices;
