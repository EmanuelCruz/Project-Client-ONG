import apiServices from './apiServices';
import { API_LOGIN_URL, API_REGISTER_URL } from '../../const/const';

export const login = (email, password) => {
    return apiServices.post(API_LOGIN_URL, {email, password});
};

export const register = (name, last_name, email, password) => {
    return apiServices.post(API_REGISTER_URL, {name, last_name, email, password});
};