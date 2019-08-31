import { getFunc, postFunc } from "./httpSettings";

export const loginService = ({ payload }) => {
    return postFunc(`auth/login`, payload);
};