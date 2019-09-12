import { getFunc, postFunc, singlePostFunc } from "./httpService";

export const loginService = payload => {
    return postFunc('auth/login', payload);
};

export const registerService = payload => {
    return postFunc('auth/register', payload);
};

export const verifyEmail = token => {
    return singlePostFunc(`auth/complete-registration/${token}`);
}