import apiServices from './apiServices';
import { API_LOGIN_URL, API_REGISTER_URL } from '../../const/const';

export const login = (email, password) => {
    return apiServices.post(API_LOGIN_URL, {email, password});
};

export const register = (firstName, lastName, email, password) => {
    return apiServices.post(API_REGISTER_URL, {firstName, lastName, email, password});
};