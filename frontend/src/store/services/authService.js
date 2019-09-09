import { getFunc, postFunc } from "./httpService";

export const loginService = payload => {
    return postFunc(`auth/login`, payload);
};

export const registerService = payload => {
    return postFunc('auth/register', payload);
};