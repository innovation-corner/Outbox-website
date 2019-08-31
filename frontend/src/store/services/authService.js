import { getFunc, postFunc } from "./httpSettings";

export const loginService = ({ payload }) => {
    return postFunc(`auth/login`, payload);
};

export const registerService = () => {
    return postFunc('auth/register');
};