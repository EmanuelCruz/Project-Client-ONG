import axios from 'axios';
import { MAIN_URL } from '../../const/const';

const getTokenLocalStorage = JSON.stringify(localStorage.getItem('token'));
const AUTH_TOKEN = JSON.parse(getTokenLocalStorage) || '';

const authAxios = axios.create({
  baseURL: MAIN_URL,
});

authAxios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default authAxios;
