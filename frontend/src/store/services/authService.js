import { getFunc, postFunc } from "./httpService";

export const loginService = (payload) => {
    return postFunc(`login`, payload);
};

export const registerService = () => {
    return postFunc('register');
};