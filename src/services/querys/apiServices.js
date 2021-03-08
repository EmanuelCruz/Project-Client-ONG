import axios from 'axios';
import { MAIN_URL } from '../../const/const';

const getTokenLocalStorage = JSON.stringify(localStorage.getItem('token'));
const AUTH_TOKEN = JSON.parse(getTokenLocalStorage) || '';

const apiServices = axios.create({
  baseURL: MAIN_URL,
});

apiServices.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export default apiServices;
